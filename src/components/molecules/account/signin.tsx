import { Button, Grid, InputLabel, OutlinedInput, Stack, FormControlLabel, Checkbox, Link } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AnimateButton from '../../@extended/AnimateButton';
import React, { ChangeEvent, useState } from 'react';
import { Box } from '@mui/system';

const SignIn = () => {
  const [userMode, setUserMode] = React.useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreePolicyState, setAgreePolicyState] = React.useState(true);
  const handleToggle = (event: any, newSelected: React.SetStateAction<string>) => {
    setUserMode(newSelected);
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassowordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          font: 'caption',
          width: '80%',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          marginLeft: '10%',
          marginTop: '15%'
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <ToggleButtonGroup value={userMode} exclusive onChange={handleToggle}>
                <ToggleButton
                  value="customer"
                  style={{
                    width: '50%',
                    height: '50px',
                    backgroundColor: userMode == 'customer' ? '#c9dff2' : '#f5f8fa',
                    color: userMode == 'customer' ? '#083e6e' : '#919599',
                    borderRadius: '10',
                    textTransform: 'none',
                    border: 'none'
                  }}
                >
                  <h2>For Customers</h2>
                </ToggleButton>
                <ToggleButton
                  value="expert"
                  style={{
                    width: '50%',
                    height: '50px',
                    backgroundColor: userMode == 'expert' ? '#c9dff2' : '#f5f8fa',
                    color: userMode == 'expert' ? '#083e6e' : '#919599',
                    borderRadius: '10',
                    textTransform: 'none',
                    border: 'none'
                  }}
                >
                  <h2>For Experts</h2>
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <h2 style={{ textAlign: 'left' }}>Sign In</h2>
              <br></br>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput id="email" type="text" value={email} placeholder="Enter Email" onChange={handleEmailChange} />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput id="password" type="password" value={password} placeholder="Enter Password" onChange={handlePassowordChange} />
            </Stack>
          </Grid>

          <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                <span>
                  <span>Remember me</span>
                </span>
              }
            />
            <Link>Forgot Password</Link>
          </Grid>

          <Grid item xs={12}>
            <AnimateButton>
              <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                Sign In
              </Button>
            </AnimateButton>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <span style={{ textAlign: 'center' }}>
                Don't have you accout? <a href="#">Sign Up</a>
              </span>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default SignIn;
