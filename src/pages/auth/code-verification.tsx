// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthCodeVerification from 'sections/auth/auth-forms/AuthCodeVerification';
import { useLocation } from 'react-router-dom';
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
// ================================|| CODE VERIFICATION ||================================ //

const CodeVerification = () => {
  const location = useLocation();
  const email = location.state?.email;
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1} marginTop={'20vh'}>
            <Typography variant="h3">Password Reset Code</Typography>
            <Typography color="secondary">We send a code to {email}</Typography>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <AuthCodeVerification />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" paddingTop="20vh" spacing={1}>
            <Grid item xs={4}>
              <BorderLinearProgress variant="determinate" value={0} />
            </Grid>
            <Grid item xs={4}>
              <BorderLinearProgress variant="determinate" value={100} />
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

export default CodeVerification;
