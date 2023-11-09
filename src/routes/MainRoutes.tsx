import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// pages routing
const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));
const JobHome = Loadable(lazy(() => import('pages/client/jobs/job-home')));
const JobPostStep1 = Loadable(lazy(() => import('pages/client/jobs/job-post-1')));

const JobPostPublish = Loadable(lazy(() => import('pages/client/jobs/job-post-publish')));
const JobPostInvitation = Loadable(lazy(() => import('pages/client/jobs/job-post-invitation')));
const HiredExperts = Loadable(lazy(() => import('pages/client/experts/hired-experts')));
const HiredExpertsPersonal = Loadable(lazy(() => import('pages/client/experts/hired-experts-personal')));
const ClientHome = Loadable(lazy(() => import('pages/client/home')));
const Chat = Loadable(lazy(() => import('pages/chat')));
const Meetings = Loadable(lazy(() => import('pages/meetings')));
const Search = Loadable(lazy(() => import('pages/client/search')));
const SubmitProposal = Loadable(lazy(() => import('pages/expert/submitproposal')));

//render - profile page
const EditExpertProfile = Loadable(lazy(() => import('pages/expert/profile/editprofile')));
const ExpertProfile = Loadable(lazy(() => import('pages/expert/profile/expertprofile')));
const MyContent = Loadable(lazy(() => import('pages/expert/profile/mycontent')));
const UserSettings = Loadable(lazy(() => import('pages/expert/profile/usersettings')));
const EPaymentSettings = Loadable(lazy(() => import('pages/expert/paymentsettings')));
const ENotificationSettings = Loadable(lazy(() => import('pages/expert/notificationsettings')));
const ESupportCenter = Loadable(lazy(() => import('pages/expert/profile/supportcenter')));
const CSupportCenter = Loadable(lazy(() => import('pages/client/supportcenter')));
const ClientProfile = Loadable(lazy(() => import('pages/client/profile/clientprofile')));
const EditClientProfile = Loadable(lazy(() => import('pages/client/profile/editprofile')));
const StartupDetails = Loadable(lazy(() => import('pages/client/profile/startupdetails')));
const EditStartup = Loadable(lazy(() => import('pages/client/profile/editstartup')));
const AccountSettings = Loadable(lazy(() => import('pages/client/accountsettings')));
const CNotificationSettings = Loadable(lazy(() => import('pages/client/notificationsettings')));
const CPaymentSettings = Loadable(lazy(() => import('pages/client/paymentsettings')));

//render - find jobs page
const Search1 = Loadable(lazy(() => import('pages/expert/findjobs/search')));
const FindJobs = Loadable(lazy(() => import('pages/expert/findjobs')));
const SavedJobs = Loadable(lazy(() => import('pages/expert/findjobs/savedjobs')));
const RecommendedForYou = Loadable(lazy(() => import('pages/expert/findjobs/recommendedforyou')));
const Invitations = Loadable(lazy(() => import('pages/expert/findjobs/invitations')));
const ActiveProposals = Loadable(lazy(() => import('pages/expert/findjobs/activeproposals')));
const ArchivedProposals = Loadable(lazy(() => import('pages/expert/findjobs/archivedproposals')));

//render - earning page
const Overview = Loadable(lazy(() => import('pages/expert/earnings/overview')));
const Timesheet = Loadable(lazy(() => import('pages/expert/earnings/timesheet')));
const MyEarningsBillings = Loadable(lazy(() => import('pages/expert/earnings/myearningsbillings')));

//render - expert-home page
const ExpertHome = Loadable(lazy(() => import('pages/expert/home')));
const MyJobs = Loadable(lazy(() => import('pages/expert/myjobs')));
const TimeTracker = Loadable(lazy(() => import('pages/expert/time-tracker')));
const JobOverview = Loadable(lazy(() => import('pages/expert/job-overview')));
const JMeetings = Loadable(lazy(() => import('pages/expert/meetings')));
const Milestones = Loadable(lazy(() => import('pages/expert/meetings')));
const Notes = Loadable(lazy(() => import('pages/expert/notes')));
const Feedback = Loadable(lazy(() => import('pages/expert/feedback')));
const HiringContract = Loadable(lazy(() => import('pages/expert/hiring-contract')));
const SearchExpert = Loadable(lazy(() => import('pages/client/experts/search-expert')));
const JobDetail = Loadable(lazy(() => import('pages/client/jobs/job-details')));
const HireExpert = Loadable(lazy(() => import('pages/client/jobs/hire-expert')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'messages',
          element: <Chat />
        },
        {
          path: 'meetings',
          element: <Meetings />
        }
      ]
    },
    {
      path: 'expert/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'home',
          element: <ExpertHome />
        },
        {
          path: 'myjobs',
          element: <MyJobs />
        },
        {
          path: 'time-tracker',
          element: <TimeTracker />
        },
        {
          path: 'job-overview',
          element: <JobOverview />
        },
        {
          path: 'meetings',
          element: <JMeetings />
        },
        {
          path: 'milestones',
          element: <Milestones />
        },
        {
          path: 'notes',
          element: <Notes />
        },
        {
          path: 'feedback',
          element: <Feedback />
        },
        {
          path: 'hiring-contract',
          element: <HiringContract />
        },
        {
          path: 'profile',
          element: <ExpertProfile />
        },
        {
          path: 'edit-profile',
          element: <EditExpertProfile />
        },
        {
          path: 'mycontent',
          element: <MyContent />
        },
        {
          path: 'paymentsettings',
          element: <EPaymentSettings />
        },
        {
          path: 'usersettings',
          element: <UserSettings />
        },
        {
          path: 'notificationsettings',
          element: <ENotificationSettings />
        },
        {
          path: 'supportcenter',
          element: <ESupportCenter />
        },
        {
          path: 'findjobs',
          element: <FindJobs />
        },
        {
          path: 'findjobs-search',
          element: <Search1 />
        },
        {
          path: 'findjobs-savedjobs',
          element: <SavedJobs />
        },
        {
          path: 'findjobs-recommendedforyou',
          element: <RecommendedForYou />
        },
        {
          path: 'findjobs-invitations',
          element: <Invitations />
        },
        {
          path: 'findjobs-activeproposals',
          element: <ActiveProposals />
        },
        {
          path: 'earnings-overview',
          element: <Overview />
        },
        {
          path: 'earnings-timesheet',
          element: <Timesheet />
        },
        {
          path: 'earnings-myearningsbillings',
          element: <MyEarningsBillings />
        },
        {
          path: 'findjobs-archivedproposals',
          element: <ArchivedProposals />
        },
        {
          path: 'submit-proposal',
          element: <SubmitProposal />
        }
      ]
    },
    {
      path: '/maintenance',
      element: <CommonLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    },
    {
      path: 'client/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        { path: 'home', element: <ClientHome /> },
        {
          path: 'job-home',
          element: <JobHome />
        },
        {
          path: 'job-post-step1',
          element: <JobPostStep1 />
        },
        {
          path: 'job-post-publish',
          element: <JobPostPublish />
        },
        {
          path: 'job-post-invitation',
          element: <JobPostInvitation />
        },
        {
          path: 'hired-experts',
          element: <HiredExperts />
        },
        {
          path: 'supportcenter',
          element: <CSupportCenter />
        },
        {
          path: 'profile',
          element: <ClientProfile />
        },
        {
          path: 'edit-profile',
          element: <EditClientProfile />
        },
        {
          path: 'edit-startup-details',
          element: <EditStartup />
        },
        {
          path: 'accountsettings',
          element: <AccountSettings />
        },
        {
          path: 'paymentsettings',
          element: <CPaymentSettings />
        },
        {
          path: 'notificationsettings',
          element: <CNotificationSettings />
        },
        {
          path: 'startup-details',
          element: <StartupDetails />
        },
        { path: 'hired-experts-personal', element: <HiredExpertsPersonal /> },
        { path: 'search', element: <Search /> },
        { path: 'search-expert', element: <SearchExpert /> },
        { path: 'job-detail', element: <JobDetail /> },
        { path: 'hire-expert', element: <HireExpert /> }
      ]
    }
  ]
};

export default MainRoutes;
