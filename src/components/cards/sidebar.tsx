// project import
import { Card, CardContent, Stack, List, ListItem, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import useTheme from '@mui/system/useTheme';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
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
    },
    active: {
      color: theme.palette.primary.dark,
      transition: 'color 0.3s',
      fontSize: '20px'
    }
  };
});

// ==============================|| SAMPLE PAGE ||============================== //
const Sidebar = (props: any) => {
  const isSmall = useMediaQuery('(max-width:1024px)');
  let data: any[] = [];

  if (props.role === 'expert') {
    data = [
      { id: 1, text: 'My Profile', url: '/expert/profile' },
      { id: 2, text: 'My Content', url: '/expert/mycontent' },
      { id: 3, text: 'User Settings', url: '/expert/usersettings' },
      { id: 4, text: 'Payment Settings', url: '/expert/paymentsettings' },
      { id: 5, text: 'Notification Settings', url: '/expert/notificationsettings' },
      { id: 6, text: 'Support Center', url: '/expert/supportcenter' }
    ];
  } else if (props.role === 'customer') {
    data = [
      { id: 1, text: 'My Profile', url: '/client/profile' },
      { id: 2, text: 'Organization Details', url: '/client/startup-details' },
      { id: 3, text: 'Account Settings', url: '/client/accountsettings' },
      { id: 4, text: 'Payment Settings', url: '/client/paymentsettings' },
      { id: 5, text: 'Notification Settings', url: '/client/notificationsettings' },
      { id: 6, text: 'Support Center', url: '/client/supportcenter' }
    ];
  }
  const classes = useStyles();
  const location = useLocation().pathname;
  return (
    <Card style={{ display: 'flex', flexDirection: 'column', width: isSmall ? '0%' : '100%', height: '100vh' }}>
      <CardContent>
        <Stack>
          <List sx={{ width: '100%' }}>
            {data.map((item) => {
              const className = item.url === location ? classes.active : classes.link;
              return (
                <div key={item.id}>
                  <ListItem sx={{ py: 2 }}>
                    <Typography component={Link} to={item.url} className={className} style={{ textDecoration: 'none' }}>
                      {item.text}
                    </Typography>
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          </List>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
