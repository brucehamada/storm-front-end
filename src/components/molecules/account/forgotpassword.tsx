import { Button, Grid, InputLabel, OutlinedInput, Stack, Link, Typography } from '@mui/material';
import AnimateButton from '../../@extended/AnimateButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ChangeEvent, useState } from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box } from '@mui/system';

interface ForgotPasswordProps {
  /**
   * Forgot Password form
   */

  email: String;
  /**
   *Email
   */

  resetPassword?: () => void;
  /**
   *Reset Password
   */
  signIn?: () => void;
  /**
   *Sign In
   */
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
  }
}));

export const ForgotPassword = ({ email = '', ...props }: ForgotPasswordProps) => {
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRecoveryEmail(event.target.value);
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
              <h2 style={{ textAlign: 'left' }}>Forgot Password?</h2>
              <Typography>No worries, We'll send you reset instructions.</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput id="email" type="text" value={recoveryEmail} placeholder="Enter Email" onChange={handleEmailChange} />
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <AnimateButton>
              <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                Reset Password
              </Button>
            </AnimateButton>
          </Grid>

          <Grid item xs={12}>
            <Stack spacing={3}>
              <span style={{ textAlign: 'center' }}>
                <Link href="#" underline="none" display={'inline-flex'} alignItems={'center'}>
                  <ArrowBackIcon /> Back to Sign In
                </Link>
              </span>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={100} />
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={0} />
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={0} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
