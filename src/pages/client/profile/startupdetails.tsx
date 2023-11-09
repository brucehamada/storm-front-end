// project import
import MainCard from 'components/MainCard';
import { Grid, Button, Stack, Box, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StartupCard from 'components/cards/startupcard';
import Sidebar from 'components/cards/sidebar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';

// ==============================|| SAMPLE PAGE ||============================== //
const ExpertProfile = () => {
  const userContext = useContext(JWTContext);
  const webSite = userContext?.user?.client.organization?.socialMedia.find((website) => website.type === 'Company Website');
  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="customer" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard sx={{ p: 1.5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <StartupCard />
                <Button component={Link} to="/client/edit-startup-details" variant="contained" sx={{ width: '6rem', height: '20%', mt: 2 }}>
                  Edit
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Stack spacing={0.5}>
                <Typography variant="h4" sx={{ fontSize: '1.3rem' }}>
                  About this Startup
                </Typography>
                <Box style={{ border: 'none', boxShadow: 'none' }} sx={{ fontSize: '1rem' }}>
                  {userContext?.user?.client?.organization?.description}
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h4">Revenue</Typography>
              <Typography variant="h6">
                {' '}
                {'>'} {userContext?.user?.client?.organization?.revenue}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h4">Headquarters</Typography>
              <Typography variant="h6">
                {userContext?.user?.client?.organization?.country} {userContext?.user?.client?.organization?.state}{' '}
                {userContext?.user?.client?.organization?.city} {userContext?.user?.client.address1}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h4">Industry</Typography>
              <Typography variant="h6">{userContext?.user?.client?.organization?.industry}</Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h4">Company Size</Typography>
              <Typography variant="h6">{userContext?.user?.client?.organization?.teamSize}</Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h4">Specialities</Typography>
              <Typography variant="h6">{userContext?.user?.client?.organization?.specialities.join(', ')}</Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h4">Funding Stage</Typography>
              <Typography variant="h6">{userContext?.user?.client?.organization?.fundingStage}</Typography>
            </Grid>
            {webSite && (
              <Grid item xs={12} lg={4}>
                <Typography variant="h4">Website</Typography>
                <Typography component={Link} to={webSite.url} variant="h6" sx={{ textDecoration: 'none' }}>
                  {webSite.url}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12} lg={4}>
              <Typography variant="h4">Social Media</Typography>
              <Stack direction={'row'} gap={2}>
                <LinkedInIcon />
                <TwitterIcon />
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ExpertProfile;
