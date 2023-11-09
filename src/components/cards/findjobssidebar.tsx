// project import
import { Card, CardContent, Stack, List, ListItem, Divider, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@mui/system/useTheme';
import { useLocation } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';


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
const FindJobsSidebar = ({
  data,
  setFindJobSideBarItem
}: {
  data: {
    id: number;
    text: string;
    url: string;
  }[];
  setFindJobSideBarItem: Dispatch<SetStateAction<string>>;
}) => {
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
                    <Box
                      onClick={() => setFindJobSideBarItem(item.url)}
                      className={className}
                      style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                      {item.text}
                    </Box>
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

export default FindJobsSidebar;
