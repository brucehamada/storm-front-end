import { Grid, OutlinedInput, Select, Button, Chip, Typography, InputLabel, MenuItem, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import ISO6391 from 'iso-639-1';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Country } from 'country-state-city';
import { ICountry } from 'country-state-city';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

interface LanguageInfo {
  languageinfo: string;
  proficiencyinfo: string;
}
export interface ClientInfo {
  /**
   * Client Info Props
   */
  proficiencies: string[];
  /**
   * Proficiencies
   */
}


export const EditClientInfo = ({ proficiencies, ...props }: ClientInfo) => {
  const [fullName, setFullName] = useState('');
  const [countryofResidence, setCountryofResidence] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date());
  const [language, setLanguage] = useState('');
  const [proficiency, setProficiency] = useState('');
  const [languageInfo, setLanguageInfo] = useState<LanguageInfo[]>([]);
  const [linkedin, setLinkedin] = useState('');
  const [personalWebsite, setPersonalWebsite] = useState('');
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
      try {
        const fetchedCountries =  Country.getAllCountries();
        setCountries(fetchedCountries);
      } catch {
        setCountries([]);
      }
  }, []);

  const languages = ISO6391.getAllNames();

  const handleBirthdayChange = (newValue: Date | any) => {
    setDateOfBirth(newValue);
  };

  const handleAddClick = () => {
    const newLanguageInfo = { languageinfo: language, proficiencyinfo: proficiency };
    setLanguageInfo([newLanguageInfo]);
  };

  const onLanguageInfoDelete = (languageinfo: string) => () => {
    setLanguageInfo((languageInfo) => languageInfo.filter((v) => v.languageinfo !== languageinfo));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>General Information</Typography>
            <InputLabel>Full Name</InputLabel>
            <OutlinedInput type="string" value={fullName} fullWidth onChange={(event) => setFullName(event.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Country of Residence</InputLabel>
            <Select value={countryofResidence} fullWidth onChange={(event) => setCountryofResidence(event.target.value)}>
              {countries.map((item: any) => (
                <MenuItem key={item.isoCode} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <InputLabel>D.O.B</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker label="Date Desktop" format="MM/dd/yyyy" value={dateOfBirth} onChange={handleBirthdayChange} />
              </LocalizationProvider>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Language Preference</InputLabel>
          </Grid>
          <Grid item xs={5}>
            <Select value={language} fullWidth onChange={(event) => setLanguage(event.target.value)}>
              {languages.map((item: string | null) =>
                item !== null ? (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ) : null
              )}
            </Select>
            <Box
              mt={3}
              sx={{
                '& > :not(:last-child)': { marginRight: 1 },
                '& > *': { marginBottom: 1 }
              }}
            >
              {languageInfo.map((v) => (
                <Chip key={v.languageinfo} label={v.proficiencyinfo} onDelete={onLanguageInfoDelete(v.languageinfo)} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Select value={proficiency} onChange={(event) => setProficiency(event.target.value)} style={{ width: '100%' }}>
              {proficiencies.map((item: string) => (
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
          <Grid item xs={12}>
            <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>Social Media</Typography>
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Linkedin</InputLabel>
            <OutlinedInput
              type="text"
              value={linkedin}
              placeholder="Enter your link"
              onChange={(event) => setLinkedin(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Personal Website</InputLabel>
            <OutlinedInput
              type="text"
              value={personalWebsite}
              placeholder="Enter your link"
              onChange={(event) => setPersonalWebsite(event.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
