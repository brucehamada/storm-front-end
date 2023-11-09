import { Button, Grid, InputLabel, OutlinedInput, Stack, FormControlLabel, Checkbox } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AnimateButton from '../../@extended/AnimateButton';
import React, { ChangeEvent, useState } from 'react';
import { Box } from '@mui/system';
interface SignUpProps {
  /**
   * Sign in form
   */
  mode: String;
  /**
   *Customer or Expert
   */
  fullName: String;
  /**
   *Full Name
   */
  email: String;
  /**
   *Email
   */
  password: String;
  /**
   *Password
   */
  confirmPassword: String;
  /**
   *Confirm Password
   */
  agreePolicy: Boolean;
  /**
   *Agree Policy
   */
  viewTerms?: () => void;
  /**
   *View Terms
   */
  viewPolicy?: () => void;
  /**
   *View Policy
   */
  signIn?: () => void;
  /**
   *Sign In
   */
  signUp?: () => void;
  /**
   *Sign Up
   */
}

export const SignUp = ({ ...props }: SignUpProps) => {
  const [userMode, setUserMode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreePolicyState, setAgreePolicyState] = useState(true);
  const handleToggle = (event: any, newSelected: React.SetStateAction<string>) => {
    setUserMode(newSelected);
  };
  const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <>
      <Box sx={{ width: '80%', justifyContent: 'center', display: 'flex', alignItems: 'center', marginLeft: '10%', marginTop: '15%' }}>
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
              <h2 style={{ textAlign: 'left' }}>Sign Up</h2>
              <br></br>
              <div>Please enter the following details</div>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <InputLabel htmlFor="fullName">Full Name</InputLabel>
              <OutlinedInput id="fullName" type="text" value={name} placeholder="Enter Full Name" onChange={handleFullNameChange} />
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
              <OutlinedInput id="password" type="password" value={password} placeholder="Enter Password" onChange={handlePasswordChange} />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
              <OutlinedInput
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={handleConfirmPasswordChange}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreePolicyState}
                    onChange={(e) => {
                      setAgreePolicyState(e.target.checked);
                    }}
                    name="agreePolicy"
                    color="primary"
                  />
                }
                label={
                  <span>
                    Yes, I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                  </span>
                }
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <span style={{ textAlign: 'center' }}>
                Already have an accout? <a href="#">Sign in from here</a>
              </span>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <AnimateButton>
              <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                Create Account
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
