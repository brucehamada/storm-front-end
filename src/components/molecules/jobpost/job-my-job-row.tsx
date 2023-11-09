import { Typography, Stack } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import IconButton from 'components/@extended/IconButton';
import { BsChatDots } from 'react-icons/bs';
import DuoSharpIcon from '@mui/icons-material/DuoSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { useTheme } from '@mui/system';
import { insertChat } from 'store/reducers/chat';
import { dispatch } from 'store';
const JobMyJobRow = (props: any) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleRowClick = () => {
    navigate('/expert/job-overview', { state: { id: props.MyJobItem._id } });

  };

  const handleMeetingClick = () => {
    navigate('/meetings', { state: { to: props.MyJobItem.expertEmail } });
  };
  const handleMessageClick = () => {
    dispatch(insertChat({ type: 'general', to: props.MyJobItem.expertEmail, text: 'hi' }));
    navigate('/messages');
  };
  const handleMoreClick = () => {};
  return (
    <TableRow onClick={handleRowClick}>
      <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
        <Stack>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.primary.darker,
              fontWeight: 'bold'
            }}
          >
            {props.MyJobItem.fullName}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.secondary.dark
            }}
          >
            {props.MyJobItem.organization}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
        {props.MyJobItem.engagement}
      </TableCell>
      <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
        {props.MyJobItem.country}
      </TableCell>
      <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
        {props.MyJobItem.cost}
      </TableCell>
      <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
        {props.MyJobItem.numberOfMeetings}
      </TableCell>
      <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
        {props.MyJobItem.nextMeeting}
      </TableCell>
      <TableCell align="left">
        <Stack direction={'row'} spacing={2}>
          <IconButton onClick={handleMeetingClick}>
            <DuoSharpIcon sx={{ color: theme.palette.primary.darker }} />
          </IconButton>
          <IconButton onClick={handleMessageClick}>
            <BsChatDots style={{ color: theme.palette.primary.darker }} />
          </IconButton>
          <IconButton onClick={handleMoreClick}>
            <MoreVertSharpIcon sx={{ color: theme.palette.primary.darker }} />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  );
};
export default JobMyJobRow;
