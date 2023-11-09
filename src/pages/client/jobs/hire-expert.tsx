import {
  Grid,
  Rating,
  Button,
  RadioGroup,
  Radio,
  TextField,
  Typography,
  Link,
  FormControl,
  FormControlLabel,
  Chip,
  Checkbox,
  Card,
  List
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from 'components/@extended/Avatar';
import { Stack, useTheme } from '@mui/system';
import { useState } from 'react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useLocation } from 'react-router-dom';
import { dispatch } from 'store';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router-dom';
import { openSnackbar } from 'store/reducers/snackbar';
import { hireExpert } from 'store/reducers/experts';
import { Milestone } from 'types/jobsinfo';
import MainCard from 'components/MainCard';
export const HireExpert = (props: any) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [milestones, setMilestones] = useState<JSX.Element[]>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [duDates, setDueDates] = useState<string[]>([]);
  const [budgets, setBudgets] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>('project');
  const [additionalInformation, setAdditionalInformation] = useState<string>('');
  const [agreePolicyState, setAgreePolicyState] = useState(false);
  const [milestone, setMilestone] = useState<Milestone[] | any>([]);
  const handleDescriptionsChange = (event: any) => {
    setDescriptions([...descriptions, event?.target.value]);
  };
  const handleDueDateChange = (newValue: Date | any) => {
    setDueDates([...duDates, newValue]);
  };
  const handleBudgetsChange = (event: any) => {
    setBudgets([...budgets, event.target.value]);
  };
  const handlePaymentMethodChange = (event: any) => {
    setPaymentMethod(event.target.value);
  };
  const handleHire = () => {
    if (agreePolicyState === false) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'You can hire expert when agree with terms and policy.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: 'true'
        })
      );
    } else if (paymentMethod === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select payment method',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: 'true'
        })
      );
    } else {
      const newMilestone = descriptions?.map((item: string, index: number) => ({
        milestoneNumber: index,
        amount: budgets[index],
        endDate: duDates[index],
        description: item
      }));

      if (newMilestone) {
        setMilestone([...milestone, newMilestone]);
        dispatch(hireExpert(location.state.id, location.state.expertEmail, additionalInformation, milestone));
        navigate('/client/job-detail');
      }
    }
  };
  const handleCancel = () => {
    navigate('/client/job-detail');
  };

  const handleAddClick = () => {
    setMilestones([
      ...milestones,
      <Grid item xs={12} sx={{ marginBottom: '3vh' }}>
        <Grid container spacing={5}>
          <Grid item xs={1}>
            <Chip key={milestones.length} label={milestones.length + 1} />
          </Grid>
          <Grid item xs={5}>
            <Stack>
              <TextField
                key={descriptions.length}
                label="Description"
                onChange={(event: any) => handleDescriptionsChange(event)}
                placeholder="Enter your description"
              />
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker label="Due Date" format="MM/dd/yyyy" onChange={handleDueDateChange} />
              </LocalizationProvider>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack>
              <TextField placeholder="$0.00" label="Amount" type="number" onChange={(event: any) => handleBudgetsChange(event)} />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    ]);
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h1" sx={{ marginLeft: '12vw' }}>
          Hire {location.state.expertName}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card sx={{ width: '70vw' }}>
          <List sx={{ padding: '2rem' }}>
            <Grid item xs={12}>
              <Card sx={{ borderRadius: '10px', marginTop: '3vh', marginBottom: '3vh' }}>
                <Grid container spacing={3} sx={{ marginTop: '0.1vh', marginBottom: '1vh' }}>
                  <Grid item xs={2} sx={{ paddingTop: '1vh', paddingBottom: '1vh' }}>
                    <Avatar
                      alt="expert"
                      src={location.state?.avatar}
                      sx={{ height: '10vh', width: '10vh', marginLeft: '2vw', marginRight: '7vw' }}
                    />
                  </Grid>
                  <Grid item xs={2} direction={'column'} sx={{ marginTop: '1vh' }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h3" sx={{ color: theme.palette.primary.darker, fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                          {location.state?.expertName}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h4" sx={{ color: 'black' }}>
                          {location.state?.expertTitle}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        {location.state?.experience}
                      </Grid>
                    </Grid>

                    <Typography variant="h4" sx={{ color: 'black' }}></Typography>
                  </Grid>
                  <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Stack direction={'column'} spacing={1} sx={{ padding: '1vw' }}>
                      <Grid container>
                        <Grid item xs={12} sx={{ display: 'inline-flex', justifyContent: 'flex-end' }} direction={'row'}>
                          <Rating name="review" value={location.state?.rate} readOnly sx={{ paddingRight: '5px' }} />
                          <Typography>{location.state.rate ? location.state.rate : 0}/5</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'inline-flex', justifyContent: 'flex-end' }}>
                          <Typography>Response {location.state?.revenue ? location.state.revenue : 0}%</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'inline-flex', justifyContent: 'flex-end' }} direction={'row'}>
                          <PlaceIcon />
                          <Typography>{location.state?.location}</Typography>
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Typography variant="h4">Job Title</Typography>
                </Grid>
                <Grid item xs={11}>
                  <Typography variant="h4" component={Link}>
                    {location.state?.jobTitle}
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={12} sx={{ marginBottom: '2vh' }}>
                  <Typography variant="body1">
                    {location.state?.engagement} Job ID {location.state?.id}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={20}>
                <Grid item xs={12} lg={12}>
                  <FormControl fullWidth>
                    <Typography variant="h4" marginBottom={'1rem'}>
                      Terms of Payment
                    </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      sx={{ flexDirection: 'row', display: 'flex' }}
                      defaultValue="By Milestone"
                      name="radio-buttons-group"
                      value={paymentMethod}
                      onChange={handlePaymentMethodChange}
                    >
                      <Grid container columnSpacing={2} sx={{ marginBottom: '3vh' }}>
                        <Grid item xs={6} lg={6}>
                          <MainCard
                            border={false}
                            boxShadow
                            sx={{
                              backgroundColor:
                                paymentMethod === 'milestone' ? theme.palette.primary.lighter : theme.palette.secondary.lighter
                            }}
                          >
                            <FormControlLabel
                              value="milestone"
                              control={<Radio onChange={handlePaymentMethodChange} />}
                              label={
                                <Grid container alignItems={'center'}>
                                  <Typography variant="h4">By Milestone</Typography>
                                </Grid>
                              }
                            />
                          </MainCard>
                        </Grid>
                        <Grid item xs={6} lg={6}>
                          <MainCard
                            border={false}
                            boxShadow
                            sx={{
                              backgroundColor: paymentMethod === 'project' ? theme.palette.primary.lighter : theme.palette.secondary.lighter
                            }}
                          >
                            <FormControlLabel
                              value="project"
                              control={<Radio onChange={handlePaymentMethodChange} />}
                              label={
                                <Grid container alignItems={'center'}>
                                  <Typography variant="h4">By Project</Typography>
                                </Grid>
                              }
                            />
                          </MainCard>
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ marginBottom: '3vh' }}>
                <Grid item xs={6}>
                  <Typography variant="h4">Proposed Hourly Rate</Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button onClick={handleAddClick} variant="text">
                    Add Milestone
                  </Button>
                </Grid>
                {milestones?.map((item: any) => (
                  <Grid item xs={12}>
                    {item}
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: '3vh' }}>
              <Typography variant="h4">Additional Information</Typography>
              <TextField
                multiline
                variant="filled"
                placeholder="Write a Message"
                sx={{ width: '100%' }}
                onChange={(event: any) => setAdditionalInformation(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: '3vh' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={agreePolicyState}
                    onChange={(e) => {
                      setAgreePolicyState(e.target.checked);
                    }}
                    name="rememberMe"
                    color="primary"
                  />
                }
                label={
                  <label style={{ display: 'inline-flex' }}>
                    Yes, I agree to &nbsp;
                    <Link variant="body1" component={RouterLink} to="#" color={theme.palette.primary.darker}>
                      Terms of Service
                    </Link>
                    &nbsp; and&nbsp;
                    <Link component={RouterLink} variant="body1" to="#" color={theme.palette.primary.darker}>
                      Privacy Policy
                    </Link>
                  </label>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item xs={3}>
                  <Button
                    onClick={handleHire}
                    variant="outlined"
                    sx={{ color: theme.palette.primary.darker, whiteSpace: 'nowrap', width: '100%' }}
                  >
                    Hire {location.state?.expertName}
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={handleCancel} variant="outlined" sx={{ width: '100%' }}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HireExpert;
