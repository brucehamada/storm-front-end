import { ReactElement } from 'react';
import { ClientsProfile } from './clients-profile';
import { ExpertsProfile } from './experts-profile';

// ==============================|| AUTH TYPES  ||============================== //

export type GuardProps = {
  children: ReactElement | null;
};

export type UserProfile = {
  createdAt: string;
  email: string;
  avatar: string;
  emailVerifiedStatus: string;
  fullName: string;
  lastLoggedIn: string;
  type: string;
  updatedAt: string;
  _id: string;
  profileCompleteness: number;
  phoneNumber: string;
  client: ClientsProfile;
  expert: ExpertsProfile;
};

export interface AuthProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null;
  token?: string | null;
}

export interface AuthActionProps {
  type: string;
  payload?: AuthProps;
}

export interface InitialLoginContextProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
}

export interface JWTDataProps {
  userId: string;
}

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  logout: () => void;
  login: (type: string, email: string, password: string, remembeMe: boolean) => Promise<void>;
  register: (type: string, email: string, password: string, fullName: string) => Promise<void>;
  resetPassword: (email: string, password: string) => Promise<void>;
  updateProfile: VoidFunction;
  sendOtpRequest: (email: string) => Promise<void>;
  sendOtpCode: (email: string, otp: string) => Promise<void>;
  loadUser: () => void;
};
