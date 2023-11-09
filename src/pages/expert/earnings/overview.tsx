// project import
import MainCard from 'components/MainCard';
import useTheme from '@mui/system/useTheme';
import { Grid, Stack, Typography, Button, Box } from '@mui/material';
import EarningsSidebar from 'components/cards/earningssidebar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactComponent as Rafiki } from './rafiki.svg';

// ==============================|| SAMPLE PAGE ||============================== //
const Overview = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={3}>
      <Grid item lg={3} xl={2}>
        <EarningsSidebar />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard>
          <Grid container xs={12} lg={12} rowGap={3}>
            <Grid container item xs={12} lg={12} spacing={3}>
              <Grid item xs={12} lg={12} marginTop={'0.6rem'}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} marginBottom={'1.2rem'}>
                  <Typography variant="h2">Overview</Typography>
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                      This Month
                    </Typography>
                    <ExpandMoreIcon style={{ color: theme.palette.primary.dark }} />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Grid container item xs={12} lg={12} spacing={3}>
              <Grid item xs={12} lg={8}>
                <MainCard>
                  <Grid container xs={12} lg={12}>
                    <Grid item xs={12} lg={6}>
                      <Box alignItems={'center'} justifyContent={'center'} sx={{ padding: '1.6rem 0', width: '100%' }}>
                        <Rafiki />
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Stack spacing={4} sx={{ padding: '1.2rem 0' }}>
                        <Stack spacing={2}>
                          <Typography variant="h4">Available Funds</Typography>
                          <Typography variant="h2">$ 4000.00</Typography>
                          <Typography variant="body1" sx={{ fontSize: '1.2rem', color: theme.palette.secondary.main }}>
                            Balance available for use
                          </Typography>
                        </Stack>
                        <Stack spacing={2}>
                          <Typography variant="h4">Withdrawn to-date : $800.00</Typography>
                          <Button variant="contained" sx={{ width: '50%', fontSize: '1.2rem' }}>
                            Withdraw Balance
                          </Button>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                </MainCard>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={3}>
                  <MainCard>
                    <Stack spacing={1}>
                      <Typography variant="h3">Payments being cleared</Typography>
                      <Typography variant="h2">$ 400.00</Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                        For your active orders
                      </Typography>
                    </Stack>
                  </MainCard>
                  <MainCard>
                    <Stack spacing={1}>
                      <Typography variant="h3">Earnings to-date</Typography>
                      <Typography variant="h2">$ 2400.00</Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                        Your earnings before taxes since joining
                      </Typography>
                    </Stack>
                  </MainCard>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Overview;
