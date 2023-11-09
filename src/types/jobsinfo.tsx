import { ClientsProfile } from './clients-profile';
import { Invitation } from './invitation';

export type JobInfo = {
  client_id: string;
  _id: string;
  title: string;
  visibility: string;
  liveFrom: string;
  proposals: number;
  invites: number;
  noOfMeetings: number;
  type: string;
};
export type Proposal = {
  _id: string;
  coverLetter: string;
  type: string;
  milestone: Milestone[];
  expertEmail: string;
  time: string;
};
export type JobDetail = {
  _id: string;
  milestones: Milestone[];
  client: ClientsProfile | null;
  createdAt: string;
  duration: string;
  industry: string[];
  invitations: Invitation[];
  proposals: Proposal[];
  questions: string[];
  skills: string[];
  budgetRange: string[];
  status: string;
  title: string;
  description: string;
  tools: string[];
  type: string;
  updatedAt: string;
  visibility: string;
  weeklyCommitment: string;
  country: string;
  verifiyStatus: string;
};

export type JobInDetail = {
  jobOverview: JobOverview;
  myHires: MyHires[];
  proposalReceived: ProposalReceived[];
  invites: ProposalReceived[];
};

export type JobOverview = {
  _id: string;
  title: string;
  description: string;
  skills: string[];
  industry: string[];
  tools: string[];
  visibility: string;
  type: string;
  weeklyCommitment: string;
  duration: string;
  budgetRange: string;
};

export type MyHires = {
  expertName: string;
  avatar: string;
  contractType: string;
  location: string;
  rate: string;
  noOfMeeting: number;
  nextMeeting: string;
};

export type ProposalReceived = {
  _id: string;
  name: string[];
  avatar: string[];
  projectTerms: string[];
  hourlyRate: string[];
  relevance: string[];
  companyName: string[];
  position: string[];
  experience: string;
  location: string[];
  availability: string[];
  status: string[];
};

export type JobInExpert = {
  _id: string;
  fullName: string;
  organization: string;
  engagement: string;
  description: string;
  startDate: string;
  country: string;
  cost: string;
  numberOfMeetings: number;
  nextMeeting: string;
};
export type Milestone = {
  milestoneNumber: number;
  price: string;
  endDate: string;
  description: string;
};
