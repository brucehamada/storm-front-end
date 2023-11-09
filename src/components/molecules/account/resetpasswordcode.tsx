import { Button, Grid, Stack, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import AnimateButton from '../../@extended/AnimateButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
interface ResetPasswordCodeProps {
  /**
   * Password reset code form.
   */
  email: string;
  /**
   * Recovery email.
   */
  continue?: () => void;
  /**
   *Continue to Reset Password.
   */
  signin?: () => void;
  /**
   *Redirect to Signin page.
   */
  resend?: () => void;
  /**
   * Resend Password Reset Code.
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
const ResetPasswordCode = ({ email = '', ...props }: ResetPasswordCodeProps) => {
  const [otp, setOtp] = useState<string>('');
  const inputStyle = {
    width: '7vw',
    height: '7vw',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '7%',
    marginRight: '7%',
    fontSize: '4vw',
    textAlign: 'center' as 'center'
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[0-9\b]+$/;
    if (!regex.test(keyValue)) {
      e.preventDefault();
    }
  };

  const handleContinue = () => {};
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
              <Typography variant="h4" sx={{ textAlign: 'center' }}>
                Password Reset Code
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                We send a code to {email}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                space-between={true}
                renderSeparator={<span> </span>}
                renderInput={(props: React.HTMLProps<HTMLInputElement>, index: number) => (
                  <input {...props} style={inputStyle} onKeyPress={handleKeyPress} />
                )}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <AnimateButton>
              <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary" onClick={handleContinue}>
                Continue
              </Button>
            </AnimateButton>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <Typography style={{ color: 'secondary', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                Didn't receive the email?<Link href="#">Click here to resend</Link>
              </Typography>
            </Stack>
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
            <BorderLinearProgress variant="determinate" value={0} />
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={100} />
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={0} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default ResetPasswordCode;
