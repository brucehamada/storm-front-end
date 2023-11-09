import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Badge, Drawer, Box, List, Typography, ListItem, Grid, Stack, Link, Card, CardContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// project import
import IconButton from 'components/@extended/IconButton';

// assets
import { BellOutlined } from '@ant-design/icons';
import Avatar from 'components/@extended/Avatar';

// sx styles

// ==============================|| HEADER CONTENT - NOTIFICATION ||============================== //
const Notification = () => {
  const theme = useTheme();
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      avatar: 'assets/iamge/users/avatar-1.png',
      date: 'Apr 12',
      content: 'Please enter the skill testing.'
    },
    {
      id: '2',
      avatar: 'assets/iamge/users/avatar-1.png',
      date: 'Apr 12',
      content: 'Please enter the skill testing.'
    },
    {
      id: '3',
      avatar: 'assets/iamge/users/avatar-1.png',
      date: 'Apr 12',
      content: 'Please enter the skill testing.'
    }
  ]);
  const anchorRef = useRef<any>(null);
  const [read, setRead] = useState(0);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(true);
  };

  const handleClose = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };
  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };
  return (
    <>
      <Box sx={{ flexShrink: 0, ml: 0.75 }}>
        <IconButton
          color="secondary"
          sx={{ color: 'text.primary', fontSize: '22px' }}
          aria-label="open profile"
          ref={anchorRef}
          aria-controls={open ? 'profile-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Badge badgeContent={read} color="primary">
            <BellOutlined />
          </Badge>
        </IconButton>
      </Box>
      <Drawer anchor="right" open={open} onClose={handleClose(false)} sx={{ width: '40vw' }}>
        <List sx={{ width: '40vw' }}>
          <ListItem>
            <Grid container spacing={5}>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h3">Notifications</Typography>
                <Link href="/client/notificationsettings" variant="h4" sx={{ textDecoration: 'none', color: theme.palette.primary.darker }}>
                  Manage Settings
                </Link>
              </Grid>
              {notifications.map((item: any) => (
                <Grid item key={item.id} xs={12}>
                  <Card onClick={() => setRead(read)}>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={1}>
                          <Avatar alt="avatar" src={item.avatar} />
                        </Grid>
                        <Grid item xs={10}>
                          <Stack direction={'column'} sx={{ display: 'flex', alignItems: 'right' }}>
                            <Typography variant="body1">{item.date}</Typography>
                            <Typography variant="body1">{item.content}</Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={1}>
                          <IconButton onClick={() => handleDelete(item.id)}>
                            <CloseIcon sx={{ color: theme.palette.primary.darker }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Notification;
