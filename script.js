// Static crypto prices
const cryptoPrices = {
    BTC: 65000,
    ETH: 2500,
    USDC: 1
};

// Multilingual translations
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
        footer: "Powered by Web3RealtorFL - Bridging Real Estate & Blockchain"
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
        investor_calc: "Calculadora para Inversores/Agentes",
        crypto_calc: "Calculadora de Criptomonedas",
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
        footer: "Desarrollado por Web3RealtorFL - Conectando Inmuebles y Blockchain"
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
        footer: "由 Web3RealtorFL 提供支持 - 连接房地产与区块链"
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
        footer: "مدعوم من Web3RealtorFL - ربط العقارات والبلوكشين"
    },
    ru: {
        title: "Универсальный Калькулятор Недвижимости",
        subtitle: "Рассчитайте ипотеку, продажу, инвестиции или конвертацию криптовалют",
        buyer: "Покупатель",
        seller: "Продавец",
        investor: "Инвестор/Агент",
        crypto: "Крипто",
        buyer_calc: "Калькулятор для Покупателей",
        seller_calc: "Калькулятор для Продавцов",
        buyer_price: "Цена дома ($)",
        buyer_down: "Первоначальный взнос ($)",
        buyer_term: "Срок кредита (лет)",
        buyer_rate: "Процентная ставка (%)",
        seller_price: "Цена продажи ($)",
        seller_balance: "Остаток ипотеки ($)",
        seller_commission: "Комиссия (%)",
        seller_closing: "Закрывающие расходы ($)",
        seller_repairs: "Ремонт ($)",
        investor_calc: "Калькулятор для Инвесторов/Агентов",
        investor_price: "Цена покупки ($)",
        investor_down: "Первоначальный взнос ($)",
        investor_term: "Срок кредита (лет)",
        investor_rate: "Процентная ставка (%)",
        investor_rental: "Ежемесячный доход от аренды ($)",
        investor_expenses: "Ежемесячные расходы ($)",
        crypto_calc: "Криптокалькулятор",
        crypto_amount: "Сумма ($)",
        crypto_btc: "Биткойн (BTC)",
        crypto_eth: "Эфириум (ETH)",
        crypto_usdc: "USDC",
        calculate: "Рассчитать",
        save_results: "Сохранить результаты",
        share_results: "Поделиться результатами",
        referral_link: "Найти агента",
        footer: "Работает на Web3RealtorFL - Соединение недвижимости и блокчейна"
    },
    pt: {
        title: "Calculadora Imobiliária Definitiva",
        subtitle: "Calcule sua hipoteca, venda, investimento ou conversão de criptomoedas",
        buyer: "Comprador",
        seller: "Vendedor",
        investor: "Investidor/Agente",
        crypto: "Cripto",
        buyer_calc: "Calculadora para Compradores",
        seller_calc: "Calculadora para Vendedores",
        buyer_price: "Preço da Casa ($)",
        buyer_down: "Entrada ($)",
        buyer_term: "Prazo do Empréstimo (Anos)",
        buyer_rate: "Taxa de Juros (%)",
        seller_price: "Preço de Venda ($)",
        seller_balance: "Saldo da Hipoteca ($)",
        seller_commission: "Comissão (%)",
        seller_closing: "Custos de Fechamento ($)",
        seller_repairs: "Reparos ($)",
        investor_calc: "Calculadora para Investidores/Agentes",
        investor_price: "Preço de Compra ($)",
        investor_down: "Entrada ($)",
        investor_term: "Prazo do Empréstimo (Anos)",
        investor_rate: "Taxa de Juros (%)",
        investor_rental: "Renda Mensal de Aluguel ($)",
        investor_expenses: "Despesas Mensais ($)",
        crypto_calc: "Calculadora de Criptomoedas",
        crypto_amount: "Quantia ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Calcular",
        save_results: "Salvar Resultados",
        share_results: "Compartilhar Resultados",
        referral_link: "Encontrar um Agente",
        footer: "Desenvolvido por Web3RealtorFL - Conectando Imóveis e Blockchain"
    },
    fr: {
        title: "Calculatrice Immobilière Ultime",
        subtitle: "Calculez votre hypothèque, vente, investissement ou conversion de cryptomonnaies",
        buyer: "Acheteur",
        seller: "Vendeur",
        investor: "Investisseur/Agent",
        crypto: "Crypto",
        buyer_calc: "Calculatrice pour Acheteurs",
        seller_calc: "Calculatrice pour Vendeurs",
        buyer_price: "Prix de la Maison ($)",
        buyer_down: "Mise de Fonds ($)",
        buyer_term: "Durée du Prêt (Années)",
        buyer_rate: "Taux d'Intérêt (%)",
        seller_price: "Prix de Vente ($)",
        seller_balance: "Solde de l'Hypothèque ($)",
        seller_commission: "Commission (%)",
        seller_closing: "Frais de Clôture ($)",
        seller_repairs: "Réparations ($)",
        investor_calc: "Calculatrice pour Investisseurs/Agents",
        investor_price: "Prix d'Achat ($)",
        investor_down: "Mise de Fonds ($)",
        investor_term: "Durée du Prêt (Années)",
        investor_rate: "Taux d'Intérêt (%)",
        investor_rental: "Revenu Mensuel de Location ($)",
        investor_expenses: "Dépenses Mensuelles ($)",
        crypto_calc: "Calculatrice de Cryptomonnaies",
        crypto_amount: "Montant ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Calculer",
        save_results: "Enregistrer les Résultats",
        share_results: "Partager les Résultats",
        referral_link: "Trouver un Agent",
        footer: "Propulsé par Web3RealtorFL - Relier l'Immobilier et la Blockchain"
    },
    it: {
        title: "Calcolatrice Immobiliare Definitiva",
        subtitle: "Calcola il tuo mutuo, vendita, investimento o conversione di criptovalute",
        buyer: "Acquirente",
        seller: "Venditore",
        investor: "Investitore/Agente",
        crypto: "Cripto",
        buyer_calc: "Calcolatrice per Acquirenti",
        seller_calc: "Calcolatrice per Venditori",
        buyer_price: "Prezzo della Casa ($)",
        buyer_down: "Acconto ($)",
        buyer_term: "Durata del Prestito (Anni)",
        buyer_rate: "Tasso di Interesse (%)",
        seller_price: "Prezzo di Vendita ($)",
        seller_balance: "Saldo del Mutuo ($)",
        seller_commission: "Commissione (%)",
        seller_closing: "Costi di Chiusura ($)",
        seller_repairs: "Riparazioni ($)",
        investor_calc: "Calcolatrice per Investitori/Agenti",
        investor_price: "Prezzo di Acquisto ($)",
        investor_down: "Acconto ($)",
        investor_term: "Durata del Prestito (Anni)",
        investor_rate: "Tasso di Interesse (%)",
        investor_rental: "Reddito Mensile da Affitto ($)",
        investor_expenses: "Spese Mensili ($)",
        crypto_calc: "Calcolatrice di Criptovalute",
        crypto_amount: "Importo ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Calcola",
        save_results: "Salva Risultati",
        share_results: "Condividi Risultati",
        referral_link: "Trova un Agente",
        footer: "Offerto da Web3RealtorFL - Collegamento tra Immobili e Blockchain"
    },
    de: {
        title: "Ultimativer Immobilienrechner",
        subtitle: "Berechnen Sie Ihre Hypothek, Verkauf, Investition oder Kryptowährungsumrechnung",
        buyer: "Käufer",
        seller: "Verkäufer",
        investor: "Investor/Agent",
        crypto: "Krypto",
        buyer_calc: "Rechner für Käufer",
        seller_calc: "Rechner für Verkäufer",
        buyer_price: "Hauspreis ($)",
        buyer_down: "Anzahlung ($)",
        buyer_term: "Kreditlaufzeit (Jahre)",
        buyer_rate: "Zinssatz (%)",
        seller_price: "Verkaufspreis ($)",
        seller_balance: "Hypothekensaldo ($)",
        seller_commission: "Provision (%)",
        seller_closing: "Abschlusskosten ($)",
        seller_repairs: "Reparaturen ($)",
        investor_calc: "Rechner für Investoren/Agenten",
        investor_price: "Kaufpreis ($)",
        investor_down: "Anzahlung ($)",
        investor_term: "Kreditlaufzeit (Jahre)",
        investor_rate: "Zinssatz (%)",
        investor_rental: "Monatliches Mieteinkommen ($)",
        investor_expenses: "Monatliche Ausgaben ($)",
        crypto_calc: "Kryptowährungsrechner",
        crypto_amount: "Betrag ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Berechnen",
        save_results: "Ergebnisse Speichern",
        share_results: "Ergebnisse Teilen",
        referral_link: "Agent Finden",
        footer: "Bereitgestellt von Web3RealtorFL - Verbindung von Immobilien und Blockchain"
    },
    ja: {
        title: "究極の不動産計算機",
        subtitle: "あなたの住宅ローン、売却、投資、または暗号通貨変換を計算します",
        buyer: "購入者",
        seller: "売却者",
        investor: "投資家/エージェント",
        crypto: "暗号通貨",
        buyer_calc: "購入者用計算機",
        seller_calc: "売却者用計算機",
        buyer_price: "住宅価格 ($)",
        buyer_down: "頭金 ($)",
        buyer_term: "ローン期間 (年)",
        buyer_rate: "金利 (%)",
        seller_price: "売却価格 ($)",
        seller_balance: "住宅ローンの残高 ($)",
        seller_commission: "手数料 (%)",
        seller_closing: "クロージングコスト ($)",
        seller_repairs: "修繕費 ($)",
        investor_calc: "投資家/エージェント用計算機",
        investor_price: "購入価格 ($)",
        investor_down: "頭金 ($)",
        investor_term: "ローン期間 (年)",
        investor_rate: "金利 (%)",
        investor_rental: "月間賃料収入 ($)",
        investor_expenses: "月間経費 ($)",
        crypto_calc: "暗号通貨計算機",
        crypto_amount: "金額 ($)",
        crypto_btc: "ビットコイン (BTC)",
        crypto_eth: "イーサリアム (ETH)",
        crypto_usdc: "USDC",
        calculate: "計算",
        save_results: "結果を保存",
        share_results: "結果を共有",
        referral_link: "エージェントを探す",
        footer: "Web3RealtorFL提供 - 不動産とブロックチェーンをつなぐ"
    },
    sv: {
        title: "Ultimat Fastighetskalkylator",
        subtitle: "Beräkna din inteckning, försäljning, investering eller kryptokonvertering",
        buyer: "Köpare",
        seller: "Säljare",
        investor: "Investerare/Agent",
        crypto: "Krypto",
        buyer_calc: "Kalkylator för Köpare",
        seller_calc: "Kalkylator för Säljare",
        buyer_price: "Huspris ($)",
        buyer_down: "Handpenning ($)",
        buyer_term: "Lånets löptid (år)",
        buyer_rate: "Räntesats (%)",
        seller_price: "Försäljningspris ($)",
        seller_balance: "Inteckningssaldo ($)",
        seller_commission: "Provision (%)",
        seller_closing: "Avslutningskostnader ($)",
        seller_repairs: "Reparationer ($)",
        investor_calc: "Kalkylator för Investerare/Agenter",
        investor_price: "Köppris ($)",
        investor_down: "Handpenning ($)",
        investor_term: "Lånets löptid (år)",
        investor_rate: "Räntesats (%)",
        investor_rental: "Månatlig hyresinkomst ($)",
        investor_expenses: "Månatliga utgifter ($)",
        crypto_calc: "Kryptokalkylator",
        crypto_amount: "Belopp ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Beräkna",
        save_results: "Spara Resultat",
        share_results: "Dela Resultat",
        referral_link: "Hitta en Agent",
        footer: "Drivs av Web3RealtorFL - Kopplar samman Fastigheter och Blockchain"
    },
    ko: {
        title: "궁극의 부동산 계산기",
        subtitle: "모기지, 매매, 투자 또는 암호화폐 변환을 계산하세요",
        buyer: "구매자",
        seller: "판매자",
        investor: "투자자/에이전트",
        crypto: "암호화폐",
        buyer_calc: "구매자 계산기",
        seller_calc: "판매자 계산기",
        buyer_price: "주택 가격 ($)",
        buyer_down: "계약금 ($)",
        buyer_term: "대출 기간 (년)",
        buyer_rate: "이자율 (%)",
        seller_price: "매매 가격 ($)",
        seller_balance: "모기지 잔액 ($)",
        seller_commission: "수수료 (%)",
        seller_closing: "마감 비용 ($)",
        seller_repairs: "수리 비용 ($)",
        investor_calc: "투자자/에이전트 계산기",
        investor_price: "구매 가격 ($)",
        investor_down: "계약금 ($)",
        investor_term: "대출 기간 (년)",
        investor_rate: "이자율 (%)",
        investor_rental: "월 임대 수입 ($)",
        investor_expenses: "월 지출 ($)",
        crypto_calc: "암호화폐 계산기",
        crypto_amount: "금액 ($)",
        crypto_btc: "비트코인 (BTC)",
        crypto_eth: "이더리움 (ETH)",
        crypto_usdc: "USDC",
        calculate: "계산",
        save_results: "결과 저장",
        share_results: "결과 공유",
        referral_link: "에이전트 찾기",
        footer: "Web3RealtorFL 제공 - 부동산과 블록체인을 연결"
    }
};

// Language mapping
const languageNames = {
    "en": "English",
    "es": "Spanish",
    "zh": "Chinese",
    "ar": "Arabic",
    "ru": "Russian",
    "pt": "Portuguese",
    "fr": "French",
    "it": "Italian",
    "de": "German",
    "ja": "Japanese",
    "sv": "Swedish",
    "ko": "Korean"
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Language selector
    window.onload = function () {
        localStorage.setItem('selectedLanguage', 'en');
        changeLanguage('en');
    };

    let languageDropdownOpen = false;
    const moreLanguages = document.querySelector('.more-languages');
    const languageDropdown = document.querySelector('.language-dropdown');

    function toggleLanguageDropdown() {
        languageDropdownOpen = !languageDropdownOpen;
        languageDropdown.style.display = languageDropdownOpen ? 'block' : 'none';
    }

    document.addEventListener('click', function (e) {
        if (!moreLanguages.contains(e.target) && languageDropdownOpen) {
            languageDropdown.style.display = 'none';
            languageDropdownOpen = false;
        }
    });

    moreLanguages.addEventListener('touchstart', function (e) {
        e.preventDefault();
        toggleLanguageDropdown();
    });

    moreLanguages.addEventListener('click', function (e) {
        e.preventDefault();
        toggleLanguageDropdown();
    });

    let languageSpans = languageDropdown.querySelectorAll('span');
    languageSpans.forEach(span => {
        span.addEventListener('click', function (e) {
            e.stopPropagation();
            const lang = this.getAttribute('onclick').match(/changeLanguage\('([^']+)'/)[1];
            changeLanguage(lang);
            languageDropdownOpen = false;
            languageDropdown.style.display = 'none';
        });

        span.addEventListener('touchstart', function (e) {
            e.stopPropagation();
            const lang = this.getAttribute('onclick').match(/changeLanguage\('([^']+)'/)[1];
            changeLanguage(lang);
            languageDropdownOpen = false;
            languageDropdown.style.display = 'none';
        });
    });

    // Calculator buttons
    document.getElementById('buyer-calc').addEventListener('click', calculateBuyer);
    document.getElementById('seller-calc').addEventListener('click', calculateSeller);
    document.getElementById('investor-calc').addEventListener('click', calculateInvestor);
    document.getElementById('crypto-calc').addEventListener('click', calculateCrypto);

    // Save and Share
    document.getElementById('saveBtn').addEventListener('click', saveResults);
    document.getElementById('shareBtn').addEventListener('click', shareResults);
});

// Language change
function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        const translation = translations[lang][key] || '';

        if (element.tagName === 'INPUT') {
            element.placeholder = translation;
        } else if (element.tagName === 'SELECT') {
            const options = element.querySelectorAll('option');
            options.forEach(option => {
                const optionKey = option.getAttribute('data-lang');
                if (optionKey) {
                    option.textContent = translations[lang][optionKey] || option.textContent;
                }
            });
        } else {
            element.innerHTML = translation;
        }
    });
}

// Buyer Calculator
function calculateBuyer() {
    const price = parseFloat(document.getElementById('buyer-price').value) || 0;
    const down = parseFloat(document.getElementById('buyer-down').value) || 0;
    const term = parseFloat(document.getElementById('buyer-term').value) || 0;
    const rate = parseFloat(document.getElementById('buyer-rate').value) || 0;

    if (price <= 0 || down < 0 || term <= 0 || rate <= 0) {
        document.getElementById('buyer-result').textContent = translations[localStorage.getItem('selectedLanguage') || 'en']['invalid_input'] || 'Please enter valid inputs.';
        return;
    }

    const loan = price - down;
    const monthlyRate = rate / 100 / 12;
    const months = term * 12;
    const monthlyPayment = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalInterest = (monthlyPayment * months) - loan;

    document.getElementById('buyer-result').textContent = 
        `Monthly Payment: $${monthlyPayment.toFixed(2)}\nTotal Interest: $${totalInterest.toFixed(2)}`;
    saveInputs('buyer', { price, down, term, rate, monthlyPayment, totalInterest });
}

// Seller Calculator
function calculateSeller() {
    const price = parseFloat(document.getElementById('seller-price').value) || 0;
    const balance = parseFloat(document.getElementById('seller-balance').value) || 0;
    const commission = parseFloat(document.getElementById('seller-commission').value) || 0;
    const closing = parseFloat(document.getElementById('seller-closing').value) || 0;
    const repairs = parseFloat(document.getElementById('seller-repairs').value) || 0;

    if (price <= 0 || balance < 0 || commission < 0 || closing < 0 || repairs < 0) {
        document.getElementById('seller-result').textContent = translations[localStorage.getItem('selectedLanguage') || 'en']['invalid_input'] || 'Please enter valid inputs.';
        return;
    }

    const commissionCost = price * (commission / 100);
    const totalCosts = commissionCost + closing + repairs;
    const netProceeds = price - balance - totalCosts;

    document.getElementById('seller-result').textContent = 
        `Net Proceeds: $${netProceeds.toFixed(2)}\nTotal Costs: $${totalCosts.toFixed(2)}`;
    saveInputs('seller', { price, balance, commission, closing, repairs, netProceeds, totalCosts });
}

// Investor/Agent Calculator
function calculateInvestor() {
    const price = parseFloat(document.getElementById('investor-price').value) || 0;
    const down = parseFloat(document.getElementById('investor-down').value) || 0;
    const term = parseFloat(document.getElementById('investor-term').value) || 0;
    const rate = parseFloat(document.getElementById('investor-rate').value) || 0;
    const rental = parseFloat(document.getElementById('investor-rental').value) || 0;
    const expenses = parseFloat(document.getElementById('investor-expenses').value) || 0;

    if (price <= 0 || down < 0 || term <= 0 || rate <= 0 || rental < 0 || expenses < 0) {
        document.getElementById('investor-result').textContent = translations[localStorage.getItem('selectedLanguage') || 'en']['invalid_input'] || 'Please enter valid inputs.';
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

    document.getElementById('investor-result').textContent = 
        `Monthly Cash Flow: $${cashFlow.toFixed(2)}\nCap Rate: ${capRate.toFixed(2)}%\nCash-on-Cash Return: ${cashOnCash.toFixed(2)}%`;
    saveInputs('investor', { price, down, term, rate, rental, expenses, cashFlow, capRate, cashOnCash });
}

// Crypto Calculator
function calculateCrypto() {
    const amount = parseFloat(document.getElementById('crypto-amount').value) || 0;
    const crypto = document.getElementById('crypto-type').value;

    if (amount <= 0) {
        document.getElementById('crypto-result').textContent = translations[localStorage.getItem('selectedLanguage') || 'en']['invalid_input'] || 'Please enter a valid amount.';
        return;
    }

    const cryptoAmount = amount / cryptoPrices[crypto];
    document.getElementById('crypto-result').textContent = 
        `${crypto}: ${cryptoAmount.toFixed(6)} ($${amount.toFixed(2)})`;
    saveInputs('crypto', { amount, crypto, cryptoAmount });
}

// Save inputs
let lastInputs = {};
function saveInputs(mode, inputs) {
    lastInputs = { mode, ...inputs };
}

// Save results as Markdown
function saveResults() {
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
}

// Share results via URL
function shareResults() {
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
}

// Background handling
function throttle(func, limit) {
    let inThrottle;
    return function () {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function handleBackground() {
    document.body.style.height = '100vh';
    document.body.style.minHeight = '100vh';
}

window.addEventListener('load', handleBackground);
window.addEventListener('resize', throttle(handleBackground, 100));

// Smooth scroll
function smoothScrollToTop() {
    const start = window.pageYOffset;
    const duration = 500;
    const startTime = performance.now();

    function step(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        window.scrollTo(0, start * (1 - ease));
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

window.addEventListener('load', smoothScrollToTop);
window.addEventListener('hashchange', smoothScrollToTop);
window.addEventListener('DOMContentLoaded', smoothScrollToTop);
setTimeout(smoothScrollToTop, 0);