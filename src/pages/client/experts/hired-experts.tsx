import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack, Typography, Button, Grid } from '@mui/material';
import { BsChatDots } from 'react-icons/bs';
import DuoSharpIcon from '@mui/icons-material/DuoSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from 'components/@extended/Avatar';
import useTheme from '@mui/system/useTheme';
import IconButton from 'components/@extended/IconButton';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dispatch, useSelector } from 'store';
import { insertChat } from 'store/reducers/chat';
import JWTContext from 'contexts/JWTContext';
import { openSnackbar } from 'store/reducers/snackbar';
import { getHiredExperts } from 'store/reducers/experts';

const handleBackClick = () => {
  window.history.back();
};

export const AccessibleTable = () => {
  const userContext = useContext(JWTContext);
  const theme = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getHiredExperts());
  }, []);
  const rows = useSelector((state) => state.experts.hiredExperts);
  const handleMeetingClick = (email: string) => {
    navigate('/meetings', { state: { to: email } });
  };
  const handleMessageClick = (email: string) => {
    dispatch(insertChat({ type: 'general', to: email, text: 'hi' }));
    navigate('/messages');
  };
  const handleMoreClick = () => {
    navigate('/client/mores');
  };
  const handlePostingClick = () => {
    if ((userContext?.user?.client?.profileCompleteness ? userContext.user.client.profileCompleteness : 0) < 80) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please complete your profile to post a new Job',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: 'true'
        })
      );
    } else {
      navigate('/client/job-post-step1');
    }
  };
  return (
    <>
      <Grid container spacing={3} sx={{ padding: '10px' }}>
        <Grid item xs={12} sx={{ display: 'flex' }}>
          <Stack sx={{ display: 'inline-flex', alignItems: 'center' }} direction={'row'}>
            <Button onClick={handleBackClick}>
              <ArrowBackIcon sx={{ color: theme.palette.primary.darker, width: '50px', height: '50px' }} />
            </Button>
            <Typography variant="h5" sx={{ color: theme.palette.secondary.dark }}>
              Experts/Hired
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3">Hired Experts</Typography>
          <Button
            style={{ color: 'white', backgroundColor: theme.palette.primary.darker, width: '10%', height: '5vh', borderRadius: '5px' }}
            onClick={handlePostingClick}
          >
            Post a New Job
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }}>Expert Name</TableCell>
                  <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }}>
                    Project
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }} align="left">
                    Contract Type
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }} align="left">
                    Location
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }} align="left">
                    Rate
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }} align="left">
                    No. of Meeting
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }} align="left">
                    Next Meeting
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }} align="left">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row) => (
                  <TableRow key={row.expertName}>
                    <TableCell align="left">
                      <Stack direction={'row'}>
                        <Avatar alt="avatar" src={row.avatar} />
                        <Link
                          to={'/client/hired-experts-personal'}
                          state={{ expertName: row.expertName, expertEmail: row.expertEmail }}
                          style={{ textDecoration: 'none', fontSize: '1.5rem', color: theme.palette.primary.darker }}
                        >
                          {row.expertName}
                        </Link>
                      </Stack>
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }}>
                      {row.titleName}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }}>
                      {row.contractType}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }}>
                      {row.location}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }}>
                      {row.rate}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }}>
                      {row.noOfMeeting}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }}>
                      {row.nextMeeting}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }}>
                      <Stack direction={'row'} spacing={2}>
                        <IconButton onClick={() => handleMeetingClick(row.expertName)}>
                          <DuoSharpIcon sx={{ color: theme.palette.primary.darker }} />
                        </IconButton>
                        <IconButton onClick={() => handleMessageClick(row.expertEmail)}>
                          <BsChatDots style={{ color: theme.palette.primary.darker }} />
                        </IconButton>
                        <IconButton onClick={handleMoreClick}>
                          <MoreVertSharpIcon sx={{ color: theme.palette.primary.darker }} />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default AccessibleTable;
