// project import
import MainCard from 'components/MainCard';
import { Grid, Button, Stack, TextField, Typography } from '@mui/material';
import Sidebar from 'components/cards/sidebar';
import { useState, useContext } from 'react';
import { setAccountSettings } from 'store/reducers/settings';
import { dispatch } from 'store';
import JWTContext from 'contexts/JWTContext';

// ==============================|| SAMPLE PAGE ||============================== //
const AccountSettings = () => {
  const userContext = useContext(JWTContext);

  const [firstName, setFirstName] = useState<string | any>(userContext?.user?.fullName.split(' ')[0]);
  const [lastName, setLastName] = useState<string | any>(userContext?.user?.fullName.split(' ')[1]);
  const [email, setEmail] = useState<string | any>(userContext?.user?.email);
  const [phoneNumber, setContactInfo] = useState<string | any>(userContext?.user?.phoneNumber);
  const [password, setPassword] = useState('');
  const handleSaveClick = () => {
    dispatch(setAccountSettings({ firstName, lastName, email, phoneNumber, password }));
  };
  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="customer" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          sx={{ p: 1.5 }}
          title={
            <Stack direction={'row'} alignItems={'center'} gap={2}>
              <Typography variant="h3">Account Settings</Typography>
            </Stack>
          }
          secondary={<Button variant="contained">Change Password</Button>}
        >
          <Grid container spacing={3}>
            <Grid container item xs={12} lg={12} spacing={4}>
              <Grid item xs={12} lg={6}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    First Name
                  </Typography>
                  <TextField
                    style={{ width: '80%' }}
                    value={firstName}
                    placeholder="John"
                    onChange={(event: any) => setFirstName(event?.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Last Name
                  </Typography>
                  <TextField
                    style={{ width: '80%' }}
                    value={lastName}
                    placeholder="Smith"
                    onChange={(event: any) => setLastName(event.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Email Address
                  </Typography>
                  <TextField
                    style={{ width: '80%' }}
                    value={email}
                    disabled
                    placeholder="JohnSmith@gmail.com"
                    onChange={(event: any) => setEmail(event.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Contract No.
                  </Typography>
                  <TextField
                    style={{ width: '80%' }}
                    placeholder="7362194238"
                    value={phoneNumber}
                    onChange={(event: any) => setContactInfo(event.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Password
                  </Typography>
                  <TextField
                    style={{ width: '80%' }}
                    placeholder="*********"
                    type="password"
                    onChange={(event: any) => setPassword(event.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Button variant="contained" sx={{ width: '9rem' }} onClick={handleSaveClick}>
                    Save Changes
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default AccountSettings;
