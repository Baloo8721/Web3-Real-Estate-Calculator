/**
 * Wallet Search Feature for Web3 Real Estate Calculator
 * Uses QuickNode Multichain endpoint to search across multiple blockchains
 * Tesla-inspired minimalist design
 */

// QuickNode Multichain endpoint configuration
const QUICKNODE_BASE_URL = 'https://proud-dry-model.quiknode.pro/c8322fef536e6f36155ba0a8d16f190e1b13bedf/';

// Chain configurations
const CHAINS = {
    ETHEREUM: {
        name: 'Ethereum',
        subdomain: '',
        class: 'ethereum',
        addressPattern: /^0x[a-fA-F0-9]{40}$/,
        scanUrl: 'https://etherscan.io'
    },
    BITCOIN: {
        name: 'Bitcoin',
        subdomain: 'btc.',
        class: 'bitcoin',
        addressPattern: /^(1|3|bc1)[a-zA-Z0-9]{25,42}$/,
        scanUrl: 'https://blockstream.info'
    },
    SOLANA: {
        name: 'Solana',
        subdomain: 'solana-mainnet.',
        class: 'solana',
        addressPattern: /^[1-9A-HJ-NP-Za-km-z]{32,44}$/,
        scanUrl: 'https://solscan.io'
    },
    ARBITRUM: {
        name: 'Arbitrum',
        subdomain: 'arbitrum-mainnet.',
        class: 'arbitrum',
        addressPattern: /^0x[a-fA-F0-9]{40}$/,
        scanUrl: 'https://arbiscan.io'
    },
    POLYGON: {
        name: 'Polygon',
        subdomain: 'polygon-mainnet.',
        class: 'polygon',
        addressPattern: /^0x[a-fA-F0-9]{40}$/,
        scanUrl: 'https://polygonscan.com'
    },
    OPTIMISM: {
        name: 'Optimism',
        subdomain: 'optimism-mainnet.',
        class: 'optimism',
        addressPattern: /^0x[a-fA-F0-9]{40}$/,
        scanUrl: 'https://optimistic.etherscan.io'
    },
    BASE: {
        name: 'Base',
        subdomain: 'base-mainnet.',
        class: 'base',
        addressPattern: /^0x[a-fA-F0-9]{40}$/,
        scanUrl: 'https://basescan.org'
    }
};

// Determine chain from address format
function detectChainFromAddress(address) {
    if (!address) return null;
    
    address = address.trim();
    
    // Check for EVM-compatible addresses (Ethereum, Arbitrum, Polygon, Optimism, Base)
    if (CHAINS.ETHEREUM.addressPattern.test(address)) {
        return ['ETHEREUM', 'ARBITRUM', 'POLYGON', 'OPTIMISM', 'BASE'];
    }
    
    // Check for Bitcoin addresses
    if (CHAINS.BITCOIN.addressPattern.test(address)) {
        return ['BITCOIN'];
    }
    
    // Check for Solana addresses
    if (CHAINS.SOLANA.addressPattern.test(address)) {
        return ['SOLANA'];
    }
    
    return null;
}

// Cache for wallet data
class WalletCache {
    constructor() {
        this.initialize();
    }
    
    async initialize() {
        return new Promise((resolve) => {
            if (window.indexedDB) {
                const request = window.indexedDB.open('walletSearchDB', 1);
                
                request.onerror = (event) => {
                    console.error('IndexedDB error:', event.target.error);
                    this.db = null;
                    this.useLocalCache = true;
                    this.localCache = {};
                    resolve();
                };
                
                request.onsuccess = (event) => {
                    this.db = event.target.result;
                    this.useLocalCache = false;
                    resolve();
                };
                
                request.onupgradeneeded = (event) => {
                    const db = event.target.result;
                    if (!db.objectStoreNames.contains('walletData')) {
                        const store = db.createObjectStore('walletData', { keyPath: 'key' });
                        store.createIndex('timestamp', 'timestamp', { unique: false });
                    }
                };
            } else {
                this.useLocalCache = true;
                this.localCache = {};
                resolve();
            }
        });
    }
    
    generateKey(address, chain) {
        return `${address.toLowerCase()}_${chain}`;
    }
    
    async get(address, chain) {
        return new Promise((resolve) => {
            if (this.useLocalCache) {
                const key = this.generateKey(address, chain);
                const cachedData = this.localCache[key];
                
                if (cachedData && Date.now() - cachedData.timestamp < 3600000) { // 1 hour expiry
                    resolve(cachedData.data);
                } else {
                    resolve(null);
                }
                
                return;
            }
            
            if (!this.db) {
                resolve(null);
                return;
            }
            
            try {
                const transaction = this.db.transaction(['walletData'], 'readonly');
                const store = transaction.objectStore('walletData');
                const key = this.generateKey(address, chain);
                const request = store.get(key);
                
                request.onsuccess = (event) => {
                    const result = event.target.result;
                    if (result && Date.now() - result.timestamp < 3600000) { // 1 hour expiry
                        resolve(result.data);
                    } else {
                        resolve(null);
                    }
                };
                
                request.onerror = () => {
                    console.error('Error reading from cache');
                    resolve(null);
                };
            } catch (error) {
                console.error('Error accessing IndexedDB:', error);
                resolve(null);
            }
        });
    }
    
    async set(address, chain, data) {
        if (this.useLocalCache) {
            const key = this.generateKey(address, chain);
            this.localCache[key] = {
                data,
                timestamp: Date.now()
            };
            return;
        }
        
        if (!this.db) return;
        
        try {
            const transaction = this.db.transaction(['walletData'], 'readwrite');
            const store = transaction.objectStore('walletData');
            const key = this.generateKey(address, chain);
            
            store.put({
                key,
                data,
                timestamp: Date.now()
            });
        } catch (error) {
            console.error('Error writing to cache:', error);
        }
    }
    
    async clearExpired() {
        if (this.useLocalCache) {
            const now = Date.now();
            for (const key in this.localCache) {
                if (now - this.localCache[key].timestamp >= 3600000) {
                    delete this.localCache[key];
                }
            }
            return;
        }
        
        if (!this.db) return;
        
        try {
            const transaction = this.db.transaction(['walletData'], 'readwrite');
            const store = transaction.objectStore('walletData');
            const index = store.index('timestamp');
            const range = IDBKeyRange.upperBound(Date.now() - 3600000);
            
            index.openCursor(range).onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    store.delete(cursor.value.key);
                    cursor.continue();
                }
            };
        } catch (error) {
            console.error('Error clearing expired cache:', error);
        }
    }
}

// Worker for API requests
class QuickNodeWorker {
    constructor() {
        this.cache = new WalletCache();
        this.pendingRequests = {};
    }
    
    async initialize() {
        await this.cache.initialize();
        // Clear expired cache entries on startup
        this.cache.clearExpired();
    }
    
    getEndpointUrl(chain) {
        return `https://${CHAINS[chain].subdomain}${QUICKNODE_BASE_URL.replace(/^https:\/\//, '')}`;
    }
    
    async fetchBalance(address, chain) {
        const cacheKey = `balance_${address}_${chain}`;
        const cachedData = await this.cache.get(address, cacheKey);
        
        if (cachedData) {
            return cachedData;
        }
        
        // Different RPC methods for different chains
        let method = 'eth_getBalance';
        let params = [address, 'latest'];
        
        if (chain === 'BITCOIN') {
            method = 'getbalance';
            params = [address];
        } else if (chain === 'SOLANA') {
            method = 'getBalance';
            params = [address];
        }
        
        const endpoint = this.getEndpointUrl(chain);
        
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: 1,
                    method,
                    params
                })
            });
            
            const data = await response.json();
            
            if (data.error) {
                console.error(`Error fetching balance for ${chain}:`, data.error);
                return null;
            }
            
            const result = {
                chain,
                balance: data.result,
                timestamp: Date.now()
            };
            
            // Cache the result
            await this.cache.set(address, cacheKey, result);
            
            return result;
        } catch (error) {
            console.error(`Error fetching ${chain} balance:`, error);
            return null;
        }
    }
    
    async fetchTransactions(address, chain, page = 0, pageSize = 10) {
        const cacheKey = `tx_${address}_${chain}_${page}_${pageSize}`;
        const cachedData = await this.cache.get(address, cacheKey);
        
        if (cachedData) {
            return cachedData;
        }
        
        // Different RPC methods for different chains
        let method;
        let params;
        
        if (chain === 'BITCOIN') {
            method = 'listunspent';
            params = [1, 9999999, [address]];
        } else if (chain === 'SOLANA') {
            method = 'getSignaturesForAddress';
            params = [address, { limit: pageSize, before: page > 0 ? page * pageSize : undefined }];
        } else {
            // EVM chains
            method = 'eth_getTransactionsByAddress';
            params = [address, page, pageSize];
        }
        
        const endpoint = this.getEndpointUrl(chain);
        
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: 1,
                    method,
                    params
                })
            });
            
            const data = await response.json();
            
            if (data.error) {
                console.error(`Error fetching transactions for ${chain}:`, data.error);
                return null;
            }
            
            const result = {
                chain,
                transactions: data.result || [],
                timestamp: Date.now(),
                page,
                pageSize
            };
            
            // Cache the result
            await this.cache.set(address, cacheKey, result);
            
            return result;
        } catch (error) {
            console.error(`Error fetching ${chain} transactions:`, error);
            return null;
        }
    }
    
    async getWalletData(address, chains) {
        const results = {
            address,
            balances: [],
            transactions: [],
            validChains: []
        };
        
        // Fetch balances for all possible chains
        const balancePromises = chains.map(chain => this.fetchBalance(address, chain));
        const balances = await Promise.all(balancePromises);
        
        // Filter out null results and identify valid chains
        const validChains = [];
        balances.forEach(balance => {
            if (balance && (
                // For EVM chains
                (balance.balance && balance.balance !== '0x0') ||
                // For Bitcoin
                (typeof balance.balance === 'number' && balance.balance > 0) ||
                // For Solana
                (balance.balance && balance.balance.value && balance.balance.value > 0)
            )) {
                results.balances.push(balance);
                validChains.push(balance.chain);
            }
        });
        
        // Only fetch transactions for chains with positive balances
        if (validChains.length > 0) {
            const txPromises = validChains.map(chain => this.fetchTransactions(address, chain, 0, 10));
            const transactions = await Promise.all(txPromises);
            
            // Filter out null results
            transactions.forEach(tx => {
                if (tx && tx.transactions && tx.transactions.length > 0) {
                    results.transactions.push(tx);
                }
            });
            
            results.validChains = validChains;
        }
        
        return results;
    }
}

// Wallet Search UI Controller
class WalletSearchUI {
    constructor() {
        this.worker = new QuickNodeWorker();
        this.currentPage = 0;
        this.totalTransactions = 0;
        this.currentAddress = '';
        this.currentChains = [];
        this.debounceTimeout = null;
        
        // Initialize worker
        this.worker.initialize();
        
        // Bind DOM elements
        this.bindElements();
        
        // Setup event listeners
        this.setupEventListeners();
    }
    
    bindElements() {
        this.addressInput = document.getElementById('wallet-address');
        this.searchButton = document.getElementById('wallet-search');
        this.resultContainer = document.getElementById('wallet-search-result');
    }
    
    setupEventListeners() {
        // Search button click event
        this.searchButton.addEventListener('click', () => {
            this.searchWallet();
        });
        
        // Input field keyup event with debounce
        this.addressInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.searchWallet();
                return;
            }
            
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = setTimeout(() => {
                if (this.addressInput.value.length >= 25) {
                    this.searchWallet();
                }
            }, 500);
        });
    }
    
    showLoading() {
        this.resultContainer.innerHTML = '<div class="wallet-loading">Searching across blockchains...</div>';
        this.resultContainer.classList.add('active');
    }
    
    async searchWallet() {
        const address = this.addressInput.value.trim();
        
        if (!address) {
            this.showError('Please enter a wallet address');
            return;
        }
        
        // Detect possible chains from address format
        const possibleChains = detectChainFromAddress(address);
        
        if (!possibleChains) {
            this.showError('Invalid wallet address format');
            return;
        }
        
        this.currentAddress = address;
        this.currentChains = possibleChains;
        this.currentPage = 0;
        
        this.showLoading();
        
        try {
            const data = await this.worker.getWalletData(address, possibleChains);
            this.renderResults(data);
        } catch (error) {
            console.error('Error searching wallet:', error);
            this.showError('Error searching wallet. Please try again.');
        }
    }
    
    showError(message) {
        this.resultContainer.innerHTML = `<div class="error-message">${message}</div>`;
        this.resultContainer.classList.add('active');
    }
    
    // Format balance based on chain
    formatBalance(balance, chain) {
        if (!balance) return '0';
        
        if (chain === 'BITCOIN') {
            return balance.toFixed(8) + ' BTC';
        } else if (chain === 'SOLANA') {
            const solBalance = balance.value / 1000000000;
            return solBalance.toFixed(6) + ' SOL';
        } else {
            // EVM chains
            const wei = parseInt(balance, 16);
            const eth = wei / 1000000000000000000;
            return eth.toFixed(6) + ' ' + this.getTokenSymbol(chain);
        }
    }
    
    getTokenSymbol(chain) {
        switch (chain) {
            case 'ETHEREUM': return 'ETH';
            case 'ARBITRUM': return 'ETH';
            case 'POLYGON': return 'MATIC';
            case 'OPTIMISM': return 'ETH';
            case 'BASE': return 'ETH';
            default: return 'TOKENS';
        }
    }
    
    // Format transaction time
    formatTime(timestamp) {
        if (!timestamp) return 'Unknown';
        
        const date = new Date(timestamp * 1000);
        return date.toLocaleString();
    }
    
    // Format transaction hash for display
    formatTxHash(hash) {
        if (!hash) return 'Unknown';
        return hash.substring(0, 8) + '...' + hash.substring(hash.length - 6);
    }
    
    // Get explorer link for transaction
    getExplorerLink(hash, chain) {
        const baseUrl = CHAINS[chain].scanUrl;
        if (chain === 'BITCOIN') {
            return `${baseUrl}/tx/${hash}`;
        } else if (chain === 'SOLANA') {
            return `${baseUrl}/tx/${hash}`;
        } else {
            return `${baseUrl}/tx/${hash}`;
        }
    }
    
    async loadMoreTransactions() {
        this.currentPage++;
        
        // Show loading indicator
        const paginatorEl = document.querySelector('.wallet-paginator');
        paginatorEl.innerHTML = '<div class="wallet-loading">Loading more transactions...</div>';
        
        try {
            const txPromises = this.currentChains.map(chain => 
                this.worker.fetchTransactions(this.currentAddress, chain, this.currentPage, 10)
            );
            const transactions = await Promise.all(txPromises);
            
            // Filter out null results
            const validTransactions = transactions.filter(tx => 
                tx && tx.transactions && tx.transactions.length > 0
            );
            
            if (validTransactions.length > 0) {
                const txListEl = document.querySelector('.wallet-tx-list');
                
                validTransactions.forEach(txData => {
                    txData.transactions.forEach(tx => {
                        const txEl = this.createTransactionElement(tx, txData.chain);
                        txListEl.appendChild(txEl);
                    });
                });
                
                this.totalTransactions += validTransactions.reduce((sum, txData) => 
                    sum + txData.transactions.length, 0
                );
                
                // Update paginator
                this.updatePaginator();
            } else {
                // No more transactions
                const paginatorEl = document.querySelector('.wallet-paginator');
                paginatorEl.innerHTML = '<div class="no-more-tx">No more transactions</div>';
            }
        } catch (error) {
            console.error('Error loading more transactions:', error);
            const paginatorEl = document.querySelector('.wallet-paginator');
            paginatorEl.innerHTML = '<div class="error-message">Error loading transactions</div>';
        }
    }
    
    updatePaginator() {
        const paginatorEl = document.querySelector('.wallet-paginator');
        
        if (this.totalTransactions >= 20) {
            paginatorEl.innerHTML = '<div class="no-more-tx">Showing maximum of 20 transactions</div>';
        } else {
            paginatorEl.innerHTML = `
                <button class="paginator-btn" id="load-more-btn">Load More</button>
                <span class="tx-count">Showing ${this.totalTransactions} transactions</span>
            `;
            
            document.getElementById('load-more-btn').addEventListener('click', () => {
                this.loadMoreTransactions();
            });
        }
    }
    
    createTransactionElement(tx, chain) {
        // Format differently based on chain
        let txHash, txTime, txFrom, txTo, txAmount;
        
        if (chain === 'BITCOIN') {
            txHash = tx.txid;
            txTime = this.formatTime(tx.time);
            txFrom = 'Input';
            txTo = this.currentAddress;
            txAmount = tx.amount + ' BTC';
        } else if (chain === 'SOLANA') {
            txHash = tx.signature;
            txTime = this.formatTime(tx.blockTime);
            txFrom = 'Signer';
            txTo = 'Program';
            txAmount = ''; // Requires additional API call to get amount
        } else {
            // EVM chains
            txHash = tx.hash;
            txTime = tx.timeStamp ? this.formatTime(tx.timeStamp) : 'Pending';
            txFrom = tx.from;
            txTo = tx.to;
            const wei = parseInt(tx.value, 16);
            const eth = wei / 1000000000000000000;
            txAmount = eth.toFixed(6) + ' ' + this.getTokenSymbol(chain);
        }
        
        const txEl = document.createElement('div');
        txEl.className = 'wallet-tx';
        
        txEl.innerHTML = `
            <div class="wallet-tx-header">
                <a href="${this.getExplorerLink(txHash, chain)}" class="wallet-tx-hash" target="_blank">
                    ${this.formatTxHash(txHash)}
                </a>
                <span class="wallet-tx-time">${txTime}</span>
            </div>
            <div class="wallet-tx-info">
                <span class="wallet-tx-direction">
                    ${txFrom === this.currentAddress ? 'Out' : 'In'}
                </span>
                <span class="wallet-tx-amount">${txAmount}</span>
            </div>
        `;
        
        return txEl;
    }
    
    renderResults(data) {
        if (!data.validChains || data.validChains.length === 0) {
            this.showError('No wallet data found on supported blockchains');
            return;
        }
        
        this.totalTransactions = data.transactions.reduce((sum, txData) => 
            sum + txData.transactions.length, 0
        );
        
        // Create result HTML
        let html = '<div class="wallet-result">';
        
        // Chain badges
        html += '<div class="chain-badges">';
        data.validChains.forEach(chain => {
            html += `<span class="chain-badge ${CHAINS[chain].class.toLowerCase()}">${CHAINS[chain].name}</span>`;
        });
        html += '</div>';
        
        // Balances
        html += '<div class="wallet-balances">';
        html += '<h4>Balances</h4>';
        data.balances.forEach(balance => {
            html += `
                <div class="result-section">
                    <div class="result-row">
                        <span>${CHAINS[balance.chain].name}</span>
                        <span>${this.formatBalance(balance.balance, balance.chain)}</span>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        
        // Transactions
        if (data.transactions.length > 0) {
            html += '<div class="wallet-transactions">';
            html += '<h4>Transactions</h4>';
            html += '<div class="wallet-tx-list">';
            
            data.transactions.forEach(txData => {
                txData.transactions.forEach(tx => {
                    const txHash = txData.chain === 'BITCOIN' ? tx.txid : 
                                 txData.chain === 'SOLANA' ? tx.signature : tx.hash;
                    
                    const txTime = txData.chain === 'BITCOIN' ? this.formatTime(tx.time) :
                                 txData.chain === 'SOLANA' ? this.formatTime(tx.blockTime) :
                                 tx.timeStamp ? this.formatTime(tx.timeStamp) : 'Pending';
                    
                    // Simplified transaction display
                    html += `
                        <div class="wallet-tx">
                            <div class="wallet-tx-header">
                                <a href="${this.getExplorerLink(txHash, txData.chain)}" class="wallet-tx-hash" target="_blank">
                                    ${this.formatTxHash(txHash)}
                                </a>
                                <span class="wallet-tx-time">${txTime}</span>
                            </div>
                        </div>
                    `;
                });
            });
            
            html += '</div>';
            
            // Paginator
            html += '<div class="wallet-paginator">';
            if (this.totalTransactions < 20) {
                html += `
                    <button class="paginator-btn" id="load-more-btn">Load More</button>
                    <span class="tx-count">Showing ${this.totalTransactions} transactions</span>
                `;
            } else {
                html += '<div class="no-more-tx">Showing maximum of 20 transactions</div>';
            }
            html += '</div>';
            
            html += '</div>';
        } else {
            html += '<div class="no-transactions">No transactions found</div>';
        }
        
        html += '</div>';
        
        // Update result container
        this.resultContainer.innerHTML = html;
        this.resultContainer.classList.add('active');
        
        // Add event listener for load more button
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreTransactions();
            });
        }
    }
}

// Initialize wallet search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const walletSearchUI = new WalletSearchUI();
});

// Create a wallet.json fallback for offline use
const WALLET_FALLBACK = {
    "ethereum": {
        "address": "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
        "balance": "0x4563918244f40000", // 5 ETH
        "transactions": [
            {
                "hash": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                "timeStamp": "1682954153",
                "from": "0x1234567890abcdef1234567890abcdef12345678",
                "to": "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
                "value": "0x38d7ea4c68000", // 0.1 ETH
                "gas": "21000",
                "gasPrice": "0x4a817c800" // 20 Gwei
            }
        ]
    },
    "bitcoin": {
        "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        "balance": 0.12345678,
        "transactions": [
            {
                "txid": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
                "time": 1682954153,
                "amount": 0.05
            }
        ]
    },
    "solana": {
        "address": "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc145S2AMZZ",
        "balance": {
            "value": 12345000000 // 12.345 SOL
        },
        "transactions": [
            {
                "signature": "5UyfUMQCRm5R41UBbgYQoYpNKkfYDBKQonQMRrsdNnQjY7UewDbxPBTL4ySiiaSLdRBGY5X9ETjfNwj3KrgsqTM1",
                "blockTime": 1682954153
            }
        ]
    }
};

// Export the WalletSearchUI and QuickNodeWorker classes for use in other modules
export { WalletSearchUI, QuickNodeWorker, WALLET_FALLBACK };
