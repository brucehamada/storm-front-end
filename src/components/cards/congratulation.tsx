import { Card, Typography, Grid, CardContent, Stack, Box } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import Avatar from 'components/@extended/Avatar';
import CongratulationImage from 'assets/images/congratulations1.png';
const Congratulation = (props: any) => {
  const theme = useTheme();
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack
                  sx={{
                    backgroundColor: theme.palette.primary.lighter,
                    border: 'none',
                    borderRadius: '10px',
                    marginTop: '1vh',
                    marginBottom: '2vh'
                  }}
                  direction="row"
                >
                  <Avatar
                    alt="Congratulation"
                    src={CongratulationImage}
                    sx={{ minHeight: '10vh', minWidth: '7vw' }}
                    imgProps={{
                      style: { objectFit: 'contain' }
                    }}
                  />

                  <Typography variant="h2" sx={{ fontWeight: 'light', alignContent: 'left', marginTop: '2vh' }}>
                    Congratulations! Your new job is posted!
                  </Typography>
                </Stack>
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ color: theme.palette.secondary.main }}>
                    Project Name
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ minHeight: '5vh' }}>
                  <Typography variant="h2">{props.job?.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ color: theme.palette.secondary.main }}>
                    Description
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ minHeight: '20vh' }}>
                    <Typography variant="body1">{props.job?.description}</Typography>
                  </Box>
                </Grid>
                <Grid container spacing={5}>
                  <Grid item xs={4}>
                    <Stack direction={'column'}>
                      <Typography variant="body1" sx={{ color: theme.palette.secondary.main }}>
                        Area/Areas of Expertise
                      </Typography>
                      <Typography variant="body1" sx={{ minHeight: '10vh' }}>
                        {props.job?.skills?.join(', ')}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack direction={'column'}>
                      <Typography variant="body1" sx={{ color: theme.palette.secondary.main }}>
                        Industry of Expertise
                      </Typography>
                      <Typography variant="body1" sx={{ minHeight: '10vh' }}>
                        {props.job?.industry?.join(', ')}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack direction={'column'}>
                      <Typography variant="body1" sx={{ color: theme.palette.secondary.main }}>
                        Tools
                      </Typography>
                      <Typography variant="body1" sx={{ minHeight: '10vh' }}>
                        {props.job?.tools?.join(', ')}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardContent style={{ backgroundColor: theme.palette.grey.light }}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <Typography variant="body1">Job View</Typography>
                    <Typography variant="body1" sx={{ minHeight: '3vh' }}>
                      {props.job?.visibility}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Job Type</Typography>
                    <Typography variant="body1" sx={{ minHeight: '3vh' }}>
                      {props.job?.type}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Commitment</Typography>
                    <Typography variant="body1" sx={{ minHeight: '3vh' }}>
                      {props.job?.weeklyCommitment}hours/week
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Duration</Typography>
                    <Typography variant="body1" sx={{ minHeight: '3vh' }}>
                      {props.job?.duration}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Budget Range</Typography>
                    <Typography variant="body1" sx={{ minHeight: '3vh' }}>
                      {props.job?.budgetRange?.[0]}-{props.job?.budgetRange?.[1]}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Congratulation;
