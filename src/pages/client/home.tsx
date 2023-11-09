import UserCard from 'components/cards/user';
import ActiveProjectsCard from 'components/cards/active-projects';
import MeetingCard from 'components/cards/MeetingCard';
import FilterListIcon from '@mui/icons-material/FilterList';
import RecentHireCard from 'components/cards/recent-hire';
import JobView from 'components/molecules/jobpost/job-view';
import useTheme from '@mui/system/useTheme';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Grid, Card, CardContent, Stack, Divider } from '@mui/material';
import { useContext, useEffect } from 'react';
import JWTContext from 'contexts/JWTContext';
import { useSelector, dispatch } from 'store';
import { getActiveJobs } from 'store/reducers/jobs';
import { getUpcomingMeetings } from 'store/reducers/calendar';
import moment from 'moment';
import { openSnackbar } from 'store/reducers/snackbar';

const recentHires = [
  {
    path: 'assets/iamges/user/avatar-1.png',
    name: 'John',
    value: 3,
    review: 10,
    meetings: 23,
    moneySpent: 10000,
    lastMeeting: '24th May 2023'
  }
];
const ClientHome = () => {
  const navigate = useNavigate();
  const userContext = useContext(JWTContext);
  const handlePostJob = () => {
    if ((userContext?.user?.client?.profileCompleteness ? userContext.user.client.profileCompleteness : 0) < 80) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please complete your profile to post a new Job.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: 'true'
        })
      );
    } else {
      navigate('/client/job-post-step1');
    }
  };
  useEffect(() => {
    dispatch(getActiveJobs());
    dispatch(getUpcomingMeetings());
  }, [dispatch]);
  const activeJobs = useSelector((state) => state.jobs.activeJobs);
  const upcomingMeetingList = useSelector((state) => state.calendar.upcomingMeetings);
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={3} sx={{ marginTop: '1vh' }}>
        <Grid item xs={12}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} spacing={5}>
            <Grid item xs={6}>
              <Typography variant="h2">Welcome Back Jane!</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                onClick={handlePostJob}
                style={{ color: 'white', backgroundColor: theme.palette.primary.darker, width: '20%', borderRadius: '5px' }}
              >
                Post a New Job
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} spacing={3}>
          <UserCard
            name={userContext?.user?.fullName}
            path={userContext?.user?.avatar}
            profileCompleteness={userContext?.user?.profileCompleteness}
          />
          <Card sx={{ display: 'flex', padding: '1vw' }}>
            <CardContent>
              <Typography variant="h5">Upcoming Meetings</Typography>
              <Typography variant="body2">Today</Typography>
              {upcomingMeetingList?.map((item: any) => (
                <MeetingCard
                  to={item.to}
                  _id={item._id}
                  name={item?.to === userContext?.user?.email ? item?.fromName : item?.toName}
                  time={moment(item?.start).format('hh:mm A')}
                  duration={moment(item.end).diff(moment(item.start), 'minutes')}
                  mode={item.allDay}
                />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={5}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <ActiveProjectsCard title={'Active Jobs'} value={activeJobs?.length} handleClick={() => navigate('/client/job-home')} />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <ActiveProjectsCard title={'Proposals Received'} value={0} handleClick={() => navigate('/client/job-home')} />
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <ActiveProjectsCard
                title={'Upcoming Meetings'}
                value={upcomingMeetingList ? upcomingMeetingList.length : 0}
                handleClick={() => navigate('/meetings')}
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">Active Jobs</Typography>
                <Button>
                  <Typography variant="body2">Filter</Typography>
                  <FilterListIcon />
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Grid container sx={{ padding: '5px' }}>
                    <Grid item xs={3}>
                      <Typography variant="h5" sx={{ whiteSpace: 'nowrap', marginLeft: '1vw', fontWeight: '1rem' }}>
                        Project Title
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography variant="h5" sx={{ whiteSpace: 'nowrap', marginLeft: '1vw', fontWeight: '1rem' }}>
                        Type
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography variant="h5" sx={{ whiteSpace: 'nowrap', marginLeft: '1vw', fontWeight: '1rem' }}>
                        Live from
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h5" sx={{ whiteSpace: 'nowrap', marginLeft: '1vw', fontWeight: '1rem' }}>
                        Proposals Received
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography variant="h5" sx={{ whiteSpace: 'nowrap', marginLeft: '1vw', fontWeight: '1rem' }}>
                        Invites
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h5" sx={{ whiteSpace: 'nowrap', marginLeft: '1vw', fontWeight: '1rem' }}>
                        No. of Meetings
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h5" sx={{ whiteSpace: 'nowrap', marginLeft: '1vw', fontWeight: '1rem' }}>
                        Actions
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={12}>
                        <JobView JobItems={activeJobs} />
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">Recent Hires</Typography>
                <Button>
                  <Typography variant="body2">View All</Typography>
                </Button>
              </Stack>
            </Grid>
            {recentHires?.map((item: any) => (
              <Grid item xs={4}>
                <RecentHireCard
                  path={item.path}
                  name={item.name}
                  value={item.value}
                  review={item.review}
                  meeting={item.meetings}
                  money={item.moneySpent}
                  date={item.lastMeeting}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ClientHome;
