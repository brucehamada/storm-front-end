// material-ui
import { Grid } from '@mui/material';
// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthEmailVerification from 'sections/auth/auth-forms/AuthEmailVerification';
import { useLocation } from 'react-router-dom';

// ================================|| CODE VERIFICATION ||================================ //

const EmailVerification = () => {
  const location = useLocation();
  const email = location.state?.email;
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AuthEmailVerification email={email} />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default EmailVerification;
