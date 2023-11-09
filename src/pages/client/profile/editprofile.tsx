// project import
import MainCard from 'components/MainCard';
import { Select, MenuItem, Grid, Button, Stack, TextField, Typography, Box, Chip, InputLabel, Card, CardMedia } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState, useEffect } from 'react';
import ISO6391 from 'iso-639-1';
import { CloseOutlined } from '@material-ui/icons';
import Sidebar from 'components/cards/sidebar';
import { Country, ICountry, State, IState, City, ICity } from 'country-state-city';
import { useContext } from 'react';
import { dispatch } from 'store';
import JWTContext from 'contexts/JWTContext';
import { createClientProfile } from 'store/reducers/clients';
import { LanguagesProps } from 'types/clients-profile';
import { useTheme } from '@mui/system';
import CloseIcon from '@material-ui/icons/Close';
import { SocialMedia } from 'types/expert';
import { openSnackbar } from 'store/reducers/snackbar';
// ==============================|| SAMPLE PAGE ||============================== //
const EditClientProfile = () => {
  const userContext = useContext(JWTContext);
  const languages = ISO6391.getAllNames();
  const proficiencies = ['Native', 'Fluent', 'Conversational'];
  const genders = ['male', 'female'];
  const socialMedias = ['LinkedIn', 'Twitter', 'Facebook', 'Instagram', 'personalWebsite'];
  const [language, setLanguage] = useState('');
  const [proficiency, setProficiency] = useState('');
  const [languageInfo, setLanguageInfo] = useState<LanguagesProps[]>(
    userContext?.user?.client !== null ? (userContext?.user?.client?.languages as LanguagesProps[]) : []
  );
  const [selectedCountry, setSelectedCountry] = useState<string | any>(userContext?.user?.client?.country);
  const [selectedState, setSelectedState] = useState<string | any>(userContext?.user?.client?.state);
  const [selectedCity, setSelectedCity] = useState<string | any>(userContext?.user?.client?.city);
  const [address1, setAddress1] = useState<string | any>(userContext?.user?.client?.address1 ? userContext.user.client.address1 : '');
  const [address2, setAddress2] = useState<string>(userContext?.user?.client.address2 ? userContext.user.client.address2 : '');
  const [gender, setGender] = useState<string>(userContext?.user?.client?.gender ? userContext.user.client.gender : '');
  const [designation, setDesignation] = useState<string | any>(userContext?.user?.client?.designation);
  const [department, setDepartment] = useState<string | any>(userContext?.user?.client?.department);
  const [nationality, setNationality] = useState<string | any>(userContext?.user?.client?.nationality);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [mediaType, setMediaType] = useState<string>('');
  const [mediaurl, setMediaUrl] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null | undefined>(
    new Date(userContext?.user?.client?.birthday ? userContext.user.client.birthday : '')
  );
  const [socialMedia, setSocialMedia] = useState<SocialMedia[] | any>(userContext?.user?.client?.socialMedia);
  const [avatar, setAvatar] = useState<string | any>(userContext?.user?.avatar);
  const [image, setImage] = useState<File | null>(null);
  const theme = useTheme();

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
  useEffect(() => {
    if (image !== null) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = function () {
        setAvatar(reader.result);
      };
    } else {
      // setAvatar('');
    }
  }, [image]);

  const handleAddClick = () => {
    const newLanguageInfo = { language: language, proficiency: proficiency };
    if (newLanguageInfo) {
      setLanguageInfo([...languageInfo, newLanguageInfo]);
    }
  };

  const onLanguageInfoDelete = (languageinfo: string) => () => {
    setLanguageInfo((languageInfo: LanguagesProps[]) => languageInfo.filter((v: { language: string }) => v.language !== languageinfo));
  };
  const onSocialMediaDelete = (mediatype: string) => () => {
    setSocialMedia((mediaInfo: SocialMedia[]) => mediaInfo.filter((v: { type: string }) => v.type !== mediatype));
  };

  const handleDateChange = (newDate: Date | any) => {
    setDateOfBirth(newDate);
  };

  const handleFileSelect = (event: any) => {
    setImage(event.target.files[0]);
  };
  const handleBrowseFile = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', handleFileSelect);
    fileInput.click();
  };

  const handleDelete = () => {
    setImage(null);
  };

  const handleAddSocialMedia = () => {
    const newSocialInfo = { type: mediaType, url: mediaurl };
    setSocialMedia([...socialMedia, newSocialInfo]);
  };

  const handleSave = () => {
    if (gender === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select gender.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (designation === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please enter designation.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else if (department === '') {
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
    } else if (nationality === '') {
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
    } else if (languageInfo.length === 0) {
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
        createClientProfile({
          email: userContext?.user?.email,
          gender: gender,
          designation: designation,
          department: department,
          nationality: nationality,
          avatar: avatar,
          birthday: dateOfBirth,
          country: selectedCountry,
          state: selectedState,
          city: selectedCity,
          address1: address1,
          address2: address2,
          languages: languageInfo,
          socialMedia: socialMedia,
          organization: null,
          profileCompleteness: userContext?.user?.profileCompleteness
        })
      );
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="customer" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          sx={{ p: 1.5 }}
          title={<Typography variant="h2">Edit Profile</Typography>}
          secondary={
            <Stack spacing={2} direction="row">
              <Button variant="contained" sx={{ width: '9rem' }} onClick={handleSave}>
                Save changes
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
                  <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>
                    Full Name
                  </Typography>
                  <TextField fullWidth placeholder="Jane Doe" value={userContext?.user?.fullName} disabled />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <InputLabel style={{ color: theme.palette.secondary.darker }}>Gender</InputLabel>
                  <Select value={gender} onChange={(event: any) => setGender(event?.target.value)}>
                    {genders.map((item: string) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Designation</InputLabel>
                  <TextField
                    type="string"
                    value={designation}
                    onChange={(event: any) => setDesignation(event.target.value)}
                    placeholder="Please enter designation"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Department</InputLabel>
                  <TextField
                    type="string"
                    value={department}
                    onChange={(event: any) => setDepartment(event.target.value)}
                    placeholder="Please enter department"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <InputLabel style={{ color: 'black' }}> Nationality</InputLabel>
                  <Select value={nationality} onChange={(event) => setNationality(event?.target.value)}>
                    {countries?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.name}>
                        {item.name}
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
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <InputLabel style={{ color: 'black' }}> State</InputLabel>
                  <Select value={selectedState} onChange={(event) => setSelectedState(event?.target.value)}>
                    {states?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
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
                <InputLabel>Address 1</InputLabel>
                <TextField
                  placeholder="Please enter address1"
                  fullWidth
                  value={address1}
                  onChange={(event: any) => setAddress1(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Address 2</InputLabel>
                <TextField
                  placeholder="Please enter address2 (Optional)"
                  value={address2}
                  fullWidth
                  onChange={(event: any) => setAddress2(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={1}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                      D.O.B
                    </Typography>
                    <DesktopDatePicker format="MM/dd/yyyy" value={dateOfBirth} onChange={handleDateChange} />
                  </LocalizationProvider>
                </Stack>
              </Grid>

              <Grid item xs={12} lg={12} sx={{ marginTop: '1rem' }}>
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
                      <Button variant="outlined" onClick={handleAddClick} fullWidth>
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                  <Stack spacing={2}>
                    {languageInfo?.map((v: any) => (
                      <Box>
                        <Chip
                          variant="combined"
                          key={String(v.language)}
                          label={
                            <Stack justifyContent="space-between" direction="row">
                              <Typography>{v.language}</Typography>
                              <Typography>{v.proficiency}</Typography>
                            </Stack>
                          }
                          deleteIcon={<CloseOutlined style={{ fontSize: '0.75rem' }} />}
                          onDelete={onLanguageInfoDelete(String(v.language))}
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
              <Grid item xs={12} lg={12} sx={{ marginTop: '1rem' }}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography variant="h3">Social Media</Typography>
                </Stack>

                <Stack spacing={5}>
                  <Grid container alignItems="center" justifyContent="space-between" spacing={5}>
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
            <Grid container item xs={12} lg={6}>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Profile Picture
                  </Typography>
                  <MainCard sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{ display: 'flex', width: '100%', boxShadow: 'none', gap: 5, alignItems: 'center' }}>
                      <CardMedia component="img" sx={{ height: '100px', width: '100px', borderRadius: '50%' }} image={avatar} />
                      <Stack columnGap={1} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                        <Button component="label" variant="outlined" onClick={handleBrowseFile}>
                          Upload New Picture
                        </Button>
                        <Button
                          variant="outlined"
                          endIcon={<CloseIcon />}
                          onClick={handleDelete}
                          style={{ backgroundColor: theme.palette.primary.lighter }}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </Card>
                  </MainCard>
                </Stack>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}></Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default EditClientProfile;
