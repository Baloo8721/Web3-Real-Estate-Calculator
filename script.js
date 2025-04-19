const cryptoPrices = {
    BTC: 65000,
    ETH: 2500,
    USDC: 1
};

const translations = {
    en: {
        title: "Ultimate Real Estate Calculator",
        subtitle: "Calculate Your Mortgage, Sale, Investment, or Crypto Conversion",
        buyer: "Buyer",
        seller: "Seller",
        investor: "Investor/Agent",
        crypto: "Crypto",
        buyer_calc: "Buyer Calculator",
        seller_calc: "Seller Calculator",
        investor_calc: "Investor/Agent Calculator",
        crypto_calc: "Crypto Calculator",
        buyer_price: "Home Price ($)",
        buyer_down: "Down Payment ($)",
        buyer_term: "Loan Term (Years)",
        buyer_rate: "Interest Rate (%)",
        seller_price: "Sale Price ($)",
        seller_balance: "Mortgage Balance ($)",
        seller_commission: "Commission (%)",
        seller_closing: "Closing Costs ($)",
        seller_repairs: "Repairs ($)",
        investor_price: "Purchase Price ($)",
        investor_down: "Down Payment ($)",
        investor_term: "Loan Term (Years)",
        investor_rate: "Interest Rate (%)",
        investor_rental: "Monthly Rental Income ($)",
        investor_expenses: "Monthly Expenses ($)",
        crypto_amount: "Amount ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Calculate",
        save_results: "Save Results",
        share_results: "Share Results",
        referral_link: "Find an Agent",
        footer: "Powered by Web3RealtorFL - Bridging Real Estate & Blockchain",
        invalid_input: "Please enter valid inputs."
    },
    es: {
        title: "Calculadora Inmobiliaria Definitiva",
        subtitle: "Calcula tu hipoteca, venta, inversión o conversión de criptomonedas",
        buyer: "Comprador",
        seller: "Vendedor",
        investor: "Inversor/Agente",
        crypto: "Cripto",
        buyer_calc: "Calculadora para Compradores",
        seller_calc: "Calculadora para Vendedores",
        buyer_price: "Precio de la Vivienda ($)",
        buyer_down: "Pago Inicial ($)",
        buyer_term: "Plazo del Préstamo (Años)",
        buyer_rate: "Tasa de Interés (%)",
        seller_price: "Precio de Venta ($)",
        seller_balance: "Saldo de la Hipoteca ($)",
        seller_commission: "Comisión (%)",
        seller_closing: "Costos de Cierre ($)",
        seller_repairs: "Reparaciones ($)",
        investor_price: "Precio de Compra ($)",
        investor_down: "Pago Inicial ($)",
        investor_term: "Plazo del Préstamo (Años)",
        investor_rate: "Tasa de Interés (%)",
        investor_rental: "Ingresos por Alquiler Mensual ($)",
        investor_expenses: "Gastos Mensuales ($)",
        crypto_amount: "Cantidad ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Calcular",
        save_results: "Guardar Resultados",
        share_results: "Compartir Resultados",
        referral_link: "Encuentra un Agente",
        footer: "Desarrollado por Web3RealtorFL - Conectando Inmuebles y Blockchain",
        invalid_input: "Por favor, introduce datos válidos."
    },
    zh: {
        title: "终极房地产计算器",
        subtitle: "计算您的抵押贷款、销售、投资或加密货币转换",
        buyer: "买家",
        seller: "卖家",
        investor: "投资者/代理",
        crypto: "加密货币",
        buyer_calc: "买家计算器",
        seller_calc: "卖家计算器",
        investor_calc: "投资者/代理计算器",
        crypto_calc: "加密货币计算器",
        buyer_price: "房屋价格 ($)",
        buyer_down: "首付款 ($)",
        buyer_term: "贷款期限 (年)",
        buyer_rate: "利率 (%)",
        seller_price: "销售价格 ($)",
        seller_balance: "抵押贷款余额 ($)",
        seller_commission: "佣金 (%)",
        seller_closing: "交易费用 ($)",
        seller_repairs: "维修费用 ($)",
        investor_price: "购买价格 ($)",
        investor_down: "首付款 ($)",
        investor_term: "贷款期限 (年)",
        investor_rate: "利率 (%)",
        investor_rental: "月租金收入 ($)",
        investor_expenses: "月支出 ($)",
        crypto_amount: "金额 ($)",
        crypto_btc: "比特币 (BTC)",
        crypto_eth: "以太坊 (ETH)",
        crypto_usdc: "USDC",
        calculate: "计算",
        save_results: "保存结果",
        share_results: "分享结果",
        referral_link: "寻找代理",
        footer: "由 Web3RealtorFL 提供支持 - 连接房地产与区块链",
        invalid_input: "请输入有效数据。"
    },
    ar: {
        title: "حاسبة العقارات المثلى",
        subtitle: "احسب رهنك العقاري، البيع، الاستثمار، أو تحويل العملات المشفرة",
        buyer: "مشتري",
        seller: "بائع",
        investor: "مستثمر/وكيل",
        crypto: "عملة مشفرة",
        buyer_calc: "حاسبة المشترين",
        seller_calc: "حاسبة البائعين",
        buyer_price: "سعر المنزل ($)",
        buyer_down: "الدفعة المقدمة ($)",
        buyer_term: "مدة القرض (سنوات)",
        buyer_rate: "سعر الفائدة (%)",
        seller_price: "سعر البيع ($)",
        seller_balance: "رصيد الرهن العقاري ($)",
        seller_commission: "العمولة (%)",
        seller_closing: "تكاليف الإغلاق ($)",
        seller_repairs: "إصلاحات ($)",
        investor_calc: "حاسبة المستثمرين/الوكلاء",
        investor_price: "سعر الشراء ($)",
        investor_down: "الدفعة المقدمة ($)",
        investor_term: "مدة القرض (سنوات)",
        investor_rate: "سعر الفائدة (%)",
        investor_rental: "دخل الإيجار الشهري ($)",
        investor_expenses: "النفقات الشهرية ($)",
        crypto_calc: "حاسبة العملات المشفرة",
        crypto_amount: "المبلغ ($)",
        crypto_btc: "بيتكوين (BTC)",
        crypto_eth: "إيثيريوم (ETH)",
        crypto_usdc: "USDC",
        calculate: "احسب",
        save_results: "حفظ النتائج",
        share_results: "مشاركة النتائج",
        referral_link: "ابحث عن وكيل",
        footer: "مدعوم من Web3RealtorFL - ربط العقارات والبلوكشين",
        invalid_input: "الرجاء إدخال بيانات صحيحة."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('Initializing calculator...');
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        changeLanguage(savedLang);

        const moreLanguages = document.querySelector('.more-languages');
        const languageDropdown = document.querySelector('.language-dropdown');

        moreLanguages.addEventListener('click', (e) => {
            e.preventDefault();
            languageDropdown.classList.toggle('active');
            console.log('Toggled language dropdown');
        });

        document.addEventListener('click', (e) => {
            if (!moreLanguages.contains(e.target) && languageDropdown.classList.contains('active')) {
                languageDropdown.classList.remove('active');
                console.log('Closed language dropdown');
            }
        });

        const tabs = document.querySelectorAll('.tab-label');
        const modes = document.querySelectorAll('.calc-mode');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                console.log(`Switching to tab: ${tab.getAttribute('data-mode')}`);
                tabs.forEach(t => t.classList.remove('active'));
                modes.forEach(m => m.classList.remove('active'));

                tab.classList.add('active');
                const modeId = tab.getAttribute('data-mode') + '-mode';
                const modeElement = document.getElementById(modeId);
                if (modeElement) {
                    modeElement.classList.add('active');
                    console.log(`Activated mode: ${modeId}`);
                } else {
                    console.error(`Mode element not found: ${modeId}`);
                }
            });

            tab.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    tab.click();
                }
            });
        });

        document.getElementById('buyer-calc').addEventListener('click', calculateBuyer);
        document.getElementById('seller-calc').addEventListener('click', calculateSeller);
        document.getElementById('investor-calc').addEventListener('click', calculateInvestor);
        document.getElementById('crypto-calc').addEventListener('click', calculateCrypto);
        document.getElementById('saveBtn').addEventListener('click', saveResults);
        document.getElementById('shareBtn').addEventListener('click', shareResults);

        console.log('Calculator initialized successfully');
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

function changeLanguage(lang) {
    try {
        localStorage.setItem('selectedLanguage', lang);
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            const translation = translations[lang][key] || element.textContent;
            if (element.tagName === 'INPUT') {
                element.placeholder = translation;
            } else if (element.tagName === 'SELECT') {
                const options = element.querySelectorAll('option');
                options.forEach(option => {
                    const optionKey = option.getAttribute('data-lang');
                    if (optionKey && translations[lang][optionKey]) {
                        option.textContent = translations[lang][optionKey];
                    }
                });
            } else {
                element.textContent = translation;
            }
        });
        console.log(`Language changed to: ${lang}`);
    } catch (error) {
        console.error('Language change error:', error);
    }
}

function calculateBuyer() {
    try {
        const price = parseFloat(document.getElementById('buyer-price').value) || 0;
        const down = parseFloat(document.getElementById('buyer-down').value) || 0;
        const term = parseFloat(document.getElementById('buyer-term').value) || 0;
        const rate = parseFloat(document.getElementById('buyer-rate').value) || 0;

        if (price <= 0 || down < 0 || term <= 0 || rate <= 0) {
            document.getElementById('buyer-result').innerHTML = `<span class="error">${translations[localStorage.getItem('selectedLanguage') || 'en'].invalid_input}</span>`;
            return;
        }

        const loan = price - down;
        const monthlyRate = rate / 100 / 12;
        const months = term * 12;
        const monthlyPayment = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        const totalInterest = (monthlyPayment * months) - loan;

        document.getElementById('buyer-result').innerHTML = `
            <strong>Monthly Payment:</strong> $${monthlyPayment.toFixed(2)}<br>
            <strong>Total Interest:</strong> $${totalInterest.toFixed(2)}
        `;
        saveInputs('buyer', { price, down, term, rate, monthlyPayment, totalInterest });
    } catch (error) {
        console.error('Buyer calculation error:', error);
        document.getElementById('buyer-result').innerHTML = '<span class="error">Calculation error. Please try again.</span>';
    }
}

function calculateSeller() {
    try {
        const price = parseFloat(document.getElementById('seller-price').value) || 0;
        const balance = parseFloat(document.getElementById('seller-balance').value) || 0;
        const commission = parseFloat(document.getElementById('seller-commission').value) || 0;
        const closing = parseFloat(document.getElementById('seller-closing').value) || 0;
        const repairs = parseFloat(document.getElementById('seller-repairs').value) || 0;

        if (price <= 0 || balance < 0 || commission < 0 || closing < 0 || repairs < 0) {
            document.getElementById('seller-result').innerHTML = `<span class="error">${translations[localStorage.getItem('selectedLanguage') || 'en'].invalid_input}</span>`;
            return;
        }

        const commissionCost = price * (commission / 100);
        const totalCosts = commissionCost + closing + repairs;
        const netProceeds = price - balance - totalCosts;

        document.getElementById('seller-result').innerHTML = `
            <strong>Net Proceeds:</strong> $${netProceeds.toFixed(2)}<br>
            <strong>Total Costs:</strong> $${totalCosts.toFixed(2)}
        `;
        saveInputs('seller', { price, balance, commission, closing, repairs, netProceeds, totalCosts });
    } catch (error) {
        console.error('Seller calculation error:', error);
        document.getElementById('seller-result').innerHTML = '<span class="error">Calculation error. Please try again.</span>';
    }
}

function calculateInvestor() {
    try {
        const price = parseFloat(document.getElementById('investor-price').value) || 0;
        const down = parseFloat(document.getElementById('investor-down').value) || 0;
        const term = parseFloat(document.getElementById('investor-term').value) || 0;
        const rate = parseFloat(document.getElementById('investor-rate').value) || 0;
        const rental = parseFloat(document.getElementById('investor-rental').value) || 0;
        const expenses = parseFloat(document.getElementById('investor-expenses').value) || 0;

        if (price <= 0 || down < 0 || term <= 0 || rate <= 0 || rental < 0 || expenses < 0) {
            document.getElementById('investor-result').innerHTML = `<span class="error">${translations[localStorage.getItem('selectedLanguage') || 'en'].invalid_input}</span>`;
            return;
        }

        const loan = price - down;
        const monthlyRate = rate / 100 / 12;
        const months = term * 12;
        const monthlyPayment = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        const cashFlow = rental - monthlyPayment - expenses;
        const noi = (rental - expenses) * 12;
        const capRate = (noi / price) * 100;
        const cashOnCash = (cashFlow * 12 / down) * 100;

        document.getElementById('investor-result').innerHTML = `
            <strong>Monthly Cash Flow:</strong> $${cashFlow.toFixed(2)}<br>
            <strong>Cap Rate:</strong> ${capRate.toFixed(2)}%<br>
            <strong>Cash-on-Cash Return:</strong> ${cashOnCash.toFixed(2)}%
        `;
        saveInputs('investor', { price, down, term, rate, rental, expenses, cashFlow, capRate, cashOnCash });
    } catch (error) {
        console.error('Investor calculation error:', error);
        document.getElementById('investor-result').innerHTML = '<span class="error">Calculation error. Please try again.</span>';
    }
}

function calculateCrypto() {
    try {
        const amount = parseFloat(document.getElementById('crypto-amount').value) || 0;
        const crypto = document.getElementById('crypto-type').value;

        if (amount <= 0) {
            document.getElementById('crypto-result').innerHTML = `<span class="error">${translations[localStorage.getItem('selectedLanguage') || 'en'].invalid_input}</span>`;
            return;
        }

        const cryptoAmount = amount / cryptoPrices[crypto];
        document.getElementById('crypto-result').innerHTML = `
            <strong>${crypto}:</strong> ${cryptoAmount.toFixed(6)}<br>
            <strong>USD Value:</strong> $${amount.toFixed(2)}
        `;
        saveInputs('crypto', { amount, crypto, cryptoAmount });
    } catch (error) {
        console.error('Crypto calculation error:', error);
        document.getElementById('crypto-result').innerHTML = '<span class="error">Calculation error. Please try again.</span>';
    }
}

let lastInputs = {};
function saveInputs(mode, inputs) {
    lastInputs = { mode, ...inputs };
}

function saveResults() {
    try {
        if (!lastInputs.mode) return;
        let content = `# Mortgage Calculator Results\n\n`;
        content += `**Mode**: ${lastInputs.mode}\n\n`;
        for (const [key, value] of Object.entries(lastInputs)) {
            if (key !== 'mode') {
                content += `**${key}**: ${value.toFixed ? value.toFixed(2) : value}\n`;
            }
        }
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mortgage_calc_${new Date().toISOString().split('T')[0]}.md`;
        a.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Save results error:', error);
    }
}

function shareResults() {
    try {
        if (!lastInputs.mode) return;
        const params = new URLSearchParams();
        params.set('mode', lastInputs.mode);
        for (const [key, value] of Object.entries(lastInputs)) {
            if (key !== 'mode') {
                params.set(key, value);
            }
        }
        const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
        prompt('Copy this URL to share:', url);
    } catch (error) {
        console.error('Share results error:', error);
    }
}

console.log('Calculator script loaded.');
if (!document.querySelector('.calc-box')) {
    console.error('Calc-box not found in DOM. Check index.html structure.');
}
if (!document.querySelector('#calcBody')) {
    console.error('Calc-body not found. Calculator functionality may not work.');
}
