import { InputLabel, Grid, OutlinedInput, Button } from '@mui/material';
import { useState } from 'react';
export const AccountSettings = () => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <InputLabel style={{ color: 'black' }}>Full Name</InputLabel>
        <OutlinedInput type="text" fullWidth value={fullName} onChange={(event) => setFullName(event?.target.value)} />
      </Grid>
      <Grid item xs={6}>
        <InputLabel style={{ color: 'black' }}>Email Address</InputLabel>
        <OutlinedInput type="text" fullWidth value={emailAddress} onChange={(event) => setEmailAddress(event?.target.value)} />
      </Grid>
      <Grid item xs={6}>
        <InputLabel style={{ color: 'black' }}>Contact No.</InputLabel>
        <OutlinedInput type="text" fullWidth value={contactInfo} onChange={(event) => setContactInfo(event?.target.value)} />
      </Grid>
      <Grid item xs={6}>
        <InputLabel style={{ color: 'black' }}>Password</InputLabel>
        <OutlinedInput type="text" fullWidth value={password} onChange={(event) => setPassword(event?.target.value)} />
      </Grid>
      <Grid item xs={3}>
        <Button style={{ backgroundColor: '#0860c4', color: 'black', width: '100%', textTransform: 'none' }}>Save Changes</Button>
      </Grid>
    </Grid>
  );
};
