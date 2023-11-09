import { ClientsProfile } from './clients-profile';
import { ExpertsProfile } from './experts-profile';

export interface CurrentUser {
  email: String;
  fullName: String;
  emailVerifyStatus: String;
  type: String;
  expert: ExpertsProfile;
  client: ClientsProfile;
}
