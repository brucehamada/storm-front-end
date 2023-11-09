import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import Avatar from 'components/@extended/Avatar';

const lastViewedBy = (props: any) => {
  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid lightgrey', borderRadius: '12px', alignItems: 'start' }}>
        <Typography variant="h5" fontWeight={'bold'} paddingLeft={3} paddingTop={1} paddingBottom={1}>
          Last Viewed by
        </Typography>
        <Grid
          container
          spacing={2}
          style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', margin: '0px 0px 10px 0px' }}
        >
          <Grid
            item
            xs={3}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid lightgrey',
              borderRadius: '8px',
              padding: '8px 0px 8px 0px'
            }}
          >
            <Box sx={{ width: '70%', aspectRatio: '1', minWidth: '3vw', minHeight: '3vw' }}>
              <Avatar src={props.avatar} sx={{ width: '100%', height: '100%', marginTop: '1vh' }} />
            </Box>
            <Typography variant="body2" fontWeight="bold" paddingTop={5} alignContent={'center'}>
              John Doe
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default lastViewedBy;
