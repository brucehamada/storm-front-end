import { styled } from '@mui/material/styles';
import { Box, Link, Typography, Grid } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import useTheme from '@mui/system/useTheme';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
  }
}));

export default function CustomizedProgressBars(props: any) {
  const theme = useTheme();
  const userContext = useContext(JWTContext);
  return (
    <Box sx={{ padding: '0 24px' }}>
      <BorderLinearProgress variant="determinate" value={props.percent} />
      <Grid
        container
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2vh', marginBottom: '1vh' }}
        spacing={2}
      >
        <Grid item xs={6}>
          <Link
            href={userContext?.user?.type === 'customer' ? '/client/profile' : '/expert/profile'}
            style={{
              textAlign: 'left',
              display: 'inline-block',
              textDecoration: 'none',
              color: theme.palette.primary.darker,
              whiteSpace: 'nowrap',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            Complete your profile
          </Link>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant="body1">{props.percent} %</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
