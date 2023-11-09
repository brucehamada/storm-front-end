import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { CardActionArea, Stack } from '@mui/material';
import IconButton from 'components/@extended/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useTheme from '@mui/system/useTheme';

export default function ActiveProjectsCard(props: any) {
  const theme = useTheme();
  return (
    <Card sx={{ minWidth: 200 }} style={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <CardActionArea onClick={props.handleClick}>
          <Typography variant="h4" color="text.Primary">
            {props.title}
          </Typography>
          <Stack style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '10px' }} direction={'row'}>
            <Typography variant="h2" color="text.Primary">
              {props.value}
            </Typography>
            <CardActions>
              <IconButton onClick={props.handleClick}>
                <ArrowForwardIcon style={{ color: theme.palette.primary.light, fontSize: '2rem', width: '5vw' }} />
              </IconButton>
            </CardActions>
          </Stack>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}
