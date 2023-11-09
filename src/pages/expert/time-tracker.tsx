import TimeTrackerCard from 'components/molecules/expert/Timetrackercard';
import { Grid } from '@mui/material';

const TimeTracker = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <TimeTrackerCard />
      </Grid>
    </Grid>
  );
};
export default TimeTracker;
