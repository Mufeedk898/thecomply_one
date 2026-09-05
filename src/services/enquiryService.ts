export interface EnquiryFormData {
  fullName: string;
  mobile: string;
  email?: string;
  city?: string;
  service?: string;
  message?: string;
}

export interface ReferralFormData {
  yourName: string;
  yourMobile: string;
  yourEmail?: string;
  referralName: string;
  referralMobile: string;
  referralEmail?: string;
  serviceRequired?: string;
  message?: string;
}

export interface ServiceResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export function validateMobile(mobile: string): boolean {
  const mobileRegex = /^[6-9]\d{9}$/;
  return mobileRegex.test(mobile.trim());
}

export function validateEmail(email: string): boolean {
  if (!email || email.trim() === "") return true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Submit Service / Contact Enquiry
 */
export async function submitEnquiry(data: EnquiryFormData): Promise<ServiceResponse> {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim() === "") {
    errors.fullName = "Please enter your name.";
  }

  if (!data.mobile || !validateMobile(data.mobile)) {
    errors.mobile = "Please enter a valid 10-digit mobile number.";
  }

  if (data.email && !validateEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.city || data.city.trim() === "") {
    errors.city = "Please enter your city.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please correct the highlighted errors.", errors };
  }

  // TODO: Connect to production backend / CRM / database
  // Example future call: await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(data) });

  return {
    success: true,
    message: "Thank you! Your enquiry has been received. Our team will contact you shortly.",
  };
}

/**
 * Submit Referral Data
 */
export async function submitReferral(data: ReferralFormData): Promise<ServiceResponse> {
  const errors: Record<string, string> = {};

  if (!data.yourName || data.yourName.trim() === "") {
    errors.yourName = "Please enter your name.";
  }

  if (!data.yourMobile || !validateMobile(data.yourMobile)) {
    errors.yourMobile = "Please enter a valid 10-digit mobile number.";
  }

  if (!data.referralName || data.referralName.trim() === "") {
    errors.referralName = "Please enter referral name.";
  }

  if (!data.referralMobile || !validateMobile(data.referralMobile)) {
    errors.referralMobile = "Please enter a valid 10-digit referral mobile number.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please correct highlighted referral errors.", errors };
  }

  // TODO: Connect to production backend / CRM / database
  return {
    success: true,
    message: "Thank you for your referral. Our team will contact the referred person shortly.",
  };
}
