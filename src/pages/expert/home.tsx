import { Grid } from '@mui/material';
import ExpertOverview from 'components/molecules/expert/experts-overview';
import LastViewedBy from 'components/molecules/expert/last-viewed-by';
import ActiveJobs from 'components/molecules/expert/active-jobs';
import MeetingCard from 'components/cards/MeetingCard';
import UserCard from 'components/cards/user';
import { Card, CardContent, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import JWTContext from 'contexts/JWTContext';
import { dispatch, useSelector } from 'store';
import { getExpertActiveJobs } from 'store/reducers/jobs';
import { getUpcomingMeetings } from 'store/reducers/calendar';
import moment from 'moment';

const PagesClientExpertsHome = () => {
  const userContext = useContext(JWTContext);
  useEffect(() => {
    dispatch(getExpertActiveJobs());
    dispatch(getUpcomingMeetings());
  }, []);
  const activeJobs = useSelector((state) => state.jobs.expertActiveJobs);
  const upcomingMeetingList = useSelector((state) => state.calendar.upcomingMeetings);
  return (
    <>
      <Grid container spacing={2} sx={{ display: 'flex' }}>
        {/* First Part */}
        <Grid item xs={3} lg={2.5} style={{ overflowY: 'scroll', overflow: 'auto', maxHeight: '90' }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <UserCard
                path={userContext?.user?.avatar}
                name={userContext?.user?.fullName}
                haveProgress="true"
                profileCompleteness={userContext?.user?.profileCompleteness}
              />
            </Grid>
            <Grid item xs={12}>
              <ExpertOverview />
            </Grid>
            <Grid item xs={12}>
              <LastViewedBy />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={9} lg={9.5} style={{ overflowY: 'scroll', overflow: 'auto', maxHeight: '90' }}>
          <Card sx={{ borderRadius: '12px' }}>
            <CardContent>
              <Grid container spacing={5} style={{ display: 'flex' }}>
                <Grid item xs={12} marginBottom="1vh">
                  <ActiveJobs activeJobs={activeJobs} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4" sx={{ marginLeft: '1vw' }}>
                    Upcoming Meetings
                  </Typography>
                </Grid>
                {upcomingMeetingList?.map((item: any) => (
                  <Grid item xs={4}>
                    <MeetingCard
                      _id={item._id}
                      to={item.to}
                      name={item?.to === userContext?.user?.email ? item.fromName : item.toName}
                      time={moment(item?.start).format('hh:mm A')}
                      duration={moment(item.end).diff(moment(item.start), 'minutes')}
                      type={item.type}
                    />
                  </Grid>
                ))}
                <Grid item xs={12} sx={{ marginLeft: '10px', marginRight: '10px' }}>
                  {/* <Consultant consultantCards={cards} /> */}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default PagesClientExpertsHome;
