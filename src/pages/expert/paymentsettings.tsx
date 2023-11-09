// project import
import MainCard from 'components/MainCard';
import { Select, MenuItem, Grid, Button, Stack, TextField, Typography, InputLabel } from '@mui/material';
import Sidebar from 'components/cards/sidebar';
import useTheme from '@mui/system/useTheme';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Country, State } from 'country-state-city';
import { ICountry, IState } from 'country-state-city';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';

// ==============================|| SAMPLE PAGE ||============================== //
const PaymentSettings = () => {
  const theme = useTheme();
  const userContext = useContext(JWTContext);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [selectedRadioValue, setSelectedRadioValue] = useState('card');

  const handleRadioChange = (event: any) => {
    setSelectedRadioValue(event.target.value);
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

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role={userContext?.user?.type} />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          sx={{ p: 1.5 }}
          title={
            <Stack direction={'row'} alignItems={'center'} gap={2}>
              <Typography variant="h3">Payment Settings</Typography>
            </Stack>
          }
          secondary={<Button variant="contained">Add Payment Method</Button>}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Typography variant="h3">Billing Address</Typography>
            </Grid>
            <Grid container item xs={12} lg={6} spacing={4}>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    First and Last Name
                  </Typography>
                  <TextField fullWidth placeholder="Enter your name" />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Email Address
                  </Typography>
                  <TextField fullWidth placeholder="Enter your email address" />
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
              <Grid container item columnSpacing={3} xs={12} lg={12}>
                <Grid item xs={12} lg={6}>
                  <Stack spacing={1}>
                    <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                      State / County
                    </Typography>
                    <Select value={selectedState} onChange={(event) => setSelectedState(event?.target.value)}>
                      {states?.map((item: any) => (
                        <MenuItem key={item.isoCode} value={item.isoCode}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Stack spacing={1}>
                    <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                      Zip / Postal Code
                    </Typography>
                    <TextField fullWidth />
                  </Stack>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={12}>
                <FormControl fullWidth>
                  <Typography variant="h3" marginBottom={'1rem'}>
                    Payment Method
                  </Typography>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    sx={{ gap: 3 }}
                    defaultValue="card"
                    name="radio-buttons-group"
                    value={selectedRadioValue}
                    onChange={handleRadioChange}
                  >
                    <MainCard
                      border={false}
                      boxShadow
                      sx={{
                        backgroundColor: selectedRadioValue === 'card' ? theme.palette.primary.lighter : theme.palette.secondary.lighter
                      }}
                    >
                      <FormControlLabel
                        value="card"
                        control={<Radio />}
                        label={
                          <Grid container alignItems={'center'}>
                            <Typography variant="h4">Debit / Credit Card</Typography>
                          </Grid>
                        }
                      />
                    </MainCard>
                    {selectedRadioValue === 'card' && (
                      <>
                        <Grid item xs={12} lg={12}>
                          <Stack spacing={0.5}>
                            <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                              Card Number
                            </Typography>
                            <TextField fullWidth placeholder="3423 4235 3454 3523" />
                          </Stack>
                        </Grid>
                        <Grid container columnSpacing={2}>
                          <Grid item xs={12} lg={6}>
                            <Stack spacing={1}>
                              <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                                Expiration Date
                              </Typography>
                              <Stack direction={'row'} spacing={2}>
                                <FormControl fullWidth>
                                  <Select>
                                    <MenuItem value={10}>option-1</MenuItem>
                                    <MenuItem value={20}>option-2</MenuItem>
                                    <MenuItem value={30}>option-3</MenuItem>
                                  </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                  <Select>
                                    <MenuItem value={10}>option-1</MenuItem>
                                    <MenuItem value={20}>option-2</MenuItem>
                                    <MenuItem value={30}>option-3</MenuItem>
                                  </Select>
                                </FormControl>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid item xs={12} lg={6}>
                            <Stack spacing={1}>
                              <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                                Security Code
                              </Typography>
                              <TextField />
                            </Stack>
                          </Grid>
                        </Grid>
                      </>
                    )}
                    <MainCard
                      border={false}
                      boxShadow
                      sx={{
                        backgroundColor: selectedRadioValue === 'paypal' ? theme.palette.primary.lighter : theme.palette.secondary.lighter
                      }}
                    >
                      <FormControlLabel
                        value="paypal"
                        control={<Radio />}
                        label={
                          <Grid container alignItems={'center'}>
                            <Typography variant="h4">Paypal</Typography>
                          </Grid>
                        }
                      />
                    </MainCard>
                    {selectedRadioValue === 'paypal' && (
                      <>
                        <Grid item xs={12} lg={12}>
                          <Stack spacing={0.5}>
                            <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                              Card Number
                            </Typography>
                            <TextField fullWidth placeholder="3423 4235 3454 3523" />
                          </Stack>
                        </Grid>
                        <Grid container columnSpacing={2}>
                          <Grid item xs={12} lg={6}>
                            <Stack spacing={1}>
                              <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                                Expiration Date
                              </Typography>
                              <Stack direction={'row'} spacing={2}>
                                <FormControl fullWidth>
                                  <Select>
                                    <MenuItem value={10}>option-1</MenuItem>
                                    <MenuItem value={20}>option-2</MenuItem>
                                    <MenuItem value={30}>option-3</MenuItem>
                                  </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                  <Select>
                                    <MenuItem value={10}>option-1</MenuItem>
                                    <MenuItem value={20}>option-2</MenuItem>
                                    <MenuItem value={30}>option-3</MenuItem>
                                  </Select>
                                </FormControl>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid item xs={12} lg={6}>
                            <Stack spacing={1}>
                              <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                                Security Code
                              </Typography>
                              <TextField />
                            </Stack>
                          </Grid>
                        </Grid>
                      </>
                    )}
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default PaymentSettings;
