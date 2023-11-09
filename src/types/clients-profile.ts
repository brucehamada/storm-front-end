import { SocialMedia } from './expert';

export type SocialMediaProps = {
  type: string;
  url: string | undefined;
};

export type LanguagesProps = {
  language: string;
  proficiency: string;
};

export type OrganizationProps = {
  organizationName: string;
  companyType: string;
  address1: string;
  address2: string;
  email: string;
  phone: string;
  dayOfRegistration: Date;
  description: string;
  revenue: string;
  country: string;
  state: string;
  city: string;
  industry: string;
  teamSize: string;
  specialities: string[];
  fundingStage: string;
  logo: string;
  socialMedia: SocialMedia[];
};

export interface ClientsProfile {
  email: string | undefined;
  gender: string | undefined;
  designation: string | undefined;
  department: string | undefined;
  nationality: string | undefined;
  avatar: string;
  country: string;
  state: string;
  city: string;
  address1: string;
  address2: string;
  birthday: null | Date | undefined;
  languages: null | LanguagesProps[];
  profileCompleteness: number | undefined;
  socialMedia: null | SocialMediaProps[];
  organization: null | OrganizationProps;
}
export type ClientHistory = {
  numberOfJobPosted: number;
  hired: number;
};
