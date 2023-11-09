import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useTheme from '@mui/system/useTheme';
import IconButton from 'components/@extended/IconButton';
import { useNavigate } from 'react-router-dom';
const MeetingView = (props: any) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleForwardClick = () => {
    navigate(`/client/meetings/${props.meetingId}`);
  };
  return (
    <Grid container spacing={10} sx={{ marginBottom: '1vh', minHeight: '10vh' }}>
      <Grid item xs={12}>
        <Box
          sx={{
            borderRadius: '5px',
            border: `1px solid ${theme.palette.primary.main}`,
            minHeight: '8vh',
            paddingLeft: '2vh',
            marginTop: '3vh'
          }}
        >
          <Grid container spacing={10}>
            <Grid item xs={2} sx={{ marginTop: '3vh' }}>
              <Typography variant="body1" sx={{ whiteSpace: 'noWrap' }}>
                {props.date}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ marginTop: '3vh' }}>
              <Typography variant="body1" sx={{ whiteSpace: 'noWrap' }}>
                {props.startTime}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ marginTop: '3vh' }}>
              <Typography variant="body1" sx={{ whiteSpace: 'noWrap' }}>
                {props.endTime}
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ marginTop: '3vh' }}>
              <Typography variant="body1" sx={{ whiteSpace: 'noWrap' }}>
                {props.duration}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ marginTop: '3vh' }}>
              <Typography variant="body1" sx={{ whiteSpace: 'noWrap' }}>
                <VideocamIcon />
              </Typography>
            </Grid>
            <Grid item lg={2} md={1} sm={1} xs={1} sx={{ marginTop: '3vh' }}>
              <Typography variant="body1" sx={{ whiteSpace: 'noWrap' }}>
                {props.amountPaid}
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ marginTop: '3vh' }}>
              <Typography variant="body1" sx={{ whiteSpace: 'noWrap' }}>
                {props.meetingAgenda}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ marginTop: '3vh' }}>
              <IconButton onClick={handleForwardClick}>
                <ArrowForwardIcon
                  sx={{ color: theme.palette.primary.darker, fontSize: '3rem', marginRight: '4vw', paddingBottom: '1vh' }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MeetingView;
