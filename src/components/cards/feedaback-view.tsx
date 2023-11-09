import { Typography, Stack, Rating, Grid, Divider } from '@mui/material';
import { Box } from '@mui/system';
import useTheme from '@mui/system/useTheme';
const FeedbackView = (props: any) => {
  const theme = useTheme();
  return (
    <Grid container spacing={3} marginBottom="2vh">
      <Grid item xs={11}>
        <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">{props.title}</Typography>
          <Rating name="Feedback" value={props.rate} readOnly />
        </Stack>
      </Grid>
      {props.viewRate && (
        <Grid item xs={1}>
          <Box sx={{ ml: 2 }}>{props.rate}/5</Box>
        </Grid>
      )}
      <Grid item xs={12}>
        <Box sx={{ backgroundColor: theme.palette.grey.light, fontStyle: 'italic', variant: 'body1' }}>{props.review}</Box>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};
export default FeedbackView;
