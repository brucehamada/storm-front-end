// project import

import { Typography, Grid, Stack, Box, Card, CardContent, CardActionArea } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import moment from 'moment';
import { dispatch } from 'store';
import { Country } from 'country-state-city';
// ==============================|| SAMPLE PAGE ||============================== //

const CircleButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  width: '2.5rem',
  height: '2.5rem',
  backgroundColor: 'transparent',
  color: 'black',
  border: '1px solid rgba(0, 0, 0, 0.3)',
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  }
}));

const currentTime = new Date().toString();

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '0.5rem', transform: 'scale(1.4)' }}>
    •
  </Box>
);

const FindJobsCard = (props: any) => {
  const theme = useTheme();
  const { onCardClick } = props;
  const handleClick = (_id: any) => {
    dispatch(onCardClick(true, props?.job?._id));
  };
  return (
    <Card style={{ backgroundColor: theme.palette.primary.lighter }}>
      <CardActionArea onClick={() => handleClick(props?.job?._id)}>
        <CardContent>
          <Grid container spacing={1.5}>
            <Grid item xs={12} lg={12} paddingRight={'1rem'}>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant="h3" style={{ color: theme.palette.primary.darker }}>
                  {props?.job?.title}
                </Typography>
                <Stack direction={'row'} spacing={2}>
                  <CircleButton>
                    <FavoriteBorderIcon style={{ color: theme.palette.primary.dark }} />
                  </CircleButton>
                  <CircleButton>
                    <ThumbDownAltOutlinedIcon style={{ color: theme.palette.primary.dark }} />
                  </CircleButton>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={12} alignItems={'center'}>
              <Stack direction={'row'} alignItems={'center'}>
                <Typography variant="h4">
                  {props?.job?.type} {bull}{' '}
                </Typography>
                <Typography variant="body1" style={{ fontSize: '15px' }}>
                  Posted {moment(currentTime).diff(moment(props?.job?.createdAt), 'hours')} Hours ago
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={12} paddingRight={'1rem'}>
              <Typography variant="h5">{props?.job?.description}</Typography>
            </Grid>
            <Grid container item xs={12} lg={12} alignItems={'center'}>
              <Grid item xs={12} lg={2.4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Weekly Commitment</Typography>
                  <Typography variant="body1">{props?.job?.weeklyCommitment}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Duration</Typography>
                  <Typography variant="body1">{props?.job?.duration}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Company Location</Typography>
                  <Typography variant="body1">{Country.getCountryByCode(props?.job?.country ? props?.job?.country : '')?.name}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Verification Status</Typography>
                  <Typography variant="body1">{props?.job?.verifiyStatus}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Budget Range</Typography>
                  <Typography variant="body1">
                    {props.job?.budgetRange[0]}-{props?.job?.budgetRange[1]} /hour
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FindJobsCard;
