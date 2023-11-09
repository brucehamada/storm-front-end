export type EducationProps = {
  university: string;
  degree: string;
  subject: string;
  location: string;
  from: Date;
  to: Date;
  description?: string;
};

export type ExperienceProps = {
  company: string;
  role: string;
  industry: string[];
  from: Date;
  to: Date;
  expertise?: string[];
};

export type SocialMediaProps = {
  type: string;
  url?: string;
};

export type LanguagesProps = {
  language: string;
  proficiency: string;
};

export type FinancialStatusProps = {
  totalEarned: Number;
  currentAmount: Number;
  pendingPayment: Number;
  taxRate: Number;
};

export interface ExpertsProfile {
  email: string|undefined;
  avatar: string|undefined;
  titleName: string|undefined;
  phoneNumber: string|undefined;
  birthday: null | Date;
  country: string|undefined;
  address: string|undefined;
  summary: string|undefined;
  zipCode: string|undefined;
  weeklyCommitment: number|undefined;
  projectPreference?: string|undefined;
  hourlyRate: number|undefined;
  profileCompleteness: number|undefined;
  verifiedStatus: Boolean|undefined;
  tools: string[]|undefined;
  skills: string[]|undefined;
  education: null | EducationProps[];
  experience: null | ExperienceProps[];
  socialMedia?: null | SocialMediaProps[];
  languages: null | LanguagesProps[];
  rating: number | null;
  completedJobs: number | null;
  totalEarning: number | null;
}
