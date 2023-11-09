import { useCallback, useEffect, useRef } from 'react';

// material-ui
import { Card, CardContent, Grid, Stack, Theme, Typography } from '@mui/material';

// project imports
import UserAvatar from './UserAvatar';

// types
import { ThemeMode } from 'types/config';
import { UserProfile } from 'types/user-profile';
import { History } from 'types/chat';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';

// ==============================|| CHAT MESSAGE HISTORY ||============================== //

interface ChatHistoryProps {
  data: History[];
  theme: Theme;
  user: UserProfile;
}

const ChatHistory = ({ data, theme, user }: ChatHistoryProps) => {
  // scroll to bottom when new message is sent or received
  const userContext = useContext(JWTContext);
  const wrapper = useRef(document.createElement('div'));
  const el = wrapper.current;
  const scrollToBottom = useCallback(() => {
    el.scrollIntoView(false);
  }, [el]);

  useEffect(() => {
    scrollToBottom();
  }, [data?.length, scrollToBottom]);

  return (
    <Grid container spacing={2.5} ref={wrapper}>
      {data?.map((history, index) => (
        <Grid item xs={12} key={index}>
          {history.from === userContext?.user?.email ? (
            <Stack spacing={1.25} direction="row">
              <Grid container spacing={1} justifyContent="flex-end">
                <Grid item xs={2} md={3} xl={4} />

                <Grid item xs={10} md={9} xl={8}>
                  <Stack direction="row" justifyContent="flex-end" alignItems="flex-start">
                    <Card
                      sx={{
                        display: 'inline-block',
                        float: 'right',
                        bgcolor: theme.palette.primary.lighter,
                        boxShadow: 'none',
                        ml: 1
                      }}
                    >
                      <CardContent sx={{ p: 1, pb: '8px !important', width: 'fit-content', ml: 'auto' }}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography variant="h6" color="black" sx={{ overflowWrap: 'anywhere' }}>
                              {history.text}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="right" variant="subtitle2" color="textSecondary">
                    {new Date(history.createdAt as string).toLocaleString([], {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </Typography>
                </Grid>
              </Grid>
              <UserAvatar user={{ online_status: 'available', avatar: 'avatar-1.png', name: 'User 1' }} />
            </Stack>
          ) : (
            <Stack direction="row" spacing={1.25} alignItems="flext-start">
              <UserAvatar user={{ online_status: user.online_status, avatar: user.avatar, name: user.name }} />

              <Grid container>
                <Grid item xs={12} sm={7}>
                  <Card
                    sx={{
                      display: 'inline-block',
                      float: 'left',
                      bgcolor: theme.palette.mode === ThemeMode.DARK ? 'grey.300' : 'grey.0',
                      boxShadow: 'none'
                    }}
                  >
                    <CardContent sx={{ p: 1, pb: '8px !important' }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Typography
                            variant="h6"
                            color="black"
                            sx={{
                              overflowWrap: 'anywhere',
                              backgroundColor: theme.palette.secondary.light,
                              padding: '5px',
                              borderRadius: '5px'
                            }}
                          >
                            {history.text}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <Typography align="left" variant="subtitle2" color="textSecondary">
                    {new Date(history.createdAt as string).toLocaleString([], {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default ChatHistory;
