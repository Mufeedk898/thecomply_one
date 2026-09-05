import { StartupServiceData } from "./startupServices";

export const PHASE4_SERVICES_DATA: Record<string, StartupServiceData> = {
  /* GST SERVICES */
  "gst-registration": {
    slug: "gst-registration",
    route: "/gst/registration",
    title: "GST Registration",
    subtitle: "Get professional assistance with your GST registration, documentation and 15-digit GSTIN allocation.",
    heroBadge: "Fast 3-5 Days GSTIN",
    turnaroundTime: "3 - 5 Working Days",
    rating: 4.9,
    reviewCount: 4820,
    overview: {
      whatIsTitle: "What is GST Registration?",
      whatIsContent: "Goods & Services Tax (GST) is a unified indirect tax levied on the supply of goods and services in India. GST Registration yields a unique 15-digit Goods and Services Tax Identification Number (GSTIN) issued by the CBIC.",
      whoShouldChooseTitle: "Who Needs GST Registration?",
      whoShouldChooseContent: "Mandatory for businesses with annual turnover exceeding ₹20 Lakhs (services) or ₹40 Lakhs (goods), e-commerce sellers, interstate suppliers, and casual taxable persons."
    },
    benefits: [
      { title: "Legal Tax Recognition", description: "Collect GST from customers and claim Input Tax Credit (ITC) on business purchases.", iconName: "ShieldCheck" },
      { title: "Interstate Expansion", description: "Sell goods & services across all Indian states without geographical restrictions.", iconName: "TrendingUp" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Document Upload", description: "Upload PAN, Aadhaar & premises proof on our secure portal." },
      { stepNumber: "02", title: "TRN Generation", description: "Filing REG-01 Part A to generate Temporary Reference Number." },
      { stepNumber: "03", title: "Aadhaar Authentication", description: "Instant OTP biometric authentication for fast approval." },
      { stepNumber: "04", title: "GSTIN Certificate", description: "Receiving 15-digit GSTIN Certificate with login credentials." }
    ],
    documentsRequired: [
      "PAN Card of Business / Proprietor / Directors",
      "Aadhaar Card of Applicant",
      "Proof of Registered Premises (Rent Agreement / Electricity Bill + NOC)",
      "Bank Account details & Cancelled Cheque"
    ],
    documentsDisclaimer: "Aadhaar OTP authentication enables approval in 3-5 days without physical inspection.",
    pricingTiers: [
      { name: "Standard GSTIN", priceTag: "Starting from ₹1,499", description: "Complete GST registration.", features: ["REG-01 Application Filing", "15-Digit GSTIN Allocation", "HSN Code Classification", "Dedicated Tax Expert"] }
    ],
    faqs: [
      { question: "How long does GST registration take?", answer: "With Aadhaar authentication, GST approval usually arrives within 3 to 5 business days." }
    ],
    seoTitle: "GST Registration Online in India | 15-Digit GSTIN | The Comply One",
    seoDescription: "Get GST Registration online in 3-5 days. Dedicated CA assistance, HSN mapping, Aadhaar OTP authentication & 100% approval."
  },

  "gst-return-filing": {
    slug: "gst-return-filing",
    route: "/gst/return-filing",
    title: "GST Return Filing",
    subtitle: "Monthly & quarterly GSTR-1, GSTR-3B filings, ITC reconciliation, and zero late-fee guarantee.",
    heroBadge: "100% ITC Reconciliation",
    turnaroundTime: "Monthly Maintenance",
    rating: 4.9,
    reviewCount: 3920,
    overview: {
      whatIsTitle: "What is GST Return Filing?",
      whatIsContent: "Registered GST taxpayers must file periodic returns (GSTR-1 for outward sales and GSTR-3B for tax liability summary) reporting sales, purchases, and tax collected. Proper filing ensures Input Tax Credit (ITC) is passed on to buyers.",
      whoShouldChooseTitle: "Who Needs to File?",
      whoShouldChooseContent: "Every registered GSTIN holder, including regular taxpayers, QRMP taxpayers, and composition dealers."
    },
    benefits: [
      { title: "Maximized ITC Claim", description: "Reconcile purchase invoices with GSTR-2B so you never lose eligible Input Tax Credit.", iconName: "TrendingUp" },
      { title: "Zero Late-Fee Assurance", description: "Timely reminders and automated CA filing to avoid daily late fee penalties.", iconName: "ShieldCheck" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Sales & Purchase Sheet", description: "Upload monthly invoice data on portal." },
      { stepNumber: "02", title: "ITC Matching", description: "CA reconciliation against GSTR-2A/2B." },
      { stepNumber: "03", title: "Return Filing", description: "Filing GSTR-1 & GSTR-3B with ARN receipt delivery." }
    ],
    documentsRequired: ["Sales invoice summary", "Purchase invoices / GSTR-2B data", "Bank statement"],
    documentsDisclaimer: "Nil returns must still be filed to prevent late fees of ₹20-₹50 per day.",
    pricingTiers: [
      { name: "Monthly Filing Plan", priceTag: "Starting from ₹999", description: "Monthly GSTR-1 & 3B filing.", features: ["GSTR-1 & 3B Monthly Filing", "GSTR-2B ITC Matching", "Tax Challan Generation"] }
    ],
    faqs: [
      { question: "What happens if I file GST return late?", answer: "Late fees accrue at ₹20 per day (for Nil returns) or ₹50 per day (for tax payable returns) plus 18% p.a. interest." }
    ],
    seoTitle: "Monthly GST Return Filing Services (GSTR-1 & 3B) | The Comply One",
    seoDescription: "CA-assisted monthly & quarterly GST return filing (GSTR-1 & GSTR-3B) with 100% ITC reconciliation & zero late fee guarantee."
  },

  "gst-lut-filing": {
    slug: "gst-lut-filing",
    route: "/gst/lut-filing",
    title: "GST LUT Filing",
    subtitle: "Export goods & services without paying IGST upfront under Letter of Undertaking (Form GST RFD-11).",
    heroBadge: "Zero-Rated Export Filing",
    turnaroundTime: "1 - 2 Working Days",
    rating: 4.8,
    reviewCount: 1840,
    overview: {
      whatIsTitle: "What is GST LUT Filing?",
      whatIsContent: "Letter of Undertaking (LUT) in Form GST RFD-11 allows registered exporters to export goods or services without paying IGST upfront, preserving working capital.",
      whoShouldChooseTitle: "Who Should File LUT?",
      whoShouldChooseContent: "Exporters of goods, IT software services, freelancers, consultants, and SEZ suppliers."
    },
    benefits: [
      { title: "Preserve Capital", description: "No cash blocked in IGST payments and refund claim waiting periods.", iconName: "TrendingUp" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Witness & Bank Details", description: "Provide 2 witness details & bank account." },
      { stepNumber: "02", title: "RFD-11 E-Filing", description: "Filing LUT on GST portal for current FY." },
      { stepNumber: "03", title: "LUT Acknowledgment", description: "Instant generation of official LUT ARN receipt." }
    ],
    documentsRequired: ["GSTIN Login credentials", "Details of 2 Independent Witnesses", "IEC Code (for goods exporters)"],
    documentsDisclaimer: "LUT must be renewed at the beginning of every financial year (April 1st).",
    pricingTiers: [{ name: "LUT Annual Filing", priceTag: "Starting from ₹1,499", description: "Complete annual LUT filing.", features: ["Form GST RFD-11 E-Filing", "Official ARN Delivery", "Export Invoicing Guidance"] }],
    faqs: [{ question: "How long is a GST LUT valid?", answer: "A Letter of Undertaking (LUT) is valid for one financial year and must be re-filed every April." }],
    seoTitle: "GST LUT Filing Online (Form RFD-11) | Export Without IGST | The Comply One",
    seoDescription: "File GST Letter of Undertaking (LUT) online in 1-2 days. Export goods & IT services without paying IGST upfront."
  },

  "gst-cancellation": {
    slug: "gst-cancellation",
    route: "/gst/cancellation",
    title: "GST Cancellation",
    subtitle: "Legally surrender unneeded or dormant GSTIN registrations through Form GST REG-16.",
    heroBadge: "Formal GSTIN Surrender",
    turnaroundTime: "3 - 5 Working Days",
    rating: 4.8,
    reviewCount: 1240,
    overview: {
      whatIsTitle: "What is GST Cancellation?",
      whatIsContent: "GST Cancellation is the process of surrendering an active GSTIN when business operations cease, turnover drops below threshold, or entity structure changes.",
      whoShouldChooseTitle: "When to Cancel?",
      whoShouldChooseContent: "When closing business, changing entity structure, or surrendering duplicate GSTIN."
    },
    benefits: [{ title: "Stop Compliance Burdens", description: "Eliminate monthly return obligations and potential late fee penalties.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Final Return Check", description: "Clearing pending GSTR-3B filings." },
      { stepNumber: "02", title: "REG-16 Submission", description: "Filing cancellation application on portal." },
      { stepNumber: "03", title: "Officer Approval", description: "GST officer issues cancellation order (REG-19)." }
    ],
    documentsRequired: ["GSTIN Login credentials", "Closing stock valuation details", "Reason for cancellation"],
    documentsDisclaimer: "Final return (GSTR-10) must be filed within 3 months of cancellation order.",
    pricingTiers: [{ name: "Standard Cancellation", priceTag: "Starting from ₹1,999", description: "Form REG-16 filing.", features: ["REG-16 Surrender Filing", "Officer Query Response", "GSTR-10 Guidance"] }],
    faqs: [{ question: "What is GSTR-10 Final Return?", answer: "GSTR-10 is the final return that must be filed within 3 months of GST cancellation approval." }],
    seoTitle: "GST Cancellation Online (Form REG-16) | The Comply One",
    seoDescription: "Cancel or surrender your GSTIN online. Professional REG-16 filing & officer query resolution to stop monthly return compliance."
  },

  "gst-revocation": {
    slug: "gst-revocation",
    route: "/gst/revocation",
    title: "GST Revocation",
    subtitle: "Revoke cancelled GSTIN registrations & clear pending returns via Form GST REG-21.",
    heroBadge: "GSTIN Reactivation",
    turnaroundTime: "5 - 7 Working Days",
    rating: 4.8,
    reviewCount: 1120,
    overview: {
      whatIsTitle: "What is GST Revocation?",
      whatIsContent: "If a GST registration was cancelled suo-moto by a GST officer due to non-filing of returns, the taxpayer can apply for revocation of cancellation under Form GST REG-21 after clearing pending returns.",
      whoShouldChooseTitle: "Who Needs Revocation?",
      whoShouldChooseContent: "Taxpayers whose GSTIN was cancelled by tax authorities for missing 6+ months of filings."
    },
    benefits: [{ title: "Restore Original GSTIN", description: "Reactivate your original 15-digit GSTIN without re-applying for a new registration.", iconName: "TrendingUp" }],
    processSteps: [
      { stepNumber: "01", title: "Clear Pending Filings", description: "File all pending GSTR-1 & 3B returns." },
      { stepNumber: "02", title: "Pay Outstanding Fees", description: "Pay outstanding tax & late fees." },
      { stepNumber: "03", title: "Submit Form REG-21", description: "Submit Form REG-21 revocation application." }
    ],
    documentsRequired: ["Pending return data", "Challan payments for tax/late fee", "REG-21 application details"],
    documentsDisclaimer: "Revocation application must be filed within 90 days of cancellation order.",
    pricingTiers: [{ name: "Revocation Package", priceTag: "Starting from ₹3,499", description: "Complete GSTIN reactivation.", features: ["Pending Return Audit", "Form REG-21 Filing", "Officer Follow-up"] }],
    faqs: [{ question: "Can a cancelled GSTIN be reactivated?", answer: "Yes, by filing Form GST REG-21 within the prescribed timeframe after clearing all pending returns and tax dues." }],
    seoTitle: "GST Revocation of Cancellation (Form REG-21) | The Comply One",
    seoDescription: "Revoke cancelled GSTIN online. Complete REG-21 application filing, pending return clearance & officer query assistance."
  },

  "gst-amendment": {
    slug: "gst-amendment",
    route: "/gst/amendment",
    title: "GST Amendment",
    subtitle: "Update core & non-core GST details (business address, bank account, partners, directors).",
    heroBadge: "Core & Non-Core Updates",
    turnaroundTime: "2 - 4 Working Days",
    rating: 4.8,
    reviewCount: 1450,
    overview: {
      whatIsTitle: "What is GST Amendment?",
      whatIsContent: "GST Amendment allows taxpayers to update their registered business information on the GST portal. Core amendments (name, address, partners) require officer approval, while non-core amendments (email, bank) update instantly.",
      whoShouldChooseTitle: "When to Amend?",
      whoShouldChooseContent: "When changing business address, adding bank accounts, updating partners/directors, or changing contact details."
    },
    benefits: [{ title: "Maintain Accurate Records", description: "Keep GST portal records synchronized with bank and premises proofs.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Select Field Category", description: "Select core / non-core field to update." },
      { stepNumber: "02", title: "Upload Proofs", description: "Upload supporting documents." },
      { stepNumber: "03", title: "File REG-14", description: "File Form REG-14 with DSC/OTP." }
    ],
    documentsRequired: ["Proof of new address / bank account", "Board resolution / Partner consent", "GSTIN credentials"],
    documentsDisclaimer: "Core amendments require approval from state/central GST officer within 15 days.",
    pricingTiers: [{ name: "Amendment Service", priceTag: "Starting from ₹1,499", description: "Form REG-14 filing.", features: ["Core/Non-Core REG-14 Filing", "Officer Query Reply", "Updated Certificate Delivery"] }],
    faqs: [{ question: "What are Core Amendments in GST?", answer: "Core amendments include change of business name, principal address, or addition/deletion of partners/directors." }],
    seoTitle: "GST Amendment Online (Form REG-14) | Address & Bank Update | The Comply One",
    seoDescription: "Amend GSTIN details online. Update core & non-core business address, bank accounts, contact details & partners/directors."
  },

  "gst-annual-return": {
    slug: "gst-annual-return",
    route: "/gst/annual-return",
    title: "GST Annual Return (GSTR-9 & 9C)",
    subtitle: "Year-end annual return filing & GSTR-9C reconciliation statement by expert CAs.",
    heroBadge: "GSTR-9 & 9C Audit",
    turnaroundTime: "5 - 7 Working Days",
    rating: 4.9,
    reviewCount: 2150,
    overview: {
      whatIsTitle: "What is GST Annual Return?",
      whatIsContent: "GSTR-9 is an annual return filed by all registered GST taxpayers consolidating monthly/quarterly GSTR-1 & 3B filings. Taxpayers with turnover > ₹5 Crores must also file GSTR-9C reconciliation statement.",
      whoShouldChooseTitle: "Who Needs GSTR-9?",
      whoShouldChooseContent: "All regular GST taxpayers registered during the financial year."
    },
    benefits: [{ title: "Avoid Severe Penalties", description: "Avoid daily late fees of ₹200 per day for missed GSTR-9 annual deadlines.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Data Consolidation", description: "Annual sales/purchase data consolidation." },
      { stepNumber: "02", title: "Reconciliation Audit", description: "Reconciling GSTR-3B vs GSTR-1 vs GSTR-2B." },
      { stepNumber: "03", title: "GSTR-9 Filing", description: "GSTR-9 & 9C drafting & filing." }
    ],
    documentsRequired: ["Audited Financial Statements", "Monthly GSTR-1 & 3B summary", "GSTR-2B ITC sheets"],
    documentsDisclaimer: "Due date is 31st December following the end of the financial year.",
    pricingTiers: [{ name: "Annual GSTR-9 Filing", priceTag: "Starting from ₹4,999", description: "GSTR-9 annual return.", features: ["Annual Data Reconciliation", "GSTR-9 Filing", "GSTR-9C Reconciliation Statement"] }],
    faqs: [{ question: "Who is exempt from GSTR-9?", answer: "Taxpayers with aggregate turnover up to ₹2 Crores are currently exempt from filing GSTR-9." }],
    seoTitle: "GST Annual Return Filing (GSTR-9 & GSTR-9C) | The Comply One",
    seoDescription: "CA-assisted GSTR-9 annual return & GSTR-9C reconciliation statement filing. Annual ITC matching & audit compliance."
  },

  "gst-compliance": {
    slug: "gst-compliance",
    route: "/gst/compliance",
    title: "GST Compliance Retainer",
    subtitle: "Full-year GST compliance retainer, monthly return filings, notice management & ITC protection.",
    heroBadge: "Full-Year Retainer",
    turnaroundTime: "Annual Retainer",
    rating: 4.9,
    reviewCount: 2640,
    overview: {
      whatIsTitle: "What is GST Compliance Retainer?",
      whatIsContent: "Our GST Compliance Retainer provides complete end-to-end management of monthly GSTR-1/3B filings, ITC matching, GSTR-2B reconciliation, notice responses, and annual GSTR-9 filings.",
      whoShouldChooseTitle: "Who Needs Retainer?",
      whoShouldChooseContent: "Growing businesses, startups, and companies that want to outsource GST management to expert CAs."
    },
    benefits: [{ title: "Complete CA Retainer", description: "Dedicated CA manager handling all monthly, quarterly, and annual GST obligations.", iconName: "Award" }],
    processSteps: [
      { stepNumber: "01", title: "Monthly Data Collection", description: "Monthly data collection." },
      { stepNumber: "02", title: "ITC Matching", description: "GSTR-2B ITC matching." },
      { stepNumber: "03", title: "Return & Notice Support", description: "Return filing & notice handling." }
    ],
    documentsRequired: ["Monthly sales & purchase registers", "GST portal login credentials"],
    documentsDisclaimer: "Covers 12 months of GSTR-1, GSTR-3B, and annual GSTR-9 advisory.",
    pricingTiers: [{ name: "Annual Retainer", priceTag: "Starting from ₹11,999", description: "12-month full GST retainer.", features: ["12 Months GSTR-1 & 3B Filings", "100% GSTR-2B ITC Matching", "GST Notice Response Support", "Annual GSTR-9 Filing"] }],
    faqs: [{ question: "Why hire a GST retainer?", answer: "Outsourcing GST compliance ensures zero missed deadlines, maximum ITC claims, and professional response to tax notices." }],
    seoTitle: "GST Annual Compliance Retainer Services | The Comply One",
    seoDescription: "Full-year GST compliance retainer. Includes 12 months GSTR-1/3B filings, ITC reconciliation, notice response & GSTR-9 filing."
  },

  "gst-e-invoicing": {
    slug: "gst-e-invoicing",
    route: "/gst/e-invoicing",
    title: "GST E-Invoicing",
    subtitle: "B2B electronic invoice generation & Invoice Registration Portal (IRP) integration assistance.",
    heroBadge: "IRN & QR Code Setup",
    turnaroundTime: "1 - 3 Working Days",
    rating: 4.8,
    reviewCount: 1620,
    overview: {
      whatIsTitle: "What is GST E-Invoicing?",
      whatIsContent: "E-invoicing requires businesses to upload B2B invoices to the Invoice Registration Portal (IRP) for electronic authentication, generating a unique Invoice Reference Number (IRN) and QR Code.",
      whoShouldChooseTitle: "Who Needs E-Invoicing?",
      whoShouldChooseContent: "Mandatory for businesses with aggregate turnover exceeding ₹5 Crores in any preceding financial year."
    },
    benefits: [{ title: "Automated GSTR-1 Pre-fill", description: "E-invoices automatically pre-populate GSTR-1 and E-Way bill portals.", iconName: "TrendingUp" }],
    processSteps: [
      { stepNumber: "01", title: "Applicability Check", description: "Check turnover applicability." },
      { stepNumber: "02", title: "IRP Enablement", description: "Enable IRP portal login." },
      { stepNumber: "03", title: "API Configuration", description: "Configure ERP / API integration." }
    ],
    documentsRequired: ["GSTIN credentials", "Sample B2B sales invoices", "ERP software details"],
    documentsDisclaimer: "Mandatory for B2B sales invoices for turnover > ₹5 Crores.",
    pricingTiers: [{ name: "E-Invoicing Setup", priceTag: "Starting from ₹2,999", description: "IRP portal setup & API assistance.", features: ["IRP Portal Enablement", "IRN & QR Code Generation Setup", "GSTR-1 Auto-sync Guidance"] }],
    faqs: [{ question: "Is e-invoicing mandatory for B2C sales?", answer: "No, e-invoicing is currently mandatory only for B2B sales and export invoices." }],
    seoTitle: "GST E-Invoicing Setup Online (IRN & QR Code) | The Comply One",
    seoDescription: "Configure GST E-Invoicing online. IRP portal enablement, IRN number & QR Code setup for businesses with turnover > ₹5Cr."
  },

  "gst-e-way-bill": {
    slug: "gst-e-way-bill",
    route: "/gst/e-way-bill",
    title: "GST E-Way Bill Services",
    subtitle: "E-Way bill generation & portal registration for goods movement exceeding ₹50,000.",
    heroBadge: "Transport Goods Movement",
    turnaroundTime: "1 - 2 Working Days",
    rating: 4.8,
    reviewCount: 1380,
    overview: {
      whatIsTitle: "What is an E-Way Bill?",
      whatIsContent: "An E-Way Bill is an electronic document generated on the E-Way Bill portal for movement of goods worth more than ₹50,000. It contains details of goods, consignor, consignee, and transporter.",
      whoShouldChooseTitle: "When is E-Way Bill Required?",
      whoShouldChooseContent: "Required for manufacturers, traders, and transporters moving goods inter-state or intra-state."
    },
    benefits: [{ title: "Smooth Goods Transit", description: "Prevents vehicle detention and heavy fines during transit checks.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Portal Registration", description: "E-Way portal registration." },
      { stepNumber: "02", title: "Details Input", description: "Enter invoice & vehicle details." },
      { stepNumber: "03", title: "E-Way Bill Generation", description: "Generate E-Way Bill with validity." }
    ],
    documentsRequired: ["Tax Invoice / Bill of Supply", "Transporter ID / Vehicle Number", "GSTIN credentials"],
    documentsDisclaimer: "E-way bill validity depends on distance (100 km per day for normal cargo).",
    pricingTiers: [{ name: "E-Way Bill Setup", priceTag: "Starting from ₹1,499", description: "Portal setup & user training.", features: ["E-Way Bill Portal Registration", "Transporter Mapping", "Bulk E-Way Bill Generation Training"] }],
    faqs: [{ question: "What is the threshold for E-Way Bill?", answer: "An E-Way Bill is mandatory for movement of goods having a consignment value exceeding ₹50,000." }],
    seoTitle: "GST E-Way Bill Portal Registration & Generation | The Comply One",
    seoDescription: "Register and generate GST E-Way Bills online. Smooth transit documentation & transporter mapping for goods movement > ₹50,000."
  },

  /* INCOME TAX SERVICES */
  "income-tax-return-filing": {
    slug: "income-tax-return-filing",
    route: "/income-tax/return-filing",
    title: "Income Tax Return (ITR) Filing",
    subtitle: "Complete ITR filing for individuals, salaried employees, freelancers, directors, and businesses.",
    heroBadge: "Expert CA Tax Optimization",
    turnaroundTime: "2 - 4 Working Days",
    rating: 4.9,
    reviewCount: 5120,
    overview: {
      whatIsTitle: "What is Income Tax Return Filing?",
      whatIsContent: "Income Tax Return (ITR) is a formal declaration filed with the Income Tax Department reporting total income, deductions, and tax paid during a financial year.",
      whoShouldChooseTitle: "Who Needs to File ITR?",
      whoShouldChooseContent: "Mandatory for individuals with income exceeding basic exemption limit (₹2.5L / ₹3L / ₹7L under new tax regime), company directors, business owners, and those claiming tax refunds."
    },
    benefits: [{ title: "Maximum Tax Savings", description: "Expert CA guidance to claim all eligible deductions under 80C, 80D, 80TTA & business expenses.", iconName: "TrendingUp" }],
    processSteps: [
      { stepNumber: "01", title: "Data Upload", description: "Data upload (Form 16 / AIS / 26AS)." },
      { stepNumber: "02", title: "Tax Computation", description: "Computation of Total Income." },
      { stepNumber: "03", title: "E-Filing & Verification", description: "E-Filing & e-Verification." }
    ],
    documentsRequired: ["Form 16 / Salary Slips", "Form 26AS & AIS/TIS summary", "Bank Account statements", "Capital Gains statement if any"],
    documentsDisclaimer: "Due date is 31st July for non-audit cases and 31st October for audit cases.",
    pricingTiers: [{ name: "Individual ITR", priceTag: "Starting from ₹999", description: "Salary & Single House Property.", features: ["Form 16 & AIS Review", "Tax Regime Optimization", "ITR-1 / ITR-2 Filing", "E-Verification Support"], recommended: true }],
    faqs: [{ question: "Which tax regime should I choose?", answer: "Our CAs perform a dual-regime comparison (Old vs New) to select the option offering maximum tax savings." }],
    seoTitle: "Income Tax Return (ITR) Filing Online India | The Comply One",
    seoDescription: "File Income Tax Return (ITR-1 to ITR-6) online with expert CAs. Form 16, AIS/TIS reconciliation, dual-regime comparison & max tax refund."
  },

  "income-tax-individual-return": {
    slug: "income-tax-individual-return",
    route: "/income-tax/individual-return",
    title: "ITR Filing for Individuals & Directors",
    subtitle: "ITR-1 and ITR-2 filing for salaried employees, company directors, freelancers, and HNIs.",
    heroBadge: "Individual & HNI Tax",
    turnaroundTime: "1 - 3 Working Days",
    rating: 4.9,
    reviewCount: 3420,
    overview: {
      whatIsTitle: "What is Individual ITR Filing?",
      whatIsContent: "Specialized tax return filing for individuals earning income from salary, house property, capital gains (stocks/crypto/real estate), foreign assets, or company directorships.",
      whoShouldChooseTitle: "Who Needs Individual ITR?",
      whoShouldChooseContent: "Salaried professionals, company directors holding DIN, stock traders, and freelancers."
    },
    benefits: [{ title: "Loan & Visa Eligibility", description: "ITR V serves as official proof of income required for bank loans and foreign visa applications.", iconName: "Award" }],
    processSteps: [
      { stepNumber: "01", title: "Document Collection", description: "Upload Form 16 & demat capital gains statement." },
      { stepNumber: "02", title: "CA Computation", description: "CA tax computation." },
      { stepNumber: "03", title: "ITR-V Generation", description: "E-filing & ITR-V generation." }
    ],
    documentsRequired: ["Form 16", "Demat trading P&L statement", "Bank interest certificates"],
    documentsDisclaimer: "Company directors must file ITR-2 regardless of salary income.",
    pricingTiers: [{ name: "Salaried / Director Plan", priceTag: "Starting from ₹1,499", description: "ITR-2 for Directors & Capital Gains.", features: ["ITR-2 Filing for Directors", "Capital Gains Calculation", "Foreign Asset Declaration Guidance"] }],
    faqs: [{ question: "Why do company directors need ITR-2?", answer: "Under Income Tax rules, any individual holding directorship in a company must file Form ITR-2." }],
    seoTitle: "ITR Filing for Salaried & Company Directors (ITR-2) | The Comply One",
    seoDescription: "File ITR-1 & ITR-2 online for salaried employees & company directors. Capital gains calculation, stock trading P&L & max refund."
  },

  "income-tax-business-return": {
    slug: "income-tax-business-return",
    route: "/income-tax/business-return",
    title: "Business Income Tax Return",
    subtitle: "ITR-3, ITR-4 (Presumptive Tax), and ITR-6 for sole proprietors, LLPs, and Private Limited Companies.",
    heroBadge: "Corporate Tax Filing",
    turnaroundTime: "3 - 5 Working Days",
    rating: 4.9,
    reviewCount: 2840,
    overview: {
      whatIsTitle: "What is Business ITR Filing?",
      whatIsContent: "Business ITR filing reports business turnover, gross profit, allowable expenses under Section 37, depreciation schedules, and net taxable business profits.",
      whoShouldChooseTitle: "Who Needs Business ITR?",
      whoShouldChooseContent: "Sole proprietors, partnership firms, LLPs, and Private Limited companies."
    },
    benefits: [{ title: "Maximize Deductions", description: "Claim legitimate business deductions, depreciation, and carry forward business losses.", iconName: "TrendingUp" }],
    processSteps: [
      { stepNumber: "01", title: "P&L Review", description: "P&L and Balance Sheet review." },
      { stepNumber: "02", title: "Income Computation", description: "Computation of business income." },
      { stepNumber: "03", title: "ITR E-Filing", description: "E-filing Form ITR-3 / ITR-4 / ITR-6." }
    ],
    documentsRequired: ["Audited Financial Statements", "Bank Statements for FY", "Form 26AS / AIS summary"],
    documentsDisclaimer: "Presumptive tax scheme (Sec 44AD/44ADA) allows filing without maintaining full books if eligible.",
    pricingTiers: [{ name: "Corporate ITR-6", priceTag: "Starting from ₹3,999", description: "ITR-6 for Pvt Ltd Companies.", features: ["Balance Sheet & P&L Review", "Depreciation Schedule Calculation", "ITR-6 E-Filing", "MAT Calculation"] }],
    faqs: [{ question: "What is Section 44AD Presumptive Taxation?", answer: "Sec 44AD allows small businesses with turnover up to ₹2-3 Crores to declare profit at 6%-8% without maintaining detailed books." }],
    seoTitle: "Business Income Tax Return (ITR-3, ITR-4, ITR-6) | The Comply One",
    seoDescription: "CA-assisted business ITR filing for companies, LLPs & sole proprietors. Presumptive tax Sec 44AD/44ADA, loss set-off & corporate tax optimization."
  },

  "income-tax-tax-audit": {
    slug: "income-tax-tax-audit",
    route: "/income-tax/tax-audit",
    title: "Tax Audit (Section 44AB)",
    subtitle: "Mandatory CA tax audit report filing (Form 3CA/3CB & Form 3CD) for high-turnover entities.",
    heroBadge: "Form 3CA / 3CD Audit",
    turnaroundTime: "5 - 10 Working Days",
    rating: 4.9,
    reviewCount: 1920,
    overview: {
      whatIsTitle: "What is Tax Audit under Section 44AB?",
      whatIsContent: "Tax Audit is an audit of a taxpayer's books of accounts conducted by a practicing Chartered Accountant under Section 44AB to ensure books comply with Income Tax provisions.",
      whoShouldChooseTitle: "Who Needs Tax Audit?",
      whoShouldChooseContent: "Businesses with annual turnover exceeding ₹1 Crore (or ₹10 Crores if cash transactions < 5%), and professionals with gross receipts > ₹50-₹75 Lakhs."
    },
    benefits: [{ title: "Avoid Penalty of ₹1.5 Lakhs", description: "Filing tax audit report before 30th September prevents Section 271B penalty.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "CA Audit", description: "Books of accounts audit by CA." },
      { stepNumber: "02", title: "Form 3CD Preparation", description: "Form 3CD annexure preparation." },
      { stepNumber: "03", title: "Tax Audit Filing", description: "E-filing Tax Audit Report on portal." }
    ],
    documentsRequired: ["Audited Balance Sheet & P&L", "Trial Balance & Ledgers", "Form 26AS & TDS certificates"],
    documentsDisclaimer: "Due date is 30th September (or extended government date).",
    pricingTiers: [{ name: "Tax Audit Package", priceTag: "Starting from ₹9,999", description: "Complete CA Tax Audit.", features: ["Books of Accounts CA Audit", "Form 3CA/3CB & 3CD Filing", "ITR-6 Tax Filing Included"] }],
    faqs: [{ question: "What is the penalty for not filing Tax Audit?", answer: "Under Section 271B, the penalty is 0.5% of turnover or ₹1,500,000, whichever is lower." }],
    seoTitle: "Tax Audit Filing Online (Section 44AB Form 3CD) | The Comply One",
    seoDescription: "Mandatory CA Tax Audit report filing under Section 44AB (Form 3CA/3CB & 3CD). Avoid ₹1.5 Lakh penalty with expert CA verification."
  },

  "income-tax-tds-return": {
    slug: "income-tax-tds-return",
    route: "/income-tax/tds-return",
    title: "TDS Return Filing",
    subtitle: "Quarterly Form 24Q, 26Q, 27Q filings, TRACES portal management & Form 16/16A generation.",
    heroBadge: "TRACES Quarterly Filings",
    turnaroundTime: "2 - 4 Working Days",
    rating: 4.8,
    reviewCount: 2240,
    overview: {
      whatIsTitle: "What is TDS Return Filing?",
      whatIsContent: "Tax Deducted at Source (TDS) returns are quarterly statements submitted by TAN holders reporting tax deducted from payments (salary, rent, professional fee, contractor payment).",
      whoShouldChooseTitle: "Who Needs to File TDS Returns?",
      whoShouldChooseContent: "All entities holding a Tax Deduction Account Number (TAN) that deduct TDS from payments."
    },
    benefits: [{ title: "Issue Form 16/16A", description: "Generate official Form 16 & 16A certificates from TRACES portal for employees & vendors.", iconName: "Award" }],
    processSteps: [
      { stepNumber: "01", title: "Challan Compilation", description: "Quarterly TDS challan compilation." },
      { stepNumber: "02", title: "FVU File Generation", description: "FVU file generation via NSDL utility." },
      { stepNumber: "03", title: "TRACES Submission", description: "Submitting return on IT portal & TRACES." }
    ],
    documentsRequired: ["TDS Challans (BSR code & Challan No)", "Deductee PAN list & payment amounts", "TAN login credentials"],
    documentsDisclaimer: "Due dates are 31st July (Q1), 31st Oct (Q2), 31st Jan (Q3), and 31st May (Q4).",
    pricingTiers: [{ name: "Quarterly TDS Return", priceTag: "Starting from ₹1,499", description: "Form 24Q / 26Q filing.", features: ["Form 24Q / 26Q FVU Generation", "TRACES Portal Filing", "Form 16 / 16A Download"] }],
    faqs: [{ question: "What is the penalty for late TDS return filing?", answer: "Late filing fee under Section 234E is ₹200 per day for each day the delay continues." }],
    seoTitle: "Quarterly TDS Return Filing (24Q, 26Q) & Form 16 | The Comply One",
    seoDescription: "File quarterly TDS returns (Form 24Q, 26Q, 27Q) online. TRACES portal management, FVU file generation & Form 16/16A download."
  },

  "income-tax-tds-registration": {
    slug: "income-tax-tds-registration",
    route: "/income-tax/tds-registration",
    title: "TDS Registration (TAN)",
    subtitle: "Obtain 10-digit Tax Deduction Account Number (TAN) for employers and businesses.",
    heroBadge: "10-Digit TAN Allocation",
    turnaroundTime: "1 - 3 Working Days",
    rating: 4.8,
    reviewCount: 1640,
    overview: {
      whatIsTitle: "What is TAN Registration?",
      whatIsContent: "Tax Deduction Account Number (TAN) is a 10-digit alphanumeric code issued by the Income Tax Department required for deducting and depositing TDS.",
      whoShouldChooseTitle: "Who Needs TAN?",
      whoShouldChooseContent: "Every business entity or individual required to deduct tax at source while paying salaries, rent (>₹50k/month), or professional fees."
    },
    benefits: [{ title: "Legal Tax Deduction Authority", description: "Mandatory code required on all TDS challans, returns, and Form 16 certificates.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Form 49B Filing", description: "Submitting Form 49B online." },
      { stepNumber: "02", title: "NSDL Verification", description: "NSDL / Income Tax verification." },
      { stepNumber: "03", title: "TAN Delivery", description: "TAN allotment letter delivery." }
    ],
    documentsRequired: ["PAN Card of Entity / Proprietor", "Proof of Business Premises", "Director / Partner details"],
    documentsDisclaimer: "Failure to apply for TAN attracts a penalty of ₹10,000 under Section 272BB.",
    pricingTiers: [{ name: "TAN Registration", priceTag: "Starting from ₹999", description: "Form 49B application.", features: ["Form 49B Application Filing", "10-Digit TAN Allotment", "TRACES Portal Account Setup"] }],
    faqs: [{ question: "Can a person use PAN instead of TAN for deducting TDS?", answer: "No, Section 203A mandates using TAN for deducting and depositing TDS on business transactions." }],
    seoTitle: "TAN Registration Online (Form 49B) | The Comply One",
    seoDescription: "Apply for 10-digit TAN (Tax Deduction Account Number) online in 1-3 days. Form 49B filing & TRACES account setup."
  },

  "income-tax-advance-tax": {
    slug: "income-tax-advance-tax",
    route: "/income-tax/advance-tax",
    title: "Advance Tax Calculation & Payment",
    subtitle: "Quarterly advance tax computation, tax liability optimization & payment challan generation.",
    heroBadge: "Quarterly Tax Planning",
    turnaroundTime: "1 - 2 Working Days",
    rating: 4.8,
    reviewCount: 1280,
    overview: {
      whatIsTitle: "What is Advance Tax?",
      whatIsContent: "Advance Tax is paying income tax in installments throughout the financial year instead of a lump sum at year-end ('Pay as you earn').",
      whoShouldChooseTitle: "Who Needs to Pay Advance Tax?",
      whoShouldChooseContent: "Any taxpayer whose estimated total tax liability for the financial year is ₹10,000 or more."
    },
    benefits: [{ title: "Avoid Sec 234B & 234C Interest", description: "Paying advance tax in quarterly installments avoids 1% per month interest penalties.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Income Estimation", description: "Estimated income & tax liability calculation." },
      { stepNumber: "02", title: "Dual Regime Audit", description: "Dual regime tax planning." },
      { stepNumber: "03", title: "Challan ITNS 280", description: "Payment challan (ITNS 280) generation." }
    ],
    documentsRequired: ["Estimated annual P&L / salary income", "TDS already deducted data", "Form 26AS"],
    documentsDisclaimer: "Quarterly due dates: 15th June (15%), 15th Sept (45%), 15th Dec (75%), 15th March (100%).",
    pricingTiers: [{ name: "Advance Tax Plan", priceTag: "Starting from ₹1,499", description: "Quarterly computation.", features: ["Quarterly Tax Calculation", "Sec 234B/C Interest Savings Audit", "ITNS 280 Payment Challan"] }],
    faqs: [{ question: "Are senior citizens required to pay advance tax?", answer: "Senior citizens (60+ years) not having any business income are exempt from paying advance tax." }],
    seoTitle: "Advance Tax Calculation & Payment Online | The Comply One",
    seoDescription: "Calculate and pay Advance Tax online. Quarterly installment planning (15th June, Sept, Dec, March) to avoid Sec 234B & 234C interest."
  },

  "income-tax-notice-assistance": {
    slug: "income-tax-notice-assistance",
    route: "/income-tax/notice-assistance",
    title: "Income Tax Notice Assistance",
    subtitle: "Expert CA response & representation for Section 143(1), 139(9) defective return, 142(1) & 148 notices.",
    heroBadge: "Expert CA Response",
    turnaroundTime: "2 - 4 Working Days",
    rating: 4.9,
    reviewCount: 2980,
    overview: {
      whatIsTitle: "What is an Income Tax Notice?",
      whatIsContent: "Income Tax Notices are formal communications sent by the e-filing portal regarding tax mismatch (Sec 143(1)), defective return (Sec 139(9)), non-filing (Sec 142(1)), or income escaping assessment (Sec 148).",
      whoShouldChooseTitle: "Who Needs Notice Assistance?",
      whoShouldChooseContent: "Taxpayers receiving demand notices, AIS income mismatch alerts, or scrutiny notices."
    },
    benefits: [{ title: "Legal CA Representation", description: "Prevent arbitrary tax demands and penalty orders through legally backed CA responses.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Notice Evaluation", description: "Notice evaluation & AIS data matching." },
      { stepNumber: "02", title: "Legal Response Drafting", description: "Drafting legal response with supporting proofs." },
      { stepNumber: "03", title: "Portal Submission", description: "Uploading response on e-Proceedings portal." }
    ],
    documentsRequired: ["Copy of Income Tax Notice", "Filed ITR & Computation of Income", "Bank Statements & AIS/TIS summary"],
    documentsDisclaimer: "Responses must be submitted on the e-Proceedings portal before the deadline specified in the notice.",
    pricingTiers: [{ name: "Notice Reply Package", priceTag: "Starting from ₹2,999", description: "CA notice response drafting.", features: ["Notice Analysis & AIS Audit", "Legal Response Drafting", "e-Proceedings Portal Submission", "CA Follow-up"] }],
    faqs: [{ question: "What is a Section 143(1) Intimation?", answer: "Sec 143(1) is an automated processing notice comparing details in your return with Income Tax Department records." }],
    seoTitle: "Income Tax Notice Reply Online (Sec 143(1), 139(9), 148) | The Comply One",
    seoDescription: "Get expert CA assistance for Income Tax Notice replies (Sec 143(1), 139(9), 142(1), 148). E-Proceedings portal submission & demand cancellation."
  },

  "income-tax-pan": {
    slug: "income-tax-pan",
    route: "/income-tax/pan",
    title: "PAN Services (New & Correction)",
    subtitle: "New Permanent Account Number (PAN) application & correction services for individuals and business entities.",
    heroBadge: "Physical & e-PAN Issuance",
    turnaroundTime: "2 - 5 Working Days",
    rating: 4.8,
    reviewCount: 3120,
    overview: {
      whatIsTitle: "What is PAN Card?",
      whatIsContent: "Permanent Account Number (PAN) is a 10-digit unique alphanumeric identifier issued by the Income Tax Department to track financial transactions.",
      whoShouldChooseTitle: "Who Needs PAN?",
      whoShouldChooseContent: "All tax-paying individuals, companies, LLPs, trusts, and foreign entities transacting in India."
    },
    benefits: [{ title: "Universal Financial ID", description: "Mandatory for opening bank accounts, filing ITR, and high-value transactions.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Form Filing", description: "Form 49A / 49AA filing." },
      { stepNumber: "02", title: "Document Check", description: "Document verification." },
      { stepNumber: "03", title: "PAN Delivery", description: "e-PAN & physical PAN card delivery." }
    ],
    documentsRequired: ["Aadhaar Card / Passport", "Proof of Address", "Date of birth proof"],
    documentsDisclaimer: "Aadhaar e-KYC enables instant e-PAN generation for individuals.",
    pricingTiers: [{ name: "Standard PAN Application", priceTag: "Starting from ₹499", description: "New PAN or Correction.", features: ["Form 49A / 49AA Application Filing", "e-PAN PDF Delivery", "Physical PAN Card Home Delivery"] }],
    faqs: [{ question: "How long does physical PAN card delivery take?", answer: "e-PAN is delivered in 24 hours via email; physical PAN card arrives by post in 5-7 working days." }],
    seoTitle: "PAN Card Application & Correction Online (Form 49A) | The Comply One",
    seoDescription: "Apply for new PAN card or PAN correction online. Instant e-PAN delivery & physical PAN card home shipping."
  },

  "income-tax-tan": {
    slug: "income-tax-tan",
    route: "/income-tax/tan",
    title: "TAN Services (Allotment & Correction)",
    subtitle: "TAN allotment & correction services for deductors under Form 49B.",
    heroBadge: "TAN Allotment",
    turnaroundTime: "1 - 3 Working Days",
    rating: 4.8,
    reviewCount: 1420,
    overview: {
      whatIsTitle: "What is TAN Services?",
      whatIsContent: "TAN allotment and correction services allow businesses to get a new 10-digit TAN or update existing name/address details on NSDL/Income Tax databases.",
      whoShouldChooseTitle: "Who Needs TAN Services?",
      whoShouldChooseContent: "Employers, companies, LLPs, and individual deductors."
    },
    benefits: [{ title: "TDS Compliance Ready", description: "Enables legal TDS deduction and quarterly filing.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Form 49B Submission", description: "Form 49B submission." },
      { stepNumber: "02", title: "NSDL Processing", description: "NSDL processing." },
      { stepNumber: "03", title: "Allotment Delivery", description: "TAN allotment letter delivery." }
    ],
    documentsRequired: ["PAN Card of Entity", "Registered address proof", "Authorized signatory details"],
    documentsDisclaimer: "Digital delivery of TAN allotment letter.",
    pricingTiers: [{ name: "TAN Service", priceTag: "Starting from ₹999", description: "Form 49B allotment/correction.", features: ["Form 49B Filing", "TAN Letter Delivery", "TRACES Registration"] }],
    faqs: [{ question: "Is TAN required for personal property purchase TDS?", answer: "No, TDS on immovable property under Section 194-IA can be deposited using PAN without needing a TAN." }],
    seoTitle: "TAN Services Online (New TAN & Correction Form 49B) | The Comply One",
    seoDescription: "Get new TAN allotment or TAN correction online in 1-3 days. Form 49B filing & TRACES deductor registration."
  },

  /* MCA SERVICES */
  "mca-compliance": {
    slug: "mca-compliance",
    route: "/mca/compliance",
    title: "MCA / ROC Annual Compliance",
    subtitle: "Full-year secretarial compliance retainer for Private Limited companies and LLPs under Companies Act, 2013.",
    heroBadge: "Complete Secretarial Retainer",
    turnaroundTime: "Annual Retainer",
    rating: 4.9,
    reviewCount: 2940,
    overview: {
      whatIsTitle: "What is MCA Compliance?",
      whatIsContent: "Every registered company and LLP in India must comply with annual Ministry of Corporate Affairs (MCA) statutory filings including AOC-4, MGT-7, DIR-3 KYC, and MBP-1.",
      whoShouldChooseTitle: "Who Needs MCA Retainer?",
      whoShouldChooseContent: "All Private Limited, OPC, Public Limited companies, and LLPs."
    },
    benefits: [{ title: "Avoid ₹100/Day Penalties", description: "Prevent heavy MCA late fees of ₹100 per day per form and director disqualification.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "CA Review", description: "Financial statements CA review." },
      { stepNumber: "02", title: "Notice Drafting", description: "Board & AGM notice preparation." },
      { stepNumber: "03", title: "MCA E-Filing", description: "AOC-4, MGT-7 & DIR-3 KYC e-filing." }
    ],
    documentsRequired: ["Audited Financial Statements", "Director DIN details", "List of Shareholders"],
    documentsDisclaimer: "Annual ROC filings must be completed within 30-60 days of the AGM.",
    pricingTiers: [{ name: "Annual MCA Retainer", priceTag: "Starting from ₹8,999", description: "Full-year ROC compliance.", features: ["AOC-4 & MGT-7 Annual Filings", "Director DIR-3 KYC (2 Directors)", "AGM & Board Minutes Drafting", "INC-20A & DPT-3 Support"] }],
    faqs: [{ question: "What is the penalty for late AOC-4 and MGT-7 filing?", answer: "Late filing fee is ₹100 per day for each form without any upper ceiling." }],
    seoTitle: "MCA Annual Compliance Retainer (AOC-4 & MGT-7) | The Comply One",
    seoDescription: "Full-year MCA / ROC annual compliance retainer for Pvt Ltd & LLPs. Includes AOC-4, MGT-7, DIR-3 KYC & board meeting minutes drafting."
  },

  "mca-company-annual-filing": {
    slug: "mca-company-annual-filing",
    route: "/mca/company-annual-filing",
    title: "Company Annual ROC Filing (AOC-4 & MGT-7)",
    subtitle: "Mandatory year-end financial statement (AOC-4) and annual return (MGT-7/7A) submission.",
    heroBadge: "AOC-4 & MGT-7 Filings",
    turnaroundTime: "3 - 5 Working Days",
    rating: 4.9,
    reviewCount: 2420,
    overview: {
      whatIsTitle: "What is Company Annual Filing?",
      whatIsContent: "Under the Companies Act, 2013, every company must file its financial statements in Form AOC-4 and Annual Return in Form MGT-7/MGT-7A with the Registrar of Companies (ROC) annually.",
      whoShouldChooseTitle: "Who Needs Annual Filing?",
      whoShouldChooseContent: "All Private Limited, OPC, Section 8, and Public Limited companies registered in India."
    },
    benefits: [{ title: "Maintain Active Company Status", description: "Keeps company status active on MCA portal and avoids STK-1 strike off notices.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Balance Sheet Review", description: "CA review of balance sheet." },
      { stepNumber: "02", title: "Report Drafting", description: "Drafting Director's Report & AGM Notice." },
      { stepNumber: "03", title: "MCA V3 Filing", description: "Filing AOC-4 and MGT-7 on MCA V3." }
    ],
    documentsRequired: ["Audited Financial Statements & Notes", "Auditor's Report", "Shareholding details as on 31st March"],
    documentsDisclaimer: "AOC-4 is due within 30 days of AGM; MGT-7 is due within 60 days of AGM.",
    pricingTiers: [{ name: "AOC-4 + MGT-7 Package", priceTag: "Starting from ₹4,999", description: "Complete annual ROC filing.", features: ["Board Report Drafting", "Form AOC-4 E-Filing", "Form MGT-7 E-Filing", "AGM Minutes Template"] }],
    faqs: [{ question: "Is annual filing mandatory if company had zero transactions?", answer: "Yes, even dormant companies with zero transactions must file AOC-4 and MGT-7 annually." }],
    seoTitle: "Company Annual ROC Filing (Form AOC-4 & MGT-7) | The Comply One",
    seoDescription: "File Company Annual ROC returns (Form AOC-4 & MGT-7/MGT-7A) online. Includes Director's Report drafting, AGM minutes & MCA V3 submission."
  },

  "mca-llp-annual-filing": {
    slug: "mca-llp-annual-filing",
    route: "/mca/llp-annual-filing",
    title: "LLP Annual Filing (Form 11 & Form 8)",
    subtitle: "Annual Statement of Accounts (Form 8) and Annual Return (Form 11) filing for LLPs.",
    heroBadge: "Form 11 & Form 8 Filing",
    turnaroundTime: "2 - 4 Working Days",
    rating: 4.8,
    reviewCount: 1840,
    overview: {
      whatIsTitle: "What is LLP Annual Filing?",
      whatIsContent: "Every LLP registered in India must file Form 11 (Annual Return) by 30th May and Form 8 (Statement of Account & Solvency) by 30th October every year.",
      whoShouldChooseTitle: "Who Needs LLP Filing?",
      whoShouldChooseContent: "All Limited Liability Partnerships (LLPs) registered under the LLP Act, 2008."
    },
    benefits: [{ title: "Avoid ₹100/Day Fine", description: "Prevent daily late fee penalties of ₹100 per day for Form 11 and Form 8 delays.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Contribution Audit", description: "Partner contribution compilation." },
      { stepNumber: "02", title: "Form 11 Filing", description: "Form 11 e-filing by 30th May." },
      { stepNumber: "03", title: "Form 8 Filing", description: "Form 8 e-filing by 30th October." }
    ],
    documentsRequired: ["LLP Financial Statements", "Partner details & contribution summary", "Class 3 DSC of Designated Partner"],
    documentsDisclaimer: "Form 11 due by 30th May; Form 8 due by 30th October.",
    pricingTiers: [{ name: "LLP Annual Filings", priceTag: "Starting from ₹3,999", description: "Form 11 & Form 8 filing.", features: ["Form 11 Annual Return Filing", "Form 8 Solvency Statement Filing", "Partner Accounts Review"] }],
    faqs: [{ question: "When is Form 11 due for LLPs?", answer: "Form 11 must be filed within 60 days of the end of financial year, which is 30th May." }],
    seoTitle: "LLP Annual Filing Online (Form 11 & Form 8) | The Comply One",
    seoDescription: "File LLP Annual Returns (Form 11 & Form 8) online. Avoid ₹100/day late fees with timely MCA V3 e-filing & partner solvency drafting."
  },

  "mca-director-kyc": {
    slug: "mca-director-kyc",
    route: "/mca/director-kyc",
    title: "Director KYC (DIR-3 KYC)",
    subtitle: "Annual mandatory verification for all DIN holders to keep company directorship active.",
    heroBadge: "Avoid ₹5,000 Late Fee",
    turnaroundTime: "Same Day Filing",
    rating: 4.9,
    reviewCount: 6120,
    overview: {
      whatIsTitle: "What is DIR-3 KYC?",
      whatIsContent: "DIR-3 KYC is an annual mandatory verification required for every individual who holds a Director Identification Number (DIN).",
      whoShouldChooseTitle: "Who Needs DIR-3 KYC?",
      whoShouldChooseContent: "Every person holding a DIN allocated on or before 31st March of the financial year."
    },
    benefits: [{ title: "Avoid ₹5,000 Late Fee", description: "Filing before 30th September avoids DIN deactivation and a heavy ₹5,000 government penalty.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "OTP Verification", description: "OTP verification on personal mobile & email." },
      { stepNumber: "02", title: "CA Certification", description: "CA digital certification." },
      { stepNumber: "03", title: "MCA V3 Filing", description: "E-filing on MCA V3 portal." }
    ],
    documentsRequired: ["PAN Card copy", "Aadhaar Card copy", "Personal mobile & email for OTP", "Valid Passport (if holding)"],
    documentsDisclaimer: "DIR-3 KYC Web (for same details) or DIR-3 KYC e-Form (for address/contact changes).",
    pricingTiers: [{ name: "DIR-3 KYC Web / Form", priceTag: "Starting from ₹499", description: "Same day director KYC.", features: ["OTP Mobile/Email Verification", "CA Digital Certification", "MCA V3 Filing Receipt", "DIN Active Status"] }],
    faqs: [{ question: "What happens if DIR-3 KYC is missed?", answer: "The DIN status is changed to 'Deactivated due to non-filing of DIR-3 KYC' and requires a ₹5,000 penalty to reactivate." }],
    seoTitle: "DIR-3 KYC Online Filing | Director Verification | The Comply One",
    seoDescription: "File DIR-3 KYC online in same day to avoid ₹5,000 penalty and DIN deactivation. CA certified MCA V3 web filing."
  },

  "mca-din": {
    slug: "mca-din",
    route: "/mca/din",
    title: "DIN Services (Allocation & DIR-6 Update)",
    subtitle: "Director Identification Number allocation and DIR-6 profile modification services.",
    heroBadge: "Director DIN Allocation",
    turnaroundTime: "1 - 2 Working Days",
    rating: 4.8,
    reviewCount: 1640,
    overview: {
      whatIsTitle: "What is DIN?",
      whatIsContent: "Director Identification Number (DIN) is a unique 8-digit identification number allotted by the MCA to any person intending to become a director of a company.",
      whoShouldChooseTitle: "Who Needs DIN?",
      whoShouldChooseContent: "Individuals being appointed as new directors in an existing company."
    },
    benefits: [{ title: "Lifetime Validity", description: "DIN number remains valid for life across all Indian companies.", iconName: "Clock" }],
    processSteps: [
      { stepNumber: "01", title: "DIR-3 Application", description: "Form DIR-3 filing." },
      { stepNumber: "02", title: "CA Certification", description: "CA certification & DSC attach." },
      { stepNumber: "03", title: "DIN Allotment", description: "MCA approval & DIN allotment." }
    ],
    documentsRequired: ["PAN Card of Director", "Aadhaar / Passport", "Passport photo", "Board resolution for appointment"],
    documentsDisclaimer: "Form DIR-6 is filed for updating address or name changes in existing DIN records.",
    pricingTiers: [{ name: "DIN Allotment Service", priceTag: "Starting from ₹1,499", description: "Form DIR-3 filing.", features: ["Form DIR-3 Application Filing", "8-Digit DIN Allotment", "DIR-6 Modification Support"] }],
    faqs: [{ question: "Can a person have more than one DIN?", answer: "No, holding more than one DIN is illegal and subject to heavy penalties under the Companies Act." }],
    seoTitle: "DIN Allocation & DIR-6 Update Online (Form DIR-3) | The Comply One",
    seoDescription: "Apply for 8-digit Director Identification Number (DIN) online under Form DIR-3 or modify existing DIN details with Form DIR-6."
  },

  "mca-dsc": {
    slug: "mca-dsc",
    route: "/mca/dsc",
    title: "DSC Services for MCA Filings",
    subtitle: "Class 3 e-Token Digital Signature Certificate for company directors and secretarial filings.",
    heroBadge: "Class 3 MCA Token",
    turnaroundTime: "Same Day Issuance",
    rating: 4.9,
    reviewCount: 2840,
    overview: {
      whatIsTitle: "What is MCA DSC?",
      whatIsContent: "A Class 3 Digital Signature Certificate (DSC) is mandatory for signing all electronic e-forms (SPICe+, AOC-4, MGT-7, DIR-12) submitted on the MCA V3 portal.",
      whoShouldChooseTitle: "Who Needs MCA DSC?",
      whoShouldChooseContent: "Company directors, designated partners, chartered accountants, and company secretaries."
    },
    benefits: [{ title: "FIPS USB Token", description: "Secure e-Token compatible with MCA V3 portal signature drivers.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Aadhaar Verification", description: "Aadhaar e-KYC." },
      { stepNumber: "02", title: "Video Recording", description: "Video recording." },
      { stepNumber: "03", title: "Token Dispatch", description: "USB Token dispatch." }
    ],
    documentsRequired: ["PAN & Aadhaar of Director", "Mobile & Email linked to Aadhaar"],
    documentsDisclaimer: "2-year or 3-year validity options.",
    pricingTiers: [{ name: "2-Year Class 3 DSC", priceTag: "Starting from ₹1,499", description: "Class 3 Token for MCA.", features: ["Class 3 Signing Certificate", "USB e-Token Included", "MCA V3 Compatible"] }],
    faqs: [{ question: "Is Class 3 DSC mandatory for MCA V3 portal?", answer: "Yes, MCA V3 strictly requires Class 3 Digital Signature Certificates." }],
    seoTitle: "Class 3 Digital Signature (DSC) for MCA Filings | The Comply One",
    seoDescription: "Buy Class 3 Digital Signature Certificate (DSC) for MCA V3 portal e-filings. Same day approval & USB e-Token shipping."
  },

  "mca-company-name-change": {
    slug: "mca-company-name-change",
    route: "/mca/company-name-change",
    title: "Company Name Change",
    subtitle: "RUN name approval & INC-24 corporate name alteration for Private Limited companies.",
    heroBadge: "Corporate Rebranding",
    turnaroundTime: "7 - 10 Working Days",
    rating: 4.8,
    reviewCount: 1140,
    overview: {
      whatIsTitle: "What is Company Name Change?",
      whatIsContent: "Company Name Change is the process of altering a company's legal name under Section 13 of the Companies Act, requiring board approval, RUN name reservation, special resolution, and Form INC-24 filing.",
      whoShouldChooseTitle: "When to Change Name?",
      whoShouldChooseContent: "During corporate rebranding, business pivot, M&A takeover, or trademark conflict resolution."
    },
    benefits: [{ title: "Fresh Certificate of Incorporation", description: "ROC issues a fresh Certificate of Incorporation reflecting the new legal company name.", iconName: "Award" }],
    processSteps: [
      { stepNumber: "01", title: "RUN Filing", description: "Board meeting & RUN name filing." },
      { stepNumber: "02", title: "Special Resolution", description: "EGM Special Resolution." },
      { stepNumber: "03", title: "INC-24 Filing", description: "Form MGT-14 & INC-24 filing." }
    ],
    documentsRequired: ["Board & EGM Resolutions", "Notice of EGM & altered MoA/AoA", "Digital Signature of Director"],
    documentsDisclaimer: "Requires updating PAN, TAN, GSTIN, bank accounts, and licenses after ROC approval.",
    pricingTiers: [{ name: "Name Change Service", priceTag: "Starting from ₹7,999", description: "RUN name + INC-24 filing.", features: ["RUN Name Reservation", "MGT-14 & INC-24 E-Filing", "Fresh CoI Delivery"] }],
    faqs: [{ question: "Does changing company name affect existing contracts?", answer: "No, changing the company name does not affect any existing rights, obligations, or legal contracts of the company." }],
    seoTitle: "Company Name Change Online (Form INC-24 & RUN) | The Comply One",
    seoDescription: "Change Private Limited company name online under Section 13. Includes RUN name reservation, Special Resolution drafting & Form INC-24 filing."
  },

  "mca-registered-office-change": {
    slug: "mca-registered-office-change",
    route: "/mca/registered-office-change",
    title: "Registered Office Change",
    subtitle: "INC-22 filing for company address changes within local limits, state, or across ROC jurisdictions.",
    heroBadge: "Address Alteration INC-22",
    turnaroundTime: "3 - 7 Working Days",
    rating: 4.8,
    reviewCount: 1480,
    overview: {
      whatIsTitle: "What is Registered Office Change?",
      whatIsContent: "Changing a company's registered office address requires notifying the ROC via Form INC-22 within 30 days of office relocation under Section 12 of the Companies Act.",
      whoShouldChooseTitle: "When to Change Office Address?",
      whoShouldChooseContent: "When moving to a new commercial premises within the same city, another city in the same state, or to a different state."
    },
    benefits: [{ title: "ROC Record Synchronization", description: "Ensures official MCA notices and bank communications arrive at your active premises.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Board Approval", description: "Board resolution approval." },
      { stepNumber: "02", title: "Proof Upload", description: "Upload new premises proof & NOC." },
      { stepNumber: "03", title: "Form INC-22 Filing", description: "Form INC-22 e-filing on MCA V3." }
    ],
    documentsRequired: ["Proof of new address (Electricity Bill / Utility Bill <2 months)", "Rent Agreement & Landlord NOC", "Board Resolution"],
    documentsDisclaimer: "Inter-state office changes require Regional Director (RD) approval.",
    pricingTiers: [{ name: "Intra-City INC-22", priceTag: "Starting from ₹2,499", description: "INC-22 address change.", features: ["Board Resolution Drafting", "Form INC-22 E-Filing", "ROC Master Data Update"] }],
    faqs: [{ question: "What is the timeline to file INC-22 after office relocation?", answer: "Form INC-22 must be filed with the ROC within 30 days of changing the registered office address." }],
    seoTitle: "Registered Office Address Change (Form INC-22) | The Comply One",
    seoDescription: "File Company Registered Office address change online under Form INC-22. Intra-city, inter-city & inter-state ROC address relocation."
  },

  "mca-director-change": {
    slug: "mca-director-change",
    route: "/mca/director-change",
    title: "Add or Remove Director (DIR-12)",
    subtitle: "DIR-12 filing for appointment, resignation, or removal of board directors.",
    heroBadge: "Director Appointment & Resignation",
    turnaroundTime: "2 - 4 Working Days",
    rating: 4.8,
    reviewCount: 1890,
    overview: {
      whatIsTitle: "What is Director Change?",
      whatIsContent: "Adding a new director or accepting a director's resignation requires filing Form DIR-12 with the ROC within 30 days under Section 168/170 of the Companies Act.",
      whoShouldChooseTitle: "When to File DIR-12?",
      whoShouldChooseContent: "When onboarding co-founders, investor directors, or processing director resignations."
    },
    benefits: [{ title: "Official ROC Record Update", description: "Updates MCA Signatory Details so banks and investors recognize new board members.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Consent & DIN", description: "Obtain DIN & DIR-2 consent for new director." },
      { stepNumber: "02", title: "Board Resolution", description: "Pass Board & EGM resolution." },
      { stepNumber: "03", title: "DIR-12 Filing", description: "File Form DIR-12 on MCA V3." }
    ],
    documentsRequired: ["Consent letter (DIR-2) & DIR-8 declaration", "Resignation letter (for resignation)", "Board Resolution & DIR-12 form"],
    documentsDisclaimer: "Minimum 2 directors must remain in a Private Limited Company at all times.",
    pricingTiers: [{ name: "DIR-12 Service", priceTag: "Starting from ₹2,999", description: "Director appointment/resignation.", features: ["DIR-2 & Resolution Drafting", "Form DIR-12 E-Filing", "MCA Signatory Update"] }],
    faqs: [{ question: "Can a Private Limited Company operate with only 1 director?", answer: "No, a Private Limited Company must have at least 2 directors (except OPC which can have 1)." }],
    seoTitle: "Add or Remove Director Online (Form DIR-12) | The Comply One",
    seoDescription: "File Form DIR-12 online for director appointment or resignation in a Private Limited company. Complete resolution drafting & MCA V3 update."
  },

  "mca-company-closure": {
    slug: "mca-company-closure",
    route: "/mca/company-closure",
    title: "Company Closure (Strike Off STK-2)",
    subtitle: "Form STK-2 application for legally closing dormant, defunct, or inactive Private Limited companies.",
    heroBadge: "STK-2 Company Strike Off",
    turnaroundTime: "10 - 15 Working Days",
    rating: 4.8,
    reviewCount: 1240,
    overview: {
      whatIsTitle: "What is Company Closure (Strike Off)?",
      whatIsContent: "Company Strike Off under Form STK-2 is a fast-track legal route under Section 248 of the Companies Act to close dormant companies that have not commenced business within 1 year or have had no business operations for 2 years.",
      whoShouldChooseTitle: "Who Should Strike Off?",
      whoShouldChooseContent: "Promoters of dormant or defunct companies wanting to avoid recurring annual ROC filing costs."
    },
    benefits: [{ title: "Permanent Relief from Filings", description: "Dissolves the corporate entity and permanently closes statutory compliance obligations.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Extinguish Liabilities", description: "Extinguishing all assets & liabilities." },
      { stepNumber: "02", title: "STK-8 Accounts", description: "CA Statement of Accounts (STK-8)." },
      { stepNumber: "03", title: "STK-2 Filing", description: "Form STK-2 e-filing with indemnity bond." }
    ],
    documentsRequired: ["STK-8 Statement of Accounts by CA", "STK-4 Indemnity Bond & STK-3 Affidavit", "Bank Account Closure Certificate"],
    documentsDisclaimer: "Company must have zero pending tax liabilities or pending litigations.",
    pricingTiers: [{ name: "STK-2 Fast-Track Closure", priceTag: "Starting from ₹12,999", description: "Complete company strike off.", features: ["CA Statement of Accounts (STK-8)", "Indemnity Bond & Affidavits", "Form STK-2 E-Filing", "Gazette Notification Tracking"] }],
    faqs: [{ question: "Can an active company file STK-2 for strike off?", answer: "No, the company must have zero assets/liabilities and must not have carried out business for 2 preceding financial years." }],
    seoTitle: "Company Closure Online (Form STK-2 Strike Off) | The Comply One",
    seoDescription: "Legally close dormant Private Limited company under Form STK-2. Fast-track strike off under Section 248 with CA statement of accounts & indemnity bonds."
  },

  /* COMPLIANCE SERVICES */
  "compliance-annual": {
    slug: "compliance-annual",
    route: "/compliance/annual",
    title: "Annual Compliance Retainer",
    subtitle: "Full-year comprehensive compliance retainer covering ROC, GST, Income Tax, and secretarial requirements.",
    heroBadge: "Complete Annual Protection",
    turnaroundTime: "Annual Retainer",
    rating: 4.9,
    reviewCount: 3840,
    overview: {
      whatIsTitle: "What is Annual Compliance Retainer?",
      whatIsContent: "Our Annual Compliance Retainer is a single, all-inclusive retainer package designed to handle 100% of a company's statutory filing obligations across MCA ROC, GST, Income Tax, TDS, and secretarial records.",
      whoShouldChooseTitle: "Who Needs Annual Retainer?",
      whoShouldChooseContent: "Startups, Private Limited companies, LLPs, and growing enterprises that want hassle-free compliance under a dedicated CA/CS team."
    },
    benefits: [{ title: "360° Total Coverage", description: "Covers AOC-4, MGT-7, DIR-3 KYC, 12 months GSTR-1/3B, ITR-6, and Board minutes under one retainer.", iconName: "Award" }],
    processSteps: [
      { stepNumber: "01", title: "Calendar Onboarding", description: "Annual compliance calendar onboarding." },
      { stepNumber: "02", title: "Monthly Filings", description: "Monthly GST & TDS filings." },
      { stepNumber: "03", title: "Year-End Audits", description: "Year-end ROC & Income Tax audit filings." }
    ],
    documentsRequired: ["Financial statements & bank ledgers", "GST & Income tax portal credentials"],
    documentsDisclaimer: "Custom retainer plans available based on monthly transaction volume.",
    pricingTiers: [{ name: "Full-Year Retainer", priceTag: "Starting from ₹14,999", description: "All-in-one annual compliance.", features: ["AOC-4 & MGT-7 ROC Filings", "12 Months GSTR-1 & 3B Filings", "Corporate ITR Filing", "2 Director DIR-3 KYC", "Dedicated CA & CS Team"], recommended: true }],
    faqs: [{ question: "What is included in the Annual Retainer?", answer: "The retainer includes ROC annual returns, monthly GST filings, quarterly TDS, corporate ITR, DIR-3 KYC, and secretarial board minutes." }],
    seoTitle: "Annual Compliance Retainer Package for Companies & LLPs | The Comply One",
    seoDescription: "Complete full-year annual compliance retainer for Private Limited companies & LLPs. Covers AOC-4, MGT-7, GST, ITR, TDS & DIR-3 KYC."
  },

  "compliance-gst": {
    slug: "compliance-gst",
    route: "/compliance/gst",
    title: "GST Compliance Services",
    subtitle: "Monthly GSTR-1 & 3B filings, GSTR-2B ITC matching, LUT exports & GST audit readiness.",
    heroBadge: "GST Retainer",
    turnaroundTime: "Monthly Maintenance",
    rating: 4.8,
    reviewCount: 2450,
    overview: {
      whatIsTitle: "What is GST Compliance?",
      whatIsContent: "GST Compliance services ensure your business accurately calculates tax liability, claims 100% eligible ITC, files monthly returns on time, and stays protected against tax notices.",
      whoShouldChooseTitle: "Who Needs GST Compliance?",
      whoShouldChooseContent: "Every business holding an active 15-digit GSTIN."
    },
    benefits: [{ title: "Maximized ITC Reconciliation", description: "Matches 100% purchase invoices with GSTR-2B so zero input credit is lost.", iconName: "TrendingUp" }],
    processSteps: [
      { stepNumber: "01", title: "Invoice Upload", description: "Monthly invoice data upload." },
      { stepNumber: "02", title: "GSTR-2B Matching", description: "GSTR-2B matching." },
      { stepNumber: "03", title: "Monthly Filings", description: "Filing GSTR-1 & 3B." }
    ],
    documentsRequired: ["Sales & Purchase invoices", "Bank statement"],
    documentsDisclaimer: "Monthly filing due by 11th (GSTR-1) and 20th (GSTR-3B).",
    pricingTiers: [{ name: "GST Compliance Plan", priceTag: "Starting from ₹999", description: "Monthly GST compliance.", features: ["GSTR-1 & 3B Filings", "GSTR-2B Matching", "Tax Challans"] }],
    faqs: [{ question: "What is GSTR-2B reconciliation?", answer: "GSTR-2B is an auto-generated ITC statement. Matching purchase invoices against GSTR-2B ensures you only claim verified input tax credit." }],
    seoTitle: "GST Compliance & Monthly Return Filing Services | The Comply One",
    seoDescription: "Monthly GST compliance & return filing services. Includes GSTR-1, GSTR-3B, GSTR-2B ITC matching, LUT export filings & notice management."
  },

  "compliance-income-tax": {
    slug: "compliance-income-tax",
    route: "/compliance/income-tax",
    title: "Income Tax Compliance",
    subtitle: "Quarterly advance tax computation, corporate ITR-6 filing, Sec 44AB audits & tax planning.",
    heroBadge: "Income Tax Retainer",
    turnaroundTime: "Ongoing Compliance",
    rating: 4.9,
    reviewCount: 2120,
    overview: {
      whatIsTitle: "What is Income Tax Compliance?",
      whatIsContent: "Income Tax Compliance involves computing advance tax liability, filing corporate ITRs, conducting tax audits under Sec 44AB, and responding to e-Proceeding notices.",
      whoShouldChooseTitle: "Who Needs Tax Compliance?",
      whoShouldChooseContent: "Companies, LLPs, partnership firms, and high-net-worth individuals."
    },
    benefits: [{ title: "Legal CA Tax Optimization", description: "Structures business operations to legitimately reduce income tax burdens under IT Act provisions.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Advance Tax Computation", description: "Quarterly advance tax calculation." },
      { stepNumber: "02", title: "Year-End Audit", description: "Financial year-end audit." },
      { stepNumber: "03", title: "ITR Filing", description: "ITR filing." }
    ],
    documentsRequired: ["P&L and Balance Sheet", "Form 26AS & AIS", "Bank statements"],
    documentsDisclaimer: "Quarterly advance tax installments due on 15th June, Sept, Dec, March.",
    pricingTiers: [{ name: "Tax Compliance Plan", priceTag: "Starting from ₹3,999", description: "Corporate tax compliance.", features: ["Advance Tax Calculation", "Corporate ITR Filing", "Tax Notice Guidance"] }],
    faqs: [{ question: "Why is quarterly advance tax computation essential?", answer: "Paying advance tax in quarterly installments prevents 1% per month interest under Section 234B & 234C." }],
    seoTitle: "Income Tax Compliance & Corporate Tax Filing | The Comply One",
    seoDescription: "Income tax compliance services for companies & businesses. Quarterly advance tax calculation, corporate ITR-6 filing, Sec 44AB audit & notice help."
  },

  "compliance-payroll": {
    slug: "compliance-payroll",
    route: "/compliance/payroll",
    title: "Payroll & HR Compliance",
    subtitle: "PF & ESI registrations, monthly ECR returns, payroll processing, and Form 16 generation.",
    heroBadge: "PF, ESI & Payroll Retainer",
    turnaroundTime: "Monthly Maintenance",
    rating: 4.8,
    reviewCount: 2640,
    overview: {
      whatIsTitle: "What is Payroll & HR Compliance?",
      whatIsContent: "Payroll compliance manages employee salary calculations, Provident Fund (PF), Employee State Insurance (ESI), Professional Tax (PT), TDS on salary (Sec 192), and Form 16 issuance.",
      whoShouldChooseTitle: "Who Needs Payroll Compliance?",
      whoShouldChooseContent: "All employers with 10+ employees (ESI threshold) or 20+ employees (PF threshold)."
    },
    benefits: [{ title: "Labour Law Protection", description: "Ensures 100% compliance with PF, ESI, PT, and Payment of Wages statutory Acts.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Salary Computation", description: "Monthly salary processing & payslip generation." },
      { stepNumber: "02", title: "ECR File Generation", description: "Generating ECR files for PF & ESI." },
      { stepNumber: "03", title: "Portal Return Filing", description: "Filing monthly returns on Shram Suvidha portal." }
    ],
    documentsRequired: ["Employee attendance & salary register", "PF & ESI establishment credentials"],
    documentsDisclaimer: "PF & ESI monthly returns due by 15th of every month.",
    pricingTiers: [{ name: "Monthly Payroll Plan", priceTag: "Starting from ₹1,999", description: "Payroll up to 10 employees.", features: ["Salary Processing & Payslips", "PF & ESI Monthly ECR Filings", "Form 16 Generation Support"] }],
    faqs: [{ question: "When is PF & ESI registration mandatory?", answer: "PF registration is mandatory for establishments with 20+ employees; ESI is mandatory for 10+ employees." }],
    seoTitle: "Payroll & HR Compliance Services (PF, ESI, Form 16) | The Comply One",
    seoDescription: "Outsourced payroll & HR compliance services. Monthly PF & ESI ECR filings, salary computation, payslips & Form 16 generation for employers."
  },

  "compliance-tds": {
    slug: "compliance-tds",
    route: "/compliance/tds",
    title: "TDS Compliance Services",
    subtitle: "Quarterly TDS return filings (24Q, 26Q, 27Q), TRACES portal management & Form 16/16A generation.",
    heroBadge: "Quarterly TDS Retainer",
    turnaroundTime: "Quarterly Compliance",
    rating: 4.8,
    reviewCount: 1980,
    overview: {
      whatIsTitle: "What is TDS Compliance?",
      whatIsContent: "TDS Compliance requires deductors to deduct tax at source on prescribed payments (salary, rent, professional fees, contractor charges), deposit challans, and file quarterly returns.",
      whoShouldChooseTitle: "Who Needs TDS Compliance?",
      whoShouldChooseContent: "All TAN holders making payments subject to TDS under the Income Tax Act."
    },
    benefits: [{ title: "Form 16/16A Generation", description: "Downloads verified Form 16 and 16A certificates from TRACES for vendors & staff.", iconName: "Award" }],
    processSteps: [
      { stepNumber: "01", title: "Challan Deposit Audit", description: "Monthly TDS deposit challan check." },
      { stepNumber: "02", title: "FVU Generation", description: "Quarterly FVU file generation." },
      { stepNumber: "03", title: "TRACES Download", description: "Return filing & TRACES download." }
    ],
    documentsRequired: ["TDS Challan receipts", "Deductee PAN & payment details", "TAN login credentials"],
    documentsDisclaimer: "Late filing fee is ₹200 per day under Section 234E.",
    pricingTiers: [{ name: "Quarterly TDS Plan", priceTag: "Starting from ₹1,499", description: "Quarterly Form 24Q/26Q filing.", features: ["Form 24Q & 26Q Filings", "TRACES FVU Generation", "Form 16/16A Downloads"] }],
    faqs: [{ question: "What are the quarterly TDS filing due dates?", answer: "TDS quarterly returns are due on 31st July (Q1), 31st Oct (Q2), 31st Jan (Q3), and 31st May (Q4)." }],
    seoTitle: "TDS Compliance & Quarterly Return Filing Services | The Comply One",
    seoDescription: "TDS compliance services for TAN holders. Quarterly Form 24Q & 26Q return filings, TRACES portal management & Form 16/16A generation."
  },

  "compliance-roc": {
    slug: "compliance-roc",
    route: "/compliance/roc",
    title: "ROC Compliance Services",
    subtitle: "Annual ROC filings (AOC-4, MGT-7), Director KYC, INC-20A, and event-based MCA V3 compliance.",
    heroBadge: "Corporate ROC Retainer",
    turnaroundTime: "Ongoing Compliance",
    rating: 4.9,
    reviewCount: 2450,
    overview: {
      whatIsTitle: "What is ROC Compliance?",
      whatIsContent: "ROC Compliance ensures that a registered company complies with all mandatory statutory filings with the Registrar of Companies under the Companies Act, 2013.",
      whoShouldChooseTitle: "Who Needs ROC Compliance?",
      whoShouldChooseContent: "Private Limited, OPC, Section 8, Public Limited companies, and LLPs."
    },
    benefits: [{ title: "Prevent Director Disqualification", description: "Avoids DIN deactivation, STK-1 strike off notices, and ₹100/day penalties.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Financial Statements Audit", description: "Annual financial statement audit." },
      { stepNumber: "02", title: "Board Minutes Drafting", description: "Drafting board resolutions & AGM notice." },
      { stepNumber: "03", title: "MCA E-Filing", description: "Filing AOC-4, MGT-7, and DIR-3 KYC." }
    ],
    documentsRequired: ["Audited Financial Statements", "Director DIN list", "Shareholding pattern"],
    documentsDisclaimer: "Covers AOC-4, MGT-7, DIR-3 KYC, MBP-1, and INC-20A filings.",
    pricingTiers: [{ name: "ROC Retainer Plan", priceTag: "Starting from ₹6,999", description: "Annual ROC compliance.", features: ["Form AOC-4 & MGT-7 Filings", "2 Director DIR-3 KYC Filings", "AGM Notice & Board Minutes"] }],
    faqs: [{ question: "What is INC-20A Commencement of Business?", answer: "INC-20A is a mandatory filing required within 180 days of company incorporation before starting commercial operations." }],
    seoTitle: "ROC Compliance Services for Companies & LLPs | The Comply One",
    seoDescription: "ROC compliance services for Private Limited companies & LLPs. Form AOC-4, MGT-7, DIR-3 KYC, INC-20A & event-based MCA V3 filings."
  },

  "compliance-secretarial": {
    slug: "compliance-secretarial",
    route: "/compliance/secretarial",
    title: "Secretarial Compliance Services",
    subtitle: "Statutory register maintenance (MGT-1, MGT-2), board meeting minutes, AGM notices & CS advisory.",
    heroBadge: "CS Secretarial Maintenance",
    turnaroundTime: "Ongoing Retainer",
    rating: 4.9,
    reviewCount: 1740,
    overview: {
      whatIsTitle: "What is Secretarial Compliance?",
      whatIsContent: "Secretarial Compliance involves maintaining mandatory statutory registers (MGT-1 Register of Members, MBP-1 Director Disclosures), drafting board meeting notices, board resolutions, and AGM minutes as per Secretarial Standards SS-1 & SS-2.",
      whoShouldChooseTitle: "Who Needs Secretarial Compliance?",
      whoShouldChooseContent: "All Private Limited and Public Limited companies in India."
    },
    benefits: [{ title: "Investor Due-Diligence Ready", description: "Keeps corporate records 100% compliant and ready for venture capital due diligence.", iconName: "Award" }],
    processSteps: [
      { stepNumber: "01", title: "Quarterly Board Minutes", description: "Drafting quarterly Board Meeting notices & minutes." },
      { stepNumber: "02", title: "Registers Maintenance", description: "Maintaining MGT-1, MGT-2, MBP-1 statutory registers." },
      { stepNumber: "03", title: "AGM Documentation", description: "Drafting Annual General Meeting (AGM) documentation." }
    ],
    documentsRequired: ["Board meeting dates & resolutions", "Shareholding transfer entries", "Director disclosure forms (MBP-1)"],
    documentsDisclaimer: "Complies strictly with ICSI Secretarial Standards (SS-1 and SS-2).",
    pricingTiers: [{ name: "Secretarial Retainer", priceTag: "Starting from ₹5,999", description: "CS secretarial maintenance.", features: ["4 Quarterly Board Minutes Drafting", "AGM Documentation & Resolutions", "Statutory Registers Maintenance (MGT-1/MBP-1)", "Share Certificate Printing Assistance"] }],
    faqs: [{ question: "How many board meetings are mandatory per year?", answer: "A Private Limited company must hold at least 4 Board Meetings in a calendar year, with no more than 120 days gap between meetings." }],
    seoTitle: "Secretarial Compliance Services & Board Minutes Drafting | The Comply One",
    seoDescription: "Company Secretary (CS) secretarial compliance services. Statutory register maintenance (MGT-1, MBP-1), Board Meeting minutes & AGM documentation."
  },

  "compliance-calendar": {
    slug: "compliance-calendar",
    route: "/compliance/calendar",
    title: "Statutory Compliance Calendar",
    subtitle: "Interactive statutory due-date tracker & automated reminders for GST, ROC, Tax, TDS & PF filings.",
    heroBadge: "Automated Due-Date Tracker",
    turnaroundTime: "24/7 Access",
    rating: 4.9,
    reviewCount: 4210,
    overview: {
      whatIsTitle: "What is the Statutory Compliance Calendar?",
      whatIsContent: "Our Statutory Compliance Calendar is an automated due-date tracking tool providing complete visibility into all upcoming statutory deadlines for MCA ROC, GST, Income Tax, TDS, PF/ESI, and Professional Tax.",
      whoShouldChooseTitle: "Who Needs Compliance Calendar?",
      whoShouldChooseContent: "Founders, CFOs, accountants, and business owners wanting zero penalty risk."
    },
    benefits: [{ title: "Automated Deadline Alerts", description: "Receive email & WhatsApp reminders 7 days prior to every statutory due date.", iconName: "Clock" }],
    processSteps: [
      { stepNumber: "01", title: "Profile Mapping", description: "Entity profiling & GST/ROC date mapping." },
      { stepNumber: "02", title: "Reminder Activation", description: "Automated reminder calendar activation." },
      { stepNumber: "03", title: "Status Tracking", description: "Real-time filing status tracking." }
    ],
    documentsRequired: ["Entity type & state location", "GSTIN & ROC registration details"],
    documentsDisclaimer: "Includes all central and state-specific statutory due dates.",
    pricingTiers: [{ name: "Compliance Calendar Pass", priceTag: "Starting from ₹999", description: "Annual compliance tracker.", features: ["Custom Entity Due-Date Mapping", "Automated WhatsApp & Email Reminders", "24/7 Compliance Dashboard Access"] }],
    faqs: [{ question: "Does the calendar send reminders before due dates?", answer: "Yes, automated reminders are triggered 7 days, 3 days, and 1 day before every statutory deadline." }],
    seoTitle: "Statutory Compliance Calendar India | Due Date Tracker | The Comply One",
    seoDescription: "Interactive Statutory Compliance Calendar for Indian businesses. Automated due-date tracker & reminders for GST, ROC, Income Tax, TDS & PF filings."
  }
};
