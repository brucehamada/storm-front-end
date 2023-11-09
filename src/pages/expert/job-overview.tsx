import { Typography, Grid, Button, Card, Stack, Divider } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TimeTrackerCard from 'components/molecules/expert/Timetrackercard';
import JobOverviewCard from 'components/molecules/expert/Joboverviewcard';
import Meetingscard from 'components/molecules/expert/Meetingscard';
import MilestonesCard from 'components/molecules/expert/milestonescard';
import NotesCard from 'components/molecules/expert/notescard';
import FeedbackCard from 'components/molecules/expert/feedbackcard';
import HiringContractCard from 'components/molecules/expert/hiringcontractcard';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMilestones } from 'store/reducers/jobs';
import { dispatch, useSelector } from 'store';
import { getUpcomingMeetings } from 'store/reducers/calendar';

const joboverviewcontent = {
  description:
    'Lorem ipsum dolor sit amet consectetur. Elementum vitae vulputate viverra id massa risus doneccommodo eu. Habitasse sit arcu enim nec. Interdum blandit aliquam imperdiet nunc vel volutpattortor ullamcorper sollicitudin. Risus amet eu ipsum egestas imperdiet tempor. Sollicitudin auctorplatea tempor ut fusce placerat convallis convallis pellentesque. Nulla libero orci varius in aliquetvulputate condimentum eget sed. Neque sit ante sit eu ac. Etiam volutpat id tempor praesent.Varius urna mollis sodales morbi sed',
  Duration: '3 Months',
  StartDate: '22nd May 2023',
  EngagementType: 'Project-Fixed Price',
  Amount: '$1000',
  Date: ['May 22', 'May 22'],
  Description: ['Milestone 1 Activated', 'You accepted the offer for $1000 fixed price project'],
  ClientInformation: ['Jane Doe', 'UAE', 'Verified']
};


const NotesCardItem = [
  {
    image: '',
    text: 'Lorem Ipsum fsdf',
    date: '30th Apr 2023'
  },
  {
    image: '',
    text: 'Lorem Ipsum fsdf',
    date: '29th Apr 2023'
  },
  {
    image: '',
    text: 'Lorem Ipsum fsdf',
    date: '28th Apr 2023'
  }
];

const HiringContractItem = {
  contractId: 'FK39455',
  contractType: 'Project-Hourly',
  rate: '$120/Hour',
  hoursOfEngagementPerWeek: '12 Hours/Week',
  startDate: '22nd June 2023',
  expertInfo: '',
  name: 'Jane Doe',
  companyDetails: '',
  clientName: 'Client Name',
  companyName: 'XYZ Company Pvt ltd',
  location: 'Riyadh, KSA'
};

const Job_Overview = (props: any) => {
  const theme = useTheme();
  const location = useLocation();
  const id = location.state?.id;
  useEffect(() => {
    dispatch(getMilestones(id));
    dispatch(getUpcomingMeetings());
  }, []);
  const milestones = useSelector((state) => state.jobs.milestones);
  const meetings = useSelector((state) => state.calendar.upcomingMeetings);
  const [page, setPage] = useState(0);

  const handleBackClick = () => {
    window.history.back();
  };
  const handleTimeTrackerClick = () => {
    setPage(0);
  };
  const handleJobOverviewClick = () => {
    setPage(1);
  };
  const handleMeetinsClick = () => {
    setPage(2);
  };
  const handleMilestonesClick = () => {
    setPage(3);
  };
  const handleNotesClick = () => {
    setPage(4);
  };
  const handleFeedbackClick = () => {
    setPage(5);
  };
  const handleHiringContractClick = () => {
    setPage(6);
  };
  const _renderView = () => {
    switch (page) {
      case 0:
        return <TimeTrackerCard />;
        break;
      case 1:
        return <JobOverviewCard item={joboverviewcontent} />;
        break;
      case 2:
        return <Meetingscard item={meetings} />;
        break;
      case 3:
        return <MilestonesCard item={milestones} />;
        break;
      case 4:
        return <NotesCard item={NotesCardItem} />;
        break;
      case 5:
        return <FeedbackCard />;
        break;
      case 6:
        return <HiringContractCard item={HiringContractItem} />;
        break;
    }
    return <></>;
  };
  return (
    <Grid container spacing={3} sx={{ padding: '10px' }}>
      <Grid item xs={12} sx={{ display: 'flex' }}>
        <Stack sx={{ display: 'inline-flex', alignItems: 'center' }} direction={'row'}>
          <Button onClick={handleBackClick}>
            <ArrowBackIcon sx={{ color: theme.palette.primary.darker }} />
          </Button>
          <Typography variant="body2" sx={{ color: theme.palette.secondary, fontSize: '1rem' }}>
            Jobs/{}/JobOverview
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left' }}>
        <Card sx={{ height: '100%', minHeight: '80vh', width: '16vw' }}>
          <Grid xs={12} sx={{ margin: '20px' }}>
            <Button onClick={handleTimeTrackerClick} sx={{ textAlign: 'left' }}>
              <Typography sx={{ color: theme.palette.secondary.darker, fontSize: '1.2rem' }}>Time Tracker</Typography>
            </Button>
            <Divider />
          </Grid>
          <Grid xs={12} sx={{ margin: '20px' }}>
            <Button onClick={handleJobOverviewClick} sx={{ textAlign: 'left' }}>
              <Typography sx={{ color: theme.palette.secondary.darker, fontSize: '1.2rem' }}>Job Overview</Typography>
            </Button>
            <Divider />
          </Grid>
          <Grid xs={12} sx={{ margin: '20px' }}>
            <Button onClick={handleMeetinsClick} sx={{ textAlign: 'left' }}>
              <Typography sx={{ color: theme.palette.secondary.darker, fontSize: '1.2rem' }}>Meetings</Typography>
            </Button>
            <Divider />
          </Grid>
          <Grid xs={12} sx={{ margin: '20px' }}>
            <Button onClick={handleMilestonesClick} sx={{ textAlign: 'left' }}>
              <Typography sx={{ color: theme.palette.secondary.darker, fontSize: '1.2rem' }}>Milestones</Typography>
            </Button>
            <Divider />
          </Grid>
          <Grid xs={12} sx={{ margin: '20px' }}>
            <Button onClick={handleNotesClick} sx={{ textAlign: 'left' }}>
              <Typography sx={{ color: theme.palette.secondary.darker, fontSize: '1.2rem' }}>Notes</Typography>
            </Button>
            <Divider />
          </Grid>
          <Grid xs={12} sx={{ margin: '20px' }}>
            <Button onClick={handleFeedbackClick} sx={{ textAlign: 'left' }}>
              <Typography sx={{ color: theme.palette.secondary.darker, fontSize: '1.2rem' }}>Feedback</Typography>
            </Button>
            <Divider />
          </Grid>
          <Grid xs={12} sx={{ margin: '20px' }}>
            <Button onClick={handleHiringContractClick} sx={{ textAlign: 'left' }}>
              <Typography sx={{ color: theme.palette.secondary.darker, fontSize: '1.2rem' }}>Hiring Contract</Typography>
            </Button>
            <Divider />
          </Grid>
        </Card>
        <Grid item xs={12}>
          {_renderView()}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Job_Overview;
