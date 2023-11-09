// project import
import MainCard from 'components/MainCard';
import { Grid, Button, Stack, Typography, Switch } from '@mui/material';
import Sidebar from 'components/cards/sidebar';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';
// ==============================|| SAMPLE PAGE ||============================== //
const NotificationSettings = () => {
  const userContext = useContext(JWTContext);
  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role={userContext?.user?.type} />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          sx={{ p: 1.5 }}
          title={
            <Stack direction={'row'} alignItems={'center'} gap={2}>
              <Typography variant="h3">Notification Settings</Typography>
            </Stack>
          }
          secondary={
            <Button variant="contained" sx={{ width: '10rem' }}>
              Save Changes
            </Button>
          }
        >
          <Grid container>
            <Grid item xs={12} lg={12}>
              <MainCard boxShadow sx={{ width: '100%' }}>
                <Grid container direction={'row'} alignItems={'center'}>
                  <Grid container xs={11} lg={11} alignItems={'center'}>
                    <Typography variant="body1" style={{ fontSize: '1rem' }}>
                      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                      alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                      Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                      cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
                    </Typography>
                  </Grid>
                  <Grid container xs={1} lg={1} alignItems={'center'} justifyContent={'right'}>
                    <Switch />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={12}>
              <MainCard boxShadow sx={{ width: '100%' }}>
                <Grid container direction={'row'} alignItems={'center'}>
                  <Grid container xs={11} lg={11} alignItems={'center'}>
                    <Typography variant="body1" style={{ fontSize: '1rem' }}>
                      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                      alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                      Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                      cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
                    </Typography>
                  </Grid>
                  <Grid container xs={1} lg={1} alignItems={'center'} justifyContent={'right'}>
                    <Switch defaultChecked />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={12}>
              <MainCard boxShadow sx={{ width: '100%' }}>
                <Grid container direction={'row'} alignItems={'center'}>
                  <Grid container xs={11} lg={11} alignItems={'center'}>
                    <Typography variant="body1" style={{ fontSize: '1rem' }}>
                      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                      alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                      Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                      cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
                    </Typography>
                  </Grid>
                  <Grid container xs={1} lg={1} alignItems={'center'} justifyContent={'right'}>
                    <Switch />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={12}>
              <MainCard boxShadow sx={{ width: '100%' }}>
                <Grid container direction={'row'} alignItems={'center'}>
                  <Grid container xs={11} lg={11} alignItems={'center'}>
                    <Typography variant="body1" style={{ fontSize: '1rem' }}>
                      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                      alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                      Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                      cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
                    </Typography>
                  </Grid>
                  <Grid container xs={1} lg={1} alignItems={'center'} justifyContent={'right'}>
                    <Switch defaultChecked />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={12}>
              <MainCard boxShadow sx={{ width: '100%' }}>
                <Grid container direction={'row'} alignItems={'center'}>
                  <Grid container xs={11} lg={11} alignItems={'center'}>
                    <Typography variant="body1" style={{ fontSize: '1rem' }}>
                      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                      alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                      Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                      cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
                    </Typography>
                  </Grid>
                  <Grid container xs={1} lg={1} alignItems={'center'} justifyContent={'right'}>
                    <Switch />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={12}>
              <MainCard boxShadow sx={{ width: '100%' }}>
                <Grid container direction={'row'} alignItems={'center'}>
                  <Grid container xs={11} lg={11} alignItems={'center'}>
                    <Typography variant="body1" style={{ fontSize: '1rem' }}>
                      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                      alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                      Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                      cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
                    </Typography>
                  </Grid>
                  <Grid container xs={1} lg={1} alignItems={'center'} justifyContent={'right'}>
                    <Switch />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={12}>
              <MainCard boxShadow sx={{ width: '100%' }}>
                <Grid container direction={'row'} alignItems={'center'}>
                  <Grid container xs={11} lg={11} alignItems={'center'}>
                    <Typography variant="body1" style={{ fontSize: '1rem' }}>
                      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                      alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                      Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                      cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
                    </Typography>
                  </Grid>
                  <Grid container xs={1} lg={1} alignItems={'center'} justifyContent={'right'}>
                    <Switch defaultChecked />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12} lg={12}>
              <MainCard boxShadow sx={{ width: '100%' }}>
                <Grid container direction={'row'} alignItems={'center'}>
                  <Grid container xs={11} lg={11} alignItems={'center'}>
                    <Typography variant="body1" style={{ fontSize: '1rem' }}>
                      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                      alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                      Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                      cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
                    </Typography>
                  </Grid>
                  <Grid container xs={1} lg={1} alignItems={'center'} justifyContent={'right'}>
                    <Switch />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default NotificationSettings;
