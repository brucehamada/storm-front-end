// project import
import MainCard from 'components/MainCard';
import {
  Grid,
  Stack,
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  Button,
  Divider,
  Chip,
  Rating,
  FormControl,
  InputBase,
  InputAdornment,
  SvgIcon
} from '@mui/material';
import FindJobsCard from 'components/cards/findjobscard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { Country } from 'country-state-city';
import { useState } from 'react';
import { ArrowBack } from '@mui/icons-material';
import IconButton from 'components/@extended/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useTheme from '@mui/system/useTheme';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import moment from 'moment';
import { getExpertSearchedJobs } from 'store/reducers/jobs';
import { dispatch, useSelector } from 'store';
import { useContext } from 'react';
import { JobDetail } from 'types/jobsinfo';
import { getClientHistory } from 'store/reducers/clients';
import JWTContext from 'contexts/JWTContext';
import { openSnackbar } from 'store/reducers/snackbar';

// ==============================|| SAMPLE PAGE ||============================== //
const CircleButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  width: '2.5rem',
  height: '2.5rem',
  backgroundColor: 'transparent',
  color: 'black',
  border: '1px solid rgba(0, 0, 0, 0.3)',
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  }
}));

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '0.5rem', transform: 'scale(1.4)' }}>
    •
  </Box>
);

const Search = () => {
  const theme = useTheme();
  const userContext = useContext(JWTContext);
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [selectedJob, setSelectedJob] = useState<JobDetail>();

  const handleFilter = () => {
    dispatch(getExpertSearchedJobs(keyWord));
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      handleFilter();
    } else {
      return false;
    }
  };

  const searchedJobs = useSelector((state) => state.jobs.expertSearchResults);
  const clientHistory = useSelector((state) => state.clients.clientHistory);
  const toggleDrawer = (open: boolean, id: string) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    const selectedJobs = searchedJobs.filter((item: any) => (item._id === id ? item : null));
    dispatch(getClientHistory(selectedJob?.client?.email));
    setSelectedJob(selectedJobs[0]);
    setOpen(open);
  };

  const handleBackClick = () => {
    setOpen(false);
  };

  const handleMoreClick = () => {};

  const toSubmit = () => {
    if ((userContext?.user?.expert?.profileCompleteness ? userContext.user.expert.profileCompleteness : 0) < 80) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please complete your profile to send proposal.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: 'true'
        })
      );
    } else {
      navigate('/expert/submit-proposal', { state: { selectedJob: selectedJob } });
    }
  };

  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false, '0')}>
        <List sx={{ minWidth: '65vw', width: '65vw' }}>
          <ListItem sx={{ padding: '2rem' }}>
            <Grid container rowGap={2}>
              <Grid item xs={12} lg={12}>
                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box onClick={handleBackClick} sx={{ cursor: 'pointer', alignItems: 'center', display: 'flex' }}>
                    <ArrowBack style={{ fontSize: '2rem', color: theme.palette.primary.darker }} />
                  </Box>
                  <IconButton onClick={handleMoreClick} sx={{ cursor: 'pointer' }}>
                    <MoreVertIcon sx={{ color: theme.palette.primary.darker }} />
                  </IconButton>
                </Stack>
              </Grid>
              <Grid container item xs={12} lg={12}>
                <Grid item xs={12} lg={11}>
                  <Typography variant="h3" style={{ color: theme.palette.primary.darker }}>
                    {selectedJob?.title}
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={1}>
                  <Stack direction={'row'} spacing={2}>
                    <CircleButton>
                      <FavoriteBorderIcon style={{ color: theme.palette.primary.dark }} />
                    </CircleButton>
                    <CircleButton>
                      <ThumbDownAltOutlinedIcon style={{ color: theme.palette.primary.dark }} />
                    </CircleButton>
                  </Stack>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack direction="row" sx={{ alignItems: 'center' }}>
                  <Typography variant="h4">
                    {selectedJob?.type} {bull}{' '}
                  </Typography>
                  <Typography variant="body1" style={{ fontSize: '1rem' }}>
                    Posted {(moment(new Date()).diff(selectedJob?.createdAt), 'hours')} Hours ago
                  </Typography>
                  <Typography variant="h4"> {bull} </Typography>
                  <Typography variant="h5">{selectedJob?.verifiyStatus} </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Typography variant="h5">{selectedJob?.description}</Typography>
              </Grid>
              <Grid item xs={12} lg={12}>
                {selectedJob?.skills.map((item: string) => (
                  <Chip label={item} sx={{ backgroundColor: theme.palette.primary.lighter, marginRight: '1vw' }} />
                ))}
              </Grid>
              <Grid container item xs={12} lg={12} alignItems={'center'}>
                <Grid item xs={12} lg={2}>
                  <Stack spacing={1} sx={{ minHeight: '4vh' }}>
                    <Typography variant="h4">Price</Typography>
                    <Typography variant="body1">
                      {selectedJob?.budgetRange[0]}-{selectedJob?.budgetRange[1]}/Hour
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={2}>
                  <Stack spacing={1} sx={{ minHeight: '6vh', whiteSpace: 'nowrap' }}>
                    <Typography variant="h4">Milestones</Typography>
                    <Typography variant="body1">{selectedJob?.milestones?.map((item: any) => item)}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={2}>
                  <Stack spacing={1} sx={{ minHeight: '6vh', whiteSpace: 'nowrap' }}>
                    <Typography variant="h4">Duration</Typography>
                    <Typography variant="body1">{selectedJob?.duration}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Stack spacing={1} sx={{ minHeight: '6vh', whiteSpace: 'nowrap' }}>
                    <Typography variant="h4">Company Location</Typography>
                    <Typography variant="body1">
                      {Country.getCountryByCode(selectedJob?.country ? selectedJob.country : '')?.name}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Stack spacing={1} sx={{ minHeight: '6vh', whiteSpace: 'nowrap' }}>
                    <Typography variant="h4">Industry of Expertise</Typography>
                    <Typography variant="body1">{selectedJob?.industry.join(', ')}</Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Button variant="contained" onClick={toSubmit} style={{ width: '8rem', fontSize: '1.1rem' }}>
                  Apply
                </Button>
              </Grid>
            </Grid>
          </ListItem>
          <Divider style={{ width: '50%' }} />
          <ListItem sx={{ padding: '2rem' }}>
            <Grid container rowGap={2}>
              <Grid item xs={12} lg={12}>
                <Typography variant="h3">About the Client</Typography>
              </Grid>
              <Grid container item xs={12} lg={12} alignItems={'center'}>
                <Grid item xs={12} lg={2.4}>
                  <Stack spacing={1} sx={{ minHeight: '6vh', whiteSpace: 'nowrap' }}>
                    <Typography variant="body1">Verification Status</Typography>
                    <Typography variant="h5">{selectedJob?.verifiyStatus}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={2.4}>
                  <Stack spacing={1} sx={{ minHeight: '6vh', whiteSpace: 'nowrap' }}>
                    <Typography variant="body1">No.of Jobs posted</Typography>
                    <Typography variant="h5">{clientHistory?.numberOfJobPosted}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={2.4}>
                  <Stack spacing={1} sx={{ minHeight: '6vh', whiteSpace: 'nowrap' }}>
                    <Typography variant="body1">% Hired</Typography>
                    <Typography variant="h5">{clientHistory?.hired}%</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={2.4}>
                  <Stack spacing={1} sx={{ minHeight: '6vh', whiteSpace: 'nowrap' }}>
                    <Typography variant="body1">No. of Employee</Typography>
                    <Typography variant="h5">{selectedJob?.status}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={2.4}>
                  <Stack spacing={1} sx={{ minHeight: '6vh', whiteSpace: 'nowrap' }}>
                    <Typography variant="body1">Member Since</Typography>
                    <Typography variant="h5">{new Date().toLocaleDateString('en-US')}</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </ListItem>
          <Divider style={{ width: '50%' }} />
          <ListItem sx={{ padding: '2rem' }}>
            <Grid container rowGap={2}>
              <Grid item xs={12} lg={12}>
                <Typography variant="h3">Client's Recent Feedback</Typography>
              </Grid>
              <Grid item xs={12} lg={12} paddingRight={1}>
                <Stack direction={'row'} style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h4">Design Architect</Typography>
                  <Stack direction={'row'} columnGap={1} style={{ alignItems: 'center' }}>
                    <Rating value={4} readOnly />
                    <Typography variant="h4">4/5</Typography>
                  </Stack>
                </Stack>
                <Typography variant="body1"></Typography>
              </Grid>
              <Grid item xs={12} lg={12} paddingRight={1}>
                <Stack direction={'row'} style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h4">Python Expert</Typography>
                  <Stack direction={'row'} columnGap={1} style={{ alignItems: 'center' }}>
                    <Rating value={3} readOnly />
                    <Typography variant="h4">3/5</Typography>
                  </Stack>
                </Stack>
                <Typography variant="body1"></Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Drawer>
      <Grid item lg={9} xl={10}>
        <Grid container item xs={12} lg={12} spacing={3} marginBottom={'1.5rem'} alignItems={'center'}>
          <Grid item xs={12} lg={10.5}>
            <MainCard>
              <Box
                sx={{
                  width: '80%',
                  ml: { xs: 0, md: 1 },
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <FormControl sx={{ width: '100%' }} onKeyDown={handleKeyDown}>
                  <InputBase
                    size="small"
                    style={{ paddingLeft: '10px' }}
                    startAdornment={
                      <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center', mr: '0.8rem' }}>
                        <SvgIcon>
                          <svg width="28px" height="28px" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="carbon:search">
                              <path
                                id="Vector"
                                fill="#949A9C"
                                d="M29.7579 27.8361L22.2059 20.2841C24.0207 18.1054 24.9257 15.311 24.7326 12.482C24.5395 9.65309 23.2632 7.00751 21.1692 5.09563C19.0752 3.18376 16.3247 2.15279 13.4899 2.2172C10.6551 2.28161 7.95428 3.43644 5.94927 5.44146C3.94426 7.44647 2.78943 10.1473 2.72501 12.9821C2.6606 15.8169 3.69157 18.5673 5.60344 20.6614C7.51532 22.7554 10.1609 24.0317 12.9898 24.2248C15.8188 24.4179 18.6132 23.5129 20.7919 21.6981L28.3439 29.2501L29.7579 27.8361ZM4.75793 13.2501C4.75793 11.4701 5.28577 9.73003 6.2747 8.24998C7.26363 6.76994 8.66924 5.61639 10.3138 4.9352C11.9583 4.25401 13.7679 4.07578 15.5137 4.42305C17.2596 4.77032 18.8632 5.62748 20.1219 6.88615C21.3806 8.14483 22.2377 9.74847 22.585 11.4943C22.9323 13.2401 22.754 15.0497 22.0728 16.6943C21.3917 18.3388 20.2381 19.7444 18.7581 20.7333C17.278 21.7223 15.538 22.2501 13.7579 22.2501C11.3718 22.2475 9.08414 21.2984 7.39689 19.6112C5.70964 17.9239 4.76058 15.6363 4.75793 13.2501Z"
                              />
                            </g>
                          </svg>
                        </SvgIcon>
                      </InputAdornment>
                    }
                    aria-describedby="header-search-text"
                    inputProps={{
                      'aria-label': 'weight'
                    }}
                    onChange={(event: any) => setKeyWord(event.target.value)}
                    placeholder="Search for Jobs"
                    sx={{
                      height: '1rem',
                      fontSize: '18px'
                    }}
                  />
                </FormControl>
              </Box>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={1.5}>
            <Button variant="contained" style={{ width: '100%', fontSize: '1.2rem' }} onClick={handleFilter} sx={{ padding: '0.7rem 0' }}>
              Filters
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={12}>
          <MainCard>
            <Typography variant="h2" marginBottom={'1.2rem'} marginTop={'1.5rem'}>
              Search Results
            </Typography>
            <Stack spacing={2} sx={{ minHegith: '70vh' }}>
              {searchedJobs.length !== undefined ? (
                searchedJobs?.map((item: any) => <FindJobsCard job={item} onCardClick={toggleDrawer} />)
              ) : (
                <Typography>No Search Result</Typography>
              )}
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
