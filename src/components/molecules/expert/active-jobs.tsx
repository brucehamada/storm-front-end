import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Box, Grid } from '@mui/material';
import { useRef, useState } from 'react';
import IconButton from 'components/@extended/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const ActiveJobs = (props: any) => {
  const anchorRef = useRef<any>(null);

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <Grid container spacing={3} sx={{ padding: '10px' }}>
        <Grid item xs={12} sx={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3">Active Jobs {}</Typography>
          <Box sx={{ flexShrink: 0, ml: 0.75 }}>
            <IconButton
              color="secondary"
              sx={{ color: 'text.primary', width: '100%' }}
              aria-label="open profile"
              ref={anchorRef}
              aria-controls={open ? 'profile-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Typography variant="h5">Active</Typography>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'body' }}>
                    Job Description
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'body' }} align="left">
                    Type of Engagement
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'body' }} align="left">
                    Start Date
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'body' }} align="left">
                    Price
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'body' }} align="left">
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.activeJobs?.map((row: any) => (
                  <TableRow key={row.description}>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold', color: 'darkblue' }}>
                      {row.description}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                      {row.engagement}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                      {new Date(row.startDate).toLocaleDateString('en-US', {})}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                      {row.cost}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                      <div style={{ backgroundColor: 'lightblue', display: 'flex', justifyContent: 'space-evenly' }}>active</div>
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
export default ActiveJobs;
