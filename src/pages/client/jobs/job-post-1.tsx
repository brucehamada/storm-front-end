import {
  Typography,
  Grid,
  Button,
  Stack,
  Card,
  CardContent,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Autocomplete,
  TextField,
  Chip,
  SelectChangeEvent,
  Select,
  MenuItem,
  Fab
} from '@mui/material';
import useTheme from '@mui/system/useTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { dispatch, useSelector } from 'store';

import { useEffect, useState } from 'react';
import {
  createJob,
  loadAreasOfExpertise,
  loadBudgetRange,
  loadDuration,
  loadIndustries,
  loadToolsOfExpertise,
  loadWeeklyCommitment
} from 'store/reducers/jobs';
import { useNavigate } from 'react-router-dom';
import { openSnackbar } from 'store/reducers/snackbar';
import { JobDetail } from 'types/jobsinfo';
import { PlusOutlined } from '@ant-design/icons';
import ProjectDetails from 'components/cards/project-details';
const Job_Post_1 = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadAreasOfExpertise());
    dispatch(loadToolsOfExpertise());
    dispatch(loadIndustries());
    dispatch(loadBudgetRange());
    dispatch(loadDuration());
    dispatch(loadWeeklyCommitment());
  }, [dispatch]);

  const toolsOptions = useSelector((state) => state.jobs.toolsOfExpertise);
  const expertisesOptions = useSelector((state) => state.jobs.areasOfExpertise);
  const industriesOptions = useSelector((state) => state.jobs.industries);
  const budgetOptions = useSelector((state) => state.jobs.budgetRange);
  const durationOptions = useSelector((state) => state.jobs.duration);
  const weeklyCommitmentOptions = useSelector((state) => state.jobs.weeklyCommitment);

  const [activeStep, setActiveStep] = useState(0);
  const [expertises, setExpertiseValue] = useState<string[]>([]);
  const [industries, setIndustriesValue] = useState<string[]>([]);
  const [typeOfEngagement, setTypeOfEngagement] = useState<string>('onDemandConsultancy');
  const [jobVisibility, setJobVisibility] = useState<string>('public');
  const [budgetMinRange, setBudgetMinRange] = useState<string>('');
  const [budgetMaxRange, setBudgetMaxRange] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [weeklyCommitment, setWeeklyCommitment] = useState<string>('');
  const [tools, setToolsValue] = useState<string[]>([]);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [textfields, setTextFields] = useState<JSX.Element[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);
  const handleBackClick = () => {
    navigate('/client/job-home');
  };
  const onExpertiseDelete = (title: string) => () => {
    setExpertiseValue((expertises) => expertises.filter((v) => v !== title));
  };

  const onToolsDelete = (title: string) => () => {
    setToolsValue((tools) => tools.filter((v) => v !== title));
  };

  const onIndustriesDelete = (title: string) => () => {
    setIndustriesValue((industries) => industries.filter((v) => v !== title));
  };
  const handleStep1NextClick = () => {
    if (expertises.length === 0) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select type of Expertise',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (tools.length === 0) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select tools',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (industries.length === 0) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select industries',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else {
      setActiveStep((previouseStep) => previouseStep + 1);
    }
  };

  const handleTypeOfEngagementChange = (event: any) => {
    setTypeOfEngagement(event.target.value);
  };

  const handleJobVisibilityChange = (event: any) => {
    setJobVisibility(event.target.value);
  };
  const handleMinBudgetChange = (event: SelectChangeEvent) => {
    setBudgetMinRange(event.target.value);
  };

  const handleMaxBudgetChange = (event: SelectChangeEvent) => {
    setBudgetMaxRange(event.target.value);
  };

  const handleDurationChange = (event: SelectChangeEvent) => {
    setDuration(event.target.value);
  };

  const handleWeeklyCommitmentChange = (event: SelectChangeEvent) => {
    setWeeklyCommitment(event.target.value);
  };
  const handlePreviousClick = () => {
    setActiveStep((previousStep) => previousStep - 1);
  };
  const handleStep2NextClick = () => {
    if (budgetMinRange === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select budget range',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (budgetMaxRange === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select budget range',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (jobVisibility === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select budget range',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (duration === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select duration',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (weeklyCommitment === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select weekly Commitment range',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else {
      setActiveStep((previousStep) => previousStep + 1);
    }
  };
  const handleQuestionChange = (event: any, index: number) => {
    const newQuestions = [...questions];
    newQuestions[index] = event.target.value;
    setQuestions(newQuestions);
  };
  const handleAddClick = () => {
    setTextFields([
      ...textfields,
      <Grid item xs={12}>
        <TextField
          key={textfields.length}
          rows={2}
          multiline
          variant="filled"
          fullWidth
          onChange={(event: any) => handleQuestionChange(event, textfields.length)}
          style={{ display: 'block', backgroundColor: theme.palette.grey.lighter, borderRadius: '10px' }}
        />
      </Grid>
    ]);
  };

  const job: JobDetail = {
    _id: '',
    title: jobTitle,
    description: jobDescription,
    questions: questions,
    duration: duration,
    skills: expertises,
    industry: industries,
    tools: tools,
    visibility: jobVisibility,
    budgetRange: [budgetMinRange, budgetMaxRange],
    type: typeOfEngagement,
    weeklyCommitment: weeklyCommitment,
    invitations: [],
    client: null,
    createdAt: '',
    proposals: [],
    status: '',
    updatedAt: '',
    verifiyStatus: '',
    country: '',
    milestones: []
  };
  const handleStep3NextClick = () => {
    if (jobTitle === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please enter job title.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (jobDescription === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please enter job description',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else {
      setActiveStep((previousStep) => previousStep + 1);
    }
  };
  const handlePublishClick = () => {
    try {
      dispatch(createJob(job));
      setTimeout(() => navigate('/client/job-post-invitation'), 2000);
    } catch (error) {
      console.log(error);
    }
  };

  let areasOfExpertise = job.skills?.join(',');
  let industry = job.industry?.join(',');
  let toolsOfExpertise = job.tools?.join(',');
  return (
    <>
      <Grid container sx={{ padding: '10px' }}>
        <Grid item xs={12} sx={{ display: 'flex' }}>
          <Stack sx={{ display: 'inline-flex', alignItems: 'center' }} direction={'row'}>
            <Button onClick={handleBackClick}>
              <ArrowBackIcon sx={{ color: theme.palette.primary.darker, width: '50px', height: '50px' }} />
            </Button>
            <Typography variant="h5" sx={{ color: theme.palette.secondary.dark }}>
              Experts/Post a New Requirement
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3">Post a New Requirement</Typography>
          <Stack spacing={1} direction={'column'}>
            <Typography variant="body2">Step 1/4</Typography>
            <Typography variant="h4">Experts</Typography>.
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ width: '95vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent>
              {activeStep === 0 ? (
                <Box
                  sx={{
                    font: 'caption',
                    width: '86vw',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '2%',
                    marginTop: '2%'
                  }}
                >
                  <Grid container spacing={3.3}>
                    <Grid item lg={12} xs={12}>
                      <FormControl component="fieldset" sx={{ '& > *': { marginBottom: '1vh' } }}>
                        <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black', marginBottom: '1vh', fontSize: '1rem' }}>
                          What type of engagement are you looking for?
                        </FormLabel>
                        <RadioGroup
                          aria-label="What type of engagement are you looking for?"
                          defaultValue="onDemandConsultancy"
                          name="radio-buttons-group"
                          row
                          onChange={handleTypeOfEngagementChange}
                        >
                          <Grid container spacing={20}>
                            <Grid item xs={3} lg={3}>
                              <FormControlLabel
                                value="onDemandConsultancy"
                                control={<Radio className="size-large" />}
                                label="On Demand Consultancy"
                                sx={{
                                  '& .MuiTypography-root': {
                                    fontSize: '1rem',
                                    whiteSpace: { md: 'nowrap' }
                                  }
                                }}
                              />
                            </Grid>
                            <Grid item xs={3} lg={3}>
                              <FormControlLabel
                                value="fractionalServices"
                                control={<Radio className="size-large" />}
                                label="Fractional Services"
                                sx={{
                                  '& .MuiTypography-root': {
                                    fontSize: '1rem',
                                    whiteSpace: { md: 'nowrap' }
                                  }
                                }}
                              />
                            </Grid>
                            <Grid item xs={3} lg={3}>
                              <FormControlLabel
                                value="mentor"
                                control={<Radio className="size-large" />}
                                label="Mentor"
                                sx={{
                                  '& .MuiTypography-root': {
                                    fontSize: '1rem',
                                    whiteSpace: { md: 'nowrap' }
                                  }
                                }}
                              />
                            </Grid>
                            <Grid item xs={3} lg={3}>
                              <FormControlLabel
                                value="fixedPriceProject"
                                control={<Radio className="size-large" />}
                                label="Fixed Price Project"
                                sx={{
                                  '& .MuiTypography-root': {
                                    fontSize: '1rem',
                                    whiteSpace: { md: 'nowrap' }
                                  }
                                }}
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={5} lg={5} md={5} sm={5}>
                      <Stack spacing={1}>
                        <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Area/Areas of Expertise</InputLabel>
                        <FormControl sx={{ m: 1, width: '100%' }}>
                          <Autocomplete
                            multiple
                            options={expertisesOptions}
                            getOptionLabel={(option) => option}
                            value={expertises}
                            sx={{ paddingBottom: '2vh' }}
                            onChange={(e, newValue) => setExpertiseValue(newValue as string[])}
                            renderTags={() => null}
                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Areas Of Expertise" />}
                          />
                        </FormControl>
                        <Box
                          sx={{
                            minHeight: '1vh'
                          }}
                        >
                          {expertises.map((v) => (
                            <Chip
                              key={v}
                              label={v}
                              onDelete={onExpertiseDelete(v)}
                              sx={{ backgroundColor: theme.palette.primary.lighter, marginRight: '1vw' }}
                            />
                          ))}
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={5}>
                      <Stack spacing={1}>
                        <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Tools of Expertise</InputLabel>
                        <Autocomplete
                          multiple
                          options={toolsOptions}
                          getOptionLabel={(option) => option}
                          value={tools}
                          onChange={(e, newValue) => setToolsValue(newValue as string[])}
                          renderTags={() => null}
                          sx={{ paddingBottom: '1vh' }}
                          renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Tools Of Expertise" />}
                        />
                        <Box
                          sx={{
                            minHeight: '1vh'
                          }}
                        >
                          {tools.map((v) => (
                            <Chip
                              key={v}
                              label={v}
                              onDelete={onToolsDelete(v)}
                              sx={{ backgroundColor: theme.palette.primary.lighter, marginRight: '1vw' }}
                            />
                          ))}
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={5} sx={{ marginBottom: '1vh' }}>
                      <Stack spacing={1}>
                        <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Industry</InputLabel>
                        <Autocomplete
                          multiple
                          options={industriesOptions}
                          getOptionLabel={(option) => option}
                          value={industries}
                          onChange={(e, newValue) => setIndustriesValue(newValue as string[])}
                          renderTags={() => null}
                          renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Industries" />}
                        />
                        <Box
                          sx={{
                            minHeight: '1vh'
                          }}
                        >
                          {industries.map((v) => (
                            <Chip
                              key={v}
                              label={v}
                              onDelete={onIndustriesDelete(v)}
                              sx={{ backgroundColor: theme.palette.primary.lighter, marginRight: '1vw' }}
                            />
                          ))}
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{
                          backgroundColor: theme.palette.primary.darker,
                          color: 'white',
                          textTransform: 'none',
                          width: '100%',
                          marginBottom: '1vh'
                        }}
                        onClick={handleStep1NextClick}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              ) : activeStep === 1 ? (
                <Box
                  sx={{
                    font: 'caption',
                    width: '86vw',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '2%',
                    marginRight: '2%',
                    marginTop: '2%'
                  }}
                >
                  <Grid container spacing={4.5}>
                    <Grid item xs={12} lg={12}>
                      <FormControl component="fieldset" sx={{ '& > *': { marginBottom: '10px' } }}>
                        <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black', fontWeight: 'bold' }}>
                          Job Visibility
                        </FormLabel>
                        <RadioGroup
                          aria-label="What type of engagement are you looking for?"
                          defaultValue="public"
                          value={jobVisibility}
                          name="radio-buttons-group"
                          row
                          onChange={handleJobVisibilityChange}
                        >
                          <Grid container spacing={20}>
                            <Grid item xs={6} lg={6}>
                              <FormControlLabel
                                value="public"
                                control={<Radio className="size-large" />}
                                label="Public"
                                sx={{
                                  '& .MuiTypography-root': {
                                    fontSize: '1rem',
                                    whiteSpace: { md: 'nowrap' }
                                  }
                                }}
                              />
                            </Grid>
                            <Grid item xs={6} lg={6}>
                              <FormControlLabel
                                value="inviteOnly"
                                control={<Radio className="size-large" />}
                                label="Invite Only"
                                sx={{
                                  '& .MuiTypography-root': {
                                    fontSize: '1rem',
                                    whiteSpace: { md: 'nowrap' }
                                  }
                                }}
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={2}>
                        <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>BudgetRange</InputLabel>
                        <FormControl sx={{ m: 1, mt: 3, width: '100%' }}>
                          <Grid container spacing={6}>
                            <Grid item xs={6}>
                              <Select value={budgetMinRange} onChange={handleMinBudgetChange} style={{ width: '100%' }}>
                                {budgetOptions.map((budget: string) => (
                                  <MenuItem key={budget} value={budget}>
                                    {budget}
                                  </MenuItem>
                                ))}
                              </Select>
                            </Grid>
                            <Grid item xs={6}>
                              <Select value={budgetMaxRange} onChange={handleMaxBudgetChange} style={{ width: '100%' }}>
                                {budgetOptions.map((budget: string) => (
                                  <MenuItem key={budget} value={budget}>
                                    {budget}
                                  </MenuItem>
                                ))}
                              </Select>
                            </Grid>
                          </Grid>
                        </FormControl>
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={2}>
                        <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Duration</InputLabel>
                        <FormControl sx={{ m: 1, mt: 3, width: '100%' }}>
                          <Grid container spacing={6}>
                            <Grid item xs={6}>
                              <Select value={duration} onChange={handleDurationChange} style={{ width: '100%' }}>
                                {durationOptions.map((budget: string) => (
                                  <MenuItem key={budget} value={budget}>
                                    {budget}
                                  </MenuItem>
                                ))}
                              </Select>
                            </Grid>
                            <Grid item xs={6}></Grid>
                          </Grid>
                        </FormControl>
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={2} sx={{ marginBottom: '3vh' }}>
                        <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Weekly Commitment</InputLabel>
                        <FormControl sx={{ m: 1, mt: 3, width: '100%' }}>
                          <Grid container spacing={6}>
                            <Grid item xs={6}>
                              <Select value={weeklyCommitment} onChange={handleWeeklyCommitmentChange} style={{ width: '100%' }}>
                                {weeklyCommitmentOptions.map((budget: string) => (
                                  <MenuItem key={budget} value={budget}>
                                    {budget}
                                  </MenuItem>
                                ))}
                              </Select>
                            </Grid>
                            <Grid item xs={6}></Grid>
                          </Grid>
                        </FormControl>
                      </Stack>
                    </Grid>
                    <Grid item xs={5}>
                      <Grid container spacing={5}>
                        <Grid item xs={4}>
                          <Button
                            variant="outlined"
                            style={{
                              backgroundColor: theme.palette.secondary.lighter,
                              color: theme.palette.primary.darker,
                              width: '100%',
                              textTransform: 'none'
                            }}
                            onClick={handlePreviousClick}
                          >
                            Previous
                          </Button>
                        </Grid>
                        <Grid item xs={4}>
                          <Button
                            style={{
                              backgroundColor: theme.palette.primary.darker,
                              color: theme.palette.secondary.lighter,
                              width: '100%',
                              textTransform: 'none',
                              marginBottom: '1vh'
                            }}
                            onClick={handleStep2NextClick}
                          >
                            Next
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              ) : activeStep === 2 ? (
                <Box
                  sx={{
                    font: 'caption',
                    width: '86vw',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '2%',
                    marginTop: '2%'
                  }}
                >
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Job Title</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        variant="filled"
                        InputProps={{
                          disableUnderline: true // Disable the underline
                        }}
                        rows={2}
                        sx={{ borderRadius: '20px', border: 'none' }}
                        onChange={(event: any) => setJobTitle(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Job Description</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        variant="filled"
                        InputProps={{
                          disableUnderline: true
                        }}
                        rows={5}
                        sx={{ borderRadius: '20px' }}
                        onChange={(event: any) => setJobDescription(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={5} sx={{ marginBottom: '2vh' }}>
                        <Grid item xs={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>
                            Any Questions you want to ask the applications
                          </InputLabel>
                        </Grid>
                        <Grid item xs={2} direction={'row'} sx={{ display: 'inline-flex', alignItems: 'center' }} spacing={10}>
                          <Fab
                            aria-label="add"
                            onClick={handleAddClick}
                            style={{ maxHeight: '36px', maxWidth: '36px', backgroundColor: theme.palette.primary.darker }}
                          >
                            <PlusOutlined style={{ fontSize: '1.5rem', color: 'white', backgroundColor: theme.palette.primary.darker }} />
                          </Fab>
                          <Typography variant="h3">Add</Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Stack
                          direction="row"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            flexGrow: 1,
                            minHeight: '10vh',
                            marginBottom: '2vh'
                          }}
                        >
                          <Grid container spacing={3}>
                            {textfields.map((textarea, index) => (
                              <Grid item xs={12}>
                                {textarea}
                              </Grid>
                            ))}
                          </Grid>
                        </Stack>
                      </Grid>
                      <Grid container spacing={5}>
                        <Grid item xs={2} sx={{ marginBottom: '1vh' }}>
                          <Button
                            variant="outlined"
                            style={{ backgroundColor: 'white', color: theme.palette.primary.darker, width: '100%', textTransform: 'none' }}
                            onClick={handlePreviousClick}
                          >
                            Previous
                          </Button>
                        </Grid>
                        <Grid item xs={2}>
                          <Button
                            style={{ backgroundColor: theme.palette.primary.darker, color: 'white', width: '100%', textTransform: 'none' }}
                            onClick={handleStep3NextClick}
                          >
                            Next
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <Box
                  sx={{
                    font: 'caption',
                    width: '86vw',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '2%',
                    marginTop: '2%'
                  }}
                >
                  <Grid container spacing={5} sx={{ marginLeft: '1px' }}>
                    <Grid item xs={9}>
                      <Grid container>
                        <Grid item xs={12} sx={{ marginTop: '3vh' }}>
                          <Typography variant="body1" color={'secondary'}>
                            Project Name
                          </Typography>
                          <Typography variant="h2" sx={{ marginBottom: '3vh' }}>
                            {jobTitle}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="body1" color={'secondary'}>
                            Description
                          </Typography>
                          <Typography variant="body1" sx={{ minHeight: '25vh' }}>
                            {jobDescription}
                          </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ minHeight: '8vh' }}>
                          <Typography variant="body1">Area/Areas of Expertise</Typography>
                          <Typography variant="body1">{areasOfExpertise}</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ minHeight: '8vh' }}>
                          <Typography variant="body1">Industry of Expertise</Typography>
                          <Typography variant="body1">{industry}</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ minHeight: '8vh' }}>
                          <Typography variant="body1">Tools</Typography>
                          <Typography variant="body1">{toolsOfExpertise}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Button
                            onClick={handlePublishClick}
                            style={{ color: 'white', backgroundColor: theme.palette.primary.darker, width: '40%', marginBottom: '1vh' }}
                          >
                            Publish
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={3}>
                      <ProjectDetails
                        jobView={jobVisibility}
                        type={typeOfEngagement}
                        weeklyCommitment={weeklyCommitment}
                        duration={duration}
                        budgetMin={budgetMinRange}
                        budgetMax={budgetMaxRange}
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Job_Post_1;
