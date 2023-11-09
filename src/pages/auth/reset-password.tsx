// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthResetPassword from 'sections/auth/auth-forms/AuthResetPassword';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
// ================================|| RESET PASSWORD ||================================ //
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
const ResetPassword = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack sx={{ mb: { xs: -0.5, sm: 0.5 }, marginTop: '20vh' }} spacing={1}>
          <Typography variant="h3">Set new password</Typography>
          <Typography color="secondary">Must be at least 8 characters</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AuthResetPassword />
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" paddingTop="20vh" spacing={1}>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={0} />
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={0} />
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={100} />
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default ResetPassword;
