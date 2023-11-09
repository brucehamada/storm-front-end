import { Typography, Card, CardContent, Grid, Box } from '@mui/material';
import Avatar from 'components/@extended/Avatar';
import CustomizedProgressBars from 'components/atoms/CustomizedProgressBars';

const UserCard = (props: any) => {
  return (
    <Card style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '2vh' }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: '30%' }}>
              <Avatar alt="avatar" src={props.path} sx={{ width: '100%', height: '100%', minHeight: '6vw', minWidth: '6vw' }} />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h4">{props.name}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CustomizedProgressBars percent={props.profileCompleteness ? props.profileCompleteness : 0} />
    </Card>
  );
};

export default UserCard;
