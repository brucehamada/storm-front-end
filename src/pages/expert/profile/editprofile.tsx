// project import
import MainCard from 'components/MainCard';
import {
  Autocomplete,
  Select,
  MenuItem,
  Grid,
  Button,
  Stack,
  TextField,
  Typography,
  Box,
  Chip,
  FormControl,
  InputLabel
} from '@mui/material';
import Sidebar from 'components/cards/sidebar';
import useTheme from '@mui/system/useTheme';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ISO6391 from 'iso-639-1';
import { CloseOutlined } from '@material-ui/icons';
import ProfileCard from 'components/cards/profilecard';
import { Country } from 'country-state-city';
import { ICountry } from 'country-state-city';

import { EducationProps, ExperienceProps } from 'types/experts-profile';
import { LanguagesProps } from 'types/experts-profile';
import { useContext } from 'react';

import { useSelector } from 'store';
import { useState, useEffect } from 'react';
import { dispatch } from 'store';
import { fetchCurrentUser } from 'store/reducers/current-user';
import { loadToolsOfExpertise, loadAreasOfExpertise, loadIndustries } from 'store/reducers/jobs';
import { updateExpert } from 'store/reducers/experts';
import { SocialMediaProps } from 'types/experts-profile';
import JWTContext from 'contexts/JWTContext';
// ==============================|| SAMPLE PAGE ||============================== //
const EditExpertProfile = () => {
  const theme = useTheme();
  const userContext = useContext(JWTContext);
  useEffect(() => {
    dispatch(loadToolsOfExpertise());
    dispatch(loadAreasOfExpertise());
    dispatch(loadIndustries());
    dispatch(fetchCurrentUser());
  }, []);
  const expert = userContext?.user?.expert;
  const currentUser = userContext?.user;
  const toolLists1 = useSelector((state) => state.jobs.toolsOfExpertise);
  const skillLists = useSelector((state) => state.jobs.areasOfExpertise);
  const languages = ISO6391.getAllNames();
  const proficiencies = ['Native', 'Fluent', 'Conversational', 'Basic'];

  const [selectedCountry, setSelectedCountry] = useState(expert?.country);
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    try {
      const fetchedCountries = Country.getAllCountries();
      setCountries(fetchedCountries);
    } catch {
      setCountries([]);
    }
  }, []);

  const [fullName, setFullName] = useState(currentUser?.fullName);
  const [summary, setSummary] = useState(expert?.summary);
  const [birthday, setBirthday] = useState<Date>(new Date(String(expert?.birthday)));
  const [avatar, setAvatar] = useState<string | undefined>(expert?.avatar);
  const [language, setLanguage] = useState('');
  const [proficiency, setProficiency] = useState('');
  const [tools, setTools] = useState<string[] | undefined>(expert?.tools ? expert.tools : undefined);
  const [skills, setSkills] = useState<string[] | undefined>(expert?.skills ? expert.skills : undefined);
  const [education, setEducation] = useState<EducationProps[] | any>(expert !== null ? (expert?.education as EducationProps[]) : []);
  const [experience, setExperience] = useState<ExperienceProps[] | any>(expert !== null ? (expert?.experience as ExperienceProps[]) : []);
  const [languageInfo, setLanguageInfo] = useState<LanguagesProps[]>(expert !== null ? (expert?.languages as LanguagesProps[]) : []);
  const [linkedinURL, setLinkedinURL] = useState('');
  const [personalWebsite, setPersonalWebsite] = useState('');
  const [socialMedia, setSocialMedia] = useState<SocialMediaProps[]>([]);
  const [universitys, setUniversity] = useState<string[]>([]);
  const [courses, setCourses] = useState<string[]>([]);
  const [jobStartDates, setJobStartDate] = useState<Date[]>([]);
  const [jobEndDates, setJobEndDate] = useState<Date[]>([]);
  const [degree, setDegree] = useState<string[]>([]);
  const [educationEndDates, setEducationEndDates] = useState<Date[]>([]);
  const [companies, setCompany] = useState<string[]>([]);
  const [roles, setRole] = useState<string[]>([]);
  const [experienceComponent, setExperienceComponent] = useState<JSX.Element[]>([]);
  const [educationComponent, setEducationComponent] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newSocialMedia = [];
    if (linkedinURL !== '') {
      const newTemp = { type: 'Linkedin', url: linkedinURL };
      newSocialMedia.push(newTemp);
    }

    if (personalWebsite !== '') {
      const newTemp = { type: 'Personal Website', url: personalWebsite };
      newSocialMedia.push(newTemp);
    }
    setSocialMedia(newSocialMedia);
  }, [linkedinURL, personalWebsite]);

  const ontoolsDelete = (title: string) => () => {
    setTools((tools: any) => tools.filter((v: any) => v !== title));
  };
  const onskillsDelete = (item: string) => () => {
    setSkills((skill: any) => skill.filter((v: any) => v !== item));
  };

  const handleAddClick = () => {
    const newLanguageInfo = { language: language, proficiency: proficiency };
    if (newLanguageInfo) {
      setLanguageInfo([...languageInfo, newLanguageInfo]);
    }
  };

  const handleRoleAdd = (event: any, index: number) => {
    const temp = [...roles];
    temp[index] = event.target.value;
    setRole(temp);
  };
  const handleDegreeAdd = (event: any, index: number) => {
    const temp = [...degree];
    temp[index] = event.target.value;
    setDegree(temp);
  };

  const handleCompanyAdd = (event: any, index: number) => {
    const temp = [...companies];
    temp[index] = event.target.value;
    setCompany(temp);
  };

  const handleExperienceStartDateAdd = (newValue: Date | any) => {
    setJobStartDate([...jobStartDates, newValue]);
  };

  const handleExperienceEndDateAdd = (newValue: Date | any) => {
    setJobEndDate([...jobEndDates, newValue]);
  };

  const handleCourseAdd = (event: any, index: number) => {
    const temp = [...courses];
    temp[index] = event.target.value;
    setCourses(temp);
  };

  const handleUniversityAdd = (event: any, index: number) => {
    const temp = [...universitys];
    temp[index] = event.target.value;
    setUniversity(temp);
  };

  const handleEducationEndDateAdd = (newValue: Date | any) => {
    setEducationEndDates([...educationEndDates, newValue]);
  };

  const getFileName = (fileName: string) => {
    setAvatar(fileName);
  };

  const handleExperienceComponentAdd = (index: number) => {
    setExperienceComponent([
      ...experienceComponent,
      <Box sx={{ border: `1px solid ${theme.palette.secondary.normal}`, borderRadius: '10px' }}>
        <Grid container spacing={3} sx={{ marginBottom: '1vh', padding: '10px' }}>
          <Grid item xs={12}>
            <Typography variant="h5">Experience {experienceComponent?.length + 1}</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack spacing={0.5}>
              <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                Job Title
              </Typography>
              <TextField fullWidth placeholder="Senior Software Developer" onChange={(event: any) => handleRoleAdd(event, roles?.length)} />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack spacing={0.5}>
              <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                Company
              </Typography>
              <TextField fullWidth placeholder="XYZ Corporation" onChange={(event: any) => handleCompanyAdd(event, companies?.length)} />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Stack spacing={1}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Start Date
                </Typography>
                <DesktopDatePicker format="MM/dd/yyyy" onChange={handleExperienceStartDateAdd} />
              </LocalizationProvider>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack spacing={1}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  End Date
                </Typography>
                <DesktopDatePicker format="MM/dd/yyyy" onChange={handleExperienceEndDateAdd} />
              </LocalizationProvider>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    ]);
  };

  const handleEducationComponentAdd = () => {
    setEducationComponent([
      ...educationComponent,
      <Grid container spacing={3} sx={{ marginTop: '1vh', marginBottom: '2vh' }}>
        <Grid item xs={12}>
          <Typography variant="h5">Experience {experienceComponent?.length + 1}</Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={0.5}>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>
              Course Name
            </Typography>
            <TextField
              fullWidth
              placeholder="Senior Software Developer"
              onChange={(event: any) => handleCourseAdd(event, courses?.length)}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={0.5}>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>
              College
            </Typography>
            <TextField fullWidth placeholder="XYZ Corporation" onChange={(event: any) => handleUniversityAdd(event, universitys?.length)} />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={1}>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>
              Degree
            </Typography>
            <TextField fullWidth placeholder="Bachelor's degree" onChange={(event: any) => handleDegreeAdd(event, degree?.length)} />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={1}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                Graduated at
              </Typography>
              <DesktopDatePicker format="MM/dd/yyyy" onChange={handleEducationEndDateAdd} />
            </LocalizationProvider>
          </Stack>
        </Grid>
      </Grid>
    ]);
  };

  const onLanguageInfoDelete = (languageinfo: string) => () => {
    setLanguageInfo((languageInfo) => languageInfo.filter((v) => v.language !== languageinfo));
  };

  const handleSave = () => {
    const newExperience = companies.map((item: string, index: number) => ({
      role: roles[index],
      company: companies[index],
      industry: [],
      expertise: [],
      from: jobStartDates[index],
      to: jobEndDates[index]
    }));
    if (newExperience) {
      setExperience(newExperience);
    }

    const newEducation = universitys.map((item: string, index: number) => ({
      subject: courses[index],
      university: item,
      degree: degree[index],
      to: educationEndDates[index],
      location: ''
    }));
    if (newEducation) {
      setEducation(newEducation);
    }
    if (experience?.length !== 0 && education?.length !== 0) {
      dispatch(
        updateExpert({
          email: '',
          avatar: avatar!,
          titleName: 'Senior backend developer',
          summary: summary,
          phoneNumber: '4545',
          birthday: birthday,
          country: String(selectedCountry),
          languages: languageInfo,
          socialMedia: socialMedia,
          address: String(selectedCountry),
          zipCode: '123',
          weeklyCommitment: 30,
          tools: tools,
          skills: skills,
          education: education,
          hourlyRate: 20,
          projectPreference: 'React',
          experience: experience,
          profileCompleteness: 50,
          verifiedStatus: true,
          rating: 0,
          completedJobs: 0,
          totalEarning: 0
        })
      );
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="expert" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          sx={{ p: 1.5 }}
          title={<Typography variant="h2">Edit Profile</Typography>}
          secondary={
            <Stack spacing={2} direction="row">
              <Button onClick={handleSave} variant="contained" sx={{ width: '9rem' }}>
                Save
              </Button>
            </Stack>
          }
        >
          <Grid container spacing={4}>
            <Grid item xs={12} lg={12}>
              <Typography variant="h3">General Information</Typography>
            </Grid>
            <Grid container item xs={12} lg={6} spacing={3}>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Full Name
                  </Typography>
                  <TextField
                    fullWidth
                    defaultValue={currentUser?.fullName}
                    value={fullName}
                    disabled
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Profile Summary
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    value={summary}
                    defaultValue={expert?.summary}
                    fullWidth
                    multiline
                    rows={7}
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <InputLabel style={{ color: 'black' }}> Country</InputLabel>
                  <Select value={selectedCountry} onChange={(event) => setSelectedCountry(event?.target.value)}>
                    {countries?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={1}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                      D.O.B
                    </Typography>
                    <DesktopDatePicker
                      format="MM/dd/yyyy"
                      value={birthday}
                      onChange={(newDate: any) => {
                        setBirthday(newDate);
                      }}
                    />
                  </LocalizationProvider>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} sx={{ marginTop: '0.7rem' }}>
                <Typography sx={{ mb: 1, fontSize: '1rem' }} variant="body1">
                  Language Preference
                </Typography>
                <Stack spacing={2}>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={4.5}>
                      <Select value={language} fullWidth onChange={(event) => setLanguage(event.target.value)}>
                        {languages?.map((item: string | null) =>
                          item !== null ? (
                            <MenuItem key={item} value={item}>
                              {item}
                            </MenuItem>
                          ) : null
                        )}
                      </Select>
                    </Grid>
                    <Grid item xs={4.5}>
                      <Select value={proficiency} onChange={(event) => setProficiency(event.target.value)} style={{ width: '100%' }}>
                        {proficiencies?.map((item: string) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="outlined" onClick={handleAddClick} fullWidth style={{ marginTop: '%' }}>
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                  <Stack spacing={2}>
                    {languageInfo?.map((v) => (
                      <Box style={{ backgroundColor: theme.palette.primary.lighter }}>
                        <Chip
                          variant="combined"
                          key={v.language}
                          label={
                            <Stack justifyContent="space-between" direction="row">
                              <Typography>{v.language}</Typography>
                              <Typography>{v.proficiency}</Typography>
                            </Stack>
                          }
                          deleteIcon={<CloseOutlined style={{ fontSize: '0.75rem' }} />}
                          onDelete={onLanguageInfoDelete(v.language)}
                          sx={{
                            color: 'text.primary',
                            width: '100%',
                            '& .MuiChip-label': {
                              width: '100%'
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Grid container item xs={12} lg={6}>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Profile Picture
                  </Typography>
                  <MainCard sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProfileCard getFileName={getFileName} />
                  </MainCard>
                </Stack>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="h3">Expertise</Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={2}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Tools
                </Typography>
                <FormControl sx={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={toolLists1}
                    getOptionLabel={(option) => option}
                    value={tools}
                    onChange={(e, newValue) => setTools(newValue as string[])}
                    onBlur={() => {}}
                    renderTags={() => null}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Jira" />}
                  />
                </FormControl>
                <Box
                  mt={3}
                  sx={{
                    '& > :not(:last-child)': { marginRight: 1 },
                    '& > *': { marginBottom: 1 }
                  }}
                >
                  {tools?.map((v) => (
                    <Chip key={v} label={v} onDelete={ontoolsDelete(v)} />
                  ))}
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={2}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Skills
                </Typography>
                <FormControl sx={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={skillLists}
                    defaultValue={skillLists}
                    getOptionLabel={(option) => option}
                    value={skills}
                    onChange={(e, newValue) => setSkills(newValue as string[])}
                    renderTags={() => null}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Software Development" />}
                  />
                </FormControl>
                <Box
                  mt={3}
                  sx={{
                    '& > :not(:last-child)': { marginRight: 1 },
                    '& > *': { marginBottom: 1 }
                  }}
                >
                  {skills?.map((v) => (
                    <Chip key={v} label={v} onDelete={onskillsDelete(v)} />
                  ))}
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Stack direction={'row'} justifyContent={'space-between'} sx={{ marginBottom: '5vh' }}>
                <Typography variant="h3">Work History</Typography>
                <Button variant="outlined" sx={{ width: '9rem' }} onClick={() => handleExperienceComponentAdd(experienceComponent.length)}>
                  Add New
                </Button>
              </Stack>
              {experienceComponent?.map((item: any) => (
                <>{item}</>
              ))}
            </Grid>

            <Grid item xs={12} lg={12}>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant="h3">Education</Typography>
                <Button variant="outlined" sx={{ width: '9rem' }} onClick={handleEducationComponentAdd}>
                  Add
                </Button>
              </Stack>
              {educationComponent?.map((item: any) => (
                <>{item}</>
              ))}
            </Grid>

            <Grid item xs={12} lg={12}>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant="h3">Social Media</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  LinkedIn
                </Typography>
                <TextField
                  value={linkedinURL}
                  placeholder="Enter your link"
                  id="url-start-adornment"
                  onChange={(e) => setLinkedinURL(e.target.value)}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Personal Website
                </Typography>
                <TextField
                  value={personalWebsite}
                  placeholder="Enter your link"
                  id="url-start-adornment"
                  onChange={(e) => setPersonalWebsite(e.target.value)}
                />
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default EditExpertProfile;
