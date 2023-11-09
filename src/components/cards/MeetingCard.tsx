import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { dispatch } from 'store';
import { getMeetingDetails } from 'store/reducers/calendar';
export default function MeetingCard(props: any) {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = (id: string, to: string) => {
    dispatch(getMeetingDetails(id, to));
    navigate('/meetings', { state: { to: props.to, id: id } });
  };
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary.lighter,
        boxShadow: 'none',
        marginBottom: '2vh',
        borderLeft: `5px solid ${theme.palette.secondary.main}`
      }}
    >
      <CardActionArea onClick={() => handleClick(props._id, props.to)}>
        <CardContent>
          <Grid
            container
            style={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1vh' }}
            direction={'row'}
          >
            <Grid item xs={11} sx={{ marginBottom: '2vh' }}>
              <Typography
                sx={{
                  fontSize: 20,
                  whiteSpace: 'wrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '60%',
                  display: 'inline-flex',
                  justifyContent: 'flex-start'
                }}
                color="text.Primary"
              >
                {props.name}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
              {props.mode === true ? (
                <VideocamIcon style={{ marginBottom: '2vh' }} />
              ) : (
                <KeyboardVoiceIcon style={{ marginBottom: '2vh' }} />
              )}
            </Grid>
            <Grid item xs={6}>
              <Typography>{props.time}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ display: 'flex', justifyContent: 'flex-end' }}>{props.duration} minutes</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <style>{`
        .MuiCard-root:focus {
          borderLeft: '2px solid ${theme.palette.primary.darker}';
        }
        `}</style>
    </Card>
  );
}
