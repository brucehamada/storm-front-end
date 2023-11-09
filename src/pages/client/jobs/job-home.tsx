import { Typography, Grid, Button, Card, CardContent, Stack } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Tabs, Tab } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import JobView from 'components/molecules/jobpost/job-view';
import { useSelector } from 'store';
import { useNavigate } from 'react-router-dom';
import { getActiveJobs, getHistoryJobs } from 'store/reducers/jobs';
import { useDispatch } from 'store';
import { useContext } from 'react';
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

const Job_Home = () => {
  const userContext = useContext(JWTContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    dispatch(getActiveJobs());
    dispatch(getHistoryJobs());
  }, [dispatch]);
  const activeJobs = useSelector((state) => state.jobs.activeJobs);
  const historyJobs = useSelector((state) => state.jobs.historyJobs);
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
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <Grid container spacing={3} sx={{ padding: '10px' }}>
      <Grid item xs={12} sx={{ display: 'flex' }}>
        <Stack sx={{ display: 'inline-flex', alignItems: 'center' }} direction={'row'}>
          <Button onClick={handleBackClick}>
            <ArrowBackIcon sx={{ color: theme.palette.primary.darker, width: '50px', height: '50px' }} />
          </Button>
          <Typography variant="h5" sx={{ color: theme.palette.secondary.dark }}>
            Jobs/Active
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h2">Jobs</Typography>

        <Button
          disableElevation
          size="medium"
          type="submit"
          variant="contained"
          onClick={handlePostNewJobClick}
          style={{ color: 'white', backgroundColor: theme.palette.primary.darker }}
        >
          <Typography variant="body2" style={{ paddingRight: '15px', paddingLeft: '15px' }}>
            Post a New Job
          </Typography>
        </Button>
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', minHeight: '73vh' }}>
        <Card sx={{ width: '100%' }}>
          <CardContent>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Grid container>
                <Grid item xs={12}>
                  <Box sx={{ borderBottom: `1px solid ${theme.palette.secondary.lighter}`, width: '100%' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="Job tabs">
                      <Tab label={<Typography variant="h5">Active</Typography>} {...a11yProps(0)} />
                      <Tab label={<Typography variant="h5">History</Typography>} {...a11yProps(1)} />
                    </Tabs>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <CustomTabPanel value={value} index={0}>
                    <Grid container spacing={7} sx={{ display: 'flex', alignItems: 'left' }}>
                      <Grid item xs={12}>
                        <Grid container>
                          <Grid item xs={3}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              Project Title
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              Type
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              Live from
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              Proposals Received
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              Invites
                            </Typography>
                          </Grid>
                          <Grid item lg={1} sm={0}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              No. of Meetings
                            </Typography>
                          </Grid>
                          <Grid item lg={3} sm={4}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '2vw' }}>
                              Actions
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container>
                          <Grid item xs={12}>
                            <JobView JobItems={activeJobs} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <Grid container spacing={7} sx={{ display: 'flex', alignItems: 'left' }}>
                      <Grid item xs={12}>
                        <Grid container>
                          <Grid item xs={3}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              Project Title
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              Type
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              Live from
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              Proposals Received
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              Invites
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '1vw' }}>
                              No. of Meetings
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography variant="h5" sx={{ whiteSpace: 'nowrap', paddingLeft: '2vw' }}>
                              Actions
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container>
                          <Grid item xs={12}>
                            <JobView JobItems={historyJobs} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CustomTabPanel>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Job_Home;
