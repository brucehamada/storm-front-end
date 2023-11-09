import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from 'components/@extended/Avatar';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '1px', transform: 'scale(2)' }}>
    •
  </Box>
);

const useStyles = makeStyles(({ palette }) => ({
  avatar: {
    width: 30,
    height: 30,
    margin: 0
  }
}));

export default function RecentHireCard(props: any) {
  const styles = useStyles();
  return (
    <Card sx={{ minWidth: 400 }} style={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', alignItems: 'center' }}>
          <Avatar className={styles.avatar} src={props.path} />
          <Typography sx={{ fontSize: 14 }} color="text.Primary">
            <span style={{ color: 'rgb(51,74,161)', fontWeight: 'bold' }}>{props.name}</span> {bull} {props.value} ({props.review} Reviews)
          </Typography>
        </div>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" color="text.secondary">
              Total Meetings
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {props.meetings}
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" color="text.secondary">
              Money Spent
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              $ {props.money}
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" color="text.secondary">
              Last Meeting
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {props.date}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
