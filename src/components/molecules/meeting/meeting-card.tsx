import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'

const MeetingCard = (props: any) => {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        sx={{ backgroundColor: theme.palette.secondary.lighter, marginBottom: '1vh' }}
        borderLeft={'5px solid' + `${theme.palette.secondary.main}`}
      >
        <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} padding={2}>
          <Typography variant="h5" padding={1}>
            {props.name}
          </Typography>
          <Typography variant="h6" padding={1}>
            {props.time}
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} padding={2}>
        {props.mode === true ? (
                <VideocamIcon style={{ marginBottom: '2vh' }} />
              ) : (
                <KeyboardVoiceIcon style={{ marginBottom: '2vh' }} />
              )}
          <Typography variant="h6" padding={1}>
            {props.duration}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default MeetingCard;
