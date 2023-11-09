import { Typography, Button, Card, CardContent, Grid, Stack, Drawer, List, ListItem, Box, Tabs, Tab } from '@mui/material';
import IconButton from 'components/@extended/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Calendar from 'components/Calendar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MeetingCard from 'components/cards/MeetingCard';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useTheme from '@mui/system/useTheme';
import Avatar from 'components/@extended/Avatar';
import { useState, useContext, useEffect } from 'react';
import 'react-chat-elements/dist/main.css';
import JWTContext from 'contexts/JWTContext';
import { dispatch, useSelector } from 'store';
import { useLocation } from 'react-router-dom';
import { getHistoryMeetings, getUpcomingMeetings } from 'store/reducers/calendar';
import moment from 'moment';
import { openSnackbar } from 'store/reducers/snackbar';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const Meetings = (props: any) => {
  const location = useLocation();
  const theme = useTheme();
  useEffect(() => {
    dispatch(getUpcomingMeetings());
    dispatch(getHistoryMeetings());
  }, []);
  let upcomingMeetingList = useSelector((state) => state.calendar.upcomingMeetings);

  let historyMeetingList = useSelector((state) => state.calendar.historyMeetings);
  let meetingData = useSelector((state) => state.calendar.meetingDetail);
  const userContext = useContext(JWTContext);
  const [isOpen, setOpen] = useState(false);
  let currentDate = new Date();
  let tomorrowDate = currentDate.getDate() + 1;
  const handleStartMeetingClick = () => {};
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (meetingData?.fullName) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setOpen(open);
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select person.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    }
  };
  const handleMoreClick = () => {};
  const handleBackClick = () => {
    setOpen(false);
  };

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function CustomTabPanel(expert: TabPanelProps) {
    const { children, value, index, ...other } = expert;

    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <>{children}</>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }
  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)} sx={{ minWidth: '70vw' }}>
        <List sx={{ minWidth: '70vw' }}>
          <ListItem>
            <Grid container>
              <Grid item xs={6}>
                <Stack direction="row" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Button onClick={handleBackClick}>
                    <ArrowBackIcon sx={{ fontSize: '2rem' }} />
                  </Button>
                  <Typography variant="h2" sx={{ color: theme.palette.secondary }}>
                    Back
                  </Typography>
                </Stack>
                <Typography variant="h5">{meetingData?.fullName}</Typography>
                <Typography variant="h3">30 Minutes Meeting</Typography>
                <Typography variant="h5">30 Min</Typography>
              </Grid>
              <Grid item xs={6}>
                <Calendar receiverEmail={location?.state?.to} />
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Drawer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container sx={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={1}>
              <Typography variant="h3">Meetings</Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={1}>
              <Stack direction="row" spacing={5}>
                <Avatar alt="avatar" src={meetingData?.avatar} sx={{ minHeight: '3vw', minWidth: '3vw', marginRight: '2vh' }} />
                <Typography variant="h5" sx={{ display: 'inline-flex', whiteSpace: 'nowrap', alignItems: 'center' }}>
                  {meetingData?.fullName}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'right' }}>
              <Stack direction={'row'} spacing={4} sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  style={{
                    backgroundColor: 'white',
                    whiteSpace: 'nowrap',
                    color: theme.palette.primary.darker,
                    width: '10vw',
                    textTransform: 'none',
                    border: `1px solid ${theme.palette.primary.darker}`,
                    borderRadius: '50px',
                    height: '4vh'
                  }}
                  onClick={handleStartMeetingClick}
                >
                  Start Meeting
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    backgroundColor: 'white',
                    whiteSpace: 'nowrap',
                    color: theme.palette.primary.darker,
                    width: '10vw',
                    textTransform: 'none',
                    borderRadius: '50px',
                    border: `1px solid ${theme.palette.primary.darker}`,
                    height: '4vh'
                  }}
                  onClick={toggleDrawer(true)}
                >
                  Reschedule
                </Button>
                <IconButton onClick={handleMoreClick}>
                  <MoreVertIcon sx={{ color: theme.palette.primary.darker }} />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ minHeight: '79vh', overflow: 'auto', maxHeight: '79vh' }}>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Box sx={{ borderBottom: '1px', bortderColor: 'divider', width: '100%' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="Meeting tabs">
                      <Tab label={<Typography variant="h5">Upcoming</Typography>} {...a11yProps(0)} />
                      <Tab label={<Typography variant="h5">History</Typography>} {...a11yProps(1)} />
                    </Tabs>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <CustomTabPanel value={value} index={0}>
                    <Grid container spacing={7} sx={{ display: 'flex', alignItems: 'left' }}>
                      <Grid item xs={12} direction={'column'}>
                        <Typography variant="body1">Today</Typography>
                        {upcomingMeetingList?.map(
                          (item: any) =>
                            new Date(item?.start).getDate() === currentDate.getDate() && (
                              <MeetingCard
                                _id={item._id}
                                to={item.to}
                                name={item?.to === userContext?.user?.email ? item?.fromName : item?.toName}
                                time={moment(item?.start).format('hh:mm A')}
                                duration={moment(item.end).diff(moment(item.start), 'minutes')}
                                type={item.type}
                              />
                            )
                        )}
                      </Grid>
                      <Grid item xs={12} direction={'column'}>
                        <Typography variant="body1">Tomorrow</Typography>
                        {upcomingMeetingList?.map(
                          (item: any) =>
                            new Date(item?.start).getDate() === currentDate.getDate() + 1 && (
                              <MeetingCard
                                _id={item._id}
                                to={item.to}
                                name={item?.to === userContext?.user?.email ? item?.fromName : item?.toName}
                                time={moment(item?.start).format('hh:mm A')}
                                duration={moment(item.end).diff(moment(item.start), 'minutes')}
                                type={item.type}
                              />
                            )
                        )}
                      </Grid>
                      <Grid item xs={12} direction={'column'}>
                        <Typography variant="body1">{tomorrowDate + 1}</Typography>
                        {upcomingMeetingList?.map(
                          (item: any) =>
                            item.time?.getDate() > tomorrowDate && (
                              <MeetingCard
                                _id={item._id}
                                to={item.to}
                                name={item?.to === userContext?.user?.email ? item?.fromName : item?.toName}
                                time={moment(item?.start).format('hh:mm A')}
                                duration={moment(item.end).diff(moment(item.start), 'minutes')}
                                type={item.type}
                              />
                            )
                        )}
                      </Grid>
                    </Grid>
                  </CustomTabPanel>
                </Grid>
                <Grid item xs={12}>
                  <CustomTabPanel value={value} index={1}>
                    <Grid container spacing={7} sx={{ display: 'flex', alignItems: 'left' }}>
                      <Grid item xs={12} direction={'column'}>
                        {historyMeetingList?.map((item: any) => (
                          <MeetingCard
                            _id={item._id}
                            to={item.to}
                            name={item?.to === userContext?.user?.email ? item?.fromName : item?.toName}
                            time={moment(item?.start).format('hh:mm A')}
                            duration={moment(item.end).diff(moment(item.start), 'minutes')}
                            type={item.type}
                          />
                        ))}
                      </Grid>
                    </Grid>
                  </CustomTabPanel>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9}>
          <Card sx={{ minHeight: '79vh' }}>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <Stack sx={{ display: 'flex', border: `1px solid ${theme.palette.secondary.light}`, borderRadius: '5px' }}>
                    <Typography variant="h5" sx={{ padding: '10px', paddingLeft: '20px' }}>
                      Project Title
                    </Typography>
                    <Typography variant="body1" sx={{ padding: '10px' }}>
                      {meetingData?.title}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack sx={{ display: 'flex', border: `1px solid ${theme.palette.secondary.light}`, borderRadius: '5px' }}>
                    <Typography variant="h5" sx={{ padding: '10px', paddingLeft: '20px' }}>
                      Hired first on
                    </Typography>
                    <Typography variant="body1" sx={{ padding: '10px' }}>
                      {meetingData?.hiredFirstOn ? meetingData.hiredFirstOn : 'No hires'}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack sx={{ border: `1px solid ${theme.palette.secondary.light}`, borderRadius: '5px' }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Typography variant="h5" sx={{ padding: '10px', paddingLeft: '20px' }}>
                          Meeting Agenda
                        </Typography>
                      </Grid>
                      <Grid item xs={12} direction={'column'}>
                        {meetingData?.description.split('\n')?.map((item: any) => (
                          <Grid container spacing={2} sx={{ paddingLeft: '20px' }}>
                            <Grid item xs={12} sx={{ display: 'inline-flex', alignItems: 'left', padding: '10px', justifyContent: 'left' }}>
                              <FiberManualRecordIcon sx={{ color: theme.palette.primary.dark }} />
                              <Typography variant="body1">{item}</Typography>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack sx={{ border: `1px solid ${theme.palette.secondary.light}`, borderRadius: '5px' }}>
                    <Typography variant="h5" sx={{ padding: '20px' }}>
                      Past Meetings with {meetingData?.fullName}
                    </Typography>
                    <Grid container sx={{ padding: '20' }}>
                      {meetingData?.meetingHistory?.map((item: any) => (
                        <Grid item xs={4} sx={{ marginLeft: '1vw' }}>
                          <MeetingCard
                            _id={item._id}
                            to={item.to}
                            name={new Date(item.start).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                            time={new Date(item.start).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit' })}
                            duration={item.duration}
                            type={item.type}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Meetings;
