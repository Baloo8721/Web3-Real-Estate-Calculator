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
        buyer_price_range: "Home Price Range",
        buyer_down: "Down Payment ($)",
        buyer_down_percent: "Down Payment %",
        buyer_term: "Loan Term (Years)",
        buyer_term_preset: "Loan Term",
        buyer_rate: "Interest Rate (%)",
        buyer_rate_preset: "Interest Rate",
        buyer_loan_type: "Loan Type",
        buyer_property_tax: "Property Taxes ($/year)",
        buyer_insurance: "Homeowners Insurance ($/year)",
        buyer_hoa: "HOA Fees ($/month)",
        buyer_pmi_rate: "PMI Rate (%)",
        buyer_closing_costs: "Closing Costs ($)",
        buyer_extra_payment: "Extra Monthly Payment ($)",
        buyer_escrow: "Include Taxes & Insurance in Payment (Escrow)",
        custom_price: "Custom Price",
        custom_amount: "Custom Amount",
        custom_term: "Custom",
        custom_rate: "Custom",
        custom_term_label: "Custom Term (Years)",
        custom_rate_label: "Custom Rate (%)",
        conventional: "Conventional",
        fha: "FHA",
        va: "VA",
        usda: "USDA",
        arm: "ARM",
        default_closing_costs: "Default: 3% of home price (typical for most areas)",
        default_property_tax: "Default: 0.82% of home value (national average)",
        default_insurance: "Default: Based on $4,419/yr for $300K home value",
        years_30: "30 Years",
        years_20: "20 Years",
        years_15: "15 Years",
        years_10: "10 Years",
        monthly_costs: "Monthly Costs",
        principal_interest: "Principal & Interest",
        property_taxes: "Property Taxes",
        homeowners_insurance: "Homeowners Insurance",
        hoa_fees: "HOA Fees",
        mortgage_insurance_premium: "Mortgage Insurance Premium",
        private_mortgage_insurance: "Private Mortgage Insurance",
        total_monthly_payment: "Total Monthly Payment",
        with_extra_payment: "With Extra Payment",
        loan_details: "Loan Details",
        loan_amount: "Loan Amount",
        loan_to_value_ratio: "Loan-to-Value Ratio",
        total_interest: "Total Interest",
        loan_term_extra_payments: "Loan Term with Extra Payments",
        years_saved_extra_payments: "Years Saved with Extra Payments",
        upfront_costs: "Upfront Costs",
        down_payment: "Down Payment",
        closing_costs: "Closing Costs",
        total_upfront_costs: "Total Upfront Costs",
        months: "months",
        years: "years",
        calculation_error: "Calculation error. Please try again.",
        sale_summary: "Sale Summary",
        sale_price: "Sale Price",
        mortgage_balance: "Mortgage Balance",
        total_costs: "Total Costs",
        net_proceeds: "Net Proceeds",
        cost_breakdown: "Cost Breakdown",
        commission_amount: "Commission",
        repair_costs: "Repair Costs",
        investment_summary: "Investment Summary",
        monthly_cash_flow: "Monthly Cash Flow",
        annual_cash_flow: "Annual Cash Flow",
        cap_rate: "Cap Rate",
        cash_on_cash_return: "Cash on Cash Return",
        investment_details: "Investment Details",
        purchase_price: "Purchase Price",
        monthly_rental_income: "Monthly Rental Income",
        monthly_expenses: "Monthly Expenses",
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
        buyer_price_range: "Rango de Precio",
        buyer_down: "Pago Inicial ($)",
        buyer_down_percent: "Porcentaje de Pago Inicial",
        buyer_term: "Plazo del Préstamo (Años)",
        buyer_term_preset: "Plazo del Préstamo",
        buyer_rate: "Tasa de Interés (%)",
        buyer_rate_preset: "Tasa de Interés",
        buyer_loan_type: "Tipo de Préstamo",
        buyer_property_tax: "Impuestos de Propiedad ($/año)",
        buyer_insurance: "Seguro de Vivienda ($/año)",
        buyer_hoa: "Cuotas de HOA ($/mes)",
        buyer_pmi_rate: "Tasa de PMI (%)",
        buyer_closing_costs: "Costos de Cierre ($)",
        buyer_extra_payment: "Pago Mensual Adicional ($)",
        buyer_escrow: "Incluir Impuestos y Seguro en Pago (Depósito en Garantía)",
        custom_price: "Precio Personalizado",
        custom_amount: "Cantidad Personalizada",
        custom_term: "Personalizado",
        custom_rate: "Personalizada",
        custom_term_label: "Plazo Personalizado (Años)",
        custom_rate_label: "Tasa Personalizada (%)",
        conventional: "Convencional",
        fha: "FHA",
        va: "VA",
        usda: "USDA",
        arm: "ARM",
        default_closing_costs: "Predeterminado: 3% del precio de la vivienda (típico para la mayoría de las áreas)",
        default_property_tax: "Predeterminado: 0.82% del valor de la vivienda (promedio nacional)",
        default_insurance: "Predeterminado: Basado en $4,419/año para una vivienda de $300K",
        years_30: "30 Años",
        years_20: "20 Años",
        years_15: "15 Años",
        years_10: "10 Años",
        months: "meses",
        years: "años",
        monthly_costs: "Costos Mensuales",
        principal_interest: "Capital e Interés",
        property_taxes: "Impuestos de Propiedad",
        homeowners_insurance: "Seguro de Vivienda",
        hoa_fees: "Cuotas de HOA",
        mortgage_insurance_premium: "Prima de Seguro Hipotecario",
        private_mortgage_insurance: "Seguro Hipotecario Privado",
        total_monthly_payment: "Pago Mensual Total",
        with_extra_payment: "Con Pago Adicional",
        loan_details: "Detalles del Préstamo",
        loan_amount: "Monto del Préstamo",
        loan_to_value_ratio: "Relación Préstamo-Valor",
        total_interest: "Interés Total",
        loan_term_extra_payments: "Plazo del Préstamo con Pagos Adicionales",
        years_saved_extra_payments: "Años Ahorrados con Pagos Adicionales",
        upfront_costs: "Costos Iniciales",
        down_payment: "Pago Inicial",
        closing_costs: "Costos de Cierre",
        total_upfront_costs: "Costos Iniciales Totales",
        calculation_error: "Error de cálculo. Por favor, inténtalo de nuevo.",
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
        buyer_price_range: "房价范围",
        buyer_down: "首付款 ($)",
        buyer_down_percent: "首付款百分比",
        buyer_term: "贷款期限 (年)",
        buyer_term_preset: "贷款期限",
        buyer_rate: "利率 (%)",
        buyer_rate_preset: "利率",
        buyer_loan_type: "贷款类型",
        buyer_property_tax: "房产税 ($/年)",
        buyer_insurance: "房屋保险 ($/年)",
        buyer_hoa: "物业费 ($/月)",
        buyer_pmi_rate: "房贷保险费率 (%)",
        buyer_closing_costs: "过户费 ($)",
        buyer_extra_payment: "额外月供 ($)",
        buyer_escrow: "包含税费和保险在月供中 (托管)",
        custom_price: "自定义价格",
        custom_amount: "自定义金额",
        custom_term: "自定义",
        custom_rate: "自定义",
        custom_term_label: "自定义期限(年)",
        custom_rate_label: "自定义利率(%)",
        conventional: "常规贷款",
        fha: "FHA贷款",
        va: "VA贷款",
        usda: "USDA贷款",
        arm: "浮动利率贷款",
        default_closing_costs: "默认：房价的3%（大多数地区的典型比例）",
        default_property_tax: "默认：房产价值的0.82%（全国平均水平）",
        default_insurance: "默认：基于30万美元房产每年4419美元的保险费用",
        years_30: "30年",
        years_20: "20年",
        years_15: "15年",
        years_10: "10年",
        months: "个月",
        years: "年",
        monthly_costs: "月度费用",
        principal_interest: "本金与利息",
        property_taxes: "房产税",
        homeowners_insurance: "房屋保险",
        hoa_fees: "物业费",
        mortgage_insurance_premium: "按揭保险费",
        private_mortgage_insurance: "私人按揭保险",
        total_monthly_payment: "月供总额",
        with_extra_payment: "含额外付款",
        loan_details: "贷款详情",
        loan_amount: "贷款金额",
        loan_to_value_ratio: "贷款价值比",
        total_interest: "总利息",
        loan_term_extra_payments: "含额外付款的贷款期限",
        years_saved_extra_payments: "额外付款节省的年数",
        upfront_costs: "预付费用",
        down_payment: "首付款",
        closing_costs: "过户费",
        total_upfront_costs: "预付费用总额",
        calculation_error: "计算错误。请重试。",
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
        buyer_price_range: "نطاق سعر المنزل",
        buyer_down: "الدفعة المقدمة ($)",
        buyer_down_percent: "نسبة الدفعة المقدمة",
        buyer_term: "مدة القرض (سنوات)",
        buyer_term_preset: "مدة القرض",
        buyer_rate: "سعر الفائدة (%)",
        buyer_rate_preset: "سعر الفائدة",
        buyer_loan_type: "نوع القرض",
        buyer_property_tax: "ضرائب العقار ($/سنة)",
        buyer_insurance: "تأمين المنزل ($/سنة)",
        buyer_hoa: "رسوم اتحاد الملاك ($/شهر)",
        buyer_pmi_rate: "معدل تأمين الرهن العقاري (%)",
        buyer_closing_costs: "تكاليف الإغلاق ($)",
        buyer_extra_payment: "دفعة شهرية إضافية ($)",
        buyer_escrow: "تضمين الضرائب والتأمين في الدفع (ضمان)",
        custom_price: "سعر مخصص",
        custom_amount: "مبلغ مخصص",
        custom_term: "مخصص",
        custom_rate: "مخصص",
        custom_term_label: "مدة مخصصة (سنوات)",
        custom_rate_label: "سعر فائدة مخصص (%)",
        conventional: "تقليدي",
        fha: "FHA",
        va: "VA",
        usda: "USDA",
        arm: "معدل فائدة متغير",
        default_closing_costs: "الافتراضي: 3% من سعر المنزل (نموذجي لمعظم المناطق)",
        default_property_tax: "الافتراضي: 0.82% من قيمة المنزل (المتوسط الوطني)",
        default_insurance: "الافتراضي: بناءً على 4,419$ سنويًا لمنزل بقيمة 300 ألف دولار",
        years_30: "30 سنة",
        years_20: "20 سنة",
        years_15: "15 سنة",
        years_10: "10 سنوات",
        months: "شهور",
        years: "سنوات",
        monthly_costs: "التكاليف الشهرية",
        principal_interest: "المبلغ الأساسي والفائدة",
        property_taxes: "ضرائب العقار",
        homeowners_insurance: "تأمين المنزل",
        hoa_fees: "رسوم اتحاد الملاك",
        mortgage_insurance_premium: "قسط تأمين الرهن العقاري",
        private_mortgage_insurance: "تأمين الرهن العقاري الخاص",
        total_monthly_payment: "إجمالي الدفع الشهري",
        with_extra_payment: "مع دفعة إضافية",
        loan_details: "تفاصيل القرض",
        loan_amount: "مبلغ القرض",
        loan_to_value_ratio: "نسبة القرض إلى القيمة",
        total_interest: "إجمالي الفائدة",
        loan_term_extra_payments: "مدة القرض مع الدفعات الإضافية",
        years_saved_extra_payments: "السنوات الموفرة مع الدفعات الإضافية",
        upfront_costs: "التكاليف المقدمة",
        down_payment: "الدفعة المقدمة",
        closing_costs: "تكاليف الإغلاق",
        total_upfront_costs: "إجمالي التكاليف المقدمة",
        calculation_error: "خطأ في الحساب. الرجاء المحاولة مرة أخرى.",
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
    },
    ru: {
        title: "Полный Калькулятор Недвижимости",
        subtitle: "Рассчитайте ипотеку, продажу, инвестиции или конвертацию криптовалюты",
        buyer: "Покупатель",
        seller: "Продавец",
        investor: "Инвестор/Агент",
        crypto: "Крипто",
        buyer_calc: "Калькулятор для Покупателя",
        seller_calc: "Калькулятор для Продавца",
        investor_calc: "Калькулятор для Инвестора/Агента",
        crypto_calc: "Крипто Калькулятор",
        buyer_price: "Цена Дома ($)",
        buyer_price_range: "Диапазон Цен",
        buyer_down: "Первоначальный Взнос ($)",
        buyer_down_percent: "Процент Первоначального Взноса",
        buyer_term: "Срок Кредита (Годы)",
        buyer_term_preset: "Срок Кредита",
        buyer_rate: "Процентная Ставка (%)",
        buyer_rate_preset: "Процентная Ставка",
        buyer_loan_type: "Тип Кредита",
        buyer_property_tax: "Налог на Недвижимость ($/год)",
        buyer_insurance: "Страхование Дома ($/год)",
        buyer_hoa: "Оплата ТСЖ ($/месяц)",
        buyer_pmi_rate: "Ставка Ипотечного Страхования (%)",
        buyer_closing_costs: "Расходы на Закрытие Сделки ($)",
        buyer_extra_payment: "Дополнительный Ежемесячный Платеж ($)",
        buyer_escrow: "Включить Налоги и Страхование в Платеж (Эскроу)",
        custom_price: "Пользовательская Цена",
        custom_amount: "Пользовательская Сумма",
        custom_term: "Пользовательский",
        custom_rate: "Пользовательская",
        custom_term_label: "Пользовательский Срок (Годы)",
        custom_rate_label: "Пользовательская Ставка (%)",
        conventional: "Стандартный",
        fha: "FHA",
        va: "VA",
        usda: "USDA",
        arm: "ARM",
        default_closing_costs: "По умолчанию: 3% от стоимости дома (типично для большинства районов)",
        default_property_tax: "По умолчанию: 0.82% от стоимости дома (среднее по стране)",
        default_insurance: "По умолчанию: На основе $4,419/год для дома стоимостью $300K",
        years_30: "30 Лет",
        years_20: "20 Лет",
        years_15: "15 Лет",
        years_10: "10 лет",
        months: "месяцев",
        years: "лет",
        monthly_costs: "Ежемесячные расходы",
        principal_interest: "Основная сумма и проценты",
        property_taxes: "Налог на недвижимость",
        homeowners_insurance: "Страхование дома",
        hoa_fees: "Сборы ТСЖ",
        mortgage_insurance_premium: "Премия страхования ипотеки",
        private_mortgage_insurance: "Частное ипотечное страхование",
        total_monthly_payment: "Общий ежемесячный платеж",
        with_extra_payment: "С дополнительным платежом",
        loan_details: "Детали кредита",
        loan_amount: "Сумма кредита",
        loan_to_value_ratio: "Отношение кредита к стоимости",
        total_interest: "Общие проценты",
        loan_term_extra_payments: "Срок кредита с дополнительными платежами",
        years_saved_extra_payments: "Сэкономленные годы с дополнительными платежами",
        upfront_costs: "Первоначальные затраты",
        down_payment: "Первоначальный взнос",
        closing_costs: "Расходы на закрытие сделки",
        total_upfront_costs: "Общие первоначальные затраты",
        calculation_error: "Ошибка вычислений. Пожалуйста, попробуйте снова.",
        seller_price: "Цена продажи ($)",
        seller_balance: "Остаток Ипотеки ($)",
        seller_commission: "Комиссия (%)",
        seller_closing: "Расходы на Закрытие ($)",
        seller_repairs: "Ремонт ($)",
        investor_price: "Цена Покупки ($)",
        investor_down: "Первоначальный Взнос ($)",
        investor_term: "Срок Кредита (Годы)",
        investor_rate: "Процентная Ставка (%)",
        investor_rental: "Месячный Доход от Аренды ($)",
        investor_expenses: "Месячные Расходы ($)",
        crypto_amount: "Сумма ($)",
        crypto_btc: "Биткойн (BTC)",
        crypto_eth: "Эфириум (ETH)",
        crypto_usdc: "USDC",
        calculate: "Рассчитать",
        save_results: "Сохранить Результаты",
        share_results: "Поделиться Результатами",
        referral_link: "Найти Агента",
        footer: "Работает на Web3RealtorFL - Соединяя Недвижимость и Блокчейн",
        invalid_input: "Пожалуйста, введите действительные данные."
    },
    pt: {
        title: "Calculadora Imobiliária Definitiva",
        subtitle: "Calcule sua Hipoteca, Venda, Investimento ou Conversão de Criptomoedas",
        buyer: "Comprador",
        seller: "Vendedor",
        investor: "Investidor/Agente",
        crypto: "Cripto",
        buyer_calc: "Calculadora do Comprador",
        seller_calc: "Calculadora do Vendedor",
        investor_calc: "Calculadora do Investidor/Agente",
        crypto_calc: "Calculadora de Cripto",
        buyer_price: "Preço do Imóvel ($)",
        buyer_price_range: "Faixa de Preço",
        buyer_down: "Entrada ($)",
        buyer_down_percent: "Percentual de Entrada",
        buyer_term: "Prazo do Empréstimo (Anos)",
        buyer_term_preset: "Prazo do Empréstimo",
        buyer_rate: "Taxa de Juros (%)",
        buyer_rate_preset: "Taxa de Juros",
        buyer_loan_type: "Tipo de Financiamento",
        buyer_property_tax: "Imposto Predial ($/ano)",
        buyer_insurance: "Seguro Residencial ($/ano)",
        buyer_hoa: "Taxa de Condomínio ($/mês)",
        buyer_pmi_rate: "Taxa de Seguro Hipotecário (%)",
        buyer_closing_costs: "Custos de Fechamento ($)",
        buyer_extra_payment: "Pagamento Mensal Extra ($)",
        buyer_escrow: "Incluir Impostos e Seguro no Pagamento (Caução)",
        custom_price: "Preço Personalizado",
        custom_amount: "Valor Personalizado",
        custom_term: "Personalizado",
        custom_rate: "Personalizada",
        custom_term_label: "Prazo Personalizado (Anos)",
        custom_rate_label: "Taxa Personalizada (%)",
        conventional: "Convencional",
        fha: "FHA",
        va: "VA",
        usda: "USDA",
        arm: "ARM",
        default_closing_costs: "Padrão: 3% do preço do imóvel (típico para a maioria das regiões)",
        default_property_tax: "Padrão: 0,82% do valor do imóvel (média nacional)",
        default_insurance: "Padrão: Baseado em $4.419/ano para imóvel de $300K",
        years_30: "30 Anos",
        years_20: "20 Anos",
        years_15: "15 Anos",
        years_10: "10 Anos",
        months: "meses",
        years: "anos",
        monthly_costs: "Custos Mensais",
        principal_interest: "Principal e Juros",
        property_taxes: "Impostos sobre a Propriedade",
        homeowners_insurance: "Seguro Residencial",
        hoa_fees: "Taxas de Condomínio",
        mortgage_insurance_premium: "Prêmio de Seguro Hipotecário",
        private_mortgage_insurance: "Seguro Hipotecário Privado",
        total_monthly_payment: "Pagamento Mensal Total",
        with_extra_payment: "Com Pagamento Extra",
        loan_details: "Detalhes do Empréstimo",
        loan_amount: "Valor do Empréstimo",
        loan_to_value_ratio: "Relação Empréstimo-Valor",
        total_interest: "Juros Totais",
        loan_term_extra_payments: "Prazo do Empréstimo com Pagamentos Extras",
        years_saved_extra_payments: "Anos Economizados com Pagamentos Extras",
        upfront_costs: "Custos Iniciais",
        down_payment: "Entrada",
        closing_costs: "Custos de Fechamento",
        total_upfront_costs: "Custos Iniciais Totais",
        calculation_error: "Erro de cálculo. Por favor, tente novamente.",
        seller_price: "Preço de Venda ($)",
        seller_balance: "Saldo da Hipoteca ($)",
        seller_commission: "Comissão (%)",
        seller_closing: "Custos de Fechamento ($)",
        seller_repairs: "Reparos ($)",
        investor_price: "Preço de Compra ($)",
        investor_down: "Entrada ($)",
        investor_term: "Prazo do Empréstimo (Anos)",
        investor_rate: "Taxa de Juros (%)",
        investor_rental: "Renda Mensal de Aluguel ($)",
        investor_expenses: "Despesas Mensais ($)",
        crypto_amount: "Valor ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Calcular",
        save_results: "Salvar Resultados",
        share_results: "Compartilhar Resultados",
        referral_link: "Encontrar um Agente",
        footer: "Desenvolvido por Web3RealtorFL - Unindo Imóveis e Blockchain",
        invalid_input: "Por favor, insira dados válidos."
    },
    fr: {
        title: "Calculateur Immobilier Ultime",
        subtitle: "Calculez votre hypothèque, vente, investissement ou conversion de crypto",
        buyer: "Acheteur",
        seller: "Vendeur",
        investor: "Investisseur/Agent",
        crypto: "Crypto",
        buyer_calc: "Calculateur Acheteur",
        seller_calc: "Calculateur Vendeur",
        investor_calc: "Calculateur Investisseur/Agent",
        crypto_calc: "Calculateur Crypto",
        buyer_price: "Prix du Logement ($)",
        buyer_price_range: "Fourchette de Prix",
        buyer_down: "Acompte ($)",
        buyer_down_percent: "Pourcentage d'Acompte",
        buyer_term: "Durée du Prêt (Années)",
        buyer_term_preset: "Durée du Prêt",
        buyer_rate: "Taux d'Intérêt (%)",
        buyer_rate_preset: "Taux d'Intérêt",
        buyer_loan_type: "Type de Prêt",
        buyer_property_tax: "Taxe Foncière ($/an)",
        buyer_insurance: "Assurance Habitation ($/an)",
        buyer_hoa: "Frais de Copropriété ($/mois)",
        buyer_pmi_rate: "Taux d'Assurance Prêt Immobilier (%)",
        buyer_closing_costs: "Frais de Clôture ($)",
        buyer_extra_payment: "Paiement Mensuel Supplémentaire ($)",
        buyer_escrow: "Inclure Taxes et Assurance dans le Paiement (Séquestre)",
        custom_price: "Prix Personnalisé",
        custom_amount: "Montant Personnalisé",
        custom_term: "Personnalisée",
        custom_rate: "Personnalisé",
        custom_term_label: "Durée Personnalisée (Années)",
        custom_rate_label: "Taux Personnalisé (%)",
        conventional: "Conventionnel",
        fha: "FHA",
        va: "VA",
        usda: "USDA",
        arm: "ARM",
        default_closing_costs: "Par défaut: 3% du prix du logement (typique pour la plupart des régions)",
        default_property_tax: "Par défaut: 0,82% de la valeur du logement (moyenne nationale)",
        default_insurance: "Par défaut: Basé sur 4 419$/an pour un logement de 300K$",
        years_30: "30 Ans",
        years_20: "20 Ans",
        years_15: "15 Ans",
        years_10: "10 Ans",
        months: "mois",
        years: "ans",
        monthly_costs: "Coûts Mensuels",
        principal_interest: "Capital et Intérêts",
        property_taxes: "Impôts Fonciers",
        homeowners_insurance: "Assurance Habitation",
        hoa_fees: "Frais de Copropriété",
        mortgage_insurance_premium: "Prime d'Assurance Hypothécaire",
        private_mortgage_insurance: "Assurance Hypothécaire Privée",
        total_monthly_payment: "Paiement Mensuel Total",
        with_extra_payment: "Avec Paiement Supplémentaire",
        loan_details: "Détails du Prêt",
        loan_amount: "Montant du Prêt",
        loan_to_value_ratio: "Ratio Prêt-Valeur",
        total_interest: "Intérêts Totaux",
        loan_term_extra_payments: "Durée du Prêt avec Paiements Supplémentaires",
        years_saved_extra_payments: "Années Économisées avec Paiements Supplémentaires",
        upfront_costs: "Coûts Initiaux",
        down_payment: "Acompte",
        closing_costs: "Frais de Clôture",
        total_upfront_costs: "Coûts Initiaux Totaux",
        calculation_error: "Erreur de calcul. Veuillez réessayer.",
        seller_price: "Prix de Vente ($)",
        seller_balance: "Solde Hypothécaire ($)",
        seller_commission: "Commission (%)",
        seller_closing: "Frais de Clôture ($)",
        seller_repairs: "Réparations ($)",
        investor_price: "Prix d'Achat ($)",
        investor_down: "Acompte ($)",
        investor_term: "Durée du Prêt (Années)",
        investor_rate: "Taux d'Intérêt (%)",
        investor_rental: "Revenu Locatif Mensuel ($)",
        investor_expenses: "Dépenses Mensuelles ($)",
        crypto_amount: "Montant ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Calculer",
        save_results: "Sauvegarder les Résultats",
        share_results: "Partager les Résultats",
        referral_link: "Trouver un Agent",
        footer: "Propulsé par Web3RealtorFL - Reliant l'Immobilier et la Blockchain",
        invalid_input: "Veuillez entrer des données valides."
    },
    it: {
        title: "Calcolatore Immobiliare Definitivo",
        subtitle: "Calcola il tuo Mutuo, Vendita, Investimento o Conversione Crypto",
        buyer: "Acquirente",
        seller: "Venditore",
        investor: "Investitore/Agente",
        crypto: "Cripto",
        buyer_calc: "Calcolatore Acquirente",
        seller_calc: "Calcolatore Venditore",
        investor_calc: "Calcolatore Investitore/Agente",
        crypto_calc: "Calcolatore Cripto",
        buyer_price: "Prezzo Casa ($)",
        buyer_price_range: "Gamma di Prezzi",
        buyer_down: "Acconto ($)",
        buyer_down_percent: "Percentuale Acconto",
        buyer_term: "Durata Mutuo (Anni)",
        buyer_term_preset: "Durata Mutuo",
        buyer_rate: "Tasso Interesse (%)",
        buyer_rate_preset: "Tasso Interesse",
        buyer_loan_type: "Tipo di Mutuo",
        buyer_property_tax: "Tasse Immobiliari ($/anno)",
        buyer_insurance: "Assicurazione Casa ($/anno)",
        buyer_hoa: "Spese Condominiali ($/mese)",
        buyer_pmi_rate: "Tasso Assicurazione Mutuo (%)",
        buyer_closing_costs: "Costi di Chiusura ($)",
        buyer_extra_payment: "Pagamento Mensile Extra ($)",
        buyer_escrow: "Includi Tasse e Assicurazione nel Pagamento (Deposito)",
        custom_price: "Prezzo Personalizzato",
        custom_amount: "Importo Personalizzato",
        custom_term: "Personalizzato",
        custom_rate: "Personalizzato",
        custom_term_label: "Durata Personalizzata (Anni)",
        custom_rate_label: "Tasso Personalizzato (%)",
        conventional: "Convenzionale",
        fha: "FHA",
        va: "VA",
        usda: "USDA",
        arm: "Tasso Variabile",
        default_closing_costs: "Predefinito: 3% del prezzo casa (tipico per la maggior parte delle aree)",
        default_property_tax: "Predefinito: 0.82% del valore casa (media nazionale)",
        default_insurance: "Predefinito: Basato su $4,419/anno per casa da $300K",
        years_30: "30 Anni",
        years_20: "20 Anni",
        years_15: "15 Anni",
        years_10: "10 Anni",
        months: "mesi",
        years: "anni",
        monthly_costs: "Costi Mensili",
        principal_interest: "Capitale e Interessi",
        property_taxes: "Tasse sulla Proprietà",
        homeowners_insurance: "Assicurazione Casa",
        hoa_fees: "Spese Condominiali",
        mortgage_insurance_premium: "Premio Assicurazione Ipotecaria",
        private_mortgage_insurance: "Assicurazione Ipotecaria Privata",
        total_monthly_payment: "Pagamento Mensile Totale",
        with_extra_payment: "Con Pagamento Extra",
        loan_details: "Dettagli del Prestito",
        loan_amount: "Importo del Prestito",
        loan_to_value_ratio: "Rapporto Prestito-Valore",
        total_interest: "Interessi Totali",
        loan_term_extra_payments: "Durata del Prestito con Pagamenti Extra",
        years_saved_extra_payments: "Anni Risparmiati con Pagamenti Extra",
        upfront_costs: "Costi Iniziali",
        down_payment: "Acconto",
        closing_costs: "Costi di Chiusura",
        total_upfront_costs: "Costi Iniziali Totali",
        calculation_error: "Errore di calcolo. Riprova.",
        seller_price: "Prezzo di Vendita ($)",
        seller_balance: "Saldo Mutuo ($)",
        seller_commission: "Commissione (%)",
        seller_closing: "Spese di Chiusura ($)",
        seller_repairs: "Riparazioni ($)",
        investor_price: "Prezzo Acquisto ($)",
        investor_down: "Acconto ($)",
        investor_term: "Durata Mutuo (Anni)",
        investor_rate: "Tasso Interesse (%)",
        investor_rental: "Reddito Affitto Mensile ($)",
        investor_expenses: "Spese Mensili ($)",
        crypto_amount: "Importo ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Calcola",
        save_results: "Salva Risultati",
        share_results: "Condividi Risultati",
        referral_link: "Trova un Agente",
        footer: "Realizzato da Web3RealtorFL - Collegando Immobiliare e Blockchain",
        invalid_input: "Inserisci dati validi."
    },
    de: {
        title: "Ultimativer Immobilienrechner",
        subtitle: "Berechnen Sie Ihre Hypothek, Verkauf, Investition oder Krypto-Konvertierung",
        buyer: "Käufer",
        seller: "Verkäufer",
        investor: "Investor/Makler",
        crypto: "Krypto",
        buyer_calc: "Käuferrechner",
        seller_calc: "Verkäuferrechner",
        investor_calc: "Investor-/Maklerrechner",
        crypto_calc: "Krypto-Rechner",
        buyer_price: "Hauspreis ($)",
        buyer_price_range: "Preisbereich",
        buyer_down: "Anzahlung ($)",
        buyer_down_percent: "Anzahlungsprozent",
        buyer_term: "Laufzeit (Jahre)",
        buyer_term_preset: "Laufzeit",
        buyer_rate: "Zinssatz (%)",
        buyer_rate_preset: "Zinssatz",
        buyer_loan_type: "Kreditart",
        buyer_property_tax: "Grundsteuer ($/Jahr)",
        buyer_insurance: "Hausversicherung ($/Jahr)",
        buyer_hoa: "Eigentümerverband-Gebühren ($/Monat)",
        buyer_pmi_rate: "Kreditversicherungsrate (%)",
        buyer_closing_costs: "Abschlusskosten ($)",
        buyer_extra_payment: "Zusätzliche Monatszahlung ($)",
        buyer_escrow: "Steuern & Versicherung in Zahlung inkludieren (Treuhand)",
        custom_price: "Benutzerdefinierter Preis",
        custom_amount: "Benutzerdefinierter Betrag",
        custom_term: "Benutzerdefiniert",
        custom_rate: "Benutzerdefiniert",
        custom_term_label: "Benutzerdefinierte Laufzeit (Jahre)",
        custom_rate_label: "Benutzerdefinierter Zinssatz (%)",
        conventional: "Konventionell",
        fha: "FHA",
        va: "VA",
        usda: "USDA",
        arm: "Variable Verzinsung",
        default_closing_costs: "Standard: 3% des Hauspreises (typisch für die meisten Gebiete)",
        default_property_tax: "Standard: 0,82% des Hauswerts (nationaler Durchschnitt)",
        default_insurance: "Standard: Basierend auf $4.419/Jahr für ein $300K-Haus",
        years_30: "30 Jahre",
        years_20: "20 Jahre",
        years_15: "15 Jahre",
        years_10: "10 Jahre",
        months: "Monate",
        years: "Jahre",
        monthly_costs: "Monatliche Kosten",
        principal_interest: "Kapital & Zinsen",
        property_taxes: "Grundsteuer",
        homeowners_insurance: "Hausbesitzerversicherung",
        hoa_fees: "Gebühren der Eigentümergemeinschaft",
        mortgage_insurance_premium: "Hypothekenversicherungsprämie",
        private_mortgage_insurance: "Private Hypothekenversicherung",
        total_monthly_payment: "Monatliche Gesamtzahlung",
        with_extra_payment: "Mit Sondertilgung",
        loan_details: "Kreditdetails",
        loan_amount: "Kreditbetrag",
        loan_to_value_ratio: "Beleihungsverhältnis",
        total_interest: "Gesamtzinsen",
        loan_term_extra_payments: "Kreditlaufzeit mit Sondertilgungen",
        years_saved_extra_payments: "Eingesparte Jahre durch Sondertilgungen",
        upfront_costs: "Anfängliche Kosten",
        down_payment: "Anzahlung",
        closing_costs: "Abschlusskosten",
        total_upfront_costs: "Gesamte Vorabkosten",
        calculation_error: "Berechnungsfehler. Bitte versuchen Sie es erneut.",
        seller_price: "Verkaufspreis ($)",
        seller_balance: "Hypothekensaldo ($)",
        seller_commission: "Provision (%)",
        seller_closing: "Abschlusskosten ($)",
        seller_repairs: "Reparaturen ($)",
        investor_price: "Kaufpreis ($)",
        investor_down: "Anzahlung ($)",
        investor_term: "Laufzeit (Jahre)",
        investor_rate: "Zinssatz (%)",
        investor_rental: "Monatliche Mieteinnahmen ($)",
        investor_expenses: "Monatliche Ausgaben ($)",
        crypto_amount: "Betrag ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Berechnen",
        save_results: "Ergebnisse Speichern",
        share_results: "Ergebnisse Teilen",
        referral_link: "Einen Makler Finden",
        footer: "Unterstützt von Web3RealtorFL - Verbindung von Immobilien & Blockchain",
        invalid_input: "Bitte geben Sie gültige Daten ein."
    },
    ja: {
        title: "究極の不動産計算機",
        subtitle: "住宅ローン、売却、投資、または暗号通貨変換を計算",
        buyer: "購入者",
        seller: "販売者",
        investor: "投資家/エージェント",
        crypto: "暗号通貨",
        buyer_calc: "購入者計算機",
        seller_calc: "販売者計算機",
        investor_calc: "投資家/エージェント計算機",
        crypto_calc: "暗号通貨計算機",
        buyer_price: "住宅価格 ($)",
        buyer_price_range: "住宅価格範囲",
        buyer_down: "頭金 ($)",
        buyer_down_percent: "頭金率",
        buyer_term: "ローン期間 (年)",
        buyer_term_preset: "ローン期間",
        buyer_rate: "利率 (%)",
        buyer_rate_preset: "利率",
        buyer_loan_type: "ローンタイプ",
        buyer_property_tax: "固定資産税 ($/年)",
        buyer_insurance: "ホーム保険 ($/年)",
        buyer_hoa: "管理費 ($/月)",
        buyer_pmi_rate: "住宅ローン保険率 (%)",
        buyer_closing_costs: "クロージング費用 ($)",
        buyer_extra_payment: "追加月額支払い ($)",
        buyer_escrow: "税金と保険を支払いに含む (エスクロー)",
        custom_price: "カスタム価格",
        custom_amount: "カスタム金額",
        custom_term: "カスタム",
        custom_rate: "カスタム",
        custom_term_label: "カスタム期間 (年)",
        custom_rate_label: "カスタム利率 (%)",
        conventional: "常蔵ローン",
        fha: "FHAローン",
        va: "VAローン",
        usda: "USDAローン",
        arm: "変動金利ローン",
        default_closing_costs: "デフォルト：住宅価格の3％ (多くの地域で一般的)",
        default_property_tax: "デフォルト：住宅価格の0.82％ (全国平均)",
        default_insurance: "デフォルト：30万ドルの住宅で年間$4,419を基準",
        years_30: "30年",
        years_20: "20年",
        years_15: "15年",
        years_10: "10年",
        months: "ヶ月",
        years: "年",
        monthly_costs: "月額費用",
        principal_interest: "元本と利息",
        property_taxes: "固定資産税",
        homeowners_insurance: "住宅所有者保険",
        hoa_fees: "管理組合費",
        mortgage_insurance_premium: "住宅ローン保険料",
        private_mortgage_insurance: "個人住宅ローン保険",
        total_monthly_payment: "月額支払い総額",
        with_extra_payment: "繳済額追加",
        loan_details: "ローン詳細",
        loan_amount: "借入額",
        loan_to_value_ratio: "ローン対価値比率",
        total_interest: "総利息",
        loan_term_extra_payments: "追加支払いを含むローン期間",
        years_saved_extra_payments: "追加支払いによる節約年数",
        upfront_costs: "初期費用",
        down_payment: "頭金",
        closing_costs: "貱い付け費用",
        total_upfront_costs: "初期費用合計",
        calculation_error: "計算エラー。もう一度お試しください。",
        seller_price: "売却価格 ($)",
        seller_balance: "住宅ローン残高 ($)",
        seller_commission: "手数料 (%)",
        seller_closing: "クロージング費用 ($)",
        seller_repairs: "修繕費 ($)",
        investor_price: "購入価格 ($)",
        investor_down: "頭金 ($)",
        investor_term: "ローン期間 (年)",
        investor_rate: "利率 (%)",
        investor_rental: "月間賃貸収入 ($)",
        investor_expenses: "月間経費 ($)",
        crypto_amount: "金額 ($)",
        crypto_btc: "ビットコイン (BTC)",
        crypto_eth: "イーサリアム (ETH)",
        crypto_usdc: "USDC",
        calculate: "計算",
        save_results: "結果を保存",
        share_results: "結果を共有",
        referral_link: "エージェントを探す",
        footer: "Web3RealtorFL 提供 - 不動産とブロックチェーンを繋ぐ",
        invalid_input: "有効なデータを入力してください。"
    },
    sv: {
        title: "Ultimata Fastighetskalkylatorn",
        subtitle: "Beräkna ditt bolån, försäljning, investering eller kryptokonvertering",
        buyer: "Köpare",
        seller: "Säljare",
        investor: "Investerare/Agent",
        crypto: "Krypto",
        buyer_calc: "Köparräknare",
        seller_calc: "Säljarräknare",
        investor_calc: "Investerare/Agent-räknare",
        crypto_calc: "Kryptoräknare",
        buyer_price: "Bostadspris ($)",
        buyer_price_range: "Prisintervall",
        buyer_down: "Handpenning ($)",
        buyer_down_percent: "Handpenningsprocent",
        buyer_term: "Låneperiod (År)",
        buyer_term_preset: "Låneperiod",
        buyer_rate: "Ränta (%)",
        buyer_rate_preset: "Ränta",
        buyer_loan_type: "Lånetyp",
        buyer_property_tax: "Fastighetsskatt ($/år)",
        buyer_insurance: "Hemförsäkring ($/år)",
        buyer_hoa: "Samfällighetsavgift ($/månad)",
        buyer_pmi_rate: "Bolåneförsäkringsavgift (%)",
        buyer_closing_costs: "Avslutningskostnader ($)",
        buyer_extra_payment: "Extra Månatlig Betalning ($)",
        buyer_escrow: "Inkludera Skatter & Försäkring i Betalning (Deposition)",
        custom_price: "Anpassat Pris",
        custom_amount: "Anpassat Belopp",
        custom_term: "Anpassad",
        custom_rate: "Anpassad",
        custom_term_label: "Anpassad Period (År)",
        custom_rate_label: "Anpassad Ränta (%)",
        conventional: "Konventionell",
        fha: "FHA",
        va: "VA",
        usda: "USDA",
        arm: "Rörlig Ränta",
        default_closing_costs: "Standard: 3% av bostadens pris (typiskt för de flesta områden)",
        default_property_tax: "Standard: 0,82% av bostadens värde (nationellt genomsnitt)",
        default_insurance: "Standard: Baserat på $4,419/år för en bostad värd $300K",
        years_30: "30 År",
        years_20: "20 År",
        years_15: "15 År",
        years_10: "10 År",
        months: "månader",
        years: "år",
        monthly_costs: "Månatliga Kostnader",
        principal_interest: "Kapital & Ränta",
        property_taxes: "Fastighetsskatt",
        homeowners_insurance: "Hemförsäkring",
        hoa_fees: "Samfällighetsavgifter",
        mortgage_insurance_premium: "Bolåneförsäkringspremie",
        private_mortgage_insurance: "Privat Bolåneförsäkring",
        total_monthly_payment: "Total Månadsbetalning",
        with_extra_payment: "Med Extra Amortering",
        loan_details: "Lånedetaljer",
        loan_amount: "Lånebelopp",
        loan_to_value_ratio: "Belåningsgrad",
        total_interest: "Total Ränta",
        loan_term_extra_payments: "Lånetid med Extra Amorteringar",
        years_saved_extra_payments: "Besparade År med Extra Amorteringar",
        upfront_costs: "Initiala Kostnader",
        down_payment: "Kontantinsats",
        closing_costs: "Avslutningskostnader",
        total_upfront_costs: "Totala Initiala Kostnader",
        calculation_error: "Beräkningsfel. Försök igen.",
        seller_price: "Försäljningspris ($)",
        seller_balance: "Bolåneskuld ($)",
        seller_commission: "Provision (%)",
        seller_closing: "Avslutningskostnader ($)",
        seller_repairs: "Reparationer ($)",
        investor_price: "Inköpspris ($)",
        investor_down: "Kontantinsats ($)",
        investor_term: "Lånetid (År)",
        investor_rate: "Ränta (%)",
        investor_rental: "Månatlig Hyresintäkt ($)",
        investor_expenses: "Månatliga Utgifter ($)",
        crypto_amount: "Belopp ($)",
        crypto_btc: "Bitcoin (BTC)",
        crypto_eth: "Ethereum (ETH)",
        crypto_usdc: "USDC",
        calculate: "Beräkna",
        save_results: "Spara Resultat",
        share_results: "Dela Resultat",
        referral_link: "Hitta en Mäklare",
        footer: "Drivs av Web3RealtorFL - Överbryggar Fastigheter & Blockchain",
        invalid_input: "Ange giltiga data."
    },
    ko: {
        title: "궁극의 부동산 계산기",
        subtitle: "모기지, 매매, 투자 또는 암호화폐 변환 계산",
        buyer: "구매자",
        seller: "판매자",
        investor: "투자자/중개인",
        crypto: "암호화폐",
        buyer_calc: "구매자 계산기",
        seller_calc: "판매자 계산기",
        investor_calc: "투자자/중개인 계산기",
        crypto_calc: "암호화폐 계산기",
        buyer_price: "주택 가격 ($)",
        buyer_price_range: "주택 가격 범위",
        buyer_down: "계약금 ($)",
        buyer_down_percent: "계약금 비율",
        buyer_term: "대출 기간 (년)",
        buyer_term_preset: "대출 기간",
        buyer_rate: "이자율 (%)",
        buyer_rate_preset: "이자율",
        buyer_loan_type: "대출 유형",
        buyer_property_tax: "재산세 ($/년)",
        buyer_insurance: "주택 보험 ($/년)",
        buyer_hoa: "관리비 ($/월)",
        buyer_pmi_rate: "주택대출보험료 율 (%)",
        buyer_closing_costs: "마감 비용 ($)",
        buyer_extra_payment: "추가 월금 지불 ($)",
        buyer_escrow: "세금 및 보험료 포함 (에스크로)",
        custom_price: "직접 입력 가격",
        custom_amount: "직접 입력 금액",
        custom_term: "직접 입력",
        custom_rate: "직접 입력",
        custom_term_label: "직접 입력 기간 (년)",
        custom_rate_label: "직접 입력 이자율 (%)",
        conventional: "일반 대출",
        fha: "FHA 대출",
        va: "VA 대출",
        usda: "USDA 대출",
        arm: "변동금리 대출",
        default_closing_costs: "기본값: 주택 가격의 3% (대부분 지역의 표준)",
        default_property_tax: "기본값: 주택 가치의 0.82% (국가 평균)",
        default_insurance: "기본값: 30만 달러 주택의 경우 년간 $4,419 기준",
        years_30: "30년",
        years_20: "20년",
        years_15: "15년",
        years_10: "10년",
        months: "개월",
        years: "년",
        monthly_costs: "월간 비용",
        principal_interest: "원금 및 이자",
        property_taxes: "재산세",
        homeowners_insurance: "주택 소유자 보험",
        hoa_fees: "주택 소유자 협회 비용",
        mortgage_insurance_premium: "주택대출 보험료",
        private_mortgage_insurance: "사설 주택대출 보험",
        total_monthly_payment: "월간 총 지불액",
        with_extra_payment: "추가 지불 포함",
        loan_details: "대출 상세 정보",
        loan_amount: "대출 금액",
        loan_to_value_ratio: "대출대비가치 비율",
        total_interest: "총 이자",
        loan_term_extra_payments: "추가 지불이 포함된 대출 기간",
        years_saved_extra_payments: "추가 지불으로 절약된 년수",
        upfront_costs: "초기 비용",
        down_payment: "계약금",
        closing_costs: "마무리 비용",
        total_upfront_costs: "총 초기 비용",
        calculation_error: "계산 오류가 발생했습니다. 다시 시도해 주세요.",
        seller_price: "판매 가격 ($)",
        seller_balance: "모기지 잔액 ($)",
        seller_commission: "수수료 (%)",
        seller_closing: "마감 비용 ($)",
        seller_repairs: "수리비 ($)",
        investor_price: "구매 가격 ($)",
        investor_down: "계약금 ($)",
        investor_term: "대출 기간 (년)",
        investor_rate: "이자율 (%)",
        investor_rental: "월 임대 수입 ($)",
        investor_expenses: "월 지출 ($)",
        crypto_amount: "금액 ($)",
        crypto_btc: "비트코인 (BTC)",
        crypto_eth: "이더리움 (ETH)",
        crypto_usdc: "USDC",
        calculate: "계산하기",
        save_results: "결과 저장",
        share_results: "결과 공유",
        referral_link: "중개인 찾기",
        footer: "Web3RealtorFL 제공 - 부동산과 블록체인 연결",
        invalid_input: "유효한 데이터를 입력하십시오."
    }
};

// Function to force scroll to top - only used on page refresh, not calculation
function forceScrollToTop() {
    // Use multiple methods for maximum compatibility
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    // Add fragment identifier to URL and force navigation
    if (window.location.href.indexOf('#page-top') === -1) {
        window.location.href = '#page-top';
    }
    
    // If all else fails, try to reset the scroll position with a delay
    setTimeout(function() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, 100);
}

// Apply on page load
window.onload = function() {
    // Set to English language
    changeLanguage('en');
    
    // Force scroll to top
    forceScrollToTop();
};

// Use the more modern 'load' event as a backup
window.addEventListener('load', forceScrollToTop);

// Apply on DOMContentLoaded as well
document.addEventListener('DOMContentLoaded', forceScrollToTop);

// Handle form submission and refreshes
window.addEventListener('beforeunload', function() {
    // Store a flag to indicate we should scroll to top after reload
    sessionStorage.setItem('scrollToTop', 'true');
});

// Check if we need to scroll after a page refresh
if (sessionStorage.getItem('scrollToTop') === 'true') {
    // Remove the flag
    sessionStorage.removeItem('scrollToTop');
    // Force scroll with a slight delay
    setTimeout(forceScrollToTop, 0);
}

// Function to parse URL parameters and load calculator with saved values
function loadFromUrlParams() {
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.has('mode')) {
            const mode = params.get('mode');
            console.log('Loading calculator from shared link. Mode:', mode);
            
            // First, switch to the correct calculator mode/tab
            const tabLabels = document.querySelectorAll('.tab-label');
            tabLabels.forEach(tab => {
                if (tab.dataset.mode === mode) {
                    // Simulate click on the tab
                    tab.click();
                }
            });
            
            // Now populate the fields based on the mode
            switch(mode) {
                case 'buyer':
                    if (params.has('price')) document.getElementById('buyer-price').value = params.get('price');
                    if (params.has('down')) document.getElementById('buyer-down').value = params.get('down');
                    if (params.has('term')) {
                        const term = params.get('term');
                        const termPreset = document.getElementById('buyer-term-preset');
                        if (term === '30' || term === '20' || term === '15' || term === '10') {
                            termPreset.value = term;
                        } else {
                            termPreset.value = 'custom';
                            document.getElementById('buyer-term').value = term;
                            document.getElementById('buyer-term-custom-group').style.display = 'block';
                        }
                    }
                    if (params.has('rate')) {
                        const rate = params.get('rate');
                        const ratePreset = document.getElementById('buyer-rate-preset');
                        const standardRates = ['3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7'];
                        if (standardRates.includes(rate)) {
                            ratePreset.value = rate;
                        } else {
                            ratePreset.value = 'custom';
                            document.getElementById('buyer-rate').value = rate;
                            document.getElementById('buyer-rate-custom-group').style.display = 'block';
                        }
                    }
                    if (params.has('loanType')) document.getElementById('buyer-loan-type').value = params.get('loanType');
                    if (params.has('propertyTax')) document.getElementById('buyer-property-tax').value = params.get('propertyTax');
                    if (params.has('insurance')) document.getElementById('buyer-insurance').value = params.get('insurance');
                    if (params.has('hoaFees')) document.getElementById('buyer-hoa').value = params.get('hoaFees');
                    if (params.has('pmiRate')) document.getElementById('buyer-pmi-rate').value = params.get('pmiRate');
                    if (params.has('closingCosts')) document.getElementById('buyer-closing-costs').value = params.get('closingCosts');
                    if (params.has('extraPayment')) document.getElementById('buyer-extra-payment').value = params.get('extraPayment');
                    if (params.has('includeEscrow')) {
                        const includeEscrow = params.get('includeEscrow') === 'true';
                        document.getElementById('buyer-escrow').checked = includeEscrow;
                        if (includeEscrow) {
                            document.getElementById('escrow-fields').classList.add('active');
                        }
                    }
                    
                    // Trigger calculation
                    setTimeout(() => {
                        document.getElementById('buyer-calc').click();
                    }, 500);
                    break;
                    
                case 'seller':
                    if (params.has('price')) document.getElementById('seller-price').value = params.get('price');
                    if (params.has('balance')) document.getElementById('seller-balance').value = params.get('balance');
                    if (params.has('commission')) document.getElementById('seller-commission').value = params.get('commission');
                    if (params.has('closing')) document.getElementById('seller-closing').value = params.get('closing');
                    if (params.has('repairs')) document.getElementById('seller-repairs').value = params.get('repairs');
                    
                    // Trigger calculation
                    setTimeout(() => {
                        document.getElementById('seller-calc').click();
                    }, 500);
                    break;
                    
                case 'investor':
                    if (params.has('price')) document.getElementById('investor-price').value = params.get('price');
                    if (params.has('down')) document.getElementById('investor-down').value = params.get('down');
                    if (params.has('term')) document.getElementById('investor-term').value = params.get('term');
                    if (params.has('rate')) document.getElementById('investor-rate').value = params.get('rate');
                    if (params.has('rental')) document.getElementById('investor-rental').value = params.get('rental');
                    if (params.has('expenses')) document.getElementById('investor-expenses').value = params.get('expenses');
                    
                    // Trigger calculation
                    setTimeout(() => {
                        document.getElementById('investor-calc').click();
                    }, 500);
                    break;
                    
                case 'crypto':
                    if (params.has('amount')) document.getElementById('crypto-amount').value = params.get('amount');
                    if (params.has('from')) document.getElementById('crypto-from').value = params.get('from');
                    if (params.has('to')) document.getElementById('crypto-to').value = params.get('to');
                    
                    // Trigger calculation
                    setTimeout(() => {
                        document.getElementById('crypto-calc').click();
                    }, 500);
                    break;
            }
        }
    } catch (error) {
        console.error('Error loading from URL parameters:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('Initializing calculator...');
        
        // Check for URL parameters to load saved calculations
        loadFromUrlParams();
        
        // Initialize language settings
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        changeLanguage(savedLang);

        // Setup language dropdown
        const moreLanguagesDropdown = document.querySelector('.more-languages');
        const languageDropdown = document.querySelector('.language-dropdown');

        if (moreLanguagesDropdown && languageDropdown) {
            moreLanguagesDropdown.addEventListener('click', (e) => {
                e.preventDefault();
                languageDropdown.classList.toggle('active');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!moreLanguagesDropdown.contains(e.target) && languageDropdown.classList.contains('active')) {
                    languageDropdown.classList.remove('active');
                }
            });
        }

        // Initialize tab functionality
        const tabs = document.querySelectorAll('.tab-label');
        const modes = document.querySelectorAll('.calc-mode');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab-label').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.calc-mode').forEach(mode => mode.classList.remove('active'));
                
                tab.classList.add('active');
                const modeId = tab.getAttribute('data-mode');
                document.getElementById(`${modeId}-mode`).classList.add('active');
            });
        });

        // Initialize calculator buttons
        document.getElementById('buyer-calc')?.addEventListener('click', () => {
            calculateBuyer();
            // Scroll just slightly to show the beginning of results section
            const results = document.getElementById('buyer-result');
            if (results) {
                results.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        document.getElementById('seller-calc').addEventListener('click', () => {
            calculateSeller();
            // Scroll just slightly to show the beginning of results section
            const results = document.getElementById('seller-result');
            if (results) {
                results.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        document.getElementById('investor-calc')?.addEventListener('click', () => {
            calculateInvestor();
            // Scroll just slightly to show the beginning of results section
            const results = document.getElementById('investor-result');
            if (results) {
                results.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        document.getElementById('crypto-calc').addEventListener('click', () => {
            calculateCrypto();
            // Scroll just slightly to show the beginning of results section
            const results = document.getElementById('crypto-result');
            if (results) {
                results.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        document.getElementById('saveBtn').addEventListener('click', saveResults);
        document.getElementById('shareBtn').addEventListener('click', shareResults);
        
        // Initialize Buyer Calculator Enhanced Features
        initializeBuyerCalculator();
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

// Initialize all the enhanced buyer calculator features
function initializeBuyerCalculator() {
    // Price Range dropdown - now combined with input
    const priceRangeSelect = document.getElementById('buyer-price-range');
    const priceInput = document.getElementById('buyer-price');
    
    // Make sure input gets focus when clicking on combo input container
    const priceComboGroup = priceInput.closest('.combo-input-group');
    if (priceComboGroup) {
        priceComboGroup.addEventListener('click', function(e) {
            // Don't focus input if clicking on the select itself
            if (e.target !== priceRangeSelect) {
                priceInput.focus();
            }
        });
    }
    
    priceRangeSelect.addEventListener('change', function() {
        if (this.value === 'custom') {
            // Clear input to allow manual entry, and focus it
            priceInput.value = '';
            priceInput.focus();
        } else if (this.value === '2000001-plus') {
            priceInput.value = 2000001;
        } else {
            // Use the midpoint of the selected range
            const [min, max] = this.value.split('-').map(Number);
            priceInput.value = Math.round((min + max) / 2);
        }
        // Update down payment if percentage is selected
        updateDownPaymentFromPercent();
        // Update other default values based on home price
        updateDefaultValues();
    });
    
    // When price is manually entered, switch dropdown to 'custom'
    priceInput.addEventListener('input', function() {
        priceRangeSelect.value = 'custom';
        updateDefaultValues();
    });
    
    // Also update defaults when price is manually changed
    priceInput.addEventListener('change', updateDefaultValues);
    
    // Down Payment percentage dropdown - now combined with input
    const downPercentSelect = document.getElementById('buyer-down-percent');
    const downInput = document.getElementById('buyer-down');
    
    // Make sure input gets focus when clicking on combo input container
    const downComboGroup = downInput.closest('.combo-input-group');
    if (downComboGroup) {
        downComboGroup.addEventListener('click', function(e) {
            // Don't focus input if clicking on the select itself
            if (e.target !== downPercentSelect) {
                downInput.focus();
            }
        });
    }
    
    downPercentSelect.addEventListener('change', function() {
        if (this.value === 'custom') {
            // Clear input to allow manual entry, and focus it
            downInput.value = '';
            downInput.focus();
        } else {
            updateDownPaymentFromPercent();
        }
        // Also update PMI rate based on down payment percentage
        updatePMIRate();
    });
    
    function updateDownPaymentFromPercent() {
        const price = parseFloat(priceInput.value) || 0;
        if (downPercentSelect.value !== 'custom' && price > 0) {
            const percent = parseFloat(downPercentSelect.value);
            downInput.value = Math.round(price * (percent / 100));
        }
    }
    
    // Update down payment amount when price changes
    priceInput.addEventListener('input', updateDownPaymentFromPercent);
    
    // When down payment is manually entered, switch dropdown to 'custom'
    downInput.addEventListener('input', function() {
        downPercentSelect.value = 'custom';
        updatePMIRate();
    });
    
    // Update down payment when changed manually
    downInput.addEventListener('change', updatePMIRate);
    
    // Loan term dropdown
    const termPresetSelect = document.getElementById('buyer-term-preset');
    const termCustomGroup = document.getElementById('buyer-term-custom-group');
    const termInput = document.getElementById('buyer-term');
    
    termPresetSelect.addEventListener('change', function() {
        if (this.value === 'custom') {
            termCustomGroup.style.display = 'block';
        } else {
            termCustomGroup.style.display = 'none';
            termInput.value = this.value;
        }
    });
    
    // Interest rate dropdown
    const ratePresetSelect = document.getElementById('buyer-rate-preset');
    const rateCustomGroup = document.getElementById('buyer-rate-custom-group');
    const rateInput = document.getElementById('buyer-rate');
    
    ratePresetSelect.addEventListener('change', function() {
        if (this.value === 'custom') {
            rateCustomGroup.style.display = 'block';
        } else {
            rateCustomGroup.style.display = 'none';
            rateInput.value = this.value;
        }
    });
    
    // Loan type changes
    const loanTypeSelect = document.getElementById('buyer-loan-type');
    
    loanTypeSelect.addEventListener('change', function() {
        // Get the PMI input element
        const pmiRateInput = document.getElementById('buyer-pmi-rate');
        
        // Set default PMI rates based on loan type
        switch(this.value) {
            case 'fha':
                // FHA has upfront MIP of 1.75% and annual MIP of 0.55-1.05%
                pmiRateInput.value = '0.85';
                break;
            case 'va':
                // VA loans don't have PMI
                pmiRateInput.value = '0';
                break;
            case 'usda':
                // USDA has upfront guarantee fee of 1% and annual fee of 0.35%
                pmiRateInput.value = '0.35';
                break;
            case 'conventional':
                // Conventional PMI is typically 0.5-1% for good credit
                pmiRateInput.value = '0.5';
                break;
            case 'arm':
                // ARMs use conventional PMI
                pmiRateInput.value = '0.5';
                break;
        }
    });
    
    // Escrow checkbox toggle functionality
    const escrowCheckbox = document.getElementById('buyer-escrow');
    const escrowFields = document.getElementById('escrow-fields');
    
    // Function to toggle escrow fields visibility
    function toggleEscrowFields() {
        if (escrowCheckbox.checked) {
            escrowFields.classList.add('active');
        } else {
            escrowFields.classList.remove('active');
        }
    }
    
    // Add event listener to checkbox
    escrowCheckbox.addEventListener('change', toggleEscrowFields);
    
    // Set initial state based on checkbox
    toggleEscrowFields();
    
    // Get references to the elements for default calculations
    const propertyTaxInput = document.getElementById('buyer-property-tax');
    const insuranceInput = document.getElementById('buyer-insurance');
    const pmiRateInput = document.getElementById('buyer-pmi-rate');
    const closingCostsInput = document.getElementById('buyer-closing-costs');
    
    // Function to update property tax based on property value (0.82%)
    function updatePropertyTax() {
        const price = parseFloat(priceInput.value) || 0;
        // Always calculate the default value for property tax when price changes
        if (price > 0) {
            // Calculate property tax at 0.82% of home value
            const annualTax = Math.round(price * 0.0082);
            // Only set the value if it's empty or user hasn't manually changed it
            if (!propertyTaxInput.value || propertyTaxInput.dataset.auto === 'true') {
                propertyTaxInput.value = annualTax;
                propertyTaxInput.dataset.auto = 'true';
            }
        }
    }
    
    // Function to update homeowners insurance (scaled from $4,419/year for $300k value)
    function updateInsurance() {
        const price = parseFloat(priceInput.value) || 0;
        if (price > 0) {
            // Base rate of $4,419 for $300,000 home, scale proportionally
            const baseRate = 4419;
            const baseValue = 300000;
            const annualInsurance = Math.round(baseRate * (price / baseValue));
            // Only set the value if it's empty or user hasn't manually changed it
            if (!insuranceInput.value || insuranceInput.dataset.auto === 'true') {
                insuranceInput.value = annualInsurance;
                insuranceInput.dataset.auto = 'true';
            }
        }
    }
    
    // Function to update PMI rate based on down payment percentage
    function updatePMIRate() {
        const price = parseFloat(priceInput.value) || 0;
        const down = parseFloat(downInput.value) || 0;
        const loanType = document.getElementById('buyer-loan-type').value;
        const pmiRateInput = document.getElementById('buyer-pmi-rate');
        
        if (price > 0 && down > 0) {
            const downPaymentPercent = (down / price) * 100;
            
            // Only auto-set if user hasn't manually changed it from default
            if (pmiRateInput.dataset.auto === 'true' || !pmiRateInput.dataset.auto) {
                // VA loans don't have PMI
                if (loanType === 'va') {
                    pmiRateInput.value = '0';
                }
                // No PMI needed if down payment is 20% or more for conventional loans
                else if (downPaymentPercent >= 20 && (loanType === 'conventional' || loanType === 'arm')) {
                    pmiRateInput.value = '0';
                }
                // Default PMI rate is 0.5% for conventional loans with less than 20% down
                else if (loanType === 'conventional' || loanType === 'arm') {
                    pmiRateInput.value = '0.5';
                }
                // FHA has MIP regardless of down payment
                else if (loanType === 'fha') {
                    pmiRateInput.value = '0.85';
                }
                // USDA has annual fee
                else if (loanType === 'usda') {
                    pmiRateInput.value = '0.35';
                }
                
                pmiRateInput.dataset.auto = 'true';
            }
        }
    }
    
    // Function to update closing costs (default 3% of home price)
    function updateClosingCosts() {
        const price = parseFloat(priceInput.value) || 0;
        if (price > 0) {
            const closingCosts = Math.round(price * 0.03);
            // Only set the value if it's empty or user hasn't manually changed it
            if (!closingCostsInput.value || closingCostsInput.dataset.auto === 'true') {
                closingCostsInput.value = closingCosts;
                closingCostsInput.dataset.auto = 'true';
            }
        }
    }
    
    // Function to update all default values
    function updateDefaultValues() {
        updatePropertyTax();
        updateInsurance();
        updatePMIRate();
        updateClosingCosts();
    }
    
    // Initialize with default values if price is already set
    if (parseFloat(priceInput.value) > 0) {
        updateDefaultValues();
    }
    
    // Listen for user edits on fields that have automatic calculations
    propertyTaxInput.addEventListener('input', function() {
        // If user manually edits the field, mark it as non-auto
        this.dataset.auto = 'false';
    });
    
    insuranceInput.addEventListener('input', function() {
        // If user manually edits the field, mark it as non-auto
        this.dataset.auto = 'false';
    });
    
    closingCostsInput.addEventListener('input', function() {
        // If user manually edits the field, mark it as non-auto
        this.dataset.auto = 'false';
    });
    
    document.getElementById('buyer-pmi-rate').addEventListener('input', function() {
        // If user manually edits the field, mark it as non-auto
        this.dataset.auto = 'false';
    });
}

function changeLanguage(lang) {
    try {
        // Default to English if the requested language doesn't exist
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found, defaulting to English`);
            lang = 'en';
        }
        
        localStorage.setItem('selectedLanguage', lang);
        const elements = document.querySelectorAll('[data-lang]');
        
        // First pass: translate all elements
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            
            // Check if translation exists for this key
            if (!translations[lang][key]) {
                console.warn(`Missing translation for key '${key}' in language '${lang}', using English fallback`);
            }
            
            const translation = translations[lang][key] || translations['en'][key] || element.textContent;
            
            if (element.tagName === 'INPUT') {
                element.placeholder = translation;
            } else if (element.tagName === 'SELECT') {
                // Handle select element label
                element.setAttribute('data-translated', 'true');
                if (element.labels && element.labels.length > 0) {
                    element.labels[0].textContent = translation;
                }
                
                // Handle select options in a separate loop
                const options = element.querySelectorAll('option');
                options.forEach(option => {
                    const optionKey = option.getAttribute('data-lang');
                    if (optionKey) {
                        if (!translations[lang][optionKey] && translations['en'][optionKey]) {
                            option.textContent = translations['en'][optionKey];
                        } else if (translations[lang][optionKey]) {
                            option.textContent = translations[lang][optionKey];
                        }
                    }
                });
            } else {
                element.textContent = translation;
            }
        });
        
        // Update document title
        if (translations[lang].title) {
            document.title = translations[lang].title;
        }
        
        // Check if any calculation results are displayed and update them
        const buyerResult = document.getElementById('buyer-result');
        if (buyerResult && buyerResult.innerHTML.trim() !== '') {
            // Re-run the calculation to update language on results
            // Or re-render the last saved inputs
            const savedInputs = getSavedInputs('buyer');
            if (savedInputs) {
                renderBuyerResults(savedInputs);
            }
        }
        
        // Similarly check for other calculator results and update them
        const sellerResult = document.getElementById('seller-result');
        if (sellerResult && sellerResult.innerHTML.trim() !== '') {
            const savedInputs = getSavedInputs('seller');
            if (savedInputs) {
                renderSellerResults(savedInputs);
            }
        }
        
        const investorResult = document.getElementById('investor-result');
        if (investorResult && investorResult.innerHTML.trim() !== '') {
            const savedInputs = getSavedInputs('investor');
            if (savedInputs) {
                renderInvestorResults(savedInputs);
            }
        }
        
        console.log(`Language successfully changed to: ${lang}`);
    } catch (error) {
        console.error('Language change error:', error);
        alert('Error changing language. Defaulting to English.');
        // Attempt to recover by switching to English
        if (lang !== 'en') {
            changeLanguage('en');
        }
    }
}

function calculateBuyer() {
    try {
        // Get all input values
        const price = parseFloat(document.getElementById('buyer-price').value) || 0;
        const down = parseFloat(document.getElementById('buyer-down').value) || 0;
        const term = parseFloat(document.getElementById('buyer-term').value) || 0;
        const rate = parseFloat(document.getElementById('buyer-rate').value) || 0;
        const propertyTax = parseFloat(document.getElementById('buyer-property-tax').value) || 0;
        const insurance = parseFloat(document.getElementById('buyer-insurance').value) || 0;
        const hoaFees = parseFloat(document.getElementById('buyer-hoa').value) || 0;
        const pmiRate = parseFloat(document.getElementById('buyer-pmi-rate').value) || 0;
        const closingCosts = parseFloat(document.getElementById('buyer-closing-costs').value) || 0;
        const extraPayment = parseFloat(document.getElementById('buyer-extra-payment').value) || 0;
        const includeEscrow = document.getElementById('buyer-escrow').checked;
        const loanType = document.getElementById('buyer-loan-type').value;

        // Validate inputs
        if (price <= 0 || down < 0 || term <= 0 || rate <= 0) {
            document.getElementById('buyer-result').innerHTML = `<span class="error">${translations[localStorage.getItem('selectedLanguage') || 'en'].invalid_input}</span>`;
            return;
        }

        // Calculate basic mortgage details
        const loan = price - down;
        const monthlyRate = rate / 100 / 12;
        const months = term * 12;
        const principalInterest = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        
        // Calculate additional costs
        const monthlyPropertyTax = propertyTax / 12;
        const monthlyInsurance = insurance / 12;
        
        // Calculate PMI (if down payment < 20%)
        let monthlyPMI = 0;
        const ltv = (loan / price) * 100; // Loan-to-Value ratio
        
        // Apply PMI based on loan type and LTV
        if (loanType === 'conventional' || loanType === 'arm') {
            // Conventional loans only have PMI if LTV > 80%
            if (ltv > 80) {
                monthlyPMI = (loan * (pmiRate / 100)) / 12;
            }
        } else if (loanType === 'fha') {
            // FHA has MIP regardless of down payment (though it can be removed after hitting 78% LTV and 5+ years on 30yr loans)
            monthlyPMI = (loan * (pmiRate / 100)) / 12;
        } else if (loanType === 'usda' && pmiRate > 0) {
            // USDA has annual fee
            monthlyPMI = (loan * (pmiRate / 100)) / 12;
        }
        // VA loans don't have PMI (pmiRate should be 0)
        
        // Calculate monthly payment with or without escrow
        let baseMonthlyPayment = principalInterest;
        let totalMonthlyPayment = principalInterest;
        
        if (includeEscrow) {
            // Add taxes and insurance to monthly payment
            totalMonthlyPayment += monthlyPropertyTax + monthlyInsurance;
        }
        
        // Add HOA and PMI to both scenarios - these are separate from escrow
        totalMonthlyPayment += hoaFees + monthlyPMI;
        
        // Add extra payment (this affects amortization but not required monthly payment)
        const effectiveMonthlyPayment = totalMonthlyPayment + extraPayment;
        
        // Recalculate total interest and loan term with extra payments if applicable
        let totalInterest;
        let effectiveTermMonths;
        
        if (extraPayment > 0) {
            // Calculate how extra payments affect the loan term and interest
            let balance = loan;
            let interestPaid = 0;
            let monthsPaid = 0;
            
            while (balance > 0 && monthsPaid < months) {
                const interestForMonth = balance * monthlyRate;
                interestPaid += interestForMonth;
                
                let principalForMonth = principalInterest - interestForMonth;
                if (extraPayment > 0) {
                    principalForMonth += extraPayment;
                }
                
                balance -= principalForMonth;
                if (balance < 0) balance = 0;
                monthsPaid++;
            }
            
            totalInterest = interestPaid;
            effectiveTermMonths = monthsPaid;
        } else {
            // Standard calculation without extra payments
            totalInterest = (principalInterest * months) - loan;
            effectiveTermMonths = months;
        }
        
        // Calculate upfront costs
        const totalUpfrontCosts = down + closingCosts;
        
        // Format results
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        
        // Display comprehensive results
        const lang = localStorage.getItem('selectedLanguage') || 'en';
        document.getElementById('buyer-result').innerHTML = `
            <div class="result-section">
                <h4 data-lang="monthly_costs">${translations[lang].monthly_costs}</h4>
                <div class="result-row">
                    <span data-lang="principal_interest">${translations[lang].principal_interest}:</span>
                    <span>${formatter.format(principalInterest)}/mo</span>
                </div>
                <div class="result-row">
                    <span data-lang="property_taxes">${translations[lang].property_taxes}:</span>
                    <span>${formatter.format(monthlyPropertyTax)}/mo</span>
                </div>
                <div class="result-row">
                    <span data-lang="homeowners_insurance">${translations[lang].homeowners_insurance}:</span>
                    <span>${formatter.format(monthlyInsurance)}/mo</span>
                </div>
                ${hoaFees > 0 ? `
                <div class="result-row">
                    <span data-lang="hoa_fees">${translations[lang].hoa_fees}:</span>
                    <span>${formatter.format(hoaFees)}/mo</span>
                </div>` : ''}
                ${monthlyPMI > 0 ? `
                <div class="result-row">
                    <span data-lang="${loanType === 'fha' ? 'mortgage_insurance_premium' : 'private_mortgage_insurance'}">${loanType === 'fha' ? translations[lang].mortgage_insurance_premium : translations[lang].private_mortgage_insurance}:</span>
                    <span>${formatter.format(monthlyPMI)}/mo</span>
                </div>` : ''}
                <div class="result-row total">
                    <span data-lang="total_monthly_payment">${translations[lang].total_monthly_payment}:</span>
                    <span>${formatter.format(totalMonthlyPayment)}/mo</span>
                </div>
                ${extraPayment > 0 ? `
                <div class="result-row extra">
                    <span data-lang="with_extra_payment">${translations[lang].with_extra_payment}:</span>
                    <span>${formatter.format(effectiveMonthlyPayment)}/mo</span>
                </div>` : ''}
            </div>
            
            <div class="result-section">
                <h4 data-lang="loan_details">${translations[lang].loan_details}</h4>
                <div class="result-row">
                    <span data-lang="loan_amount">${translations[lang].loan_amount}:</span>
                    <span>${formatter.format(loan)}</span>
                </div>
                <div class="result-row">
                    <span data-lang="loan_to_value_ratio">${translations[lang].loan_to_value_ratio}:</span>
                    <span>${ltv.toFixed(1)}%</span>
                </div>
                <div class="result-row">
                    <span data-lang="total_interest">${translations[lang].total_interest}:</span>
                    <span>${formatter.format(totalInterest)}</span>
                </div>
                ${extraPayment > 0 ? `
                <div class="result-row highlight">
                    <span data-lang="loan_term_extra_payments">${translations[lang].loan_term_extra_payments}:</span>
                    <span>${Math.floor(effectiveTermMonths / 12)} ${translations[lang].years} ${effectiveTermMonths % 12} ${translations[lang].months || 'months'}</span>
                </div>
                <div class="result-row highlight">
                    <span data-lang="years_saved_extra_payments">${translations[lang].years_saved_extra_payments}:</span>
                    <span>${((months - effectiveTermMonths) / 12).toFixed(1)} ${translations[lang].years}</span>
                </div>` : ''}
            </div>
            
            <div class="result-section">
                <h4 data-lang="upfront_costs">${translations[lang].upfront_costs}</h4>
                <div class="result-row">
                    <span data-lang="down_payment">${translations[lang].down_payment}:</span>
                    <span>${formatter.format(down)} (${((down / price) * 100).toFixed(1)}%)</span>
                </div>
                <div class="result-row">
                    <span data-lang="closing_costs">${translations[lang].closing_costs}:</span>
                    <span>${formatter.format(closingCosts)}</span>
                </div>
                <div class="result-row total">
                    <span data-lang="total_upfront_costs">${translations[lang].total_upfront_costs}:</span>
                    <span>${formatter.format(totalUpfrontCosts)}</span>
                </div>
            </div>
            <button class="reset-btn" onclick="window.location.href = window.location.pathname;">Reset Calculator</button>
        `;
        
        // Save the inputs and results
        saveInputs('buyer', { 
            price, down, term, rate, propertyTax, insurance, hoaFees, pmiRate,
            closingCosts, extraPayment, includeEscrow, loanType,
            principalInterest, totalMonthlyPayment, totalInterest, ltv, totalUpfrontCosts
        });
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
let savedInputsByMode = {
    buyer: null,
    seller: null,
    investor: null,
    crypto: null
};

function saveInputs(mode, inputs) {
    lastInputs = { mode, ...inputs };
    savedInputsByMode[mode] = inputs;
}

function getSavedInputs(mode) {
    return savedInputsByMode[mode];
}

function renderBuyerResults(inputs) {
    if (!inputs) return;
    
    try {
        const lang = localStorage.getItem('selectedLanguage') || 'en';
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        
        // Only update the calculation result in the buyer section if it exists
        const buyerResult = document.getElementById('buyer-result');
        if (!buyerResult) return;
        
        // Extract values from inputs
        const {
            price, down, term, rate, propertyTax, insurance, hoaFees, pmiRate,
            closingCosts, extraPayment, includeEscrow, loanType,
            principalInterest, totalMonthlyPayment, totalInterest, ltv, totalUpfrontCosts,
            loan, monthlyPropertyTax, monthlyInsurance, monthlyPMI, months, effectiveTermMonths, effectiveMonthlyPayment
        } = inputs;
        
        // Display comprehensive results with appropriate language
        document.getElementById('buyer-result').innerHTML = `
            <div class="result-section">
                <h4 data-lang="monthly_costs">${translations[lang].monthly_costs}</h4>
                <div class="result-row">
                    <span data-lang="principal_interest">${translations[lang].principal_interest}:</span>
                    <span>${formatter.format(principalInterest)}/mo</span>
                </div>
                <div class="result-row">
                    <span data-lang="property_taxes">${translations[lang].property_taxes}:</span>
                    <span>${formatter.format(monthlyPropertyTax)}/mo</span>
                </div>
                <div class="result-row">
                    <span data-lang="homeowners_insurance">${translations[lang].homeowners_insurance}:</span>
                    <span>${formatter.format(monthlyInsurance)}/mo</span>
                </div>
                ${hoaFees > 0 ? `
                <div class="result-row">
                    <span data-lang="hoa_fees">${translations[lang].hoa_fees}:</span>
                    <span>${formatter.format(hoaFees)}/mo</span>
                </div>` : ''}
                ${monthlyPMI > 0 ? `
                <div class="result-row">
                    <span data-lang="${loanType === 'fha' ? 'mortgage_insurance_premium' : 'private_mortgage_insurance'}">${loanType === 'fha' ? translations[lang].mortgage_insurance_premium : translations[lang].private_mortgage_insurance}:</span>
                    <span>${formatter.format(monthlyPMI)}/mo</span>
                </div>` : ''}
                <div class="result-row total">
                    <span data-lang="total_monthly_payment">${translations[lang].total_monthly_payment}:</span>
                    <span>${formatter.format(totalMonthlyPayment)}/mo</span>
                </div>
                ${extraPayment > 0 ? `
                <div class="result-row extra">
                    <span data-lang="with_extra_payment">${translations[lang].with_extra_payment}:</span>
                    <span>${formatter.format(effectiveMonthlyPayment)}/mo</span>
                </div>` : ''}
            </div>
            
            <div class="result-section">
                <h4 data-lang="loan_details">${translations[lang].loan_details}</h4>
                <div class="result-row">
                    <span data-lang="loan_amount">${translations[lang].loan_amount}:</span>
                    <span>${formatter.format(loan)}</span>
                </div>
                <div class="result-row">
                    <span data-lang="loan_to_value_ratio">${translations[lang].loan_to_value_ratio}:</span>
                    <span>${ltv.toFixed(1)}%</span>
                </div>
                <div class="result-row">
                    <span data-lang="total_interest">${translations[lang].total_interest}:</span>
                    <span>${formatter.format(totalInterest)}</span>
                </div>
                ${extraPayment > 0 ? `
                <div class="result-row highlight">
                    <span data-lang="loan_term_extra_payments">${translations[lang].loan_term_extra_payments}:</span>
                    <span>${Math.floor(effectiveTermMonths / 12)} ${translations[lang].years} ${effectiveTermMonths % 12} ${translations[lang].months || 'months'}</span>
                </div>
                <div class="result-row highlight">
                    <span data-lang="years_saved_extra_payments">${translations[lang].years_saved_extra_payments}:</span>
                    <span>${((months - effectiveTermMonths) / 12).toFixed(1)} ${translations[lang].years}</span>
                </div>` : ''}
            </div>
            
            <div class="result-section">
                <h4 data-lang="upfront_costs">${translations[lang].upfront_costs}</h4>
                <div class="result-row">
                    <span data-lang="down_payment">${translations[lang].down_payment}:</span>
                    <span>${formatter.format(down)} (${((down / price) * 100).toFixed(1)}%)</span>
                </div>
                <div class="result-row">
                    <span data-lang="closing_costs">${translations[lang].closing_costs}:</span>
                    <span>${formatter.format(closingCosts)}</span>
                </div>
                <div class="result-row total">
                    <span data-lang="total_upfront_costs">${translations[lang].total_upfront_costs}:</span>
                    <span>${formatter.format(totalUpfrontCosts)}</span>
                </div>
            </div>
            <button class="reset-btn" onclick="window.location.href = window.location.pathname;">Reset Calculator</button>
        `;
    } catch (error) {
        console.error('Error rendering buyer results:', error);
    }
}

function renderSellerResults(inputs) {
    if (!inputs) return;
    
    try {
        const lang = localStorage.getItem('selectedLanguage') || 'en';
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        
        // Extract values from inputs
        const { price, balance, commission, closing, repairs, netProceeds, totalCosts } = inputs;
        
        // Only update the calculation result in the seller section if it exists
        const sellerResult = document.getElementById('seller-result');
        if (!sellerResult) return;
        
        // Display comprehensive results with appropriate language
        sellerResult.innerHTML = `
            <div class="result-section">
                <h4>${translations[lang].sale_summary || 'Sale Summary'}</h4>
                <div class="result-row">
                    <span>${translations[lang].sale_price || 'Sale Price'}:</span>
                    <span>${formatter.format(price)}</span>
                </div>
                <div class="result-row">
                    <span>${translations[lang].mortgage_balance || 'Mortgage Balance'}:</span>
                    <span>${formatter.format(balance)}</span>
                </div>
                <div class="result-row">
                    <span>${translations[lang].total_costs || 'Total Costs'}:</span>
                    <span>${formatter.format(totalCosts)}</span>
                </div>
                <div class="result-row total">
                    <span>${translations[lang].net_proceeds || 'Net Proceeds'}:</span>
                    <span>${formatter.format(netProceeds)}</span>
                </div>
            </div>
            <button class="reset-btn" onclick="window.location.href = window.location.pathname;">Reset Calculator</button>
            
            <div class="result-section">
                <h4>${translations[lang].cost_breakdown || 'Cost Breakdown'}</h4>
                <div class="result-row">
                    <span>${translations[lang].commission_amount || 'Commission'}:</span>
                    <span>${formatter.format(price * (commission / 100))} (${commission}%)</span>
                </div>
                <div class="result-row">
                    <span>${translations[lang].closing_costs || 'Closing Costs'}:</span>
                    <span>${formatter.format(closing)}</span>
                </div>
                <div class="result-row">
                    <span>${translations[lang].repair_costs || 'Repair Costs'}:</span>
                    <span>${formatter.format(repairs)}</span>
                </div>
            </div>
            <button class="reset-btn" onclick="window.location.href = window.location.pathname;">Reset Calculator</button>
        `;
    } catch (error) {
        console.error('Error rendering seller results:', error);
    }
}

function renderInvestorResults(inputs) {
    if (!inputs) return;
    
    try {
        const lang = localStorage.getItem('selectedLanguage') || 'en';
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        
        // Extract values from inputs
        const { price, down, term, rate, rental, expenses, cashFlow, capRate, cashOnCash } = inputs;
        
        // Only update the calculation result in the investor section if it exists
        const investorResult = document.getElementById('investor-result');
        if (!investorResult) return;
        
        // Display comprehensive results with appropriate language
        investorResult.innerHTML = `
            <div class="result-section">
                <h4>${translations[lang].investment_summary || 'Investment Summary'}</h4>
                <div class="result-row">
                    <span>${translations[lang].monthly_cash_flow || 'Monthly Cash Flow'}:</span>
                    <span>${formatter.format(cashFlow)}/mo</span>
                </div>
                <div class="result-row">
                    <span>${translations[lang].annual_cash_flow || 'Annual Cash Flow'}:</span>
                    <span>${formatter.format(cashFlow * 12)}/yr</span>
                </div>
                <div class="result-row">
                    <span>${translations[lang].cap_rate || 'Cap Rate'}:</span>
                    <span>${capRate.toFixed(2)}%</span>
                </div>
                <div class="result-row total">
                    <span>${translations[lang].cash_on_cash_return || 'Cash on Cash Return'}:</span>
                    <span>${cashOnCash.toFixed(2)}%</span>
                </div>
            </div>
            <button class="reset-btn" onclick="window.location.href = window.location.pathname;">Reset Calculator</button>
            
            <div class="result-section">
                <h4>${translations[lang].investment_details || 'Investment Details'}</h4>
                <div class="result-row">
                    <span>${translations[lang].purchase_price || 'Purchase Price'}:</span>
                    <span>${formatter.format(price)}</span>
                </div>
                <div class="result-row">
                    <span>${translations[lang].down_payment || 'Down Payment'}:</span>
                    <span>${formatter.format(down)} (${((down / price) * 100).toFixed(1)}%)</span>
                </div>
                <div class="result-row">
                    <span>${translations[lang].monthly_rental_income || 'Monthly Rental Income'}:</span>
                    <span>${formatter.format(rental)}/mo</span>
                </div>
                <div class="result-row">
                    <span>${translations[lang].monthly_expenses || 'Monthly Expenses'}:</span>
                    <span>${formatter.format(expenses)}/mo</span>
                </div>
            </div>
            <button class="reset-btn" onclick="window.location.href = window.location.pathname;">Reset Calculator</button>
        `;
    } catch (error) {
        console.error('Error rendering investor results:', error);
    }
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
        if (!lastInputs.mode) {
            alert('Please calculate results first before sharing.');
            return;
        }
        
        // Get the currently active calculator mode
        const mode = lastInputs.mode;
        const resultElement = document.getElementById(`${mode}-result`);
        if (!resultElement) return;
        
        // Get language and formatter
        const lang = localStorage.getItem('selectedLanguage') || 'en';
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        
        // Create a clean text version of the results
        let resultText = '===== Real Estate Calculator Results =====\n\n';
        
        // Add calculator type
        switch(mode) {
            case 'buyer':
                resultText += '🏠 BUYER CALCULATOR\n';
                resultText += `Home Price: ${formatter.format(lastInputs.price)}\n`;
                resultText += `Down Payment: ${formatter.format(lastInputs.down)}\n`;
                resultText += `Loan Amount: ${formatter.format(lastInputs.price - lastInputs.down)}\n`;
                resultText += `Interest Rate: ${lastInputs.rate}%\n`;
                resultText += `Loan Term: ${lastInputs.term} years\n\n`;
                resultText += `Monthly Payment: ${formatter.format(lastInputs.monthlyPayment)}/month\n`;
                if (lastInputs.taxes) resultText += `Property Taxes: ${formatter.format(lastInputs.taxes)}/month\n`;
                if (lastInputs.insurance) resultText += `Insurance: ${formatter.format(lastInputs.insurance)}/month\n`;
                if (lastInputs.hoa) resultText += `HOA: ${formatter.format(lastInputs.hoa)}/month\n`;
                if (lastInputs.pmi) resultText += `PMI: ${formatter.format(lastInputs.pmi)}/month\n`;
                if (lastInputs.totalMonthlyPayment) resultText += `Total Monthly Cost: ${formatter.format(lastInputs.totalMonthlyPayment)}/month\n`;
                break;
                
            case 'seller':
                resultText += '💰 SELLER CALCULATOR\n';
                resultText += `Sale Price: ${formatter.format(lastInputs.price)}\n`;
                resultText += `Mortgage Balance: ${formatter.format(lastInputs.balance)}\n`;
                resultText += `Commission: ${lastInputs.commission}%\n`;
                resultText += `Net Proceeds: ${formatter.format(lastInputs.netProceeds)}\n`;
                break;
                
            case 'investor':
                resultText += '📈 INVESTOR CALCULATOR\n';
                resultText += `Property Price: ${formatter.format(lastInputs.price)}\n`;
                resultText += `Monthly Rental Income: ${formatter.format(lastInputs.rental)}/month\n`;
                resultText += `Monthly Expenses: ${formatter.format(lastInputs.expenses)}/month\n`;
                resultText += `Cash Flow: ${formatter.format(lastInputs.cashFlow)}/month\n`;
                resultText += `Cap Rate: ${lastInputs.capRate}%\n`;
                resultText += `Cash on Cash Return: ${lastInputs.cashOnCash}%\n`;
                break;
                
            case 'crypto':
                resultText += '🪙 CRYPTO CALCULATOR\n';
                // Add crypto-specific details
                break;
        }
        
        resultText += '\n🌐 Generated by Web3 Real Estate Calculator\n';
        resultText += '🔗 https://tylerbelisle.kw.com/';
        
        // Create sharing options
        const shareOptions = document.createElement('div');
        shareOptions.className = 'share-options';
        shareOptions.innerHTML = `
            <div class="share-title">Share Results</div>
            <button id="copy-text" class="share-option">📋 Copy as Text</button>
            <button id="copy-link" class="share-option">🔗 Copy Link</button>
            <div class="share-divider">Or share directly</div>
            <div class="share-apps">
                <button id="share-email" class="share-app">📧 Email</button>
                <button id="share-sms" class="share-app">💬 SMS</button>
            </div>
            <button id="cancel-share" class="share-cancel">Cancel</button>
        `;
        
        // Add temporary styles
        const tempStyle = document.createElement('style');
        tempStyle.textContent = `
            .share-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(10, 25, 47, 0.8);
                backdrop-filter: blur(3px);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            .share-options {
                background: rgba(20, 35, 55, 0.95);
                border-radius: 12px;
                padding: 24px;
                width: 90%;
                max-width: 350px;
                display: flex;
                flex-direction: column;
                gap: 12px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 8px 32px rgba(0, 221, 235, 0.2);
                color: #fff;
            }
            .share-title {
                font-size: 1.2em;
                font-weight: 600;
                text-align: center;
                margin-bottom: 12px;
                color: #00ddeb;
                border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                padding-bottom: 10px;
            }
            .share-option, .share-app {
                padding: 14px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.08);
                cursor: pointer;
                font-size: 0.95em;
                transition: all 0.3s ease;
                text-align: left;
                color: #d5e1ef;
                font-weight: 500;
            }
            .share-option:hover, .share-app:hover {
                background: rgba(255, 255, 255, 0.12);
                border-color: rgba(255, 255, 255, 0.2);
                box-shadow: 0 4px 12px rgba(0, 221, 235, 0.15);
            }
            .share-divider {
                margin: 14px 0;
                text-align: center;
                color: rgba(255, 255, 255, 0.5);
                position: relative;
                font-size: 0.9em;
            }
            .share-divider:before, .share-divider:after {
                content: '';
                position: absolute;
                top: 50%;
                width: 40%;
                height: 1px;
                background: rgba(255, 255, 255, 0.15);
            }
            .share-divider:before {
                left: 0;
            }
            .share-divider:after {
                right: 0;
            }
            .share-apps {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
            }
            .share-cancel {
                padding: 14px;
                border: none;
                border-radius: 8px;
                background: linear-gradient(to right, #ff4f4f, #d63031);
                color: white;
                cursor: pointer;
                font-size: 1em;
                margin-top: 14px;
                font-weight: 500;
                transition: all 0.3s ease;
            }
            .share-cancel:hover {
                box-shadow: 0 4px 12px rgba(255, 79, 79, 0.3);
            }
            .toast-message {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(20, 35, 55, 0.9);
                color: #00ddeb;
                padding: 12px 24px;
                border-radius: 50px;
                z-index: 1001;
                opacity: 0;
                transition: opacity 0.3s;
                border: 1px solid rgba(0, 221, 235, 0.3);
                box-shadow: 0 4px 16px rgba(0, 221, 235, 0.2);
                font-weight: 500;
            }
        `;
        document.head.appendChild(tempStyle);
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'share-overlay';
        overlay.appendChild(shareOptions);
        document.body.appendChild(overlay);
        
        // Toast message function
        function showToast(message) {
            const toast = document.createElement('div');
            toast.className = 'toast-message';
            toast.textContent = message;
            document.body.appendChild(toast);
            
            // Show toast
            setTimeout(() => {
                toast.style.opacity = '1';
            }, 10);
            
            // Hide and remove toast
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 2000);
        }
        
        // Copy text to clipboard using a fallback approach
        document.getElementById('copy-text').addEventListener('click', () => {
            try {
                // Create a temporary textarea element
                const textArea = document.createElement('textarea');
                textArea.value = resultText;
                
                // Make the textarea out of viewport
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                
                // Select and copy
                textArea.focus();
                textArea.select();
                const successful = document.execCommand('copy');
                
                // Clean up
                document.body.removeChild(textArea);
                
                if (successful) {
                    showToast('Results copied to clipboard as text!');
                    console.log('Text copied successfully using fallback');
                } else {
                    throw new Error('Copy command failed');
                }
                
                document.body.removeChild(overlay);
                document.head.removeChild(tempStyle);
            } catch (error) {
                console.error('Error in copy text handler:', error);
                alert('Error copying text. We\'ll use a simpler approach.');
                
                // Show the text in a prompt for manual copy as last resort
                prompt('Copy the text below (Ctrl+C / Cmd+C):', resultText);
                document.body.removeChild(overlay);
                document.head.removeChild(tempStyle);
            }
        });
        
        // Copy link using a fallback approach
        document.getElementById('copy-link').addEventListener('click', () => {
            try {
                // Create URL with parameters
                const params = new URLSearchParams();
                params.set('mode', lastInputs.mode);
                for (const [key, value] of Object.entries(lastInputs)) {
                    if (key !== 'mode') {
                        params.set(key, value);
                    }
                }
                const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
                
                // Create a temporary input element
                const input = document.createElement('input');
                input.value = url;
                
                // Make the input out of viewport
                input.style.position = 'fixed';
                input.style.left = '-999999px';
                input.style.top = '-999999px';
                document.body.appendChild(input);
                
                // Select and copy
                input.focus();
                input.select();
                const successful = document.execCommand('copy');
                
                // Clean up
                document.body.removeChild(input);
                
                if (successful) {
                    showToast('Link copied to clipboard!');
                    console.log('Link copied successfully using fallback:', url);
                } else {
                    throw new Error('Copy command failed');
                }
                
                document.body.removeChild(overlay);
                document.head.removeChild(tempStyle);
            } catch (error) {
                console.error('Error in copy link handler:', error);
                
                // Show the URL in a prompt for manual copy as last resort
                const params = new URLSearchParams();
                params.set('mode', lastInputs.mode);
                for (const [key, value] of Object.entries(lastInputs)) {
                    if (key !== 'mode') {
                        params.set(key, value);
                    }
                }
                const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
                prompt('Copy this URL (Ctrl+C / Cmd+C):', url);
                document.body.removeChild(overlay);
                document.head.removeChild(tempStyle);
            }
        });
        
        // Share via Email
        document.getElementById('share-email').addEventListener('click', () => {
            const subject = 'Real Estate Calculator Results';
            const body = encodeURIComponent(resultText);
            window.open(`mailto:?subject=${subject}&body=${body}`);
            document.body.removeChild(overlay);
            document.head.removeChild(tempStyle);
        });
        
        
        // Share via SMS
        document.getElementById('share-sms').addEventListener('click', () => {
            const text = encodeURIComponent(resultText);
            window.open(`sms:?&body=${text}`);
            document.body.removeChild(overlay);
            document.head.removeChild(tempStyle);
        });
        
        // Cancel button
        document.getElementById('cancel-share').addEventListener('click', () => {
            document.body.removeChild(overlay);
            document.head.removeChild(tempStyle);
        });
        
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