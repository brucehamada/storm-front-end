// project import
import {
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
  Stack,
  Box,
  Chip,
  Card,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Dialog,
  DialogContent
} from '@mui/material';
import useTheme from '@mui/system/useTheme';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import MainCard from 'components/MainCard';
import moment from 'moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { dispatch } from 'store';
import { sendProposal } from 'store/reducers/jobs';
import { Milestone } from 'types/jobsinfo';
// ==============================|| SAMPLE PAGE ||============================== //
const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '0.5rem', transform: 'scale(1.4)' }}>
    •
  </Box>
);

const SubmitProposal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [open, setOpen] = useState(false);
  const [milestones, setMilestones] = useState<JSX.Element[]>([]);
  const [duDates, setDueDates] = useState<Date[] | any>([]);
  const [budgets, setBudgets] = useState<number[] | any>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>('project');
  const [milestone, setMilestone] = useState<Milestone[] | any>([]);
  const handleDescriptionChange = (event: any, index: number) => {
    const temp = [...descriptions];
    temp[index] = event.target.value;
    setDescriptions(temp);
  };
  const handleDueDateChange = (newValue: Date | any) => {
    setDueDates([...duDates, newValue]);
  };
  const handleBudgetsChange = (event: any, index: number) => {
    const temp = [...budgets];
    temp[index] = parseInt(event.target.value);
    setBudgets(temp);
  };
  const handlePaymentMethodChange = (event: any) => {
    setPaymentMethod(event.target.value);
  };
  const selectedJob = location.state.selectedJob;
  const handleSend = () => {
    if (message.trim() === '') {
      setShowError(true);
    } else {
      const newMilestone = descriptions?.map((item: string, index: number) => ({
        milestoneNumber: index,
        amount: budgets[index],
        endDate: duDates[index],
        description: item
      }));

      if (newMilestone) {
        if (milestone.length === 0) {
          setMilestone([...milestone, newMilestone]);
        } else if (milestone.length !== 0) {
          dispatch(
            sendProposal({
              _id: selectedJob._id,
              type: paymentMethod,
              milestone: milestone[0],
              coverLetter: message,
              expertEmail: '',
              time: ''
            })
          );
          setOpen(true);
          navigate('/expert/findjobs');
        }
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const [selectedRadioValue, setSelectedRadioValue] = useState('By Milestone');

  const handleRadioChange = (event: any) => {
    setSelectedRadioValue(event.target.value);
  };
  const handleAddClick = () => {
    setMilestones([
      ...milestones,
      <Grid item xs={12}>
        <Grid container spacing={5} sx={{ marginBottom: '3vh' }}>
          <Grid item xs={1}>
            <Chip key={milestones.length} label={milestones.length + 1} />
          </Grid>
          <Grid item xs={5}>
            <Stack spacing={3}>
              <TextField
                key={descriptions.length}
                label="Description"
                onChange={(event: any) => handleDescriptionChange(event, descriptions.length)}
                placeholder="Enter your description"
              />
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={3}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker label="Due Date" format="MM/dd/yyyy" onChange={handleDueDateChange} />
              </LocalizationProvider>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={3}>
              <TextField
                placeholder="$0.00"
                label="Amount"
                type="number"
                onChange={(event: any) => handleBudgetsChange(event, budgets.length)}
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    ]);
  };
  return (
    <>
      <Grid container rowGap={3}>
        <Grid item xs={12} lg={2.2}></Grid>
        <Grid item xs={12} lg={2.4}>
          <Typography variant="h1" whiteSpace={'nowrap'}>
            Submit a proposal
          </Typography>
        </Grid>
        <Grid item xs={12} lg={7.2}></Grid>
        <Grid item xs={12} lg={2}></Grid>
        <Grid item xs={12} lg={8}>
          <Card>
            <List>
              <ListItem sx={{ padding: '2rem' }}>
                <Grid container rowGap={2}>
                  <Grid item xs={12} lg={12}>
                    <Typography variant="h3">Job Details</Typography>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Typography variant="h3" style={{ color: theme.palette.primary.darker }}>
                      {selectedJob?.title}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} lg={12}>
                    <Stack direction="row" sx={{ alignItems: 'center' }}>
                      <Typography variant="h4">
                        {selectedJob?.type} {bull}{' '}
                      </Typography>
                      <Typography variant="body1" style={{ fontSize: '1rem' }}>
                        Posted {(moment(new Date()).diff(moment(selectedJob.createdAt)), 'hours')} ago
                      </Typography>
                      <Typography variant="h4"> {bull} </Typography>
                      <Typography variant="h5">{selectedJob.verifiyStatus} </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Typography variant="body1" style={{ fontSize: '1rem' }}>
                      {selectedJob?.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    {selectedJob.skills.map((item: string) => (
                      <Chip label={item} sx={{ backgroundColor: theme.palette.primary.lighter, marginRight: '1vw' }} />
                    ))}
                  </Grid>
                  <Grid container item xs={12} lg={12} alignItems={'center'}>
                    <Grid item xs={12} lg={2.4}>
                      <Stack spacing={1}>
                        <Typography variant="h5">Price</Typography>
                        <Typography variant="body1">
                          $ {selectedJob.budgetRange[0]}-{selectedJob.budgetRange[1]}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={2.4}>
                      <Stack spacing={1} sx={{ minHeight: '6vh' }}>
                        <Typography variant="h5">Milestones</Typography>
                        <Typography variant="body1">{selectedJob.milestone}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={2.4}>
                      <Stack spacing={1}>
                        <Typography variant="h5">Duration</Typography>
                        <Typography variant="body1">{selectedJob.duration}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={2.4}>
                      <Stack spacing={1}>
                        <Typography variant="h5">Company Location</Typography>
                        <Typography variant="body1">{selectedJob.country}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={2.4}>
                      <Stack spacing={1}>
                        <Typography variant="h5">Industry of Expertise</Typography>
                        <Typography variant="body1">{selectedJob.industry}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
              <ListItem sx={{ padding: '2rem' }}>
                <Grid container rowGap={2}>
                  <Grid container>
                    <FormControl fullWidth>
                      <Typography variant="h3" marginBottom={'1rem'}>
                        Terms of Payment
                      </Typography>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        sx={{ flexDirection: 'row', display: 'flex' }}
                        defaultValue="By Milestone"
                        name="radio-buttons-group"
                        value={selectedRadioValue}
                        onChange={handleRadioChange}
                      >
                        <Grid container columnSpacing={2}>
                          <Grid item xs={12} lg={6}>
                            <MainCard
                              border={false}
                              boxShadow
                              sx={{
                                backgroundColor:
                                  selectedRadioValue === 'milestone' ? theme.palette.primary.lighter : theme.palette.secondary.lighter
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
                          <Grid item xs={12} lg={6}>
                            <MainCard
                              border={false}
                              boxShadow
                              sx={{
                                backgroundColor:
                                  selectedRadioValue === 'project' ? theme.palette.primary.lighter : theme.palette.secondary.lighter
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
                  <Grid container item xs={12} lg={12} alignItems={'center'}>
                    <Grid item xs={12} lg={12} sx={{ marginBottom: '3vh' }}>
                      <Stack spacing={1} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant="h4">Proposed Hourly Rate</Typography>
                        <Button
                          variant="text"
                          onClick={handleAddClick}
                          style={{ cursor: 'pointer', color: theme.palette.primary.dark, fontSize: '1rem' }}
                        >
                          <Typography variant="h4">{paymentMethod === 'project' ? 'Add Budget' : 'Add Milestone'}</Typography>
                        </Button>
                      </Stack>
                    </Grid>
                    <Grid item container xs={12} lg={12}>
                      {milestones.map((item) => (
                        <>{item}</>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider style={{ width: '50%' }} />
              <ListItem sx={{ padding: '2rem' }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={12}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="h4">Total Price of the Job</Typography>
                      <Typography variant="body1" style={{ fontSize: '1.2rem' }}>
                        $ {budgets.reduce((acc: number, curr: number) => acc + curr, 0)}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="body1" style={{ fontSize: '1rem' }}>
                        Service Fee
                      </Typography>
                      <Typography variant="body1" style={{ fontSize: '1.2rem' }}>
                        $ {(budgets.reduce((acc: number, curr: number) => acc + curr, 0) * 0.2).toFixed(2)}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="body1" style={{ fontSize: '1rem' }}>
                        Your Earnings
                      </Typography>
                      <Typography variant="body1" style={{ fontSize: '1.2rem' }}>
                        $ {(budgets.reduce((acc: number, curr: number) => acc + curr, 0) * 0.8).toFixed(2)}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <MainCard
              border={false}
              boxShadow
              sx={{
                backgroundColor: theme.palette.primary.lighter
              }}
            >
              <Grid container rowGap={2}>
                <Grid item xs={12} lg={12}>
                  <Typography variant="h4">Coverletter</Typography>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={7}
                    error={showError}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: showError ? 'red' : 'initial'
                        }
                      },
                      height: '100%',
                      bgcolor: 'white'
                    }}
                    placeholder="Write a Message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setShowError(false);
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Button variant="contained" style={{ width: '8rem' }} onClick={handleSend}>
                    Send
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <Box sx={{ p: 1, py: 1.5 }}>
                      <DialogContent>
                        <Typography variant="h2">Your proposal was submitted successfully.</Typography>
                      </DialogContent>
                    </Box>
                  </Dialog>
                </Grid>
              </Grid>
            </MainCard>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default SubmitProposal;
