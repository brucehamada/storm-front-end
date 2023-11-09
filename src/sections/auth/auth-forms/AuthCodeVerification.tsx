// material-ui
import useTheme from '@mui/system/useTheme';
import { Button, Grid, Stack, Typography } from '@mui/material';

// third-party

import OtpInput from 'react18-input-otp';
// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useAuth from 'hooks/useAuth';
import { dispatch } from 'store';
//routes
import { useLocation } from 'react-router-dom';
import { openSnackbar } from 'store/reducers/snackbar';
import { useState } from 'react';
// ============================|| STATIC - CODE VERIFICATION ||============================ //

const AuthCodeVerification = () => {
  const theme = useTheme();
  const location = useLocation();
  const { sendOtpCode } = useAuth();
  const [otp, setOtp] = useState('');
  const handleContinueClick = () => {
    try {
      if (otp.length === 4) {
        sendOtpCode(location.state.email, otp);
      } else {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Please enter OTP code',
            variant: 'alert',
            alert: {
              color: 'error'
            },
            close: true
          })
        );
      }
    } catch (error: any) {
      dispatch(
        openSnackbar({
          open: true,
          message: error.message,
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <OtpInput
          value={otp}
          numInputs={4}
          containerStyle={{ justifyContent: 'space-between' }}
          inputStyle={{
            width: '100%',
            height: '7vw',
            margin: '1vw',
            padding: '20px',
            fontSize: '4vw',
            borderRadius: 10,
            border: 'none',
            boxShadow: '0 0 5px rgba(0,0,0,0.3)'
          }}
          onChange={(otp: string) => setOtp(otp)}
          focusStyle={{
            outline: 'none',
            boxShadow: theme.shadows,
            border: `1px solid ${theme.palette.primary.main}`
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <AnimateButton>
          <Button
            disableElevation
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={handleContinueClick}
            style={{ color: 'white', backgroundColor: theme.palette.primary.darker, borderRadius: '10px' }}
          >
            Continue
          </Button>
        </AnimateButton>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="center" alignItems="baseline">
          <Typography>Did not receive the email? </Typography>
          <Typography variant="body1" sx={{ minWidth: 85, ml: 2, textDecoration: 'none', cursor: 'pointer' }} color="#0b257a">
            Click here to resend
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={3} direction="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Typography
            component={RouterLink}
            variant="h5"
            to="/signin"
            style={{ display: 'inline-flex', textDecoration: 'none', color: theme.palette.primary.darker }}
          >
            <ArrowBackIcon /> Back to Sign In
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AuthCodeVerification;
