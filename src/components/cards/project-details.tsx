import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import useTheme from '@mui/system/useTheme';
const ProjectDetails = (props: any) => {
  const theme = useTheme();
  const handleEditClick = () => {
    window.history.back();
  };
  return (
    <Card sx={{ maxWidth: '17vw', minHeight: '57vh' }}>
      <CardContent>
        <CardActions
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.primary.lighter,
            padding: '20px',
            borderRadius: '5px',
            minHeight: '10vh'
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.darker,
              borderRadius: '20px',
              paddingLeft: '30px',
              paddingRight: '30px',
              marginTop: '1vh'
            }}
            onClick={handleEditClick}
          >
            Edit Project
          </Button>
        </CardActions>
        <br />
        <Typography variant="body2" color="text.secondary">
          Job View
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.jobView}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          Job Type
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.type}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          Committment
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.weeklyCommitment}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          Duration
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.duration}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          Budget Range
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.budgetRange?.[0]}-{props.budgetRange?.[1]}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ProjectDetails;
