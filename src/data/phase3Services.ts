import { StartupServiceData } from "./startupServices";

export const PHASE3_SERVICES_DATA: Record<string, StartupServiceData> = {
  "society-registration": {
    slug: "society-registration",
    route: "/society-registration",
    title: "Society Registration",
    subtitle: "Register non-profit societies under the Societies Registration Act, 1860 for welfare, culture & education.",
    heroBadge: "Welfare & Cultural Society",
    turnaroundTime: "7 - 10 Working Days",
    rating: 4.8,
    reviewCount: 1240,
    overview: {
      whatIsTitle: "What is a Society?",
      whatIsContent: "A Society is an association of 7 or more individuals united for charitable, educational, literary, scientific, or cultural purposes. Governed under the Societies Registration Act, 1860 (and respective state rules), a society operates through an elected Governing Body and a Memorandum of Association.",
      whoShouldChooseTitle: "Who Should Choose Society Registration?",
      whoShouldChooseContent: "Society registration is ideal for resident welfare associations (RWAs), sports clubs, cultural groups, educational societies, literary associations, and charitable welfare organizations."
    },
    benefits: [
      {
        title: "Legal Democratic Body",
        description: "Governed by an elected Managing Committee with democratic voting rights for members.",
        iconName: "Users"
      },
      {
        title: "Tax Exemption Eligibility",
        description: "Eligible for 12A & 80G tax exemptions under the Income Tax Act for charitable activities.",
        iconName: "ShieldCheck"
      },
      {
        title: "Government Funding Access",
        description: "Enables societies to receive state government welfare grants and CSR contributions.",
        iconName: "TrendingUp"
      },
      {
        title: "Vested Property Ownership",
        description: "Property and funds are held legally in the name of the society, not individual members.",
        iconName: "Building2"
      }
    ],
    processSteps: [
      { stepNumber: "01", title: "Member Selection", description: "Minimum 7 founding members select society name and objective rules." },
      { stepNumber: "02", title: "MoA & Rules Drafting", description: "Drafting Memorandum of Association and Rules & Regulations governing the committee." },
      { stepNumber: "03", title: "Affidavit & Consent", description: "Obtaining signed affidavits, consent letters, and identity proofs of all office bearers." },
      { stepNumber: "04", title: "Registrar Filing", description: "Filing application before the Registrar of Societies of the respective state." },
      { stepNumber: "05", title: "Certificate Issuance", description: "Registrar issues official Certificate of Registration & Society PAN/TAN." }
    ],
    documentsRequired: [
      "PAN Card & Aadhaar of all 7+ Founding Members",
      "Passport photos of President, Secretary, and Treasurer",
      "Drafted Memorandum of Association & Rules & Regulations",
      "Address proof of Society Office (Rent Agreement / Electricity Bill + NOC)",
      "NOC Affidavit from Landlord executed on Stamp Paper"
    ],
    documentsDisclaimer: "At least 7 members required; minimum 3 office bearers (President, Secretary, Treasurer).",
    pricingTiers: [
      {
        name: "Basic Deed",
        priceTag: "Starting from ₹6,999",
        description: "Essential MoA & Rules drafting for society setup.",
        features: ["Custom MoA & Bylaws Drafting", "Office Bearer Consent Documents", "Digital Copy Delivery"]
      },
      {
        name: "Standard Registered Society",
        priceTag: "Starting from ₹11,999",
        description: "Complete Registrar filing + PAN + TAN allocation.",
        features: ["Custom MoA & Rules Drafting", "State Registrar of Societies Filing", "Society PAN & TAN Issuance", "Dedicated Legal Manager"],
        recommended: true
      },
      {
        name: "Complete NGO Pass",
        priceTag: "Starting from ₹18,999",
        description: "Full setup + 12A/80G + Darpan Registration.",
        features: ["Everything in Standard Package", "Form 10A (12A & 80G Approval Filing)", "NITI Aayog Darpan Registration", "1st Year Compliance Guide"]
      }
    ],
    faqs: [
      { question: "How many members are needed to register a Society?", answer: "A minimum of 7 members is required under the Societies Registration Act, 1860." },
      { question: "Can family members form a Society?", answer: "Yes, but office bearers should ideally include independent members to avoid conflict of interest during government grant applications." }
    ],
    seoTitle: "Society Registration Online in India | RWA & NGO | The Comply One",
    seoDescription: "Register non-profit Society online with MoA drafting, Rules & Regulations, Registrar of Societies filing, PAN, TAN & 12A/80G assistance."
  },

  "startup-registration": {
    slug: "startup-registration",
    route: "/startup-registration",
    title: "Startup India Registration (DPIIT)",
    subtitle: "Obtain official DPIIT Recognition for 3-year income tax exemptions (Section 80-IAC) & fast-track patents.",
    heroBadge: "DPIIT Govt Recognized",
    turnaroundTime: "3 - 5 Working Days",
    rating: 4.9,
    reviewCount: 3120,
    overview: {
      whatIsTitle: "What is Startup India Registration?",
      whatIsContent: "Startup India is a flagship initiative of the Government of India designed to build a strong ecosystem for nurturing innovation. Obtaining DPIIT Recognition grants eligible entities access to tax exemptions, easy winding up, self-certification under labor laws, and fast-track patent applications.",
      whoShouldChooseTitle: "Who Should Choose Startup Registration?",
      whoShouldChooseContent: "Pvt Ltd companies, LLPs, and Registered Partnerships incorporated within the last 10 years working towards innovation, development, or commercialization of new products/services with scalable business models."
    },
    benefits: [
      { title: "3-Year Tax Holiday (80-IAC)", description: "100% Income Tax exemption for 3 consecutive financial years out of 10 years.", iconName: "ShieldCheck" },
      { title: "Angel Tax Exemption", description: "Exemption from Section 56(2)(viib) angel tax on share premium raised from investors.", iconName: "TrendingUp" },
      { title: "80% Patent Fee Discount", description: "Fast-track examination and 80% discount on patent/trademark filing fees.", iconName: "Award" },
      { title: "Govt E-Marketplace (GeM)", description: "Exemption from Earnest Money Deposit (EMD) and prior turnover criteria in public tenders.", iconName: "Zap" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Entity Check", description: "Verifying incorporation status (Pvt Ltd, LLP or Partnership <10 years old)." },
      { stepNumber: "02", title: "Pitch Deck & Pitch Summary", description: "Drafting innovation summary, scalability model, and problem statement." },
      { stepNumber: "03", title: "DPIIT Portal Application", description: "Submitting online application on National Single Window System (NSWS)." },
      { stepNumber: "04", title: "Government Verification", description: "Ministry evaluates innovation metrics and business scope." },
      { stepNumber: "05", title: "Recognition Certificate", description: "DPIIT issues official Startup Recognition Certificate with DIPP Number." }
    ],
    documentsRequired: [
      "Certificate of Incorporation / Registration Certificate",
      "Director / Partner Details & PAN Cards",
      "Write-up explaining the innovative nature of product/service",
      "Pitch Deck / Website URL / Demo Video Link",
      "Patents / Trademarks awards if any"
    ],
    documentsDisclaimer: "Turnover must not have exceeded ₹100 Crores in any previous financial year.",
    pricingTiers: [
      {
        name: "Basic Recognition",
        priceTag: "Starting from ₹2,999",
        description: "Standard DPIIT portal application.",
        features: ["Innovation Summary Review", "DPIIT Portal Application Submission", "DIPP Certificate Delivery"]
      },
      {
        name: "Tax Exemption Bundle",
        priceTag: "Starting from ₹6,999",
        description: "DPIIT Recognition + Sec 80-IAC Tax Exemption Application.",
        features: ["Everything in Basic", "Section 80-IAC Tax Exemption Filing", "Angel Tax Exemption Self-Declaration", "Dedicated Startup Advisor"],
        recommended: true
      },
      {
        name: "GeM & Funding Ready",
        priceTag: "Starting from ₹11,999",
        description: "Full DPIIT + GeM Portal + Investor Pitch Review.",
        features: ["Everything in Tax Exemption Bundle", "GeM Portal Registration & EMD Waiver", "Government Seed Fund Scheme Guidance", "Priority Support"]
      }
    ],
    faqs: [
      { question: "Can a Sole Proprietorship get Startup India recognition?", answer: "No, DPIIT recognition is available only for Private Limited Companies, LLPs, and Registered Partnership Firms." }
    ],
    seoTitle: "Startup India DPIIT Recognition Registration | The Comply One",
    seoDescription: "Apply for DPIIT Startup India Recognition online. Get 80-IAC 3-year tax exemption, angel tax relief, GeM portal waivers, and 80% patent discounts."
  },

  "msme-registration": {
    slug: "msme-registration",
    route: "/msme-registration",
    title: "MSME / Udyam Registration",
    subtitle: "Get your government Udyam Certificate to unlock priority sector bank loans & subsidies.",
    heroBadge: "Instant Udyam Allocation",
    turnaroundTime: "1 - 2 Working Days",
    rating: 4.9,
    reviewCount: 5840,
    overview: {
      whatIsTitle: "What is Udyam MSME Registration?",
      whatIsContent: "Udyam Registration is an official government recognition certificate issued by the Ministry of Micro, Small and Medium Enterprises (MSME). It assigns a unique 19-digit Udyam Registration Number (URN) linked to Aadhaar & PAN.",
      whoShouldChooseTitle: "Who Should Choose MSME?",
      whoShouldChooseContent: "All manufacturing and service enterprises including proprietorships, partnerships, LLPs, and companies are eligible to register as Micro, Small, or Medium enterprises based on investment and turnover."
    },
    benefits: [
      { title: "Priority Bank Loans", description: "Access collateral-free bank loans under CGTMSE scheme with lower interest rates.", iconName: "TrendingUp" },
      { title: "50% Patent & TM Discount", description: "50% government fee subsidy on trademark and patent applications.", iconName: "Award" },
      { title: "Delayed Payment Protection", description: "Protection against delayed buyer payments under MSME Samadhaan portal rules.", iconName: "ShieldCheck" },
      { title: "Electricity Bill Subsidies", description: "State-level concessions on electricity tariffs and ISO certification costs.", iconName: "Zap" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Aadhaar Validation", description: "OTP verification using promoter's Aadhaar linked mobile number." },
      { stepNumber: "02", title: "PAN & Investment Data", description: "Fetching turnover & plant investment details automatically via Income Tax." },
      { stepNumber: "03", title: "NIC Code Selection", description: "Mapping correct National Industrial Classification (NIC) business codes." },
      { stepNumber: "04", title: "Udyam Issuance", description: "Instant generation of official Udyam Registration Certificate with QR Code." }
    ],
    documentsRequired: [
      "Aadhaar Card of Proprietor / Partner / Director",
      "PAN Card of the Business / Proprietor",
      "Bank Account details (IFSC & Account Number)",
      "Business Address details"
    ],
    documentsDisclaimer: "100% paperless registration based on Aadhaar OTP validation.",
    pricingTiers: [
      {
        name: "Standard Udyam",
        priceTag: "Starting from ₹999",
        description: "Instant Udyam Registration Certificate.",
        features: ["Aadhaar & PAN Verification", "NIC Code Classification", "Official Udyam Certificate Delivery", "Current Bank Account Assistance"]
      },
      {
        name: "MSME Pro Bundle",
        priceTag: "Starting from ₹2,499",
        description: "Udyam Certificate + Govt Subsidy & Samadhaan Guidance.",
        features: ["Everything in Standard Udyam", "CGTMSE Bank Loan Guidance", "MSME Samadhaan Portal Setup", "50% TM Subsidy Consultation"],
        recommended: true
      }
    ],
    faqs: [
      { question: "Is Udyam Registration mandatory?", answer: "While voluntary, it is necessary to claim MSME government subsidies, priority bank loans, and delayed payment legal protection." }
    ],
    seoTitle: "Udyam MSME Registration Online India | The Comply One",
    seoDescription: "Get new Udyam MSME Registration Certificate online in 1-2 days. Claim CGTMSE collateral-free loans, 50% TM subsidies & tariff rebates."
  },

  "digital-signature": {
    slug: "digital-signature",
    route: "/digital-signature",
    title: "Digital Signature Certificate (DSC)",
    subtitle: "Class 3 USB e-Token DSC for MCA filings, Income Tax returns, GST portals & e-tenders.",
    heroBadge: "Class 3 USB Token",
    turnaroundTime: "Same Day Issuance",
    rating: 4.9,
    reviewCount: 4210,
    overview: {
      whatIsTitle: "What is a Digital Signature Certificate?",
      whatIsContent: "A Digital Signature Certificate (DSC) is a secure digital key issued by Licensed Certifying Authorities (CAs) to authenticate identity online. Class 3 DSC is the highest assurance level required for e-filing forms on MCA, Income Tax, GST, EPFO, and e-Procurement portals.",
      whoShouldChooseTitle: "Who Needs a DSC?",
      whoShouldChooseContent: "Company directors, designated partners, Chartered Accountants, authorized signatories, government contractors, and exporters filing digital returns."
    },
    benefits: [
      { title: "Class 3 Highest Security", description: "Encrypted with SHA-256 algorithm stored on FIPS-compliant USB e-Token.", iconName: "ShieldCheck" },
      { title: "Multi-Portal Validity", description: "Works seamlessly across MCA V3, Income Tax, GST, EPFO, ICEGATE & e-Tenders.", iconName: "Globe" },
      { title: "Instant Video Verification", description: "Quick 2-minute online video & Aadhaar OTP verification.", iconName: "Zap" },
      { title: "2-Year & 3-Year Options", description: "Flexible validity options with doorstep USB token shipping.", iconName: "Clock" }
    ],
    processSteps: [
      { stepNumber: "01", title: "E-KYC Verification", description: "Submitting Aadhaar OTP / PAN data for instant identity verification." },
      { stepNumber: "02", title: "Short Video Recording", description: "Completing 15-second online video verification on phone or laptop." },
      { stepNumber: "03", title: "Certifying Approval", description: "Licensed CA verifies video and approves digital certificate." },
      { stepNumber: "04", title: "Token Download & Dispatch", description: "Downloading DSC onto secure USB e-Token & courier dispatch." }
    ],
    documentsRequired: [
      "PAN Card copy of Applicant",
      "Aadhaar Card copy of Applicant",
      "Mobile number & Email ID linked with Aadhaar",
      "Passport photo"
    ],
    documentsDisclaimer: "Requires physical USB e-Token for signing documents on Windows/Mac.",
    pricingTiers: [
      {
        name: "2-Year Class 3 DSC",
        priceTag: "Starting from ₹1,499",
        description: "Class 3 Signing Certificate + USB Token.",
        features: ["Class 3 Signing Certificate", "FIPS Compliant USB e-Token", "2-Year Validity", "Video Verification Support"]
      },
      {
        name: "3-Year Class 3 Combo",
        priceTag: "Starting from ₹2,199",
        description: "Class 3 Signing + Encryption Certificate.",
        features: ["Class 3 Signing + Encryption", "USB e-Token Included", "3-Year Extended Validity", "Priority Express Shipping"],
        recommended: true
      }
    ],
    faqs: [
      { question: "Can I use one DSC for multiple companies?", answer: "Yes, a director's personal DSC can be used to sign MCA forms for all companies in which they hold a DIN." }
    ],
    seoTitle: "Class 3 Digital Signature Certificate (DSC) Online | The Comply One",
    seoDescription: "Buy Class 3 Digital Signature Certificate (DSC) online with FIPS USB token. Same day approval for MCA V3, Income Tax, GST & e-Tenders."
  },

  "fssai-registration": {
    slug: "fssai-registration",
    route: "/fssai-registration",
    title: "FSSAI Food License Registration",
    subtitle: "14-digit FSSAI food safety registration for cloud kitchens, restaurants, food packaging & trading.",
    heroBadge: "FoSCoS Govt License",
    turnaroundTime: "3 - 5 Working Days",
    rating: 4.8,
    reviewCount: 3640,
    overview: {
      whatIsTitle: "What is FSSAI License?",
      whatIsContent: "FSSAI registration is a mandatory 14-digit food safety license number issued by the Food Safety and Standards Authority of India under the FoSCoS portal. It ensures food products undergo quality checks.",
      whoShouldChooseTitle: "Who Needs FSSAI?",
      whoShouldChooseContent: "Restaurants, cloud kitchens, food manufacturers, distributors, caterers, grocery stores, food delivery vendors (Swiggy/Zomato), and food exporters."
    },
    benefits: [
      { title: "Legal Compliance", description: "Mandatory 14-digit number required on food labels and Zomato/Swiggy onboarding.", iconName: "ShieldCheck" },
      { title: "Consumer Brand Trust", description: "Builds customer confidence regarding hygiene standards and food safety.", iconName: "Award" },
      { title: "Business Expansion", description: "Easily expand from Basic Registration to State/Central Licenses as turnover grows.", iconName: "TrendingUp" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Food Category Selection", description: "Mapping business type and food category codes." },
      { stepNumber: "02", title: "FoSCoS Application", description: "Filing Form A / Form B on the FoSCoS government portal." },
      { stepNumber: "03", title: "Department Processing", description: "Food safety officer review and verification." },
      { stepNumber: "04", title: "License Delivery", description: "Official 14-digit FSSAI Certificate issued." }
    ],
    documentsRequired: [
      "Photo ID & Aadhaar of Promoter",
      "Proof of Business Premises (Rent Agreement / Electricity Bill + NOC)",
      "List of Food Categories to be handled",
      "Water testing report (for manufacturing/kitchen units)"
    ],
    documentsDisclaimer: "Basic Registration up to ₹12L turnover; State License ₹12L-₹20Cr; Central License >₹20Cr.",
    pricingTiers: [
      {
        name: "Basic Registration",
        priceTag: "Starting from ₹1,999",
        description: "For small food businesses with turnover up to ₹12 Lakhs/year.",
        features: ["FoSCoS Portal Filing", "1-Year Basic FSSAI License", "Zomato/Swiggy Onboarding Assistance"]
      },
      {
        name: "State License",
        priceTag: "Starting from ₹4,999",
        description: "For turnover between ₹12 Lakhs and ₹20 Crores/year.",
        features: ["State FSSAI Application Filing", "FSMS Plan Drafting", "Dedicated Food Safety Consultant"],
        recommended: true
      }
    ],
    faqs: [
      { question: "Is FSSAI mandatory for selling food on Swiggy or Zomato?", answer: "Yes, food aggregators strictly require a valid 14-digit FSSAI license for merchant onboarding." }
    ],
    seoTitle: "FSSAI Food License Registration Online | FoSCoS | The Comply One",
    seoDescription: "Apply for FSSAI Food License online. Basic, State & Central 14-digit FoSCoS registration for cloud kitchens, restaurants & food trading."
  },

  "import-export-code": {
    slug: "import-export-code",
    route: "/import-export-code",
    title: "Import Export Code (IEC) Registration",
    subtitle: "10-digit lifetime validity code issued by DGFT for cross-border trade & international business.",
    heroBadge: "DGFT Lifetime Code",
    turnaroundTime: "1 - 3 Working Days",
    rating: 4.9,
    reviewCount: 2840,
    overview: {
      whatIsTitle: "What is an Import Export Code (IEC)?",
      whatIsContent: "An Import Export Code (IEC) is a 10-digit primary business identification code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce. It is mandatory for importing or exporting goods & services from India.",
      whoShouldChooseTitle: "Who Needs an IEC?",
      whoShouldChooseContent: "Any business entity or individual planning to export goods/services out of India or import commercial shipments, software, or machinery into India."
    },
    benefits: [
      { title: "Lifetime Validity", description: "No renewal fees required; valid for the lifetime of the business entity.", iconName: "Clock" },
      { title: "Customs & Port Clearance", description: "Mandatory for clearing customs shipments at sea ports and international airports.", iconName: "Globe" },
      { title: "Export Incentive Eligibility", description: "Unlocks RoDTEP, RoSCTL, and DGFT export promotion schemes & duty drawbacks.", iconName: "TrendingUp" }
    ],
    processSteps: [
      { stepNumber: "01", title: "DGFT Portal Profile", description: "Creating digital profile on DGFT portal with DSC / Aadhaar e-sign." },
      { stepNumber: "02", title: "Application Filing", description: "Submitting ANF 2A form with bank account & premises details." },
      { stepNumber: "03", title: "Government Approval", description: "Automated verification against PAN database." },
      { stepNumber: "04", title: "IEC Certificate", description: "Instant issue of e-IEC certificate with 10-digit code." }
    ],
    documentsRequired: [
      "PAN Card of Business / Proprietor",
      "Aadhaar / Passport of Applicant",
      "Cancelled Cheque / Bank Certificate with pre-printed name",
      "Proof of Registered Business Address (Electricity Bill / Rent Agreement)"
    ],
    documentsDisclaimer: "Requires annual online updating on DGFT portal between April and June.",
    pricingTiers: [
      {
        name: "Standard IEC",
        priceTag: "Starting from ₹1,999",
        description: "Complete DGFT IEC registration.",
        features: ["DGFT Application Filing", "10-Digit Lifetime IEC Allocation", "ICEGATE Customs Registration Guidance"]
      },
      {
        name: "Export Master Bundle",
        priceTag: "Starting from ₹4,999",
        description: "IEC Code + GST LUT Export Filing.",
        features: ["Everything in Standard IEC", "GST LUT Filing (Zero Rated Export)", "RCMC Council Registration Guidance"],
        recommended: true
      }
    ],
    faqs: [
      { question: "Does IEC require annual renewal?", answer: "No renewal fee is charged, but DGFT mandates an annual online confirmation of details between April and June." }
    ],
    seoTitle: "Import Export Code (IEC) Registration Online DGFT | The Comply One",
    seoDescription: "Get 10-digit Import Export Code (IEC) online from DGFT in 1-3 days. Lifetime validity for international trade & customs clearance."
  },

  "professional-tax-registration": {
    slug: "professional-tax-registration",
    route: "/professional-tax-registration",
    title: "Professional Tax Registration (PTEC & PTRC)",
    subtitle: "State-level Professional Tax registration for business entities, employers & working professionals.",
    heroBadge: "State Tax Compliance",
    turnaroundTime: "3 - 5 Working Days",
    rating: 4.8,
    reviewCount: 1940,
    overview: {
      whatIsTitle: "What is Professional Tax Registration?",
      whatIsContent: "Professional Tax is a state-level tax levied on professions, trades, callings, and employment. Business entities require two types of registrations: PTEC (Professional Tax Enrolment Certificate for the business/proprietor) and PTRC (Professional Tax Registration Certificate for deducting tax from employees).",
      whoShouldChooseTitle: "Who Needs PT Registration?",
      whoShouldChooseContent: "All employers, companies, LLPs, partnership firms, and self-employed professionals operating in states enforcing Professional Tax laws (e.g. Maharashtra, Karnataka, Tamil Nadu, West Bengal, Gujarat)."
    },
    benefits: [
      { title: "Statutory Employer Compliance", description: "Avoid heavy state penalties and interest for non-deduction of employee tax.", iconName: "ShieldCheck" },
      { title: "Deductible Business Expense", description: "Professional tax paid by the employer is deductible under Income Tax calculations.", iconName: "TrendingUp" }
    ],
    processSteps: [
      { stepNumber: "01", title: "State Portal Filing", description: "Submitting application on State Commercial Tax portal." },
      { stepNumber: "02", title: "PTEC & PTRC Selection", description: "Selecting entity enrolment and employer registration." },
      { stepNumber: "03", title: "Certificate Issuance", description: "Receiving PTEC & PTRC registration numbers." }
    ],
    documentsRequired: [
      "PAN Card of Entity & Directors/Partners",
      "Proof of Business Premises (Rent Agreement + Electricity Bill)",
      "Employee details & monthly salary register",
      "Bank Account details & Cancelled Cheque"
    ],
    documentsDisclaimer: "Professional tax slab rates vary across Indian states.",
    pricingTiers: [
      {
        name: "PTEC Registration",
        priceTag: "Starting from ₹1,999",
        description: "Enrolment certificate for entity/proprietor.",
        features: ["PTEC Application Filing", "Registration Certificate Delivery", "Annual PT Advisory"]
      },
      {
        name: "PTEC + PTRC Dual Package",
        priceTag: "Starting from ₹3,999",
        description: "Employer & Employee dual registration.",
        features: ["PTEC + PTRC Registrations", "Employee PT Tax Calculation Template", "First Return Filing Guidance"],
        recommended: true
      }
    ],
    faqs: [
      { question: "What is the difference between PTEC and PTRC?", answer: "PTEC is paid by the business owner/entity for its own right to practice, while PTRC is for deducting and remitting PT from employee salaries." }
    ],
    seoTitle: "Professional Tax Registration (PTEC & PTRC) | The Comply One",
    seoDescription: "Apply for Professional Tax Registration (PTEC & PTRC) online. Mandatory state compliance for companies, employers & self-employed professionals."
  },

  "shop-establishment-registration": {
    slug: "shop-establishment-registration",
    route: "/shop-establishment-registration",
    title: "Shop & Establishment Registration",
    subtitle: "Mandatory municipal commercial license for physical offices, retail outlets, and commercial establishments.",
    heroBadge: "Municipal Office License",
    turnaroundTime: "3 - 5 Working Days",
    rating: 4.8,
    reviewCount: 2420,
    overview: {
      whatIsTitle: "What is Shop & Establishment Registration?",
      whatIsContent: "Shop and Establishment License (also known as Shop Act License or Gumasta License) is a state municipal government license regulating working hours, employee rights, leaves, and commercial office operation within a state.",
      whoShouldChooseTitle: "Who Needs Shop Act License?",
      whoShouldChooseContent: "Every commercial office, retail shop, restaurant, IT agency, warehouse, and service establishment operating from a physical premises."
    },
    benefits: [
      { title: "Bank Account Prerequisite", description: "Mandatory document required by Indian banks to open a commercial current bank account.", iconName: "Building2" },
      { title: "Municipal Legal Recognition", description: "Serves as official government proof of business address and commercial existence.", iconName: "ShieldCheck" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Municipal Form Filing", description: "Filing application on State Labor Department portal." },
      { stepNumber: "02", title: "Premises & Employee Data", description: "Submitting details of working hours, employees, and office address." },
      { stepNumber: "03", title: "Registration Issuance", description: "Receiving official Shop & Establishment Certificate." }
    ],
    documentsRequired: [
      "PAN Card of Business / Proprietor",
      "Aadhaar Card of Owner / Partners / Directors",
      "Photo of Shop/Office front board displaying name in local language",
      "Proof of Office Premises (Rent Agreement + Electricity Bill + NOC)"
    ],
    documentsDisclaimer: "Rules, fees, and photo board guidelines vary by state labor department.",
    pricingTiers: [
      {
        name: "Standard Shop Act",
        priceTag: "Starting from ₹1,499",
        description: "Municipal labor portal registration.",
        features: ["Labor Department Portal Filing", "Official Shop Act Certificate Delivery", "Current Bank Account Proof"]
      }
    ],
    faqs: [
      { question: "Is Shop Act mandatory for IT companies and home offices?", answer: "Yes, most state municipal laws require all commercial entities to obtain Shop Act registration within 30 days of commencing operations." }
    ],
    seoTitle: "Shop & Establishment Registration Online | Shop Act | The Comply One",
    seoDescription: "Apply for Shop & Establishment License (Shop Act / Gumasta) online. Mandatory municipal license for commercial offices, retail shops & current bank accounts."
  },

  /* TRADEMARK SERVICES */
  "trademark-registration": {
    slug: "trademark-registration",
    route: "/trademark/registration",
    title: "Trademark Registration (™)",
    subtitle: "Protect your brand name, logo and identity with professional trademark assistance.",
    heroBadge: "24-Hour Brand Filing",
    turnaroundTime: "24 Hours Application Filing",
    rating: 4.9,
    reviewCount: 6240,
    overview: {
      whatIsTitle: "What is a Trademark?",
      whatIsContent: "A Trademark is an intellectual property asset consisting of a brand name, logo, slogan, shape, or sound that uniquely identifies your goods or services. Regulated under the Trade Marks Act, 1999, registration grants exclusive legal nationwide ownership.",
      whoShouldChooseTitle: "Why Register a Trademark?",
      whoShouldChooseContent: "Every business, startup, brand owner, and creator should register their trademark to stop competitors from copying their name, build brand equity, and use the ™ symbol immediately upon filing."
    },
    benefits: [
      { title: "Immediate ™ Symbol Rights", description: "Start using the ™ symbol alongside your brand within 24 hours of filing Form TM-A.", iconName: "Award" },
      { title: "Exclusive Brand Rights", description: "Legal ownership preventing unauthorized third parties from using identical or similar names.", iconName: "ShieldCheck" },
      { title: "10-Year Protection", description: "Valid for 10 years and renewable indefinitely every 10 years.", iconName: "Clock" },
      { title: "Valuable Intangible Asset", description: "Registered ® trademark can be licensed, franchised, or sold for high brand valuation.", iconName: "TrendingUp" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Comprehensive TM Search", description: "Checking database across 45 TM classes for phonetic & exact matches." },
      { stepNumber: "02", title: "Class Mapping & TM-A Drafting", description: "Mapping correct goods/services classes & drafting user affidavit." },
      { stepNumber: "03", title: "Filing Form TM-A", description: "Submitting application on IP India e-filing portal with Class 3 DSC." },
      { stepNumber: "04", title: "™ Receipt & Monitoring", description: "Issuance of official TM application receipt allowing immediate ™ usage." }
    ],
    documentsRequired: [
      "Brand Name and Logo Artwork (JPEG/PNG)",
      "Applicant PAN & Aadhaar (or Company Incorporation Certificate)",
      "Signed Form TM-48 (Power of Attorney)",
      "MSME / Udyam Certificate (for 50% government fee discount)"
    ],
    documentsDisclaimer: "Government fee is ₹4,500 for Individuals/MSMEs and ₹9,000 for non-MSME enterprise entities.",
    pricingTiers: [
      {
        name: "Basic TM Filing",
        priceTag: "Starting from ₹1,999",
        description: "Professional TM-A application filing in 24 hours.",
        features: ["TM Class Mapping", "Form TM-A Application Drafting", "24-Hour Portal Filing Receipt", "Use ™ Symbol Immediately"]
      },
      {
        name: "Standard TM Protection",
        priceTag: "Starting from ₹3,999",
        description: "Deep TM Search + Filing + Objection Alert.",
        features: ["Comprehensive 45-Class TM Search Report", "Form TM-A Application Drafting", "24-Hour Portal Filing Receipt", "1-Year TM Examination & Objection Alert", "Dedicated IP Attorney"],
        recommended: true
      },
      {
        name: "Complete Brand Shield",
        priceTag: "Starting from ₹6,999",
        description: "TM Filing + Free 1st Objection Reply Drafting.",
        features: ["Everything in Standard TM Protection", "Complimentary 1st Examination Report Objection Reply", "Trademark Journal Publication Tracking", "® Registration Certificate Delivery"]
      }
    ],
    faqs: [
      { question: "When can I start using the ™ symbol?", answer: "You can use the ™ symbol immediately after receiving the official TM-A filing acknowledgment receipt (within 24 hours)." },
      { question: "When can I use the ® symbol?", answer: "The ® symbol can be used only after the Registrar of Trademarks officially grants the Registration Certificate." }
    ],
    seoTitle: "Trademark Registration Online India (™) | The Comply One",
    seoDescription: "Protect your brand name & logo online with 24-hour ™ trademark registration filing. Includes deep search, class mapping & 50% MSME subsidy guidance."
  },

  "trademark-search": {
    slug: "trademark-search",
    route: "/trademark/search",
    title: "Trademark Search & Clearance",
    subtitle: "Comprehensive phonetic and exact match similarity search across all 45 Trademark Registry classes.",
    heroBadge: "Deep Similarity Report",
    turnaroundTime: "Same Day Search Report",
    rating: 4.9,
    reviewCount: 2450,
    overview: {
      whatIsTitle: "Why Trademark Search Matters?",
      whatIsContent: "Conducting a thorough trademark search before filing prevents application rejections, examination objections under Section 11, expensive litigation, and brand re-naming down the road.",
      whoShouldChooseTitle: "Who Needs a TM Search?",
      whoShouldChooseContent: "Any business, startup, or entrepreneur launching a new brand name, logo, product line, or domain name."
    },
    benefits: [
      { title: "Phonetic Match Analysis", description: "Scans for sound-alike names (e.g. 'Koka' vs 'Coca') across 45 classes.", iconName: "ShieldCheck" },
      { title: "Risk Percentage Breakdown", description: "Provides clear Low, Medium, or High registrability probability score.", iconName: "TrendingUp" },
      { title: "IP Attorney Advice", description: "Expert suggestions for brand name tweaks to guarantee 100% registration success.", iconName: "Award" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Submit Brand Name", description: "Provide proposed brand names, logo and business activity." },
      { stepNumber: "02", title: "Class Mapping", description: "Identifying applicable NICE classification classes." },
      { stepNumber: "03", title: "IP Database Search", description: "Scanning active, pending, opposed, and abandoned marks." },
      { stepNumber: "04", title: "Report Delivery", description: "Delivering detailed TM Search & Registrability Report." }
    ],
    documentsRequired: ["Proposed Brand Name / Slogan", "Logo Artwork (optional)", "Brief description of products/services"],
    documentsDisclaimer: "Same day delivery of search report by Senior IP Attorney.",
    pricingTiers: [
      {
        name: "Standard Search",
        priceTag: "Starting from ₹499",
        description: "Complete 45-class TM search report.",
        features: ["Phonetic & Exact Match Search", "45-Class Scanning", "Registrability Risk Score", "Same Day Delivery"]
      }
    ],
    faqs: [
      { question: "What are TM classes?", answer: "Trademarks are categorized into 45 classes (1-34 for goods, 35-45 for services) based on the international NICE classification." }
    ],
    seoTitle: "Trademark Search Online India | Class Search | The Comply One",
    seoDescription: "Perform deep online Trademark Search across 45 classes. Same-day phonetic & similarity report by IP attorneys before brand filing."
  },

  "trademark-renewal": {
    slug: "trademark-renewal",
    route: "/trademark/renewal",
    title: "Trademark Renewal",
    subtitle: "Extend your registered ® trademark protection for an additional 10-year period.",
    heroBadge: "10-Year Protection Extension",
    turnaroundTime: "2 - 4 Working Days",
    rating: 4.8,
    reviewCount: 1540,
    overview: {
      whatIsTitle: "What is Trademark Renewal?",
      whatIsContent: "Registered trademarks in India are valid for 10 years from the date of application. Filing Form TM-R extends protection for an additional 10 years, ensuring continuous legal ownership without losing brand rights.",
      whoShouldChooseTitle: "When to Renew?",
      whoShouldChooseContent: "Trademark renewal can be filed within 6 months prior to the expiration date (or up to 6 months post-expiration with late surcharge)."
    },
    benefits: [
      { title: "Indefinite Protection", description: "Trademarks can be renewed every 10 years indefinitely to maintain brand equity.", iconName: "Clock" },
      { title: "Continuous ® Rights", description: "Prevents brand status from changing to 'Removed' or 'Lapsed'.", iconName: "ShieldCheck" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Certificate Review", description: "Verifying original TM registration number & renewal due date." },
      { stepNumber: "02", title: "Form TM-R Drafting", description: "Drafting renewal application and power of attorney." },
      { stepNumber: "03", title: "IP Portal Submission", description: "Filing TM-R with prescribed government renewal fee." },
      { stepNumber: "04", title: "Renewal Certificate", description: "TM Registry issues Renewal Certificate extending mark for 10 years." }
    ],
    documentsRequired: ["Copy of Trademark Registration Certificate", "TM Application Number", "Signed Power of Attorney (Form TM-48)"],
    documentsDisclaimer: "Govt fee for renewal is ₹9,000 per class (within due date).",
    pricingTiers: [
      {
        name: "Standard Renewal",
        priceTag: "Starting from ₹2,499",
        description: "Form TM-R application filing.",
        features: ["Form TM-R Drafting", "IP India Portal Submission", "Renewal Certificate Delivery"]
      }
    ],
    faqs: [
      { question: "What happens if I miss the renewal deadline?", answer: "You can renew within 6 months after expiry with a late fee, or apply for restoration (Form TM-R) within 1 year of expiry." }
    ],
    seoTitle: "Trademark Renewal Online India (Form TM-R) | The Comply One",
    seoDescription: "Renew your registered ® trademark online with Form TM-R filing. Extend brand protection for 10 years and prevent brand lapse."
  },

  "trademark-objection": {
    slug: "trademark-objection",
    route: "/trademark/objection",
    title: "Trademark Objection Reply",
    subtitle: "Draft legal responses to examination reports & Section 9/11 objections raised by the TM Registry.",
    heroBadge: "Legal CA/IP Attorney Response",
    turnaroundTime: "3 - 5 Working Days",
    rating: 4.9,
    reviewCount: 3890,
    overview: {
      whatIsTitle: "What is a Trademark Objection?",
      whatIsContent: "After filing Form TM-A, the TM Examiner issues an Examination Report. If objections are raised under Section 9 (lack of distinctiveness) or Section 11 (similarity with existing marks), a formal legal reply must be filed within 30 days.",
      whoShouldChooseTitle: "Who Needs an Objection Reply?",
      whoShouldChooseContent: "Any trademark applicant whose status shows 'Objected' in the IP India portal."
    },
    benefits: [
      { title: "Strong Legal Precedents", description: "Drafted by experienced IP advocates using High Court & TM Board case laws.", iconName: "ShieldCheck" },
      { title: "Avoid Application Abandonment", description: "Filing within 30 days prevents the application from being declared 'Abandoned'.", iconName: "Clock" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Examination Analysis", description: "Reviewing examination report objections under Sec 9 & 11." },
      { stepNumber: "02", title: "Evidence Collection", description: "Gathering user invoices, sales data, and logo usage proofs." },
      { stepNumber: "03", title: "Legal Drafting", description: "Drafting comprehensive legal reply with supporting case laws." },
      { stepNumber: "04", title: "MIS Filing", description: "Submitting response on IP India portal under Form MIS-REPLY." }
    ],
    documentsRequired: ["Copy of Examination Report", "User Affidavit & Sales Invoices (if claiming prior usage)", "Logo / Marketing materials"],
    documentsDisclaimer: "Reply must be filed strictly within 30 days of receiving the examination report.",
    pricingTiers: [
      {
        name: "Standard Objection Reply",
        priceTag: "Starting from ₹2,999",
        description: "Legal reply drafting by IP Advocate.",
        features: ["Examination Report Analysis", "Custom Legal Draft with Precedents", "User Evidence Compilation", "Portal MIS Filing"]
      }
    ],
    faqs: [
      { question: "What is the deadline to reply to a TM objection?", answer: "The legal response must be uploaded within 30 days from the date of receipt of the examination report." }
    ],
    seoTitle: "Trademark Objection Reply Drafting Online | Section 9 & 11 | The Comply One",
    seoDescription: "File legal reply to Trademark Examination Report online. CA & IP attorney drafting for Section 9 & 11 objections within 30 days."
  },

  "trademark-opposition": {
    slug: "trademark-opposition",
    route: "/trademark/opposition",
    title: "Trademark Opposition",
    subtitle: "File Form TM-O opposition notices to protect your registered brand from unauthorized copycats.",
    heroBadge: "Brand Protection Defense",
    turnaroundTime: "5 - 7 Working Days",
    rating: 4.8,
    reviewCount: 1680,
    overview: {
      whatIsTitle: "What is Trademark Opposition?",
      whatIsContent: "When a trademark application is advertised in the Trademark Journal, any third party can file an opposition notice (Form TM-O) within 4 months if the advertised mark infringes upon their registered brand.",
      whoShouldChooseTitle: "Who Needs Opposition Filing?",
      whoShouldChooseContent: "Brand owners who discover a competitor trying to register a similar name in the TM Journal, OR applicants defending against a notice of opposition."
    },
    benefits: [
      { title: "Protect Brand Equity", description: "Stop copycats from acquiring legal trademark rights in your market sector.", iconName: "ShieldCheck" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Journal Analysis", description: "Reviewing advertised mark and grounds of opposition." },
      { stepNumber: "02", title: "Form TM-O Drafting", description: "Drafting Notice of Opposition / Counter Statement." },
      { stepNumber: "03", title: "Filing & Serving Notice", description: "Filing Form TM-O on portal and serving copy to applicant." }
    ],
    documentsRequired: ["Copy of TM Journal Advertisement", "Proof of Prior Trademark Ownership", "Power of Attorney (Form TM-48)"],
    documentsDisclaimer: "Opposition must be filed strictly within 4 months of TM Journal publication.",
    pricingTiers: [
      {
        name: "Opposition Notice",
        priceTag: "Starting from ₹6,999",
        description: "Form TM-O drafting and portal filing.",
        features: ["TM-O Notice Drafting", "Grounds of Opposition Compilation", "IP Portal Filing"]
      }
    ],
    faqs: [
      { question: "What is the window for filing a TM Opposition?", answer: "Strictly 4 months from the date the trademark is published in the Trademark Journal." }
    ],
    seoTitle: "Trademark Opposition Notice Filing (Form TM-O) | The Comply One",
    seoDescription: "File Form TM-O Trademark Opposition notice online. Protect your registered brand against copycat applications published in the TM Journal."
  },

  "trademark-assignment": {
    slug: "trademark-assignment",
    route: "/trademark/assignment",
    title: "Trademark Assignment & Licensing",
    subtitle: "Legal transfer of trademark ownership rights or commercial licensing under Form TM-P.",
    heroBadge: "Legal Ownership Transfer",
    turnaroundTime: "5 - 8 Working Days",
    rating: 4.8,
    reviewCount: 1120,
    overview: {
      whatIsTitle: "What is Trademark Assignment?",
      whatIsContent: "Trademark Assignment is the process by which a trademark owner (Assignor) transfers ownership rights, goodwill, or title of a trademark to another party (Assignee) through a legal deed of assignment.",
      whoShouldChooseTitle: "Who Needs TM Assignment?",
      whoShouldChooseContent: "Companies undergoing M&A acquisitions, founders transferring personal marks to corporate entities, or brands licensing franchise rights."
    },
    benefits: [
      { title: "Legal Transfer of Brand Value", description: "Formal title transfer recorded officially in the TM Register.", iconName: "TrendingUp" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Deed Drafting", description: "Drafting legal Assignment Deed on stamp paper." },
      { stepNumber: "02", title: "Form TM-P Filing", description: "Submitting application on IP portal for title change." }
    ],
    documentsRequired: ["Copy of TM Certificate", "Drafted Assignment Deed", "PAN/Identity of Assignor and Assignee"],
    documentsDisclaimer: "Requires state stamp duty execution on the assignment deed.",
    pricingTiers: [
      {
        name: "Standard Assignment",
        priceTag: "Starting from ₹5,999",
        description: "Deed drafting + Form TM-P filing.",
        features: ["Custom Legal Assignment Deed", "Form TM-P Portal Filing", "Updated Title Confirmation"]
      }
    ],
    faqs: [
      { question: "Can an unregistered trademark be assigned?", answer: "Yes, both registered and pending/unregistered trademarks can be legally assigned with or without goodwill." }
    ],
    seoTitle: "Trademark Assignment & Ownership Transfer (Form TM-P) | The Comply One",
    seoDescription: "Transfer trademark ownership rights legally with Form TM-P filing & Assignment Deed drafting. Ideal for brand sales, M&A and corporate transfers."
  },

  "trademark-hearing": {
    slug: "trademark-hearing",
    route: "/trademark/hearing",
    title: "Trademark Hearing Representation",
    subtitle: "Senior IP Advocate & Secretarial representation before the Registrar of Trademarks.",
    heroBadge: "Senior Attorney Representation",
    turnaroundTime: "Hearing Schedule Dependent",
    rating: 4.9,
    reviewCount: 1480,
    overview: {
      whatIsTitle: "What is a Trademark Hearing?",
      whatIsContent: "When an objection reply is deemed insufficient by the Examiner, the TM Registry issues a Show Cause Hearing notice. A Senior IP Attorney or Authorized Agent must appear before the Hearing Officer to present oral arguments.",
      whoShouldChooseTitle: "Who Needs Hearing Representation?",
      whoShouldChooseContent: "Trademark applicants who have received a Show Cause Hearing notice from the TM Registry."
    },
    benefits: [
      { title: "Expert Oral Arguments", description: "Senior IP Advocates present case laws directly to the Registrar.", iconName: "Award" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Case File Briefing", description: "Reviewing examination report and past written submissions." },
      { stepNumber: "02", title: "Virtual Hearing Appearance", description: "Senior Advocate represents client before TM Hearing Officer." },
      { stepNumber: "03", title: "Post-Hearing Written Submissions", description: "Filing follow-up written arguments if requested by Officer." }
    ],
    documentsRequired: ["Show Cause Hearing Notice", "Power of Attorney (Form TM-48)", "Usage proofs & Invoices"],
    documentsDisclaimer: "Hearings are conducted online via video conferencing by the TM Registry.",
    pricingTiers: [
      {
        name: "Standard Hearing Representation",
        priceTag: "Starting from ₹4,999",
        description: "Senior IP Advocate hearing appearance.",
        features: ["Case File Briefing", "Senior IP Advocate Video Appearance", "Post-Hearing Note Filing"]
      }
    ],
    faqs: [
      { question: "Are TM hearings held online or physically?", answer: "The TM Registry currently conducts show cause hearings online via video conferencing platforms." }
    ],
    seoTitle: "Trademark Hearing Representation Online | IP Advocate | The Comply One",
    seoDescription: "Hire Senior IP Advocates for Trademark Show Cause Hearing representation before the Registrar of Trademarks. High success rate for objected marks."
  },

  "trademark-rectification": {
    slug: "trademark-rectification",
    route: "/trademark/rectification",
    title: "Trademark Rectification",
    subtitle: "Application under Form TM-O to rectify, alter, or cancel incorrect entries in the TM Register.",
    heroBadge: "Register Rectification",
    turnaroundTime: "7 - 10 Working Days",
    rating: 4.8,
    reviewCount: 920,
    overview: {
      whatIsTitle: "What is Trademark Rectification?",
      whatIsContent: "Trademark Rectification is a legal procedure to correct or cancel a registered trademark entry in the TM Register on grounds of non-use for 5 consecutive years, wrongful registration, or error in proprietor details.",
      whoShouldChooseTitle: "Who Needs Rectification?",
      whoShouldChooseContent: "Parties aggrieved by an invalid registered mark OR brand owners updating their registered address/name details."
    },
    benefits: [
      { title: "Clean Up Register", description: "Remove dormant or non-used trademarks blocking your business name.", iconName: "ShieldCheck" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Grounds Evaluation", description: "Evaluating non-use (Sec 47) or wrongful entry grounds." },
      { stepNumber: "02", title: "Form TM-O / TM-P Filing", description: "Filing rectification petition before TM Registry or High Court." }
    ],
    documentsRequired: ["Copy of Rectification Petition", "Proof of Non-Use / Wrongful Entry", "Power of Attorney"],
    documentsDisclaimer: "Filing can be initiated before the Registrar of Trademarks or High Court IP Bench.",
    pricingTiers: [
      {
        name: "Standard Rectification",
        priceTag: "Starting from ₹7,999",
        description: "Legal drafting and portal filing.",
        features: ["Legal Grounds Evaluation", "Rectification Petition Drafting", "IP Portal Submission"]
      }
    ],
    faqs: [
      { question: "Can a registered trademark be cancelled for non-use?", answer: "Yes, under Section 47, a registered mark can be cancelled if it has not been genuinely used for 5 continuous years." }
    ],
    seoTitle: "Trademark Rectification & Cancellation Filing | The Comply One",
    seoDescription: "File Trademark Rectification & Cancellation application online. Correct TM Register errors or cancel non-used registered marks under Section 47."
  }
};
