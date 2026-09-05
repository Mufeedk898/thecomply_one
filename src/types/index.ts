export type ServiceCategoryKey = 
  | "startup"
  | "registrations"
  | "licences"
  | "trademark"
  | "gst"
  | "income-tax"
  | "mca"
  | "compliance"
  | "consultation"
  | "hr-payroll"
  | "accounting"
  | "legal"
  | "business-software";

export interface ServiceCategory {
  id: ServiceCategoryKey;
  title: string;
  shortDesc: string;
  iconName: string;
  popularServicesCount: number;
  badge?: string;
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  popular?: boolean;
}

export interface NavCategory {
  key: ServiceCategoryKey;
  title: string;
  href: string;
  featuredTitle?: string;
  featuredDesc?: string;
  items: NavItem[];
}

export interface ServicePricingTier {
  name: string;
  price: number;
  originalPrice?: number;
  period?: string;
  description: string;
  features: string[];
  recommended?: boolean;
  govtFeeExcluded?: boolean;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  title?: string;
  category: ServiceCategoryKey;
  categoryName?: string;
  iconName?: string;
  shortDescription: string;
  description: string;
  fullDescription?: string;
  price: number;
  startingPrice?: number;
  popular?: boolean;
  featured?: boolean;
  documents?: string[];
  documentsRequired?: string[];
  process?: ServiceProcessStep[];
  processSteps?: ServiceProcessStep[];
  faqs?: ServiceFAQ[];
  seoTitle?: string;
  seoDescription?: string;
  govtFeeEstimate?: string;
  turnaroundTime?: string;
  rating?: number;
  reviewCount?: number;
  deliverables?: string[];
  packages?: ServicePricingTier[];
  tags?: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  companyName: string;
  location: string;
  rating: number;
  quote: string;
  serviceUsed: string;
  avatarUrl?: string;
}

export interface FAQ {
  id: string;
  category: ServiceCategoryKey | "general";
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: { text: string; included: boolean }[];
  ctaText: string;
  ctaHref: string;
}
