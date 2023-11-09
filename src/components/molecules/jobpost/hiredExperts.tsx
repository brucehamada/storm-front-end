import { Typography, Stack } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import IconButton from 'components/@extended/IconButton';
import { BsChatDots } from 'react-icons/bs';
import DuoSharpIcon from '@mui/icons-material/DuoSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { useTheme } from '@mui/system';
import Avatar from 'components/@extended/Avatar';
import { dispatch } from 'store';
import { insertChat } from 'store/reducers/chat';
const HiredExpert = (props: any) => {
  const navigate = useNavigate();
  const theme = useTheme();
 
  const handleMeetingClick = () => {
    navigate('/meetings', { state: { to: props.ExpertItem.expertEmail } });
  };

  const handleMessageClick = () => {
    dispatch(insertChat({ type: 'general', to: props.ExpertItem.expertEmail, text: 'hi' }));
    navigate('/messages');
  };

  const handleMoreClick = () => {};
  return (
    <>
      {props.ExpertItem.expertName.length !== 0 && (
        <TableRow>
          <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
            <Stack direction={'row'} sx={{ display: 'inline-flex', alignItems: 'center' }}>
              {<Avatar src={props.ExpertItem.avatar} />}
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.darker,
                  fontWeight: 'bold'
                }}
              >
                {props.ExpertItem.expertName[0]}
              </Typography>
            </Stack>
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.ExpertItem.contractType}
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.ExpertItem.location[0]}
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.ExpertItem.rate[0]}
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.ExpertItem.noOfMeetings ? props.ExpertItem.noOfMeeting : 0}
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.ExpertItem.nextMeeting ? props.ExpertItem.nextMeeting : 0}
          </TableCell>
          <TableCell align="left">
            {
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
            }
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
export default HiredExpert;
