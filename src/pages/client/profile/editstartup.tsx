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
import useTheme from '@mui/system/useTheme';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CompanylogoCard from 'components/cards/companylogo';
import Sidebar from 'components/cards/sidebar';
import { Country, State, City } from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city';
import { dispatch } from 'store';
import { setOrganizationSettings } from 'store/reducers/settings';
import { useSelector } from 'store';
import { loadAreasOfExpertise, loadIndustries } from 'store/reducers/jobs';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';
import { SocialMedia } from 'types/expert';
import { CloseOutlined } from '@ant-design/icons';
import { openSnackbar } from 'store/reducers/snackbar';
// ==============================|| SAMPLE PAGE ||============================== //
const EditOrganizationProfile = () => {
  const theme = useTheme();
  const userContext = useContext(JWTContext);
  useEffect(() => {
    dispatch(loadIndustries());
    dispatch(loadAreasOfExpertise());
  }, []);

  const skillLists = useSelector((state) => state.jobs.areasOfExpertise);
  const industryList = useSelector((state) => state.jobs.industries);
  const revenueList = ['Insurance', 'Software Engineering', 'IT & Tech'];
  const fundingList = ['Insurance', 'Software Engineering', 'IT & Tech'];
  const teamSizeList = ['1-5', '5-10', '10-20', '20-50', '50-100', '100+'];
  const socialMedias = ['LinkedIn', 'Twitter', 'Facebook', 'Instagram', 'Company Website'];
  const companyTypes = ['StartUp', 'Enterprize'];
  const [logo, setLogo] = useState<string | any>(userContext?.user?.client?.organization?.logo);
  const [organizationName, setCompanyName] = useState(userContext?.user?.client?.organization?.organizationName);
  const [skills, setSkills] = useState<string[]>(
    userContext?.user?.client.organization?.specialities ? userContext.user.client.organization.specialities : []
  );
  const [dateOfRegisteration, setDateOfRegisteration] = useState(userContext?.user?.client?.organization?.dayOfRegistration);
  const [companyType, setCompanyType] = useState<string>(
    userContext?.user?.client.organization?.companyType ? userContext.user.client.organization.companyType : ''
  );
  const [address1, setAddress1] = useState<string>(
    userContext?.user?.client.organization?.address1 ? userContext.user.client.organization.address1 : ''
  );
  const [address2, setAddress2] = useState<string>(
    userContext?.user?.client.organization?.address2 ? userContext.user.client.organization.address2 : ''
  );
  const [email, setEmail] = useState<string>(
    userContext?.user?.client.organization?.email ? userContext.user.client.organization.email : ''
  );
  const [phone, setPhone] = useState<string>(
    userContext?.user?.client.organization?.phone ? userContext.user.client.organization.phone : ''
  );
  const [revenue, setRevenue] = useState(userContext?.user?.client?.organization?.revenue);
  const [stageOfFunding, setStageOfFunding] = useState(userContext?.user?.client?.organization?.fundingStage);
  const [teamSize, setTeamSize] = useState(userContext?.user?.client?.organization?.teamSize);
  const [briefOverview, setBriefOverview] = useState(userContext?.user?.client?.organization?.description);
  const [mediaType, setMediaType] = useState('');
  const [mediaurl, setMediaUrl] = useState('');
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>(
    userContext?.user?.client?.organization?.socialMedia ? userContext.user.client.organization.socialMedia : []
  );
  const [industry, setIndustry] = useState<string | undefined>(userContext?.user?.client?.organization?.industry);
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(userContext?.user?.client?.organization?.country);
  const [selectedState, setSelectedState] = useState<string | undefined>(userContext?.user?.client?.organization?.state);
  const [selectedCity, setSelectedCity] = useState<string | undefined>(userContext?.user?.client?.organization?.city);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const handleClick = () => {
    if (organizationName === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please enter organization name.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (companyType === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please enter company type.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (revenue === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select department.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (stageOfFunding === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select nationality.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (selectedCountry === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select country.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (selectedState === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select state.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (selectedCity === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select city.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (address1 === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please enter primary address.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (teamSize === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select language.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (briefOverview === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please enter brief overview.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (socialMedia.length === 0) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please enter social media.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else {
      dispatch(
        setOrganizationSettings({
          organizationName: organizationName,
          companyType: companyType,
          specialities: skills,
          dayOfRegisteration: dateOfRegisteration,
          description: briefOverview,
          revenue: revenue,
          country: selectedCountry,
          state: selectedState,
          city: selectedCity,
          address1: address1,
          address2: address2,
          email: email,
          phone: phone,
          industry: industry,
          teamSize: teamSize,
          fundingStage: stageOfFunding,
          logo: logo,
          socialMedia: socialMedia
        })
      );
    }
  };
  const handleDateChange = (newValue: Date | any) => {
    setDateOfRegisteration(newValue);
  };
  const onskillsDelete = (item: string) => () => {
    setSkills((skill) => skill.filter((v) => v !== item));
  };

  const getFileName = (newValue: string) => {
    setLogo(newValue);
  };

  useEffect(() => {
    try {
      const fetchedCountries = Country.getAllCountries();
      setCountries(fetchedCountries);
    } catch {
      setCountries([]);
    }
  }, []);
  useEffect(() => {
    try {
      const fetchedStates = State.getStatesOfCountry(selectedCountry);
      setStates(fetchedStates);
    } catch {
      setStates([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    try {
      const fetchedCities = City.getCitiesOfState(selectedCountry as string, selectedState as string);
      setCities(fetchedCities);
    } catch {
      setCities([]);
    }
  }, [selectedState]);
  const handleBackClick = () => {
    window.history.back();
  };
  const handleAddSocialMedia = () => {
    const newSocialInfo = { type: mediaType, url: mediaurl };
    setSocialMedia([...socialMedia, newSocialInfo]);
  };

  const onSocialMediaDelete = (mediatype: string) => () => {
    setSocialMedia((mediaInfo: SocialMedia[]) => mediaInfo.filter((v: { type: string }) => v.type !== mediatype));
  };

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} sm={0} xs={0}>
        <Sidebar role="customer" />
      </Grid>
      <Grid item lg={9} sm={12} xs={12}>
        <MainCard
          sx={{ p: 1.5 }}
          title={
            <Stack direction={'row'} alignItems={'center'} gap={2}>
              <Button onClick={handleBackClick}>
                <ArrowBackIcon sx={{ fontSize: '2rem', color: theme.palette.primary.darker }} />
              </Button>
              <Typography variant="h3">Edit Starup Details</Typography>
            </Stack>
          }
        >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Typography variant="h3">General Information</Typography>
            </Grid>
            <Grid container item xs={12} lg={6} sm={12} spacing={4}>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Organization Name</InputLabel>
                  <TextField fullWidth value={organizationName} onChange={(event: any) => setCompanyName(event.target.value)} />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Company Type</InputLabel>
                  <Select value={companyType} onChange={(event: any) => setCompanyType(event.target.value)}>
                    {companyTypes.map((item: string) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <InputLabel style={{ color: 'black' }}> Country</InputLabel>
                  <Select value={selectedCountry} onChange={(event) => setSelectedCountry(event?.target.value)}>
                    {countries?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <InputLabel style={{ color: 'black' }}>State</InputLabel>
                  <Select value={selectedState} onChange={(event) => setSelectedState(event?.target.value)}>
                    {states?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <InputLabel style={{ color: 'black' }}>City</InputLabel>
                  <Select value={selectedCity} onChange={(event) => setSelectedCity(event?.target.value)}>
                    {cities?.map((item: any) => (
                      <MenuItem key={item.name} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Primary Address</InputLabel>
                <TextField fullWidth value={address1} onChange={(event: any) => setAddress1(event.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Secondary Address</InputLabel>
                <TextField fullWidth value={address2} onChange={(event: any) => setAddress2(event.target.value)} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Email Address</InputLabel>
                <TextField fullWidth value={email} onChange={(event: any) => setEmail(event.target.value)} />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Mobile Number</InputLabel>
                <TextField fullWidth value={phone} onChange={(event: any) => setPhone(event.target.value)} />
              </Grid>

              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <InputLabel>Industries</InputLabel>
                  <Select value={industry} onChange={(event) => setIndustry(event?.target.value)}>
                    {industryList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <InputLabel>Specialities</InputLabel>
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
                      renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Areas of Expertise" />}
                    />
                  </FormControl>
                  <Box
                    mt={3}
                    sx={{
                      '& > :not(:last-child)': { marginRight: 1 },
                      '& > *': { marginBottom: 1 }
                    }}
                  >
                    {skills.map((v) => (
                      <Chip key={v} label={v} onDelete={onskillsDelete(v)} />
                    ))}
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <InputLabel>Date of Registration</InputLabel>
                    <DesktopDatePicker format="MM/dd/yyyy" value={dateOfRegisteration} onChange={handleDateChange} />
                  </LocalizationProvider>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <InputLabel>Revenue</InputLabel>
                  <Select value={revenue} onChange={(event: any) => setRevenue(event.target.value)}>
                    {revenueList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <InputLabel>Stage of Funding</InputLabel>
                  <Select value={stageOfFunding} onChange={(event: any) => setStageOfFunding(event.target.value)}>
                    {fundingList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <InputLabel>Number of Employees</InputLabel>
                  <Select value={teamSize} onChange={(event: any) => setTeamSize(event.target.value)}>
                    {teamSizeList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Brief Overview</InputLabel>
                  <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    multiline
                    value={briefOverview}
                    rows={7}
                    onChange={(event: any) => setBriefOverview(event.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} sx={{ marginTop: '1rem' }}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <InputLabel>Social Media</InputLabel>
                </Stack>
                <Stack spacing={5}>
                  <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                    <Grid item xs={3.5}>
                      <Select value={mediaType} onChange={(event: any) => setMediaType(event.target.value)} fullWidth>
                        {socialMedias.map((item: string) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        value={mediaurl}
                        onChange={(event: any) => setMediaUrl(event.target.value)}
                        placeholder="Please enter URL"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2.5}>
                      <Button onClick={handleAddSocialMedia} variant="outlined" fullWidth>
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                  <Stack spacing={2}>
                    {socialMedia?.map((v: any) => (
                      <Grid item xs={12}>
                        <Box>
                          <Chip
                            variant="combined"
                            key={String(v.type)}
                            label={
                              <Stack justifyContent="space-between" direction="row">
                                <Typography>{v.type}</Typography>
                                <Typography>{v.url}</Typography>
                              </Stack>
                            }
                            deleteIcon={<CloseOutlined style={{ fontSize: '0.75rem' }} />}
                            onDelete={onSocialMediaDelete(String(v.type))}
                            sx={{
                              color: 'text.primary',
                              width: '100%',
                              '& .MuiChip-label': {
                                width: '100%'
                              }
                            }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Grid container item xs={0} sm={0} lg={6} justifyContent="center">
              <Grid item xs={12} lg={6}>
                <CompanylogoCard logo={logo} getFileName={getFileName} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Stack spacing={1}>
                <Button onClick={handleClick} variant="contained" sx={{ width: '7rem' }}>
                  Save
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default EditOrganizationProfile;
