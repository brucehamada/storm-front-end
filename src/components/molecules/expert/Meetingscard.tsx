import { Card, Grid, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import moment from 'moment';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
const Meetingscard = (props: any) => {
  return (
    <>
      <Card sx={{ height: '100%', minHeight: '80vh', marginLeft: '40px' }}>
        <Grid container xs={12}>
          <Grid
            container
            xs={12}
            sx={{
              borderBlockColor: 'black',
              padding: '10px 20px 10px 20px',
              marginLeft: '30px',
              marginTop: '20px',
              marginBottom: '10px',
              marginRight: '20px'
            }}
          >
            <Grid xs={2}>
              <Typography variant="h4">Meetings</Typography>
            </Grid>
            <Grid xs={8}></Grid>
            <Grid xs={2}>
              <Button variant="contained" sx={{ width: '150px' }}>
                <Typography>This Month</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sx={{
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: '#dddddd',
              borderRadius: '12px',
              padding: '10px 20px 10px 20px',
              marginBottom: '10px',
              marginLeft: '30px',
              marginRight: '20px'
            }}
          >
            <Grid container xs={12}>
              <Grid xs={2}>
                <Typography>Date</Typography>
              </Grid>
              <Grid xs={1}>
                <Typography>Start Time</Typography>
              </Grid>
              <Grid xs={1}>
                <Typography>End Time</Typography>
              </Grid>
              <Grid xs={2}>
                <Typography>Duration</Typography>
              </Grid>
              <Grid xs={1}>
                <Typography>Mode</Typography>
              </Grid>
              <Grid xs={2}>
                <Typography>Amount Paid</Typography>
              </Grid>
              <Grid xs={3}>
                <Typography>Meeting Agenda</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sx={{
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: '#dddddd',
              borderRadius: '12px',
              padding: '10px 20px 10px 20px',
              marginBottom: '10px',
              marginLeft: '30px',
              marginRight: '20px'
            }}
          >
            {props.item?.map((item: any) => (
              <Grid container xs={12}>
                <Grid xs={2}>{item.start}</Grid>
                <Grid xs={1}>{new Date(item.start).toLocaleTimeString('en-US', {})}</Grid>
                <Grid xs={1}>{new Date(item.end).toLocaleTimeString('en-US', {})}</Grid>
                <Grid xs={2}>{moment(item.end).diff(moment(item.start), 'minutes')} minutes</Grid>
                <Grid xs={1}>
                  {item.mode === true ? (
                    <VideocamIcon style={{ marginBottom: '2vh' }} />
                  ) : (
                    <KeyboardVoiceIcon style={{ marginBottom: '2vh' }} />
                  )}
                </Grid>
                <Grid xs={2}>{item.AmountPaid}</Grid>
                <Grid xs={3}>
                  <Grid container xs={12}>
                    <Grid xs={11}>{item.description}</Grid>
                    <Grid xs={1}>
                      <ArrowForward sx={{ color: 'blue' }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
export default Meetingscard;
