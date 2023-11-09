import { Typography, Grid, Button, Stack, Card, CardContent } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import { createJob } from 'store/reducers/jobs';
import ProjectDetails from 'components/cards/project-details';
import { useDispatch } from 'store';
const Job_Post_Publish = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleBack = () => {
    window.history.back();
  };
  const handleClick = () => {
    try {
      dispatch(createJob(location.state.job));
      navigate('/client/job-post-invitation');
    } catch (error) {
      console.log(error);
    }
  };
  const job = location.state.job;
  let areasOfExpertise = job.skills?.join(',');
  let industries = job.industry?.join(',');
  let toolsOfExpertise = job.tools?.join(',');
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ display: 'inline-flex', alignItems: 'center' }}>
          <Button onClick={handleBack}>
            <ArrowBackIcon />
          </Button>
          <Typography variant="body1" sx={{ color: theme.palette.secondary }}>
            Experts/Hired/Post a New Requirement
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h2">Post a New Requirement</Typography>
          <Stack spacing={1} direction={'column'}>
            <Typography variant="body2">Step 4/4</Typography>
            <Typography variant="h3">Review and Publish</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ width: '100%' }}>
            <CardContent>
              <Grid container spacing={5} sx={{ marginLeft: '1px' }}>
                <Grid item xs={9}>
                  <Grid container>
                    <Grid item xs={12} sx={{ marginTop: '3vh' }}>
                      <Typography variant="body1" color={'secondary'}>
                        Project Name
                      </Typography>
                      <Typography variant="h2" sx={{ marginBottom: '3vh' }}>
                        {location.state.job.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" color={'secondary'}>
                        Description
                      </Typography>
                      <Typography variant="body1" sx={{ minHeight: '30vh' }}>
                        {location.state.job.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ minHeight: '8vh' }}>
                      <Typography variant="body1">Area/Areas of Expertise</Typography>
                      <Typography variant="body1">{areasOfExpertise}</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ minHeight: '8vh' }}>
                      <Typography variant="body1">Industry of Expertise</Typography>
                      <Typography variant="body1">{industries}</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ minHeight: '8vh' }}>
                      <Typography variant="body1">Tools</Typography>
                      <Typography variant="body1">{toolsOfExpertise}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <ProjectDetails
                    jobView={location.state.job.visibility}
                    type={location.state.job.type}
                    weeklyCommitment={location.state.job.weeklyCommitment}
                    duration={location.state.job.duration}
                    budgetMin={location.state.job.budgetRange[0]}
                    budgetMax={location.state.job.budgetRange[1]}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    onClick={handleClick}
                    style={{ color: 'white', backgroundColor: theme.palette.primary.darker, width: '40%', marginBottom: '1vh' }}
                  >
                    Publish
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Job_Post_Publish;
