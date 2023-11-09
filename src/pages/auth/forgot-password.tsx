// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthForgotPassword from 'sections/auth/auth-forms/AuthForgotPassword';

// ================================|| FORGOT PASSWORD ||================================ //
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#bcc7eb' : '#bcc7eb'
  }
}));
const ForgotPassword = () => {

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="column" paddingTop="20vh">
            <Typography variant="h3">Forgot Password ?</Typography>
            <Typography color={'#535457'}>No worries, We'll send you reset instructions</Typography>
            
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthForgotPassword />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" paddingTop="20vh" spacing={1}>
            <Grid item xs={4}>
              <BorderLinearProgress variant="determinate" value={100} />
            </Grid>
            <Grid item xs={4}>
              <BorderLinearProgress variant="determinate" value={0} />
            </Grid>
            <Grid item xs={4}>
              <BorderLinearProgress variant="determinate" value={0} />
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default ForgotPassword;
