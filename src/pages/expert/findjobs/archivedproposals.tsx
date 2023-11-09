// project import
import MainCard from 'components/MainCard';
import { Grid, Stack, Typography } from '@mui/material';
import FindJobsCard from 'components/cards/findjobscard';
import { useSelector } from 'store';
// ==============================|| SAMPLE PAGE ||============================== //
const ArchivedPropoals = () => {
  const archievedProposals = useSelector((state) => state.jobs.activeJobs);
  return (
    <Grid item lg={9} xl={10}>
      <Grid item xs={12} lg={12}>
        <MainCard>
          <Typography variant="h2" marginBottom={'1.2rem'} marginTop={'1.5rem'}>
            Archived Proposals({archievedProposals?.length})
          </Typography>
          <Stack spacing={2} sx={{ minHegith: '70vh' }}>
            {archievedProposals?.length !== undefined ? (
              archievedProposals?.map((item: any) => <FindJobsCard job={item} />)
            ) : (
              <Typography>No Search Result</Typography>
            )}
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ArchivedPropoals;
