import { Card, CardContent, Grid, Typography, Divider } from '@mui/material';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const TimeTrackerCard = (props: any) => {
  return (
    <Card sx={{ height: '100%', minHeight: '80vh', marginLeft: '40px' }}>
      <CardContent>
        <Grid container sx={{ borderBlockColor: 'black', marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
          <Grid item xs={12} sx={{}}>
            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Time Tracker</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>Fractional CTO Services</Typography>
            <Divider />
          </Grid>

          <Grid container xs={12} sx={{ marginTop: '30px', marginBottom: '30px' }}>
            <Grid xs={3} sx={{ borderColor: 'black' }}>
              <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Last 24 hours</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>2:00 Hrs</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Last 24 hours</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>2:00 Hrs</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Last 24 hours</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>2:00 Hrs</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Last 24 hours</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>2:00 Hrs</Typography>
            </Grid>
            <Divider />
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
              <Divider />
            </Grid>
            <Grid item xs={9}>
              <Grid xs={12} sx={{ padding: '25px' }}>
                <Typography>Mar 8 - Mar 11</Typography>
              </Grid>
              <Grid container xs={12} sx={{ padding: '20px', textAlign: 'center' }}>
                <Grid xs={2}>
                  <Typography>Mon,9/11</Typography>
                </Grid>
                <Grid xs={8}>
                  <LinearWithLabel value={50} />
                </Grid>
                <Grid xs={2}>
                  <Typography>0:00Hrs</Typography>
                </Grid>
              </Grid>
              <Grid container xs={12} sx={{ padding: '20px', textAlign: 'center' }}>
                <Grid xs={2}>
                  <Typography>Mon,9/11</Typography>
                </Grid>
                <Grid xs={8}>
                  <LinearWithLabel value={50} />
                </Grid>
                <Grid xs={2}>
                  <Typography>0:00Hrs</Typography>
                </Grid>
              </Grid>
              <Grid container xs={12} sx={{ padding: '20px', textAlign: 'center' }}>
                <Grid xs={2}>
                  <Typography>Mon,9/11</Typography>
                </Grid>
                <Grid xs={8}>
                  <LinearWithLabel value={50} />
                </Grid>
                <Grid xs={2}>
                  <Typography>0:00Hrs</Typography>
                </Grid>
              </Grid>
              <Grid container xs={12} sx={{ padding: '20px', textAlign: 'center' }}>
                <Grid xs={2}>
                  <Typography>Mon,9/11</Typography>
                </Grid>
                <Grid xs={8}>
                  <LinearWithLabel value={50} />
                </Grid>
                <Grid xs={2}>
                  <Typography>0:00Hrs</Typography>
                </Grid>
              </Grid>
              <Grid container xs={12} sx={{ padding: '20px', textAlign: 'center' }}>
                <Grid xs={2}>
                  <Typography>Mon,9/11</Typography>
                </Grid>
                <Grid xs={8}>
                  <LinearWithLabel value={50} />
                </Grid>
                <Grid xs={2}>
                  <Typography>0:00Hrs</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TimeTrackerCard;
