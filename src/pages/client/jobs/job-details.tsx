import { Typography, Grid, Button, Card, CardContent, Stack, Avatar } from '@mui/material';
import { Drawer, List, ListItem, Rating } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Tabs, Tab } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { dispatch, useSelector } from 'store';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import ProjectDetails from 'components/cards/project-details';
import { getJobInDetails } from 'store/reducers/jobs';
import HiredExpert from 'components/molecules/jobpost/hiredExperts';
import Proposals from 'components/molecules/jobpost/proposal';
import Calendar from 'components/Calendar';
import { insertChat } from 'store/reducers/chat';
import JWTContext from 'contexts/JWTContext';
import { openSnackbar } from 'store/reducers/snackbar';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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

const HiresTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          align="left"
          sx={{
            fontSize: '1rem',
            textTransform: 'none',
            fontWeight: 'light',
            backgroundColor: 'white',
            padding: '3vh 0',
            color: '#666666'
          }}
        >
          Expert Name
        </TableCell>
        <TableCell
          sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
          align="left"
        >
          Contract Type
        </TableCell>
        <TableCell
          sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
          align="left"
        >
          Location
        </TableCell>
        <TableCell
          sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
          align="left"
        >
          Rate/Amount
        </TableCell>
        <TableCell
          sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
          align="left"
        >
          No. of Meeting
        </TableCell>
        <TableCell
          sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
          align="left"
        >
          Next Meeting
        </TableCell>
        <TableCell
          sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
          align="left"
        >
          Actions
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
const ProposalsTableHead = () => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell
            align="left"
            sx={{
              fontSize: '1rem',
              textTransform: 'none',
              fontWeight: 'light',
              backgroundColor: 'white',
              padding: '3vh 0',
              color: '#666666'
            }}
          >
            Name
          </TableCell>
          <TableCell
            sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
            align="left"
          >
            Hourly Rate
          </TableCell>
          <TableCell
            sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
            align="left"
          >
            Relevance
          </TableCell>
          <TableCell
            sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
            align="left"
          >
            Company Name
          </TableCell>
          <TableCell
            sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
            align="left"
          >
            Position
          </TableCell>
          <TableCell
            sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
            align="left"
          >
            Experience
          </TableCell>
          <TableCell
            sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
            align="left"
          >
            Location
          </TableCell>
          <TableCell
            sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
            align="left"
          >
            Availability
          </TableCell>
          <TableCell
            sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light', backgroundColor: 'white', color: '#666666' }}
            align="left"
          >
            Status
          </TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};

const Job_MyJob = () => {
  const theme = useTheme();
  const location = useLocation();
  const userContext = useContext(JWTContext);
  const jobId = location?.state?._id;
  useEffect(() => {
    dispatch(getJobInDetails(jobId));
  }, []);

  const jobInDetail = useSelector((state) => state.jobs.jobInDetail);
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isBookingOpen, setBookingOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  const toggleBookingDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setBookingOpen(open);
  };
  const page = location?.state?.page;
  const [value, setValue] = useState(page ? page : 0);
  const [label, setLabel] = useState('active');
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(page ? page : newValue);
    switch (page ? page : newValue) {
      case 0:
        setLabel('JobOverview');
        break;
      case 1:
        setLabel('My Hires');
        break;
      case 2:
        setLabel('Proposals Received');
        break;
      case 3:
        setLabel('Invites Sent');
        break;
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handlePostNewJobClick = () => {
    if ((userContext?.user?.client?.profileCompleteness ? userContext.user.client.profileCompleteness : 0) < 80) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please complete your profile to post a new Job',
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

  const handleBookingCall = () => {
    setBookingOpen(true);
  };

  const handleMessage = () => {
    dispatch(insertChat({ type: 'general', to: location.state.expertEmail, text: 'hi' }));
    navigate('/messages');
  };
  const handleHire = () => {
    navigate('/client/hire-expert', {
      state: {
        avatar: location.state.avatar,
        expertName: location.state.expertName,
        expertEmail: location.state.expertEmail,
        expertTitle: location.state.title,
        jobTitle: jobInDetail?.jobOverview.title,
        experience: location.state.experience,
        location: location.state.location,
        revenue: location.state.revenue,
        rate: location.state.rate,
        engagement: jobInDetail?.jobOverview.type,
        id: jobInDetail?.jobOverview._id
      }
    });
    dispatch(toggleDrawer(false));
  };

  const handleReject = () => {
    dispatch(toggleDrawer(false));
  };

  return (
    <>
      <Drawer anchor="right" open={isBookingOpen} onClose={toggleBookingDrawer(false)} sx={{ minWidth: '70vw' }}>
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
                <Typography variant="h5">{location?.state?.expertName}</Typography>
                <Typography variant="h3">30 Minutes Meeting</Typography>
                <Typography variant="h5">30 Min</Typography>
              </Grid>
              <Grid item xs={6}>
                <Calendar receiverEmail={location?.state?.expertEmail} />
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Drawer>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)} sx={{ minWidth: '70vw' }}>
        <List sx={{ width: '70vw' }}>
          <ListItem>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Grid container>
                  <Box border={'1px solid grey'} borderRadius={'10px'} minHeight={'10vh'} sx={{ marginTop: '5vh', width: '100%' }}>
                    <Grid item xs={12} sx={{ marginTop: '3vh', marginBottom: '3vh' }}>
                      <Grid container spacing={5} sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Grid item lg={1.5} md={3} sm={4} xs={3} letterSpacing={1.5} sx={{ paddingTop: '1vh', paddingBottom: '1vh' }}>
                          <Avatar
                            alt="expert"
                            src={location.state?.avatar}
                            sx={{ height: '10vh', width: '10vh', marginLeft: '2vw', marginRight: '7vw' }}
                          />
                        </Grid>
                        <Grid item xs={2.5} direction={'column'}>
                          <Typography variant="h3" sx={{ color: theme.palette.primary.darker, fontWeight: 'bold' }}>
                            {location.state?.expertName}
                          </Typography>
                          <Typography variant="h5" sx={{ color: 'black' }}>
                            {location.state?.title}
                          </Typography>
                          <Typography variant="h5" sx={{ color: 'black' }}>
                            {location.state?.experience}
                          </Typography>
                        </Grid>
                        <Grid item lg={5.5} md={4} sm={3} xs={3}></Grid>
                        <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'center', direction: 'column' }}>
                          <Grid container spacing={2.5}>
                            <Grid
                              item
                              xs={12}
                              display={'inline-flex'}
                              justifyContent={'left'}
                              alignItems={'left'}
                              direction={'row'}
                              marginRight={'4vw'}
                            >
                              <Rating name="review" value={location?.state?.rate} readOnly />
                              <Typography>{location?.state?.rate ? location?.state?.rate : 0}/5</Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography>Response {location?.state?.relevance ? location?.state?.relevance : 0}%</Typography>
                            </Grid>
                            <Grid item xs={12} display={'inline-flex'} justifyContent={'left'} alignItems={'left'} direction={'row'}>
                              <LocationOnOutlinedIcon />
                              <Typography>{location?.state?.location}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                  <Grid item xs={12}>
                    <Typography variant="h5" sx={{ marginTop: '5vh', marginBotton: '3vh' }}>
                      Cover Letter
                    </Typography>
                    <Box sx={{ minHeight: '20vh', backgroundColor: theme.palette.secondary.lighter, borderRadius: '10px' }}>
                      <Typography variant="body1" sx={{ padding: '10px' }}>
                        {location?.state?.coverLetter}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: '5vh' }}>
                    <Typography variant="h5">Project Terms</Typography>
                    <Box
                      sx={{
                        minHeight: '5vh',
                        backgroundColor: theme.palette.secondary.lighter,
                        borderRadius: '10px'
                      }}
                    >
                      <Typography sx={{ padding: '10px' }}>{location?.state?.projectTerms}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: '5vh' }}>
                    <Typography variant="h5" sx={{ padding: '10px' }}>
                      Milestones
                    </Typography>

                    {location?.state?.milestone?.map((item: any) => (
                      <Box
                        sx={{
                          minHeight: '5vh',
                          backgroundColor: theme.palette.secondary.lighter,
                          borderRadius: '10px'
                        }}
                      >
                        <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <Grid item xs={3}>
                            <Typography sx={{ textAlign: 'center', padding: '10px' }}>{item.milestoneNumber + 1}</Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography sx={{ textAlign: 'center', padding: '10px' }}>{item.description}</Typography>
                          </Grid>
                          <Grid item xs={3} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ padding: '10px' }}>{new Date(item.endDate).toLocaleDateString()}</Typography>
                          </Grid>
                          <Grid item xs={3} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ padding: '10px' }}>{item.amount}</Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  onClick={handleBookingCall}
                  sx={{ color: theme.palette.primary.darker, minWidth: '10vw', outlineColor: theme.palette.primary.darker }}
                >
                  Book a Call
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  onClick={handleMessage}
                  sx={{ color: theme.palette.primary.darker, minWidth: '10vw', outlineColor: theme.palette.primary.darker }}
                >
                  Message
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  onClick={handleHire}
                  sx={{
                    color: theme.palette.primary.darker,
                    minWidth: '10vw',
                    outlineColor: theme.palette.primary.darker,
                    whiteSpace: 'nowrap'
                  }}
                >
                  Hire this Expert
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  onClick={handleReject}
                  sx={{ color: theme.palette.primary.darker, minWidth: '10vw', outlineColor: theme.palette.primary.darker }}
                >
                  Reject
                </Button>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Drawer>

      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ display: 'flex' }}>
          <Stack sx={{ display: 'inline-flex', alignItems: 'center' }} direction={'row'}>
            <Button onClick={handleBackClick}>
              <ArrowBackIcon sx={{ color: theme.palette.primary.darker, width: '50px', height: '50px' }} />
            </Button>
            <Typography variant="h5" sx={{ color: theme.palette.secondary.dark }}>
              Jobs/{label}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h2">{jobInDetail?.jobOverview.title}</Typography>

          <Button
            disableElevation
            size="medium"
            type="submit"
            variant="contained"
            onClick={handlePostNewJobClick}
            style={{ color: 'white', backgroundColor: theme.palette.primary.darker, borderRadius: '10px' }}
          >
            <Typography variant="body2" style={{ padding: '6px 30px', fontSize: '14pt' }}>
              Post a New Job
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ width: '100%', minHeight: '65vh' }}>
            <CardContent>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', color: theme.palette.secondary.darker }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Box sx={{ borderBottom: `1px solid ${theme.palette.secondary.lighter}`, width: '100%' }}>
                      <Tabs value={value} onChange={handleChange} aria-label="Job tabs">
                        <Tab
                          label="JobOverview"
                          {...a11yProps(0)}
                          sx={{ width: '10vw', color: theme.palette.secondary.darker, fontSize: '1rem' }}
                        />
                        <Tab
                          label="My Hires"
                          {...a11yProps(1)}
                          sx={{ width: '10vw', color: theme.palette.secondary.darker, fontSize: '1rem' }}
                        />
                        <Tab
                          label="Proposals Received"
                          {...a11yProps(2)}
                          sx={{ width: '10vw', color: theme.palette.secondary.darker, fontSize: '1rem' }}
                        />
                        <Tab
                          label="Invites Sent"
                          {...a11yProps(3)}
                          sx={{ width: '10vw', color: theme.palette.secondary.darker, fontSize: '1rem' }}
                        />
                      </Tabs>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTabPanel value={value} index={0}>
                      <Grid container spacing={5}>
                        <Grid item xs={9}>
                          <Grid container spacing={10}>
                            <Grid item xs={12}>
                              <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left' }}>
                                Description
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Stack sx={{ minHeight: '10vh', display: 'flex' }}>
                                <Typography variant="body1">{jobInDetail?.jobOverview.description}</Typography>
                              </Stack>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography variant="h5">Area/Areas of Expertise</Typography>
                              <Typography variant="body1">{jobInDetail?.jobOverview?.skills?.join(', ')}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography variant="h5">Industry of Expertise</Typography>
                              <Typography variant="body1">{jobInDetail?.jobOverview?.industry?.join(', ')}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography variant="h5">Tools</Typography>
                              <Typography variant="body1">{jobInDetail?.jobOverview?.tools?.join(', ')}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={3}>
                          <ProjectDetails
                            jobView={jobInDetail?.jobOverview.visibility}
                            type={jobInDetail?.jobOverview.type}
                            weeklyCommitment={jobInDetail?.jobOverview.weeklyCommitment}
                            duration={jobInDetail?.jobOverview.duration}
                            budgetRange={jobInDetail?.jobOverview.budgetRange}
                          />
                        </Grid>
                      </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="caption table">
                          <HiresTableHead />
                          <TableBody>
                            {jobInDetail?.myHires?.map((item: any) => (
                              <HiredExpert Breadcrumb={label} ExpertItem={item} />
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="caption table">
                          <ProposalsTableHead />
                          <TableBody>
                            {jobInDetail?.proposalReceived?.map((item: any) => (
                              <Proposals Breadcrumb={label} proposalItem={item} handleClick={toggleDrawer} />
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="caption table">
                          <ProposalsTableHead />
                          <TableBody>
                            {jobInDetail?.invites?.map((item: any) => (
                              <Proposals Breadcrumb={label} proposalItem={item} handleClick={toggleDrawer} />
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CustomTabPanel>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Job_MyJob;
