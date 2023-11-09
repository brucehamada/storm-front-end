import { ReactNode } from 'react';

// material-ui
import { Box, Grid } from '@mui/material';

// project import
import AuthCard from './AuthCard';

// assets
import myImage from 'assets/images/auth/first.png';
interface Props {
  children: ReactNode;
}

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children }: Props) => {
  return (
    <Box style={{ minHeight: '100vh' }}>
      <Grid
        container
        direction={'row'}
        sx={{
          minHeight: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }
        }}
      >
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <AuthCard>{children}</AuthCard>
        </Grid>
        <Grid item md={5} lg={5} style={{ width: '100 %', height: '100vh', display: 'flex' }}>
          <img style={{ width: '100%' }} src={myImage} alt="landingImage" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthWrapper;
