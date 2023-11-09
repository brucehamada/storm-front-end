import { SocialMedia } from './expert';

export type UserProfile = {
  id?: string;
  avatar?: string;
  image?: string;
  name?: string;
  role?: string;
  about?: string;
  email?: string;
  work_email?: string;
  personal_email?: string;
  phone?: string;
  work_phone?: string;
  personal_phone?: string;
  birthdayText?: string;
  lastMessage?: string;
  status?: string;
  friends?: number;
  followers?: number;
  contract?: string;
  company?: string;
  location?: string;
  online_status?: string;
  unReadChatCount?: number;
  time?: string;
  tier?: string;
};

export type UserCardProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  role: string;
  visits: number;
  progress: number;
  status: string;
  orderStatus: string;
  contract: number;
  country: string;
  address: string;
  fatherName: string;
  about: string;
  avatar: number;
  skills: string[];
  time: string;
};

export type Account = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
};
export type Organization = {
  organizationName: string | undefined;
  specialities: string[] | undefined;
  dayOfRegisteration: Date | undefined;
  description: string | undefined;
  revenue: string | undefined;
  country: string | undefined;
  state: string | undefined;
  city: string | undefined;
  address1: string;
  address2: string;
  phone: string;
  email: string;
  companyType: string;
  industry: string | undefined;
  teamSize: string | undefined;
  fundingStage: string | undefined;
  logo: string | undefined;
  socialMedia: SocialMedia[];
};

export type ExpertSetting = {
  services: boolean[] | undefined;
  hourlyRate: number;
};
