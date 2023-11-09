import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useContext } from 'react';
import EmojiPicker, { SkinTones, EmojiClickData } from 'emoji-picker-react';
import Calendar from 'components/Calendar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// material-ui
import { useTheme, styled, Theme } from '@mui/material/styles';
import {
  Box,
  Button,
  ClickAwayListener,
  Collapse,
  Dialog,
  Drawer,
  Grid,
  List,
  ListItem,
  Popper,
  Stack,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
// third party
// project import
import ChatDrawer from 'sections/apps/chat/ChatDrawer';
import ChatHistory from 'sections/apps/chat/ChatHistory';
import UserDetails from 'sections/apps/chat/UserDetails';
import Loader from 'components/Loader';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import SimpleBar from 'components/third-party/SimpleBar';
import { PopupTransition } from 'components/@extended/Transitions';
import { dispatch, useSelector } from 'store';
import { openDrawer } from 'store/reducers/menu';
import { openSnackbar } from 'store/reducers/snackbar';
import { getUserChats, insertChat } from 'store/reducers/chat';
// assets
import { PaperClipOutlined, PictureOutlined, SendOutlined, SmileOutlined, SoundOutlined } from '@ant-design/icons';
// types
import { History as HistoryProps } from 'types/chat';
import { UserProfile } from 'types/user-profile';
import JWTContext from 'contexts/JWTContext';
import Avatar from 'components/@extended/Avatar';
const drawerWidth = 320;
const socket: Socket = io(process.env.REACT_APP_API_URL as string);
const Main = styled('main', { shouldForwardProp: (prop: string) => prop !== 'open' })(
  ({ theme, open }: { theme: Theme; open: boolean }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter
    }),
    marginLeft: `-${drawerWidth}px`,
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 0,
      marginLeft: 0
    },
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shorter
      }),
      marginLeft: 0
    })
  })
);
const Chat = () => {
  const userContext = useContext(JWTContext);
  const theme = useTheme();
  const [anchorElEmoji, setAnchorElEmoji] = useState<any>();
  const emojiOpen = Boolean(anchorElEmoji);
  const emojiId = emojiOpen ? 'simple-popper' : undefined;
  const handleCloseEmoji = () => {
    setAnchorElEmoji(null);
  };
  const [isOpen, setOpen] = useState(false);
  const handleOnEmojiButtonClick = (event: React.MouseEvent<HTMLButtonElement> | undefined) => {
    setAnchorElEmoji(anchorElEmoji ? null : event?.currentTarget);
  };
  const handleSearchClick = () => {};
  const handleSendOfferClick = () => {};
  const handleBookingCallClick = () => {
    if (user?.name) {
      setOpen(true);
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select person.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    }
  };
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };
  const handleMoreClick = () => {};
  const handleBackClick = () => {
    setOpen(false);
  };
  const [loading, setLoading] = useState<boolean>(true);
  const matchDownSM = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
  const [emailDetails, setEmailDetails] = useState(false);
  const [user, setUser] = useState<UserProfile>({});

  const [data, setData] = useState<HistoryProps[]>([]);
  const dataFetchedRef = useRef(false);
  const chatState = useSelector((state) => state.chat);
  const handleUserChange = () => {
    setEmailDetails((prev) => !prev);
  };
  const [openChatDrawer, setOpenChatDrawer] = useState(true);
  const handleDrawerOpen = () => {
    setOpenChatDrawer((prevState) => !prevState);
  };
  const onEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
    setMessage(message + emojiObject.emoji);
  };
  // handle new message form
  const [message, setMessage] = useState('');
  const textInput = useRef(null);
  const handleOnSend = () => {
    if (message.trim() === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Message required',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: false
        })
      );
    } else {
      let to = user?.email;
      let type = 'general';
      const newMessage = {
        from: userContext?.user?.email,
        type: type,
        to: to,
        text: message
      };
      socket.emit('newMessage', newMessage);
      dispatch(insertChat(newMessage));
    }
    setMessage('');
  };
  const handleEnter = (event: React.KeyboardEvent<HTMLDivElement> | undefined) => {
    if (event?.key !== 'Enter') {
      return;
    }
    handleOnSend();
  };

  useEffect(() => {
    setOpenChatDrawer(!matchDownSM);
  }, [matchDownSM]);

  useEffect(() => {
    setData(chatState.chats);
  }, [chatState.chats]);
  useEffect(() => {
    setLoading(false);
  }, [chatState.users]);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(openDrawer(false));

    socket.emit('login', userContext?.user?.email);
    socket.on('messageFromServer', (data: any) => {
      const newMessage = {
        from: data.from,
        type: 'general',
        to: data.to,
        text: data.text,
        createdAt: data.createdAt
      };
      setData((prevState) => [...prevState, newMessage]);
    });
  }, [socket]);
  useEffect(() => {
    const myEmail: string = userContext?.user?.email as string;
    if (userContext?.user?.type === 'admin') dispatch(getUserChats(myEmail));
    else {
      dispatch(getUserChats(user.email));
      socket.emit('currentUser', user.email);
    }
  }, [user]);
  if (loading) return <Loader />;
  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)} sx={{ minWidth: '70vw' }}>
        <List sx={{ minWidth: '70vw' }}>
          <ListItem>
            <Grid container>
              <Grid item xs={6}>
                <Stack direction="row" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Button onClick={handleBackClick}>
                    <ArrowBackIcon sx={{ fontSize: '2rem' }} />
                  </Button>
                  <Typography variant="h2" sx={{ color: theme.palette.primary.dark }}>
                    Back
                  </Typography>
                </Stack>
                <Typography variant="h5">{user?.name}</Typography>
                <Typography variant="h3">30 Minutes Meeting</Typography>
                <Typography variant="h5">30 Min</Typography>
              </Grid>
              <Grid item xs={6}>
                <Calendar receiverEmail={user.email} />
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Drawer>
      <Grid container sx={{ marginBottom: '1vh' }}>
        <Grid item xs={1}>
          <Typography variant="h3">Messages</Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={1}>
          <Stack direction="row" spacing={5}>
            <Avatar alt="avatar" src={user?.avatar} sx={{ minHeight: '3vw', minWidth: '3vw', marginRight: '2vh' }} />
            <Typography variant="h5" sx={{ display: 'inline-flex', whiteSpace: 'nowrap', alignItems: 'center' }}>
              {user.name}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'right' }}>
          <Stack direction={'row'} spacing={4} sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton onClick={handleSearchClick}>
              <SearchIcon sx={{ color: theme.palette.primary.darker }} />
            </IconButton>
            <Button
              variant="outlined"
              style={{
                backgroundColor: 'white',
                whiteSpace: 'nowrap',
                color: theme.palette.primary.darker,
                width: '10vw',
                textTransform: 'none',
                border: `1px solid ${theme.palette.primary.darker}`,
                borderRadius: '50px',
                height: '4vh'
              }}
              onClick={handleSendOfferClick}
            >
              Send an Offer
            </Button>
            <Button
              variant="outlined"
              style={{
                backgroundColor: 'white',
                whiteSpace: 'nowrap',
                color: theme.palette.primary.darker,
                width: '10vw',
                textTransform: 'none',
                borderRadius: '50px',
                border: `1px solid ${theme.palette.primary.darker}`,
                height: '4vh'
              }}
              onClick={handleBookingCallClick}
            >
              Book a Call
            </Button>
            <IconButton onClick={handleMoreClick}>
              <MoreVertIcon sx={{ color: theme.palette.primary.darker }} />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
      <Stack direction="row" style={{ maxWidth: '100%' }}>
        {userContext?.user?.type !== 'admin' && (
          <ChatDrawer openChatDrawer={openChatDrawer} handleDrawerOpen={handleDrawerOpen} setUser={setUser} />
        )}
        <Main theme={theme} open={openChatDrawer} sx={{ width: '100%', marginLeft: '2vw', height: '70vh' }}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={emailDetails ? 8 : 12}
              xl={emailDetails ? 9 : 12}
              sx={{
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.shorter + 200
                })
              }}
            >
              <MainCard
                content={false}
                style={{
                  border: '1px solid grey'
                }}
                sx={{
                  bgcolor: 'dark.main',
                  pt: 2,
                  pl: 2,
                  borderRadius: '10px',
                  transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.shorter + 200
                  })
                }}
              >
                <Grid container spacing={3} borderRadius={3} sx={{ minHeight: '65vh' }}>
                  <Grid item xs={12} sx={{ bgcolor: theme.palette.background.paper }}>
                    <SimpleBar
                      sx={{
                        overflowX: 'hidden',
                        height: '62vh',
                        minHeight: 240
                      }}
                    >
                      <Box sx={{ pl: 1, pr: 3 }}>
                        <ChatHistory theme={theme} user={user} data={data} />
                      </Box>
                    </SimpleBar>
                  </Grid>
                  <Grid item xs={12} sx={{}}>
                    <Stack>
                      <TextField
                        inputRef={textInput}
                        fullWidth
                        multiline
                        rows={2}
                        placeholder="Your Message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value.length <= 1 ? e.target.value.trim() : e.target.value)}
                        onKeyPress={handleEnter}
                        variant="standard"
                      />
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row" sx={{}}>
                          <>
                            <IconButton
                              ref={anchorElEmoji}
                              aria-describedby={emojiId}
                              onClick={handleOnEmojiButtonClick}
                              sx={{ opacity: 0.5 }}
                              size="medium"
                              color="secondary"
                            >
                              <SmileOutlined />
                            </IconButton>
                            <Popper
                              id={emojiId}
                              open={emojiOpen}
                              anchorEl={anchorElEmoji}
                              disablePortal
                              style={{ zIndex: 1200 }}
                              popperOptions={{
                                modifiers: [
                                  {
                                    name: 'offset',
                                    options: {
                                      offset: [-20, 125]
                                    }
                                  }
                                ]
                              }}
                            >
                              <ClickAwayListener onClickAway={handleCloseEmoji}>
                                <MainCard elevation={8} content={false}>
                                  <EmojiPicker onEmojiClick={onEmojiClick} defaultSkinTone={SkinTones.DARK} autoFocusSearch={false} />
                                </MainCard>
                              </ClickAwayListener>
                            </Popper>
                          </>
                          <IconButton sx={{ opacity: 0.5 }} size="medium" color="secondary">
                            <PaperClipOutlined />
                          </IconButton>
                          <IconButton sx={{ opacity: 0.5 }} size="medium" color="secondary">
                            <PictureOutlined />
                          </IconButton>
                          <IconButton sx={{ opacity: 0.5 }} size="medium" color="secondary">
                            <SoundOutlined />
                          </IconButton>
                        </Stack>
                        <IconButton color="primary" onClick={handleOnSend} size="large" sx={{ mr: 1.5 }}>
                          <SendOutlined />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              xl={3}
              sx={{ bgcolor: theme.palette.grey[800], overflow: 'hidden', display: emailDetails ? 'flex' : 'none' }}
            >
              <Collapse orientation="horizontal" in={emailDetails && !matchDownMD}>
                <UserDetails user={user} onClose={handleUserChange} />
              </Collapse>
            </Grid>
            <Dialog TransitionComponent={PopupTransition} onClose={handleUserChange} open={matchDownMD && emailDetails} scroll="body">
              <UserDetails user={user} onClose={handleUserChange} />
            </Dialog>
          </Grid>
        </Main>
      </Stack>
    </>
  );
};
export default Chat;
