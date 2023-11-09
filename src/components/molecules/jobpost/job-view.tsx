import { Grid, Typography } from '@mui/material';
import JobCard from './job-card';
import { JobDetail } from 'types/jobsinfo';

const JobView = ({ JobItems }: { JobItems: JobDetail[] }) => {
  return (
    <Grid container spacing={5} sx={{ alignItems: 'center' }}>
      {JobItems?.length > 0 &&
        JobItems?.map((taskItem, index) => (
          <Grid item xs={12} key={index} sx={{ alignItems: 'center' }}>
            <JobCard
              _id={taskItem._id}
              title={taskItem.title}
              type={taskItem.visibility}
              liveFrom={new Date(taskItem.createdAt)
                .toLocaleString('en-US', { month: 'long', day: 'numeric' })
                .replace(/\d+(?=\s)/, (day) => {
                  const suffixes = ['th', 'st', 'nd', 'rd'];
                  const relevantDigits = parseInt(day) % 100;
                  return day + (suffixes[(relevantDigits - 20) % 10] || suffixes[relevantDigits] || suffixes[0]);
                })}
              proposals={taskItem.proposals?.length}
              invites={taskItem.invitations?.length}
              meetings={taskItem.questions?.length}
              category={taskItem?.type}
            />
          </Grid>
        ))}
      <Grid item xs={12}>
        {JobItems.length === 0 && <Typography sx={{ display: 'flex', justifyContent: 'center' }}>No Active Jobs</Typography>}
      </Grid>
    </Grid>
  );
};
export default JobView;
