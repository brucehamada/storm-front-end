import { Typography, Grid, Button, Card, CardContent, Stack } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Tabs, Tab } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import JobMyJobRow from 'components/molecules/jobpost/job-my-job-row';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import { dispatch, useSelector } from 'store';
import { getExpertActiveJobs, getExpertCanceledJobs, getExpertCompletedJobs, getExpertDisputedJobs } from 'store/reducers/jobs';
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

const MyTableHead = () => {
  const theme = useTheme();
  return (
    <TableHead>
      <TableRow>
        <TableCell
          align="left"
          sx={{
            fontSize: '1rem',
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: 'white',
            padding: '3vh 0',
            color: theme.palette.secondary.darker
          }}
        >
          Client Details
        </TableCell>
        <TableCell
          sx={{
            fontSize: '1rem',
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: 'white',
            color: theme.palette.secondary.darker
          }}
          align="left"
        >
          Contract Type
        </TableCell>
        <TableCell
          sx={{
            fontSize: '1rem',
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: 'white',
            color: theme.palette.secondary.darker
          }}
          align="left"
        >
          Location
        </TableCell>
        <TableCell
          sx={{
            fontSize: '1rem',
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: 'white',
            color: theme.palette.secondary.darker
          }}
          align="left"
        >
          Rate/Amount
        </TableCell>
        <TableCell
          sx={{
            fontSize: '1rem',
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: 'white',
            color: theme.palette.secondary.darker
          }}
          align="left"
        >
          No. of Meeting
        </TableCell>
        <TableCell
          sx={{
            fontSize: '1rem',
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: 'white',
            color: theme.palette.secondary.darker
          }}
          align="left"
        >
          Last Meeting on
        </TableCell>
        <TableCell
          sx={{
            fontSize: '1rem',
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: 'white',
            color: theme.palette.secondary.darker
          }}
          align="left"
        >
          Action
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

const Job_MyJob = () => {
  const theme = useTheme();
  useEffect(() => {
    dispatch(getExpertActiveJobs());
    dispatch(getExpertCanceledJobs());
    dispatch(getExpertCompletedJobs());
    dispatch(getExpertDisputedJobs());
  }, []);
  const activeJobs = useSelector((state) => state.jobs.expertActiveJobs);
  const completedJobs = useSelector((state) => state.jobs.expertCompletedJobs);
  const canceledJobs = useSelector((state) => state.jobs.expertCanceledJobs);
  const disputedJobs = useSelector((state) => state.jobs.expertDisputedJobs);
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [label, setLabel] = useState('active');
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setLabel('active');
        break;
      case 1:
        setLabel('completed');
        break;
      case 2:
        setLabel('cancelled');
        break;
      case 3:
        setLabel('disputed');
        break;
    }
  };
  const handleThisMonthClick = () => {
    navigate('/client/job-my-job');
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
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
        <Typography variant="h2">My Jobs</Typography>

        <Button
          disableElevation
          size="medium"
          type="submit"
          variant="contained"
          onClick={handleThisMonthClick}
          style={{ color: 'white', backgroundColor: theme.palette.primary.darker, borderRadius: '10px' }}
        >
          <Typography variant="body2" style={{ padding: '6px 30px', fontSize: '14pt' }}>
            This Month
          </Typography>
        </Button>
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ width: '100%', minHeight: '65vh' }}>
          <CardContent>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', color: theme.palette.primary.darker }}>
              <Grid container>
                <Grid item xs={12}>
                  <Box sx={{ borderBottom: `1px solid ${theme.palette.secondary.bolder}`, width: '100%' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="Job tabs">
                      <Tab label={<Typography variant="h5">Active</Typography>} {...a11yProps(0)} />
                      <Tab label={<Typography variant="h5">Completed</Typography>} {...a11yProps(1)} />
                      <Tab label={<Typography variant="h5">Cancelled</Typography>} {...a11yProps(2)} />
                      <Tab label={<Typography variant="h5">Disputed</Typography>} {...a11yProps(3)} />
                    </Tabs>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <CustomTabPanel value={value} index={0}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <MyTableHead />
                        <TableBody>
                          {activeJobs?.map((item: any) => (
                            <JobMyJobRow Breadcrumb={label} MyJobItem={item} />
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <MyTableHead />
                        <TableBody>
                          {completedJobs?.map((item: any) => (
                            <JobMyJobRow Breadcrumb={label} MyJobItem={item} />
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <MyTableHead />
                        <TableBody>
                          {canceledJobs?.map((item: any) => (
                            <JobMyJobRow Breadcrumb={label} MyJobItem={item} />
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <MyTableHead />
                        <TableBody>
                          {disputedJobs?.map((item: any) => (
                            <JobMyJobRow Breadcrumb={label} MyJobItem={item} />
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
  );
};
export default Job_MyJob;
