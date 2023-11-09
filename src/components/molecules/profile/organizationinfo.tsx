import {
  OutlinedInput,
  Select,
  Chip,
  TextField,
  Grid,
  InputLabel,
  FormControl,
  Typography,
  MenuItem,
  Autocomplete,
  Stack,
  Button
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Country, State, City } from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city';
import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
interface Specialist {
  title: string;
}
interface OrganizationInfoProps {
  /**
   * Organization Information Props
   */
  industries: string[];
  /**
   * Industry Fields of Organization
   */
  specialists: Specialist[];
  /**
   * Specialists of Organizaion
   */
  revenues: string[];
  /**
   * Revenues
   */
  stagesOfFunding: string[];
  /**
   * Stages of Funding
   */
  teamSizes: string[];
  /**
   * Team Sizes
   */
}

export const OrganizationInfo = ({ industries, specialists, revenues, stagesOfFunding, teamSizes }: OrganizationInfoProps) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [organizationName, setOrganizationName] = useState('');
  const [industry, setIndustry] = useState('');
  const [specialist, setSpecialists] = useState<Specialist[]>([]);
  const [dateOfRegistration, setDateOfRegistration] = useState<Date | null>(new Date());
  const [revenue, setRevenue] = useState('');
  const [stageOfFunding, setStageOfFunding] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [organizationSite, setOrganizationSite] = useState('');
  const [overView, setOverview] = useState('');
  const onSpecialistsDelete = (title: string) => () => {
    setSpecialists((specialist) => specialist.filter((v) => v.title !== title));
  };
  const handleDateChange = (newValue: Date | null) => {
    setDateOfRegistration(newValue);
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
      const fetchedCities = City.getCitiesOfState(selectedCountry, selectedState);
      setCities(fetchedCities);
    } catch {
      setCities([]);
    }
  }, [selectedState]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabel style={{ color: 'black' }}>Organization Name</InputLabel>
            <OutlinedInput
              type="string"
              value={organizationName}
              onChange={(event) => setOrganizationName(event?.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
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
            <InputLabel style={{ color: 'black' }}>Industries</InputLabel>
            <Select value={industry} onChange={(event) => setIndustry(event?.target.value)} style={{ width: '100%' }}>
              {industries.map((item: string) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <InputLabel style={{ color: 'black' }}>Specialists</InputLabel>
              <FormControl sx={{ m: 1, mt: 3, width: '100%' }}>
                <Autocomplete
                  multiple
                  options={specialists}
                  getOptionLabel={(option) => option.title}
                  value={specialist}
                  onChange={(e, newValue) => setSpecialists(newValue as Specialist[])}
                  renderTags={() => null}
                  renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Areas Of Expertise" />}
                />
              </FormControl>
              <Box
                mt={3}
                sx={{
                  '& > :not(:last-child)': { marginRight: 1 },
                  '& > *': { marginBottom: 1 }
                }}
              >
                {specialist.map((v) => (
                  <Chip key={v.title} label={v.title} onDelete={onSpecialistsDelete(v.title)} />
                ))}
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <InputLabel style={{ color: 'black' }}>Date of Registration</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker label="Date Desktop" format="MM/dd/yyyy" value={dateOfRegistration} onChange={handleDateChange} />
              </LocalizationProvider>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <InputLabel style={{ color: 'black' }}>Select Revenue</InputLabel>
              <Select value={revenue} onChange={(event) => setRevenue(event?.target.value)} style={{ width: '100%' }}>
                {revenues.map((item: string) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <InputLabel style={{ color: 'black' }}>Stage of Funding</InputLabel>
              <Select value={stageOfFunding} onChange={(event) => setStageOfFunding(event?.target.value)} style={{ width: '100%' }}>
                {stagesOfFunding.map((item: string) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>
              <InputLabel style={{ color: 'black' }}>Team Size</InputLabel>
              <Select value={teamSize} onChange={(event) => setTeamSize(event?.target.value)} style={{ width: '100%' }}>
                {teamSizes.map((item: string) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <InputLabel style={{ color: 'black' }}>Brief Overview</InputLabel>
            <TextField
              id="outlined-multiline-static"
              fullWidth
              multiline
              value={overView}
              rows={5}
              style={{ backgroundColor: '#f0eded' }}
              onChange={(event) => setOverview(event?.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>Social Media</Typography>
            <InputLabel style={{ color: 'black' }}>Linkedin</InputLabel>
            <OutlinedInput
              id="linkedin"
              type="text"
              value={linkedin}
              placeholder="Enter your link"
              onChange={(event) => setLinkedin(event?.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel style={{ color: 'black' }}>Company Website</InputLabel>
            <OutlinedInput
              id="organizationSite"
              type="text"
              value={organizationSite}
              placeholder="Enter Email"
              onChange={(event) => setOrganizationSite(event?.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Button style={{ backgroundColor: '#0860c4', color: 'black', width: '100%', textTransform: 'none' }}>Save</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
