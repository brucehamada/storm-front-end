import Card from '@mui/material/Card';

import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useTheme from '@mui/system/useTheme';
import { CardMedia, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';

export default function UserCard(props: any) {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex', width: '100%', boxShadow: 'none', gap: 1, alignItems: 'left' }}>
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardMedia component="img" sx={{ height: '100px', width: '100px', borderRadius: '50%' }} image={props?.avatar} />
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={2.5}>
              <Typography variant="h3" style={{ color: theme.palette.primary.darker, whiteSpace: 'nowrap' }}>
                {props?.fullName}
              </Typography>
              <Typography variant="h4">{props?.professionalRole}</Typography>
              <Stack direction={'row'} gap={2}>
                <Link to={props?.LinkedIn ? props.LinkedIn : ''}>{props?.LinkedIn && <LinkedInIcon />} </Link>
                <Link to={props?.Twittier ? props?.Twittier : ''}>{props?.Twittier && <TwitterIcon />}</Link>
                {props?.Facebook && <FacebookIcon />}
                {props?.Youtube && <YouTubeIcon />}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
