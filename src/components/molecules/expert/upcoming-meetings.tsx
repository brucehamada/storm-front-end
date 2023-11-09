import { Box, Grid, IconButton, Typography } from '@mui/material';
import MeetingCard from '../meeting/meeting-card';
import { useRef, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const UpComingMeetings = (props: any) => {
  const anchorRef = useRef<any>(null);

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>

      <Grid container>
        <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <Typography variant="h3">Upcoming Meetings</Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
          <Box sx={{ flexShrink: 0, ml: 0.75 }}>
            <IconButton
              color="secondary"
              sx={{ color: 'text.primary', width: '100%' }}
              aria-label="open profile"
              ref={anchorRef}
              aria-controls={open ? 'profile-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Typography variant="h5">This Month</Typography>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {props.meetingCards.map((card: any) => {
              return (
                <Grid item xs={6} md={4}>
                  <MeetingCard client={card.client} stTime={card.stTime} duration={card.duration} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UpComingMeetings;
