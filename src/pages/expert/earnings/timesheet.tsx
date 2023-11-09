// project import
import MainCard from 'components/MainCard';
import useTheme from '@mui/system/useTheme';
import { Grid, Stack, Typography } from '@mui/material';
import EarningsSidebar from 'components/cards/earningssidebar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SpanningTable from 'components/cards/timesheet';

// ==============================|| SAMPLE PAGE ||============================== //
const Timesheet = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={3}>
      <Grid item lg={3} xl={2}>
        <EarningsSidebar />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard>
          <Grid container xs={12} lg={12} rowGap={3}>
            <Grid container item xs={12} lg={12}>
              <Grid item xs={12} lg={12} marginTop={'0.6rem'}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} marginBottom={'1.2rem'}>
                  <Typography variant="h2">Timesheet</Typography>
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                      This Month
                    </Typography>
                    <ExpandMoreIcon style={{ color: theme.palette.primary.dark }} />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
              <SpanningTable />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Timesheet;
