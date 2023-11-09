import { Typography, Stack, Chip } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/system';
import { dispatch } from 'store';
const Proposals = (props: any) => {
  const { handleClick } = props;
  const navigate = useNavigate();
  const theme = useTheme();
  const handleRowClick = () => {
    navigate('/client/job-detail', {
      state: {
        id: props.proposalItem?._id,
        expertEmail: props.proposalItem?.expertEmail?.[0],
        expertName: props.proposalItem?.name?.[0],
        avatar: props.proposalItem?.avatar,
        title: props.proposalItem?.position?.[0],
        experience: props.proposalItem?.experience,
        rate: props.proposalItem?.rate,
        response: props.proposalItem?.relevance?.[0],
        location: props.proposalItem?.location?.[0],
        coverLetter: props.proposalItem?.coverLetter,
        projectTerms: props.proposalItem?.projectTerms,
        milestone: props.proposalItem?.milestone
      }
    });
    dispatch(handleClick(true));
  };

  return (
    <>
      {props.proposalItem.name.length !== 0 && (
        <TableRow onClick={handleRowClick}>
          <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
            <Stack direction={'row'} sx={{ display: 'inline-flex', alignItems: 'center' }}>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.darker,
                  fontWeight: 'bold'
                }}
              >
                {props.proposalItem.name.length !== 0 && props.proposalItem.name?.[0]}
              </Typography>
            </Stack>
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.proposalItem.name.length !== 0 && props.proposalItem?.hourlyRate?.[0]}
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.proposalItem.relevance.length !== 0 && props.proposalItem?.relevance?.[0]}
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.proposalItem.companyName.length !== 0 && props.proposalItem?.companyName?.[0]}
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.proposalItem.position.length !== 0 && props.proposalItem?.position?.[0]}
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.proposalItem.name.length !== 0 && props.proposalItem?.experience}
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.proposalItem.location.length !== 0 && props.proposalItem?.location?.[0]}
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.proposalItem.availability.length !== 0 && props.proposalItem?.availability?.[0]}
          </TableCell>
          <TableCell align="left" sx={{ fontSize: '14pt', textTransform: 'none', fontWeight: 'light' }}>
            {props.proposalItem?.status && (
              <Chip sx={{ backgroundColor: theme.palette.primary.light }} label={props.proposalItem?.status} />
            )}
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
export default Proposals;
