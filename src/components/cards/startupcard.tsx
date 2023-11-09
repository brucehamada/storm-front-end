import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/system/useTheme';
import { Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';
export default function StartupCard() {
  const theme = useTheme();
  const userContext = useContext(JWTContext);
  return (
    <Card sx={{ display: 'flex', width: '100%', boxShadow: 'none', alignItems: 'center' }}>
      <CardMedia component="img" sx={{ height: '80px', width: '80px' }} image={userContext?.user?.client?.organization?.logo} alt="" />
      <CardContent>
        <Stack spacing={2.5}>
          <Typography variant="h4" style={{ color: theme.palette.primary.darker }}>
            {userContext?.user?.client?.organization?.organizationName}
          </Typography>
          <Typography variant="h5">
            Founded in{' '}
            {new Date(
              userContext?.user?.client?.organization?.dayOfRegistration ? userContext.user.client.organization.dayOfRegistration : '2000'
            ).getFullYear()}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
