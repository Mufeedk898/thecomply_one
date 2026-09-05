export interface StartupServiceTier {
  name: string;
  priceTag: string; // e.g. "Starting from ₹1,499"
  period?: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface StartupServiceProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface StartupServiceBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface StartupServiceFAQ {
  question: string;
  answer: string;
}

export interface StartupServiceData {
  slug: string;
  route: string;
  title: string;
  subtitle: string;
  heroBadge?: string;
  turnaroundTime: string;
  rating: number;
  reviewCount: number;
  overview: {
    whatIsTitle: string;
    whatIsContent: string;
    whoShouldChooseTitle: string;
    whoShouldChooseContent: string;
  };
  benefits: StartupServiceBenefit[];
  processSteps: StartupServiceProcessStep[];
  documentsRequired: string[];
  documentsDisclaimer: string;
  pricingTiers: StartupServiceTier[];
  faqs: StartupServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
}

export const STARTUP_SERVICES_DATA: Record<string, StartupServiceData> = {
  "proprietorship": {
    slug: "proprietorship",
    route: "/proprietorship/registration",
    title: "Proprietorship Registration",
    subtitle: "Start your business with a simple and flexible proprietorship structure.",
    heroBadge: "Fastest 3-5 Days Registration",
    turnaroundTime: "3 - 5 Working Days",
    rating: 4.9,
    reviewCount: 3840,
    overview: {
      whatIsTitle: "What is a Sole Proprietorship?",
      whatIsContent: "A Sole Proprietorship is the simplest, most common business entity structure in India, owned, managed, and controlled by a single individual. It does not require complex corporate incorporation filings; instead, registration is established through government business licenses such as Udyam MSME and GSTIN.",
      whoShouldChooseTitle: "Who Should Choose Proprietorship?",
      whoShouldChooseContent: "Proprietorship is ideal for solo entrepreneurs, freelancers, local retailers, consultants, home-based businesses, and small traders who want to launch operations quickly with minimal regulatory overhead and low setup costs."
    },
    benefits: [
      {
        title: "Complete Control",
        description: "100% ownership and decision-making power retained solely by the proprietor without board approvals.",
        iconName: "UserCheck"
      },
      {
        title: "Minimal Compliance",
        description: "No annual MCA or ROC filings required. Simplify tax returns under your personal Income Tax PAN.",
        iconName: "ShieldCheck"
      },
      {
        title: "Quick & Low Cost Setup",
        description: "Get registered in as fast as 3-5 working days with minimal government documentation fees.",
        iconName: "Zap"
      },
      {
        title: "Easy Profit Transfer",
        description: "All profits accrue directly to the proprietor after paying personal income tax under applicable slabs.",
        iconName: "TrendingUp"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Your Details",
        description: "Submit basic personal details and business activity information on our encrypted online portal."
      },
      {
        stepNumber: "02",
        title: "Document Collection",
        description: "Upload PAN, Aadhaar, and premises proof. Our CA team verifies compliance and HSN codes."
      },
      {
        stepNumber: "03",
        title: "Expert Processing",
        description: "We file your Udyam MSME registration and state Shop & Establishment or GST application."
      },
      {
        stepNumber: "04",
        title: "Registration & Filing",
        description: "Government authorities issue official registration certificates and 15-digit GSTIN."
      },
      {
        stepNumber: "05",
        title: "Get Your Documents",
        description: "Receive Certificate of Registration, MSME setup, and current bank account resolution package."
      }
    ],
    documentsRequired: [
      "PAN Card copy of the Proprietor",
      "Aadhaar Card / Voter ID / Passport of the Proprietor",
      "Passport size photograph of the Proprietor",
      "Proof of Business Address (Electricity Bill / Rent Agreement + NOC)",
      "Bank Account Statement / Cancelled Cheque"
    ],
    documentsDisclaimer: "Document requirements may vary depending on municipal location, state regulations, and business activity type.",
    pricingTiers: [
      {
        name: "Basic Setup",
        priceTag: "Starting from ₹1,499",
        description: "Essential registration for micro-enterprises and freelancers.",
        features: [
          "Udyam MSME Registration Certificate",
          "GST Registration Consultation",
          "Dedicated Expert Support",
          "Current Bank Account Opening Guidance"
        ]
      },
      {
        name: "Standard Package",
        priceTag: "Starting from ₹2,999",
        description: "Complete business registration package with GSTIN allocation.",
        features: [
          "Udyam MSME Certificate",
          "Official 15-digit GSTIN Registration",
          "Shop & Establishment License guidance",
          "Official Bank Account Resolution Letter",
          "Dedicated CA Manager"
        ],
        recommended: true
      },
      {
        name: "Fast-Track All-In-One",
        priceTag: "Starting from ₹4,999",
        description: "Full operational setup with 1st quarter compliance support.",
        features: [
          "Everything in Standard Package",
          "Priority 48-Hour Processing",
          "First Quarter GST Return Filing",
          "Trademark Search & Brand Advisory",
          "Lifetime Document Vault Access"
        ]
      }
    ],
    faqs: [
      {
        question: "Is a separate PAN card required for a Proprietorship?",
        answer: "No, a Sole Proprietorship operates under the proprietor's personal PAN card. There is no separate legal entity PAN issued."
      },
      {
        question: "Can I convert a Proprietorship into a Private Limited Company later?",
        answer: "Yes, as your business grows, you can easily take over the proprietorship business into a Private Limited Company or LLP structure."
      },
      {
        question: "Is GST registration mandatory for a Proprietorship?",
        answer: "GST is mandatory if your annual turnover exceeds ₹20 Lakhs for services or ₹40 Lakhs for goods, or if you sell across state borders or via e-commerce."
      },
      {
        question: "How long does Proprietorship registration take?",
        answer: "With complete documents, Udyam MSME takes 1-2 days and GST registration takes 3-5 working days."
      }
    ],
    seoTitle: "Proprietorship Registration Online in India | The Comply One",
    seoDescription: "Register your Sole Proprietorship firm online with Udyam MSME, GSTIN, and current bank account assistance in 3-5 days."
  },

  "partnership": {
    slug: "partnership",
    route: "/partnership/registration",
    title: "Partnership Firm Registration",
    subtitle: "Register your partnership firm under the Indian Partnership Act, 1932 with legal deed drafting.",
    heroBadge: "Govt Recognized Partnership Deed",
    turnaroundTime: "4 - 7 Working Days",
    rating: 4.8,
    reviewCount: 2150,
    overview: {
      whatIsTitle: "What is a Partnership Firm?",
      whatIsContent: "A Partnership Firm is a business structure formed by two or more individuals who agree to share the responsibilities, capital investment, and profits of a business. Governed under the Indian Partnership Act, 1932, a partnership firm functions through a formal Partnership Deed.",
      whoShouldChooseTitle: "Who Should Choose Partnership?",
      whoShouldChooseContent: "Partnership firm structure is ideal for co-founders, joint business ventures, family-owned businesses, and traditional trading enterprises who want to pool capital and skills without full corporate compliance."
    },
    benefits: [
      {
        title: "Pooled Capital & Expertise",
        description: "Combine financial resources, industry experience, and operational skills of multiple partners.",
        iconName: "Users"
      },
      {
        title: "Custom Profit Sharing",
        description: "Flexibility to define custom profit and loss sharing ratios in the legal Partnership Deed.",
        iconName: "PieChart"
      },
      {
        title: "Low Annual Statutory Cost",
        description: "No mandatory annual ROC filings; simple income tax return filing under Partnership PAN.",
        iconName: "ShieldCheck"
      },
      {
        title: "Simple Operational Rules",
        description: "Business decisions governed smoothly by mutual agreement terms drafted in the deed.",
        iconName: "FileText"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Your Details",
        description: "Provide partner names, capital contribution percentages, and proposed business name."
      },
      {
        stepNumber: "02",
        title: "Document Collection",
        description: "Our legal team verifies identity and address proofs of all partners."
      },
      {
        stepNumber: "03",
        title: "Expert Processing",
        description: "We draft a comprehensive, legally sound Partnership Deed tailored to your business terms."
      },
      {
        stepNumber: "04",
        title: "Registration & Filing",
        description: "Deed execution on non-judicial stamp paper & submission to Registrar of Firms (ROF)."
      },
      {
        stepNumber: "05",
        title: "Get Your Documents",
        description: "Receive Registered Partnership Deed, Firm PAN, TAN, and GST Certificate."
      }
    ],
    documentsRequired: [
      "PAN Card of all Partners",
      "Aadhaar Card / Passport / Voter ID of all Partners",
      "Passport size photos of all Partners",
      "Proof of Registered Business Address (Rent Agreement + Electricity Bill + Landlord NOC)",
      "Partnership Deed drafted on requisite Non-Judicial Stamp Paper"
    ],
    documentsDisclaimer: "Stamp duty costs vary by Indian state based on total capital contribution.",
    pricingTiers: [
      {
        name: "Deed Drafting",
        priceTag: "Starting from ₹2,499",
        description: "Professional drafting of legal Partnership Deed.",
        features: [
          "Custom Legal Partnership Deed Drafting",
          "Partner Terms & Profit Ratio Clause Review",
          "PAN & TAN Filing Support",
          "Digital Copy Delivery"
        ]
      },
      {
        name: "Standard Registered Firm",
        priceTag: "Starting from ₹4,999",
        description: "Complete legal deed + PAN + GST registration.",
        features: [
          "Custom Partnership Deed Drafting",
          "Stamp Paper Assistance",
          "Firm PAN & TAN Allocation",
          "GST Registration (GSTIN)",
          "Dedicated Legal Advisor"
        ],
        recommended: true
      },
      {
        name: "ROF Government Registered",
        priceTag: "Starting from ₹7,999",
        description: "Full Registrar of Firms (ROF) official registration.",
        features: [
          "Everything in Standard Package",
          "Registrar of Firms (ROF) State Filing",
          "Official ROF Certificate of Registration",
          "Current Bank Account Opening Resolution",
          "1st Year Tax Advisory"
        ]
      }
    ],
    faqs: [
      {
        question: "Is registration with Registrar of Firms (ROF) mandatory?",
        answer: "Unregistered partnerships are valid, but ROF registration allows the firm to file legal suits against third parties in court."
      },
      {
        question: "How many partners are allowed in a Partnership Firm?",
        answer: "A minimum of 2 partners is required, and the maximum allowed limit is 50 partners under the Companies Act rules."
      },
      {
        question: "What is the tax rate for a Partnership Firm?",
        answer: "Partnership firms in India are taxed at a flat rate of 30% plus applicable surcharge and cess."
      }
    ],
    seoTitle: "Partnership Firm Registration Online India | The Comply One",
    seoDescription: "Register Partnership Firm online with CA legal deed drafting, ROF registration, PAN, TAN, and GSTIN allocation."
  },

  "one-person-company": {
    slug: "one-person-company",
    route: "/one-person-company",
    title: "One Person Company Registration",
    subtitle: "Enjoy corporate status and limited liability with complete control as a single founder.",
    heroBadge: "Solo Founder Corporate Entity",
    turnaroundTime: "5 - 7 Working Days",
    rating: 4.9,
    reviewCount: 1980,
    overview: {
      whatIsTitle: "What is a One Person Company (OPC)?",
      whatIsContent: "A One Person Company (OPC) is a legal corporate entity structure created under the Companies Act, 2013, allowing a single entrepreneur to operate a full-fledged corporate company with limited liability protection.",
      whoShouldChooseTitle: "Who Should Choose an OPC?",
      whoShouldChooseContent: "OPC is designed for solo founders, single-promoter technology startups, consultants, and individual business owners who want corporate credibility, limited liability, and vendor trust without needing a co-founder."
    },
    benefits: [
      {
        title: "100% Solo Ownership",
        description: "Single shareholder holds full corporate ownership and management authority.",
        iconName: "Crown"
      },
      {
        title: "Limited Liability Protection",
        description: "Personal assets of the founder remain safe from business debts and litigation liabilities.",
        iconName: "ShieldCheck"
      },
      {
        title: "Separate Corporate Identity",
        description: "OPC enjoys perpetual legal existence, separate PAN, CIN, and independent bank account.",
        iconName: "Building2"
      },
      {
        title: "Venture Capital Ready",
        description: "Can easily convert into a standard Private Limited Company when raising external investment.",
        iconName: "Rocket"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Your Details",
        description: "Submit founder and nominee details along with proposed company names."
      },
      {
        stepNumber: "02",
        title: "DSC & Name Reservation",
        description: "We issue Class 3 Digital Signatures and file SPICe+ Part A for MCA name approval."
      },
      {
        stepNumber: "03",
        title: "MoA & AoA Drafting",
        description: "Our Secretarial team drafts Memorandum & Articles of Association with Nominee consent (INC-3)."
      },
      {
        stepNumber: "04",
        title: "SPICe+ MCA Filing",
        description: "Submitting SPICe+ Part B with AGILE-PRO-S for PAN, TAN, EPFO, ESIC, and GSTIN."
      },
      {
        stepNumber: "05",
        title: "Certificate Issuance",
        description: "MCA approves incorporation and issues Certificate of Incorporation (CoI) with CIN."
      }
    ],
    documentsRequired: [
      "PAN Card of Founder Director & Nominee",
      "Aadhaar Card / Voter ID / Passport of Director & Nominee",
      "Bank Statement / Utility Bill of Director & Nominee (<2 months old)",
      "Passport size photographs of Director & Nominee",
      "Proof of Registered Office Address (Electricity bill / Rent agreement + Landlord NOC)"
    ],
    documentsDisclaimer: "Nominee must be a resident natural citizen of India.",
    pricingTiers: [
      {
        name: "Essential OPC",
        priceTag: "Starting from ₹5,499",
        description: "Basic OPC incorporation with MCA certificates.",
        features: [
          "Name Approval (SPICe+ Part A)",
          "1 Class 3 DSC for Director",
          "1 DIN Allocation",
          "Drafted MoA & AoA",
          "Incorporation Certificate & CIN"
        ]
      },
      {
        name: "Standard OPC Package",
        priceTag: "Starting from ₹8,999",
        description: "Complete incorporation + PAN/TAN + GST registration.",
        features: [
          "Everything in Essential Package",
          "Company PAN & TAN Cards",
          "GST Registration (GSTIN)",
          "Nominee Consent (INC-3) Filing",
          "Corporate Bank Account Setup Assistance",
          "Dedicated Secretarial Manager"
        ],
        recommended: true
      },
      {
        name: "All-Inclusive Founder",
        priceTag: "Starting from ₹13,999",
        description: "Incorporation + First Year INC-20A & Director KYC.",
        features: [
          "Everything in Standard Package",
          "INC-20A Commencement of Business Filing",
          "1st Year DIR-3 KYC Filing",
          "Udyam MSME Registration Certificate",
          "First Year Board Resolution Book"
        ]
      }
    ],
    faqs: [
      {
        question: "Is a nominee mandatory for OPC registration?",
        answer: "Yes, the Companies Act requires one nominee person who takes charge of the OPC in the event of the founder's death or incapacity."
      },
      {
        question: "Can an OPC have more than one director?",
        answer: "Yes, an OPC can appoint up to 15 directors, but it can only have one shareholder/member."
      },
      {
        question: "Can foreign nationals incorporate an OPC in India?",
        answer: "No, only an Indian citizen who is a resident of India is eligible to incorporate an OPC."
      }
    ],
    seoTitle: "One Person Company (OPC) Registration Online | The Comply One",
    seoDescription: "Register One Person Company (OPC) online in India. MCA name approval, DSC, DIN, MoA, AoA, PAN, TAN & GSTIN in 5-7 days."
  },

  "llp": {
    slug: "llp",
    route: "/llp",
    title: "LLP Registration",
    subtitle: "Combine operational flexibility of a partnership with limited liability corporate protection.",
    heroBadge: "Low Compliance Corporate Partner",
    turnaroundTime: "5 - 7 Working Days",
    rating: 4.9,
    reviewCount: 2640,
    overview: {
      whatIsTitle: "What is a Limited Liability Partnership (LLP)?",
      whatIsContent: "A Limited Liability Partnership (LLP) is an alternative corporate business vehicle governed under the Limited Liability Partnership Act, 2008. It offers the benefits of limited liability of a company while allowing partners the flexibility of organizing internal management based on a mutual agreement.",
      whoShouldChooseTitle: "Who Should Choose an LLP?",
      whoShouldChooseContent: "LLP is the preferred business structure for professional service firms (CAs, lawyers, architects, consultants), tech agencies, software studios, and medium-scale service businesses seeking limited liability without high company audit costs."
    },
    benefits: [
      {
        title: "Limited Partner Liability",
        description: "Partners are not personally liable for debts of the LLP or unauthorized actions of co-partners.",
        iconName: "ShieldCheck"
      },
      {
        title: "Audit Exemptions",
        description: "No statutory audit required unless annual turnover exceeds ₹40 Lakhs or capital exceeds ₹25 Lakhs.",
        iconName: "FileCheck"
      },
      {
        title: "No Dividend Distribution Tax",
        description: "Profits distributed to partners are tax-free in the hands of partners after LLP taxes.",
        iconName: "TrendingUp"
      },
      {
        title: "Perpetual Legal Existence",
        description: "LLP entity continues existing independently regardless of partner changes or resignation.",
        iconName: "Building2"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Partner Details",
        description: "Provide partner information, contribution amounts, and name choices."
      },
      {
        stepNumber: "02",
        title: "DSC & RUN-LLP Name Approval",
        description: "Obtain Class 3 DSCs for Designated Partners and file name reservation on MCA V3."
      },
      {
        stepNumber: "03",
        title: "FiLLiP Form Submission",
        description: "File consolidated FiLLiP application for DPIN allocation and incorporation."
      },
      {
        stepNumber: "04",
        title: "LLP Agreement Drafting & Stamp Duty",
        description: "Draft Form 3 LLP agreement with custom profit sharing & state stamp paper execution."
      },
      {
        stepNumber: "05",
        title: "Certificate & Bank Setup",
        description: "Receive CoI, DPIN, PAN, TAN, and current account resolution."
      }
    ],
    documentsRequired: [
      "PAN Card of Designated Partners",
      "Aadhaar / Voter ID / Passport of Designated Partners",
      "Bank Statement / Utility Bill of Partners (<2 months old)",
      "Passport size photographs of Partners",
      "Proof of Registered Office Address (Rent Agreement + Utility Bill + Landlord NOC)"
    ],
    documentsDisclaimer: "At least one Designated Partner must be a resident of India.",
    pricingTiers: [
      {
        name: "Essential LLP",
        priceTag: "Starting from ₹4,999",
        description: "Standard LLP incorporation with MCA portal filing.",
        features: [
          "RUN-LLP Name Approval",
          "2 Class 3 DSCs for Designated Partners",
          "2 DPIN Allocations",
          "LLP Incorporation Certificate",
          "PAN & TAN Cards"
        ]
      },
      {
        name: "Standard Agreement Bundle",
        priceTag: "Starting from ₹7,999",
        description: "Incorporation + Form 3 Agreement drafting + GSTIN.",
        features: [
          "Everything in Essential Package",
          "Custom LLP Agreement Drafting (Form 3)",
          "State Stamp Duty Assistance",
          "GST Registration (GSTIN)",
          "Corporate Bank Account Resolution"
        ],
        recommended: true
      },
      {
        name: "Complete Professional",
        priceTag: "Starting from ₹12,999",
        description: "Full setup + MSME + 1st Year Form 11 filing guidance.",
        features: [
          "Everything in Standard Package",
          "Udyam MSME Registration Certificate",
          "Trademark Search & Brand Filing Assistance",
          "First Year Annual Return (Form 11) Guidance",
          "Dedicated CA Retainer Support"
        ]
      }
    ],
    faqs: [
      {
        question: "What is the minimum capital required to start an LLP?",
        answer: "There is no minimum statutory capital requirement for registering an LLP in India. You can start with any capital amount."
      },
      {
        question: "Can an LLP raise equity investment from venture capital funds?",
        answer: "Venture capital firms usually prefer Private Limited Companies because LLPs cannot issue equity shares or stock options (ESOPs)."
      },
      {
        question: "How long is Form 3 LLP agreement filing allowed?",
        answer: "The LLP agreement must be drafted and filed in Form 3 with the MCA within 30 days of incorporation."
      }
    ],
    seoTitle: "LLP Registration Online in India | Limited Liability Partnership | The Comply One",
    seoDescription: "Register Limited Liability Partnership (LLP) online with DPIN, RUN-LLP name approval, LLP Agreement drafting, PAN, TAN & GST in 5-7 days."
  },

  "private-limited-company": {
    slug: "private-limited-company",
    route: "/private-limited-company",
    title: "Private Limited Company Registration",
    subtitle: "The premier corporate entity structure for fundraising, scalability, and limited liability in India.",
    heroBadge: "#1 Startup Choice in India",
    turnaroundTime: "5 - 7 Working Days",
    rating: 4.9,
    reviewCount: 5210,
    overview: {
      whatIsTitle: "What is a Private Limited Company?",
      whatIsContent: "A Private Limited Company is an independent legal entity registered under the Companies Act, 2013 with the Ministry of Corporate Affairs (MCA). It offers limited liability protection to its shareholders, holds separate property, and is legally distinct from its directors and owners.",
      whoShouldChooseTitle: "Who Should Choose a Private Limited Company?",
      whoShouldChooseContent: "Pvt Ltd structure is essential for ambitious startups aiming to raise Seed/VC funding, issue ESOP employee stock options, build high corporate brand value, protect co-founders' personal assets, and scale rapidly."
    },
    benefits: [
      {
        title: "Fundraising & Investor Ready",
        description: "The only entity structure preferred by venture capital firms, angel networks, and bank lenders.",
        iconName: "TrendingUp"
      },
      {
        title: "Limited Liability Protection",
        description: "Shareholder liability is strictly limited to unpaid share capital; personal wealth is 100% protected.",
        iconName: "ShieldCheck"
      },
      {
        title: "ESOP Share Allocation",
        description: "Attract top engineering & executive talent by granting Employee Stock Option Plans (ESOPs).",
        iconName: "Award"
      },
      {
        title: "Perpetual Succession",
        description: "Company existence remains unaffected by changes in directors or share transfers.",
        iconName: "Building2"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Your Details",
        description: "Provide director details, proposed company names, capital ratio, and business objective."
      },
      {
        stepNumber: "02",
        title: "DSC & SPICe+ Part A Filing",
        description: "Issue Class 3 DSCs and submit SPICe+ Part A on MCA V3 for official name approval."
      },
      {
        stepNumber: "03",
        title: "MoA, AoA & SPICe+ Part B E-Filing",
        description: "Draft custom MoA, AoA, and file consolidated SPICe+ Part B with AGILE-PRO-S."
      },
      {
        stepNumber: "04",
        title: "Government Incorporation Approval",
        description: "MCA issues official Certificate of Incorporation (CoI) with Corporate Identity Number (CIN)."
      },
      {
        stepNumber: "05",
        title: "PAN, TAN & Bank Account",
        description: "Receive physical/e-PAN, TAN cards, and open zero-balance corporate bank account."
      }
    ],
    documentsRequired: [
      "PAN Card of all Directors and Shareholders",
      "Aadhaar Card / Voter ID / Passport of all Directors & Shareholders",
      "Bank Statement / Electricity Bill of Directors (<2 months old)",
      "Passport size photographs of Directors",
      "Proof of Registered Office Address (Rent Agreement + Electricity Bill + Landlord NOC)"
    ],
    documentsDisclaimer: "At least one director must be a resident of India (stayed 182+ days).",
    pricingTiers: [
      {
        name: "Standard Incorporation",
        priceTag: "Starting from ₹6,999",
        description: "Complete incorporation with DIN, DSC, MoA, AoA, PAN, and TAN.",
        features: [
          "Name Approval (SPICe+ Part A)",
          "Class 3 DSC for 2 Directors",
          "2 Director Identification Numbers (DIN)",
          "Drafting MoA & AoA",
          "Certificate of Incorporation (CoI) & CIN",
          "PAN & TAN Card Issuance",
          "Corporate Bank Account Setup Assistance"
        ]
      },
      {
        name: "Pro Compliance Bundle",
        priceTag: "Starting from ₹11,999",
        description: "Incorporation + GST + MSME + INC-20A commencement.",
        features: [
          "Everything in Standard Package",
          "GST Registration (GSTIN Allocation)",
          "Udyam MSME Certificate",
          "INC-20A Commencement of Business Filing",
          "First Year Director KYC (DIR-3 KYC)",
          "Dedicated CA Relationship Manager"
        ],
        recommended: true
      },
      {
        name: "Enterprise Founder Pass",
        priceTag: "Starting from ₹18,999",
        description: "Full incorporation + 1st Year Annual ROC Filing (AOC-4 & MGT-7).",
        features: [
          "Everything in Pro Compliance Bundle",
          "Trademark Search & Brand Name Filing",
          "First Year AOC-4 & MGT-7 ROC Filings",
          "Statutory Register & Share Certificate Book",
          "Priority 24-Hour CS Support"
        ]
      }
    ],
    faqs: [
      {
        question: "How many directors are required for a Private Limited Company?",
        answer: "A minimum of 2 directors and 2 shareholders is required. A single person can be both a director and a shareholder."
      },
      {
        question: "Is physical presence required for Pvt Ltd incorporation?",
        answer: "No, the entire process is 100% online. You can scan and upload your documents through our secure portal."
      },
      {
        question: "What is the minimum capital required?",
        answer: "There is no statutory minimum paid-up capital requirement under the Companies Act. You can start with ₹1,000."
      }
    ],
    seoTitle: "Private Limited Company Registration Online India | The Comply One",
    seoDescription: "Incorporate Private Limited Company online in 5-7 days. Includes MCA name approval, DSC, DIN, MoA, AoA, PAN, TAN, GSTIN & bank account setup."
  },

  "public-limited-company": {
    slug: "public-limited-company",
    route: "/public-limited-company",
    title: "Public Limited Company Registration",
    subtitle: "Establish a public enterprise capable of issuing shares to the public and listing on stock exchanges.",
    heroBadge: "Large Scale Enterprise Entity",
    turnaroundTime: "10 - 14 Working Days",
    rating: 4.9,
    reviewCount: 960,
    overview: {
      whatIsTitle: "What is a Public Limited Company?",
      whatIsContent: "A Public Limited Company is a corporate entity structure incorporated under the Companies Act, 2013 that is permitted to offer its shares to the general public. It has no limit on the maximum number of members and enjoys high financial market credibility.",
      whoShouldChooseTitle: "Who Should Choose Public Limited?",
      whoShouldChooseContent: "Public Limited structure is designed for large industrial corporations, infrastructure projects, financial institutions, and fast-growing enterprises planning an Initial Public Offering (IPO) or large public equity raising."
    },
    benefits: [
      {
        title: "Public Equity Capital",
        description: "Power to raise substantial equity investment by issuing shares and debentures to the general public.",
        iconName: "TrendingUp"
      },
      {
        title: "Stock Exchange Listing",
        description: "Eligible to list shares on major stock exchanges (BSE/NSE) for market liquidity.",
        iconName: "Building2"
      },
      {
        title: "Unlimited Shareholders",
        description: "No restriction on the maximum number of shareholders, enabling massive institutional expansion.",
        iconName: "Users"
      },
      {
        title: "Maximum Borrowing Power",
        description: "High credit rating status for securing institutional bank debt and corporate bonds.",
        iconName: "ShieldCheck"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Promoter Details",
        description: "Provide details of 7 minimum shareholders and 3 minimum directors."
      },
      {
        stepNumber: "02",
        title: "DSC & RUN Name Filing",
        description: "Issue Class 3 DSCs for all directors and reserve company name with MCA."
      },
      {
        stepNumber: "03",
        title: "SPICe+ Part B & Prospectus Drafting",
        description: "Draft custom MoA, AoA with public shareholding rules and file SPICe+ Part B."
      },
      {
        stepNumber: "04",
        title: "Incorporation & CIN Allocation",
        description: "MCA approves submission and issues Certificate of Incorporation (CoI)."
      },
      {
        stepNumber: "05",
        title: "Commencement of Business (INC-20A)",
        description: "Obtain Commencement Certificate to begin commercial operations and issue public capital."
      }
    ],
    documentsRequired: [
      "PAN Card of 7 Shareholders and 3 Directors",
      "Aadhaar Card / Passport of all Directors & Shareholders",
      "Bank Statement / Utility Bill (<2 months old) for all Directors",
      "Passport size photographs of Directors",
      "Registered Office proof (Rent agreement + Utility bill + Landlord NOC)"
    ],
    documentsDisclaimer: "Minimum 7 shareholders and 3 directors required under Companies Act.",
    pricingTiers: [
      {
        name: "Public Standard",
        priceTag: "Starting from ₹19,999",
        description: "Basic Public Limited incorporation with MCA V3.",
        features: [
          "Name Reservation (SPICe+ Part A)",
          "Class 3 DSC for 3 Directors",
          "3 DIN Allocations",
          "Drafting Public MoA & AoA",
          "Certificate of Incorporation & CIN"
        ]
      },
      {
        name: "Enterprise Capital Setup",
        priceTag: "Starting from ₹29,999",
        description: "Incorporation + INC-20A + Statutory Books + GST.",
        features: [
          "Everything in Public Standard",
          "Company PAN & TAN Cards",
          "GST Registration (GSTIN)",
          "INC-20A Commencement of Business Certificate",
          "Statutory Share Certificate & Register Printing",
          "Dedicated Senior CS Advisor"
        ],
        recommended: true
      },
      {
        name: "IPO & Institutional Pass",
        priceTag: "Starting from ₹45,999",
        description: "Complete setup + Demat ISIN creation + CA Retainer.",
        features: [
          "Everything in Enterprise Capital Setup",
          "NSDL / CDSL Demat ISIN Allocation",
          "Share Capital Stamp Duty Advisory",
          "First Year AOC-4 & MGT-7 Compliance Guidance",
          "24/7 Corporate Secretarial Retainer"
        ]
      }
    ],
    faqs: [
      {
        question: "What is the minimum number of directors and shareholders required?",
        answer: "A Public Limited Company requires a minimum of 3 directors and 7 shareholders."
      },
      {
        question: "Is there a restriction on share transfer in a Public Limited Company?",
        answer: "No, shares of a Public Limited Company are freely transferable without requiring approval from other shareholders."
      },
      {
        question: "What is the due date for holding the first AGM?",
        answer: "The first AGM must be held within 9 months from the end of the first financial year of incorporation."
      }
    ],
    seoTitle: "Public Limited Company Registration Online India | The Comply One",
    seoDescription: "Register Public Limited Company online in 10-14 days. Includes MCA name approval, 3 DINs, MoA, AoA, CIN, PAN, TAN, GSTIN & ISIN guidance."
  },

  "indian-subsidiary": {
    slug: "indian-subsidiary",
    route: "/indian-subsidiary",
    title: "Indian Subsidiary Registration",
    subtitle: "Incorporate a wholly owned subsidiary or joint venture in India for foreign parent entities with 100% FDI compliance.",
    heroBadge: "Foreign Direct Investment (FDI) Compliant",
    turnaroundTime: "12 - 18 Working Days",
    rating: 4.9,
    reviewCount: 1240,
    overview: {
      whatIsTitle: "What is an Indian Subsidiary?",
      whatIsContent: "An Indian Subsidiary is an entity incorporated in India under the Companies Act 2013 where a foreign parent company holds 50% or more (often 100% as a Wholly Owned Subsidiary / WOS) of the equity share capital. It allows international businesses to operate directly in India under RBI, FEMA, and MCA guidelines.",
      whoShouldChooseTitle: "Who Should Choose an Indian Subsidiary?",
      whoShouldChooseContent: "Foreign corporations, overseas startups, multinational enterprises, and international investors looking to set up an active operational base, hire Indian talent, generate local revenue, and tap into the fast-growing Indian consumer market."
    },
    benefits: [
      {
        title: "100% Foreign Ownership (FDI)",
        description: "Most sectors in India allow 100% Foreign Direct Investment under the automatic route without prior government approval.",
        iconName: "Globe"
      },
      {
        title: "Limited Liability Protection",
        description: "The liability of the foreign parent company is strictly limited to the value of unpaid share capital held in India.",
        iconName: "ShieldCheck"
      },
      {
        title: "Access to Indian Talent & Market",
        description: "Directly hire world-class Indian engineering, management, and operational talent and bill domestic clients seamlessly.",
        iconName: "Users"
      },
      {
        title: "Tax Incentives & SEZ Benefits",
        description: "Take advantage of India's competitive corporate tax rates, export incentives, and special economic zone (SEZ) benefits.",
        iconName: "TrendingUp"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Apostille & Documentation",
        description: "Foreign promoters notarize and apostille parent company incorporation documents, board resolutions, and ID proofs."
      },
      {
        stepNumber: "02",
        title: "DSC & Name Approval (SPICe+ Part A)",
        description: "Obtain Digital Signature Certificates for resident and foreign directors and reserve company name with MCA."
      },
      {
        stepNumber: "03",
        title: "SPICe+ Filing & MCA Approval",
        description: "Submit SPICe+ Part B along with MoA, AoA, DIN allocations, PAN, TAN, and EPFO/ESIC registrations."
      },
      {
        stepNumber: "04",
        title: "Bank Account & Share Capital Inflow",
        description: "Open an Indian capital bank account and receive foreign share remittance via authorized banking channels."
      },
      {
        stepNumber: "05",
        title: "RBI & FC-GPR Reporting",
        description: "File Form FC-GPR on the RBI FIRMS portal within 30 days of share allotment for complete FEMA compliance."
      }
    ],
    documentsRequired: [
      "Certificate of Incorporation & Charter of Foreign Parent Company (Apostilled/Consularized)",
      "Board Resolution authorizing Indian Subsidiary setup & authorized signatory",
      "Passport copy & address proof of foreign directors (Notarized/Apostilled)",
      "PAN and Aadhaar card of at least one Indian Resident Director",
      "Registered Office proof in India (Electricity bill + NOC from landlord + Rent Agreement)",
      "Draft Memorandum of Association (MoA) and Articles of Association (AoA)"
    ],
    documentsDisclaimer: "Foreign documents must be notarized and apostilled in the home country (or consularized if non-Hague). At least one resident director is mandatory.",
    pricingTiers: [
      {
        name: "Standard WOS Setup",
        priceTag: "Starting from ₹24,999",
        description: "Basic Indian Subsidiary incorporation for foreign entities.",
        features: [
          "Name Reservation with MCA",
          "Class 3 DSC for 2 Directors",
          "DIN for Foreign & Resident Directors",
          "Drafting Custom MoA & AoA",
          "Certificate of Incorporation (CIN), PAN & TAN"
        ]
      },
      {
        name: "Full Operational Setup",
        priceTag: "Starting from ₹39,999",
        description: "Incorporation + Bank Account + GST + Initial FDI Advisory.",
        features: [
          "Everything in Standard WOS Setup",
          "GST Registration (GSTIN)",
          "Assistance in Corporate Bank Account Opening",
          "FDI Inflow Regulatory Guidance",
          "INC-20A Commencement of Business Filing",
          "Dedicated Senior FEMA / MCA Consultant"
        ],
        recommended: true
      },
      {
        name: "Enterprise FDI & RBI Filing",
        priceTag: "Starting from ₹59,999",
        description: "Complete turn-key incorporation with RBI FIRMS & FC-GPR reporting.",
        features: [
          "Everything in Full Operational Setup",
          "Form FC-GPR Filing on RBI FIRMS Portal",
          "Foreign Remittance Inward Certificate (FIRC) processing",
          "CS Valuation Certificate & Statutory Registers",
          "1st Year Compliance & RBI Annual Return (FLA) guidance"
        ]
      }
    ],
    faqs: [
      {
        question: "Can a foreign company own 100% shares of an Indian Subsidiary?",
        answer: "Yes, foreign parent companies can hold 100% equity in an Indian company under the Automatic Route for most sectors without prior government approval."
      },
      {
        question: "Is an Indian resident director mandatory?",
        answer: "Yes, under Section 149(3) of the Companies Act 2013, every company in India must have at least one director who has resided in India for at least 182 days in the financial year."
      },
      {
        question: "What is FC-GPR and when must it be filed?",
        answer: "Form FC-GPR must be filed with the Reserve Bank of India (RBI) via the FIRMS portal within 30 days of allotting shares to the foreign investor."
      }
    ],
    seoTitle: "Indian Subsidiary Registration Online India | Wholly Owned Subsidiary (WOS) | The Comply One",
    seoDescription: "Register an Indian Subsidiary or Wholly Owned Subsidiary online. Complete MCA incorporation, FDI compliance, RBI FIRMS FC-GPR filing, PAN, TAN & corporate bank account support."
  },

  "producer-company": {
    slug: "producer-company",
    route: "/producer-company",
    title: "Producer Company Registration",
    subtitle: "Form a Farmer Producer Company (FPO/FPC) to empower primary agricultural and rural producers with corporate benefits.",
    heroBadge: "Empowering Agri & Primary Producers",
    turnaroundTime: "10 - 15 Working Days",
    rating: 4.8,
    reviewCount: 810,
    overview: {
      whatIsTitle: "What is a Producer Company?",
      whatIsContent: "A Producer Company is a hybrid corporate entity combining the cooperative ethos with corporate efficiency under Part IXA of the Companies Act. Formed by primary producers such as farmers, dairy owners, and artisans, it offers limited liability and seamless access to government grants, credit, and markets.",
      whoShouldChooseTitle: "Who Should Choose Producer Company?",
      whoShouldChooseContent: "Farmer producer organizations (FPOs), agricultural clusters, dairy cooperatives, handloom artisan groups, and rural cooperatives seeking formal corporate structure, institutional loans, NABARD funding, and government subsidies."
    },
    benefits: [
      {
        title: "Access to NABARD & SFAC Grants",
        description: "Eligible for central and state government credit guarantee schemes, equity grants, and direct NABARD support.",
        iconName: "Wheat"
      },
      {
        title: "Cooperative Spirit with Limited Liability",
        description: "One member one vote regardless of shareholding, ensuring democratic management with corporate legal protection.",
        iconName: "ShieldCheck"
      },
      {
        title: "Bulk Bargaining & Market Reach",
        description: "Aggregate produce for bulk purchasing of inputs and direct selling to retail chains at high profit margins.",
        iconName: "TrendingUp"
      },
      {
        title: "Income Tax Exemptions",
        description: "Enjoy 100% tax deductions under Section 80P/80PA of the Income Tax Act for qualifying agricultural producer activities.",
        iconName: "Award"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Producer Group Member Verification",
        description: "Collate details of 10 or more individual primary producers or 2 or more producer institutions."
      },
      {
        stepNumber: "02",
        title: "DSC & Name Approval",
        description: "Issue Class 3 DSCs for directors and apply for name ending with 'Producer Company Limited'."
      },
      {
        stepNumber: "03",
        title: "Custom MoA & AoA Drafting",
        description: "Draft statutory producer bylaws adhering to Part IXA producer objects and mutual assistance principles."
      },
      {
        stepNumber: "04",
        title: "SPICe+ Incorporation Filing",
        description: "Submit SPICe+ Part B to MCA with member verification certificates, land records, or producer proofs."
      },
      {
        stepNumber: "05",
        title: "Certificate & Bank Account Setup",
        description: "Receive Certificate of Incorporation (CoI), PAN, TAN, and open corporate agricultural bank account."
      }
    ],
    documentsRequired: [
      "PAN Card and Aadhaar Card of all 10+ promoter members & directors",
      "Proof of agricultural or primary producer activity (Khasra/Khatauni, Patta, or local authority certificate)",
      "Passport size photographs of all promoter directors",
      "Bank statements / utility bills of directors (<2 months old)",
      "Registered office address proof (Electricity bill + Landlord NOC + Rent Agreement)"
    ],
    documentsDisclaimer: "Minimum 10 individual primary producers or 2 producer institutions and minimum 5 directors are required.",
    pricingTiers: [
      {
        name: "Producer Standard",
        priceTag: "Starting from ₹19,999",
        description: "Basic incorporation for agricultural producer clusters.",
        features: [
          "Name Reservation with MCA",
          "Class 3 DSC for 5 Directors",
          "5 DIN Allocations",
          "Drafting Producer MoA & AoA",
          "Certificate of Incorporation & CIN"
        ]
      },
      {
        name: "FPO Growth Package",
        priceTag: "Starting from ₹29,999",
        description: "Incorporation + PAN, TAN + GST + NABARD/SFAC Grant Guidance.",
        features: [
          "Everything in Producer Standard",
          "Company PAN & TAN Cards",
          "GST Registration",
          "Assistance with Agri Bank Account",
          "NABARD FPO Scheme Guidelines & Documentation",
          "Dedicated Agri CS Advisor"
        ],
        recommended: true
      },
      {
        name: "Complete Agri-Business Retainer",
        priceTag: "Starting from ₹44,999",
        description: "End-to-end setup + FSSAI Food License + Mandi License Advisory.",
        features: [
          "Everything in FPO Growth Package",
          "State/Central FSSAI Registration",
          "INC-20A Commencement Filing",
          "Statutory Member Register Printing",
          "First Year AGM & ROC Compliance Support"
        ]
      }
    ],
    faqs: [
      {
        question: "What is the minimum number of members needed to form a Producer Company?",
        answer: "A minimum of 10 individual primary producers or 2 producer institutions (or a combination thereof) and at least 5 directors are required."
      },
      {
        question: "Are Producer Companies eligible for 100% tax deduction?",
        answer: "Yes, under Section 80PA of the Income Tax Act, 100% deduction is available to eligible Producer Companies with total turnover under ₹100 crore on agricultural marketing profits."
      },
      {
        question: "Can a Producer Company be converted into a normal Private Limited Company?",
        answer: "No, under Indian corporate law, a Producer Company cannot become or convert into a public or private company."
      }
    ],
    seoTitle: "Producer Company Registration Online India | Farmer Producer Company (FPC/FPO) | The Comply One",
    seoDescription: "Register a Producer Company online in India. Specially designed for farmers, dairy, and primary producer clusters. Includes MCA filing, 5 DINs, MoA/AoA, PAN, TAN & NABARD support."
  },

  "section-8-company": {
    slug: "section-8-company",
    route: "/section-8-company",
    title: "Section 8 Company Registration",
    subtitle: "Incorporate a non-profit NGO or charitable company with nationwide jurisdiction and maximum donor trust.",
    heroBadge: "India's Highest Credibility Non-Profit Entity",
    turnaroundTime: "10 - 15 Working Days",
    rating: 4.9,
    reviewCount: 1450,
    overview: {
      whatIsTitle: "What is a Section 8 Company?",
      whatIsContent: "A Section 8 Company is a company registered under Section 8 of the Companies Act, 2013 for promoting charitable objects like education, commerce, art, science, sports, healthcare, social welfare, religion, and environmental protection. Profits are reinvested purely into fulfilling its charitable objects.",
      whoShouldChooseTitle: "Who Should Choose Section 8 Company?",
      whoShouldChooseContent: "Social entrepreneurs, CSR foundations, philanthropists, educationalists, research institutes, and charitable organizations looking for institutional donor credibility, government grants, and foreign contribution eligibility (FCRA)."
    },
    benefits: [
      {
        title: "No Minimum Capital & No 'Limited' Suffix",
        description: "Can operate without using the words 'Limited' or 'Private Limited' in its registered legal name.",
        iconName: "Heart"
      },
      {
        title: "Top Credibility for CSR & Donors",
        description: "Recognized by Indian corporate CSR committees and international donors as the most transparent non-profit structure.",
        iconName: "Award"
      },
      {
        title: "12A & 80G Tax Exemption Eligible",
        description: "Eligible for full income tax exemptions under Section 12A and 50% tax deductions for donors under Section 80G.",
        iconName: "ShieldCheck"
      },
      {
        title: "Pan-India Jurisdiction",
        description: "Unlike state-specific Society registrations, a Section 8 Company has statutory nationwide jurisdiction from day one.",
        iconName: "Building2"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Name Reservation (SPICe+ Part A)",
        description: "Apply for a unique non-profit name ending with Foundation, Association, Council, or Forum."
      },
      {
        stepNumber: "02",
        title: "DSC & DIN Allocation",
        description: "Procure Class 3 DSCs and DINs for all initial directors and promoters."
      },
      {
        stepNumber: "03",
        title: "Section 8 License (Form INC-12)",
        description: "Prepare 3-year projected income/expenditure statement and charitable objective charter to secure Central Government Section 8 license."
      },
      {
        stepNumber: "04",
        title: "SPICe+ Part B Incorporation",
        description: "Submit SPICe+ Part B with MoA, AoA, PAN, and TAN applications to MCA."
      },
      {
        stepNumber: "05",
        title: "Certificate & 12A/80G Advisory",
        description: "Receive Certificate of Incorporation (CoI) and apply for 12A & 80G tax exemption registrations."
      }
    ],
    documentsRequired: [
      "PAN Card & Aadhaar / Passport of minimum 2 Directors & Shareholders",
      "Voter ID / Driving License / Bank Statement (<2 months old)",
      "3-Year Projected Financial Budget & Statement of Objects",
      "Registered Office proof (Electricity bill + Landlord NOC + Rent Agreement)",
      "Passport size photographs of all directors"
    ],
    documentsDisclaimer: "Requires at least 2 directors and 2 shareholders. No minimum paid-up capital is prescribed.",
    pricingTiers: [
      {
        name: "Standard NGO",
        priceTag: "Starting from ₹16,999",
        description: "Complete Section 8 incorporation and MCA license.",
        features: [
          "Name Reservation with MCA",
          "Class 3 DSC for 2 Directors",
          "DIN for 2 Directors",
          "Drafting Non-Profit MoA & AoA",
          "Section 8 License & Certificate of Incorporation"
        ]
      },
      {
        name: "NGO Foundation Pack",
        priceTag: "Starting from ₹24,999",
        description: "Incorporation + PAN, TAN + Section 12A & 80G Filing Assistance.",
        features: [
          "Everything in Standard NGO",
          "Company PAN & TAN Cards",
          "Provisional 12A Tax Exemption Filing",
          "Provisional 80G Donor Tax Exemption Filing",
          "Drafting 3-Year Financial Estimates",
          "Dedicated Non-Profit CS Consultant"
        ],
        recommended: true
      },
      {
        name: "Complete CSR & Darpan Suite",
        priceTag: "Starting from ₹37,999",
        description: "Turn-key NGO setup with NITI Aayog Darpan & CSR-1 Registration.",
        features: [
          "Everything in NGO Foundation Pack",
          "NITI Aayog NGO Darpan Registration",
          "MCA Form CSR-1 Filing for Corporate CSR Funding",
          "Statutory Minute Book & Share Ledger",
          "First Year ROC Compliance Advisory"
        ]
      }
    ],
    faqs: [
      {
        question: "Can directors or members take dividends from a Section 8 Company?",
        answer: "No. The law strictly prohibits the payment of dividends or distribution of profits to members. All surpluses must be applied exclusively towards promoting charitable objectives."
      },
      {
        question: "Can a Section 8 Company own property?",
        answer: "Yes. As a distinct corporate legal entity, a Section 8 Company can purchase, hold, and sell immovable property in its own name."
      },
      {
        question: "Is a Section 8 Company better than a Trust or Society?",
        answer: "Yes, because it operates under Central Government MCA oversight with uniform national validity, corporate governance standards, and unmatched transparency for institutional donors."
      }
    ],
    seoTitle: "Section 8 Company Registration Online India | NGO Foundation | The Comply One",
    seoDescription: "Incorporate Section 8 Non-Profit Company online in India. Get MCA license, Section 12A & 80G registration, NITI Aayog Darpan, CSR-1 filing, PAN & TAN in 10-15 days."
  },

  "trust-registration": {
    slug: "trust-registration",
    route: "/trust-registration",
    title: "Trust Registration Online",
    subtitle: "Register a Public Charitable or Religious Trust with custom Trust Deed drafting and local Sub-Registrar execution.",
    heroBadge: "Public Charitable & Religious Trust",
    turnaroundTime: "7 - 12 Working Days",
    rating: 4.8,
    reviewCount: 1120,
    overview: {
      whatIsTitle: "What is a Public Charitable Trust?",
      whatIsContent: "A Public Charitable Trust is a traditional non-profit legal entity established under the Indian Trusts Act, 1882 (or state public trusts acts) by a Settlor dedicating property or funds for the benefit of the public or a specific charitable cause.",
      whoShouldChooseTitle: "Who Should Choose Trust Registration?",
      whoShouldChooseContent: "Families, religious communities, educational trust creators, hospital founders, and community benefactors looking for a flexible non-profit structure with low annual compliance and permanent trustee governance."
    },
    benefits: [
      {
        title: "Simpler Governance",
        description: "Managed by a Board of Trustees according to the Trust Deed without mandatory complex MCA ROC filings.",
        iconName: "Heart"
      },
      {
        title: "Perpetual Succession",
        description: "The trust continues to exist perpetually irrespective of changes in trustees or the death of the settlor.",
        iconName: "ShieldCheck"
      },
      {
        title: "12A & 80G Tax Deductions",
        description: "Public trusts are eligible for 100% income tax exemption under 12A and donor deduction benefits under 80G.",
        iconName: "TrendingUp"
      },
      {
        title: "Dedicated Property Protection",
        description: "Trust assets and real estate are legally protected exclusively for the stated charitable or religious objectives.",
        iconName: "Building2"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Trust Deed Drafting",
        description: "Draft customized Trust Deed outlining trust objectives, trustee powers, quorum, and beneficiaries."
      },
      {
        stepNumber: "02",
        title: "Stamp Duty Payment",
        description: "Pay appropriate state stamp duty on the Trust Deed based on initial settlement fund."
      },
      {
        stepNumber: "03",
        title: "Sub-Registrar Execution",
        description: "Present Trust Deed for formal physical registration before the local Sub-Registrar with two witnesses."
      },
      {
        stepNumber: "04",
        title: "Trust PAN & TAN Allotment",
        description: "Apply for separate Trust PAN and TAN cards under the entity name."
      },
      {
        stepNumber: "05",
        title: "12A & 80G Exemption Filing",
        description: "File Form 10A on the Income Tax portal for provisional 12A & 80G tax exemptions."
      }
    ],
    documentsRequired: [
      "PAN Card and Aadhaar Card of Settlor and all Trustees (minimum 2)",
      "2 Passport size photographs of Settlor, Trustees, and 2 Witnesses",
      "Trust Deed printed on appropriate non-judicial stamp paper",
      "Registered Office proof (Electricity bill + NOC from property owner)",
      "Proof of initial fund dedication / settlement contribution"
    ],
    documentsDisclaimer: "Requires at least 1 Settlor and minimum 2 Trustees. Two physical witnesses required at Sub-Registrar office.",
    pricingTiers: [
      {
        name: "Trust Deed Draft",
        priceTag: "Starting from ₹7,999",
        description: "Custom lawyer drafted Trust Deed and consultation.",
        features: [
          "Custom Charitable Trust Deed Drafting",
          "Stamp Duty Calculation Guidance",
          "Checklist of Sub-Registrar Requirements",
          "PAN Card Application Assistance"
        ]
      },
      {
        name: "Standard Trust Registration",
        priceTag: "Starting from ₹14,999",
        description: "Complete end-to-end trust registration with Sub-Registrar.",
        features: [
          "Everything in Trust Deed Draft",
          "Local Sub-Registrar Appointment Scheduling",
          "Execution Guidance & Coordination",
          "Trust PAN Card Procurement",
          "Trust Bank Account Opening Kit"
        ],
        recommended: true
      },
      {
        name: "Trust + 12A & 80G Exemption",
        priceTag: "Starting from ₹24,999",
        description: "Full Trust setup + Income Tax Exemption Filing.",
        features: [
          "Everything in Standard Trust Registration",
          "Form 10A Filing for Section 12A Exemption",
          "Form 10A Filing for Section 80G Donor Deductions",
          "NITI Aayog NGO Darpan Registration",
          "Dedicated Senior Tax Advocate"
        ]
      }
    ],
    faqs: [
      {
        question: "What is the minimum number of trustees required to register a trust?",
        answer: "A minimum of 2 trustees are required to register a public charitable trust, along with 1 settlor (who can also be a trustee)."
      },
      {
        question: "Can a trust operate anywhere in India?",
        answer: "Yes, a trust registered under the Indian Trusts Act can operate across India in accordance with its Trust Deed objectives."
      },
      {
        question: "Is physical presence required for trust registration?",
        answer: "Yes, the Settlor, Trustees, and 2 independent witnesses must physically visit the local Sub-Registrar's office for biometric and signature execution."
      }
    ],
    seoTitle: "Trust Registration Online India | Charitable & Religious Trust Deed | The Comply One",
    seoDescription: "Register a Public Charitable or Religious Trust online. Expert Trust Deed drafting, Sub-Registrar coordination, PAN, TAN, 12A & 80G income tax exemption filing in 7-12 days."
  }
};

