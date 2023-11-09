// project import
import MainCard from 'components/MainCard';
import { Grid, Button, Stack, Typography, Box } from '@mui/material';
import Sidebar from 'components/cards/sidebar';
import useTheme from '@mui/system/useTheme';
import UserCard from 'components/cards/usercard';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';

// ==============================|| SAMPLE PAGE ||============================== //
const ClientProfile = () => {
  const theme = useTheme();
  const userContext = useContext(JWTContext);

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="customer" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          sx={{ p: 1.5 }}
          title={<Typography variant="h2">My Profile</Typography>}
          secondary={
            <Stack direction={'row'} columnGap={3}>
              <Button variant="outlined" sx={{ width: '9rem' }}>
                See Public View
              </Button>
              <Button component={Link} to="/client/edit-profile" variant="contained" sx={{ width: '9rem' }}>
                Edit Profile
              </Button>
            </Stack>
          }
        >
          <Grid container spacing={5}>
            <Grid container item xs={12} sm={6} md={6} lg={6}>
              <UserCard
                avatar={userContext?.user?.avatar}
                fullName={userContext?.user?.fullName}
                LinkedIn={userContext?.user?.client?.socialMedia?.[0].url}
                Twitter={userContext?.user?.client?.socialMedia?.[0].url}
              />
            </Grid>
            <Grid container item xs={12} sm={6} md={6} lg={6} justifyContent={'space-evenly'}>
              <Grid container item xs={12}>
                <Grid item xs={12} lg={4}></Grid>
                <Grid item xs={12} lg={8}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} lg={3}>
              <Stack spacing={0.5}>
                <Typography variant="h4">Country</Typography>
                <Grid item xs={12} lg={4}>
                  <Box
                    sx={{ p: 1 }}
                    alignItems={'center'}
                    display="flex"
                    flexDirection="row"
                    justifyContent={'space-between'}
                    style={{ backgroundColor: theme.palette.secondary.lighter, height: '40px', marginTop: '1vh' }}
                  >
                    <Typography variant="h6">{userContext?.user?.client?.country}</Typography>
                  </Box>
                </Grid>
              </Stack>
            </Grid>
            {/* <Grid item xs={12} lg={12}>
              <Typography variant="h4" mb={2}>
                1:1 Consultancy
              </Typography>
              <Stack direction={'row'} spacing={3}></Stack>
            </Grid> */}
            {/* <Grid container item xs={6} lg={6} spacing={3}></Grid> */}
            <Grid item xs={9} lg={9}>
              <Typography variant="h4" mb={2}>
                Languages
              </Typography>
              <Grid container spacing={3}>
                {userContext?.user?.client?.languages?.map((item: any) => (
                  <Grid item xs={12} lg={4}>
                    <Box
                      sx={{ p: 1 }}
                      alignItems={'center'}
                      display="flex"
                      flexDirection="row"
                      justifyContent={'space-between'}
                      style={{ backgroundColor: theme.palette.secondary.lighter, height: '40px' }}
                    >
                      <Typography variant="h6">{item.language}</Typography>
                      <Typography variant="h6">{item.proficiency}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ClientProfile;
