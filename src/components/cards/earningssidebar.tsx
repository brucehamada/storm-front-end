// project import
import { Card, CardContent, Stack, List, ListItem, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import useTheme from '@mui/system/useTheme';
import { Link, useLocation } from 'react-router-dom';

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
const EarningsSidebar = (props: any) => {
  const data = [
    { id: 1, text: 'Overview', url: '/expert/earnings-overview' },
    { id: 2, text: 'Timesheet', url: '/expert/earnings-timesheet' },
    { id: 3, text: 'My Earnings & Billings', url: '/expert/earnings-myearningsbillings' }
  ];

  const classes = useStyles();
  const location = useLocation().pathname;

  return (
    <Card style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh' }}>
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

export default EarningsSidebar;
