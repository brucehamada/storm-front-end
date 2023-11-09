// material-ui

import { Grid, Theme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useContext } from 'react';

// project import

import Search from './Search';
import Notification from './Notification';
import Home from './Home';
import MyJobs from './MyJobs';
import Experts from './Experts';
import FindJobs from './FindJobs';
import Jobs from './Jobs';
import Messages from './Messages';
import Meetings from './Meetings';
import Earnings from './Earnings';
import Profile from './Profile';
import MobileSection from './MobileSection';

import Logo from 'assets/images/auth/DVS.png';

import JWTContext from 'contexts/JWTContext';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = (props: any) => {
  const userContext = useContext(JWTContext);
  const type = userContext?.user?.type;
  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  return (
    <Grid container spacing={3} style={{ height: '6rem' }}>
      <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        <Grid container spacing={2}>
          <Grid item xs={1} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="logo" height="65rem" style={{ marginLeft: '1rem' }} />
          </Grid>
          <Grid item xs={11} style={{ display: 'flex', paddingLeft: '3rem' }}>
            {!downLG && <Search />}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        <Grid container alignItems="center">
          <Grid container item xs={10} justifyContent="flex-end">
            <Grid item xs={12} sm={6} lg={2} xl={2} md={4}>
              <Home />
            </Grid>
            <Grid item xs={12} sm={6} lg={2} xl={2} md={4}>
              {type === 'customer' ? <Jobs /> : <MyJobs />}
            </Grid>
            <Grid item xs={12} sm={6} lg={2} xl={2} md={4}>
              {type === 'customer' ? <Experts /> : <FindJobs />}
            </Grid>
            <Grid item xs={12} sm={6} lg={2} xl={2} md={4}>
              <Messages />
            </Grid>
            <Grid item xs={12} sm={6} lg={2} xl={2} md={4}>
              <Meetings />
            </Grid>
            {type !== 'customer' && (
              <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                <Earnings />
              </Grid>
            )}
          </Grid>
          <Grid container item xs={2}>
            <Grid item xs={5} style={{ display: 'flex', alignItems: 'center' }}>
              <Notification />
            </Grid>
            <Grid item xs={7}>
              {!downLG && <Profile />}
              {downLG && <MobileSection />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderContent;
