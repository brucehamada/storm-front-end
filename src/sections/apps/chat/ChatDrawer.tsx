// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// project imports
import UserList from './UserList';

import MainCard from 'components/MainCard';
import SimpleBar from 'components/third-party/SimpleBar';

// types
import { UserProfile } from 'types/user-profile';

// ==============================|| CHAT DRAWER ||============================== //

interface ChatDrawerProps {
  handleDrawerOpen: () => void;
  openChatDrawer: boolean | undefined;
  setUser: (u: UserProfile) => void;
}

function ChatDrawer({ handleDrawerOpen, openChatDrawer, setUser }: ChatDrawerProps) {
  const theme = useTheme();

  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));

  // show menu to set current user status
  return (
    <Drawer
      sx={{
        width: 320,
        border: matchDownLG ? 'none' : '1px solid grey',
        borderRadius: matchDownLG ? 0 : '10px',
        overflow: 'auto',
        flexShrink: 0,
        maginRight: '2vw',
        zIndex: { xs: 1100, lg: 0 },
        '& .MuiDrawer-paper': {
          height: matchDownLG ? 'calc(100% - 60px)' : 'auto',
          top: matchDownLG ? '60px' : 'auto',
          width: 320,
          boxSizing: 'border-box',
          position: 'relative',
          border: 'none'
        }
      }}
      variant={matchDownLG ? 'temporary' : 'persistent'}
      anchor="left"
      open={openChatDrawer}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerOpen}
    >
      <MainCard>
        <SimpleBar
          sx={{
            overflowX: 'hidden',
            height: '70vh'
          }}
        >
          <Box sx={{ p: 3, pt: 0 }}>
            <UserList setUser={setUser} />
          </Box>
        </SimpleBar>
      </MainCard>
    </Drawer>
  );
}

export default ChatDrawer;
