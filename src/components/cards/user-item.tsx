import Avatar from 'components/@extended/Avatar';
import { Typography, Grid, Chip, Stack, Card, CardContent, Divider, CardActionArea } from '@mui/material';
import { useTheme } from '@mui/system';
const UserItem = (props: any) => {
  const theme = useTheme();
  const handleClick = () => {
    
  };
  return (
    <Card sx={{ borderRadius: '0px', border: 'none', boxShadow: 'none' }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Grid container sx={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={2}>
              <Avatar alt="avatar" src={props.avatar} />
            </Grid>
            <Grid item xs={8}>
              <Stack direction="column">
                <Typography variant="h5">{props.name}</Typography>
                <Typography>{props.jobTitle}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={2}>
              <Stack direction="column">
                <Typography variant="body1">{props.time}</Typography>
                {props.unreadCounts && (
                  <Chip sx={{ backgroundColor: theme.palette.primary.light, borderRadius: '10px', width: '2vw', height: '2vh' }}>
                    {props.unreadCounts}
                  </Chip>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserItem;
