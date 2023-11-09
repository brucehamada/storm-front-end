// project import
import MainCard from 'components/MainCard';
import { Card, CardContent, Typography, Grid, Stack, Button, List, ListItem, Link } from '@mui/material';
import { Divider } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import useTheme from '@mui/system/useTheme';

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    link: {
      color: theme.palette.secondary.darker,
      transition: 'color 0.3s', // Add a smooth transition effect
      '&:hover': {
        color: theme.palette.primary.dark
      },
      fontSize: '20px'
    }
  };
});

// ==============================|| SAMPLE PAGE ||============================== //
const SamplePage = () => {
  const data = [
    { id: 1, text: 'My Profile', link: 'https://example.com/item1' },
    { id: 2, text: 'My Content', link: 'https://example.com/item1' },
    { id: 3, text: 'User Settings', link: 'https://example.com/item1' },
    { id: 4, text: 'Payment Settings', link: 'https://example.com/item1' },
    { id: 5, text: 'Notification Settings', link: 'https://example.com/item1' },
    { id: 6, text: 'Dispute Center', link: 'https://example.com/item1' }
  ];

  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item lg={3} xl={2}>
        <Card style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '80vh' }}>
          <CardContent>
            <Stack>
              <List sx={{ width: '100%' }}>
                {data.map((item) => (
                  <div key={item.id}>
                    <ListItem sx={{ py: 2 }}>
                      <Link href="{item.link}" target="_blank" rel="noopener" underline="none" className={classes.link}>
                        {item.text}
                      </Link>
                    </ListItem>
                    <Divider />
                  </div>
                ))}
              </List>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          title="My Profile"
          secondary={
            <Stack spacing={2} direction="row">
              <Button variant="outlined" sx={{ width: '9rem' }}>
                See Public View
              </Button>
              <Button variant="contained" sx={{ width: '9rem' }}>
                Edit Profile
              </Button>
            </Stack>
          }
        >
          <Typography variant="h5">
            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
            ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
            reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
            qui officiate descent molls anim id est labours.
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
            ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
            reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
            qui officiate descent molls anim id est labours.
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
            ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
            reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
            qui officiate descent molls anim id est labours.
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
            ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
            reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
            qui officiate descent molls anim id est labours.
          </Typography>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default SamplePage;
