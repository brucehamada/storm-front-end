import { OutlinedInput, InputLabel, Grid, Stack } from '@mui/material';
import { useState, ChangeEvent } from 'react';
import { Box } from '@mui/system';
interface SocialMediaProps {
  /**
   * Social Media Props
   */
  LinkedIn: string;
  /**
   * LinkedIn Link
   */
  PersonalWebsite: string;
  /**
   * Personal Website Link
   */
}
export const SocialMedia = ({ ...props }: SocialMediaProps) => {
  const [linkedin, setLinkedIn] = useState('');
  const [personalWebsite, setPersonalWebsite] = useState('');
  const handleLinkedinChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLinkedIn(event.target.value);
  };
  const handlePersonalWebsiteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPersonalWebsite(event.target.value);
  };
  return (
    <Box
      sx={{
        font: 'caption',
        width: '80%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10%',
        marginTop: '5%'
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Stack spacing={3}>
            <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Linkedin</InputLabel>
            <OutlinedInput
              id="linkedin"
              type="text"
              value={linkedin}
              placeholder="Enter your link"
              onChange={handleLinkedinChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={3}>
            <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Personal Website</InputLabel>
            <OutlinedInput
              id="personalWebsite"
              type="text"
              value={personalWebsite}
              placeholder="Enter your link"
              onChange={handlePersonalWebsiteChange}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
