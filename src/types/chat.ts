import { UserProfile } from 'types/user-profile';

export type History = {
  from?: string;
  type: string;
  to?: string;
  createdAt?: string;
  text?: string;
};

export interface ChatHistory {
  id?: number;
  from?: string;
  type: string;
  to?: string;
  text: string;
  createdAt?: string;
}

export interface ChatStateProps {
  chats: ChatHistory[];
  user: UserProfile;
  users: UserProfile[];
  error: object | string | null;
}
