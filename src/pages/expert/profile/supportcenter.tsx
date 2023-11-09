// project import
import MainCard from 'components/MainCard';
import { Grid, Typography } from '@mui/material';
import Sidebar from 'components/cards/sidebar';

// ==============================|| SAMPLE PAGE ||============================== //
const SupportCenter = () => {
  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="expert" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard sx={{ p: 1.5 }} title={<Typography variant="h2">Support Center</Typography>}></MainCard>
      </Grid>
    </Grid>
  );
};

export default SupportCenter;
