import NotesCard from 'components/molecules/expert/notescard';
import { Typography, Grid, Button, Card, Stack, Divider } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const NotesCardItem = [
    {
        image: '',
        text: 'Lorem Ipsum fsdf',
        date: '30th Apr 2023'
    },
    {
        image: '',
        text: 'Lorem Ipsum fsdf',
        date: '29th Apr 2023'
    },
    {
        image: '',
        text: 'Lorem Ipsum fsdf',
        date: '28th Apr 2023'
    }
]

const ExpertNotes = () => {
       
        const theme = useTheme();
    const navigate = useNavigate();

    const handleBackClick = () => {
        window.history.back();
    };
    const handleTimeTrackerClick = () => {
        navigate('/expert/time-tracker')
    }
    const handleJobOverviewClick = () => {
        navigate('/expert/job-overview');
    }
    const handleMeetinsClick = () => {
        navigate('/expert/meetings')
    }
    const handleMilestonesClick = () => {
        navigate('expert/expert-milestones')
    }
    const handleNotesClick = () => {
        navigate('/expert/expert-notes')
    }
    const handleFeedbackClick = () => {
        navigate('expert/expert-feedback')
    }

    const handleHiringContractClick = () => {
        navigate('expert/expert-hiring-contract')
    }
    return (
        <Grid container spacing={3} sx={{ padding: '10px' }}>
            <Grid item xs={12} sx={{ display: 'flex' }}>
                <Stack sx={{ display: 'inline-flex', alignItems: 'center' }} direction={'row'}>
                    <Button onClick={handleBackClick}>
                        <ArrowBackIcon sx={{ color: theme.palette.primary.darker }} />
                    </Button>
                    <Typography variant="body2" sx={{ color: theme.palette.secondary }}>
                        Jobs/Active/JobOverview
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left' }}>
                <Card sx={{ height: '100%', minHeight: '80vh', width: '13vw' }}>
                    <Grid xs={12} sx={{ margin: '20px' }}>
                        <Button onClick={handleTimeTrackerClick} sx={{ textAlign: 'left' }}>
                            <Typography sx={{ color: theme.palette.secondary.darker }}>
                                Time Tracker
                            </Typography>

                        </Button>
                        <Divider />
                    </Grid>
                    <Grid xs={12} sx={{ margin: '20px' }}>
                        <Button onClick={handleJobOverviewClick} sx={{ textAlign: 'left' }}>
                            <Typography sx={{ color: theme.palette.secondary.darker }}>
                                Job Overview
                            </Typography>
                        </Button>
                        <Divider />
                    </Grid>
                    <Grid xs={12} sx={{ margin: '20px' }}>
                        <Button onClick={handleMeetinsClick} sx={{ textAlign: 'left' }}>
                            <Typography sx={{ color: theme.palette.secondary.darker }}>
                                Meetings
                            </Typography>
                        </Button>
                        <Divider />
                    </Grid>
                    <Grid xs={12} sx={{ margin: '20px' }}>
                        <Button onClick={handleMilestonesClick} sx={{ textAlign: 'left' }}>
                            <Typography sx={{ color: theme.palette.secondary.darker }}>
                                Milestones
                            </Typography>
                        </Button>
                        <Divider />
                    </Grid>
                    <Grid xs={12} sx={{ margin: '20px' }}>
                        <Button onClick={handleNotesClick} sx={{ textAlign: 'left' }}>
                            <Typography sx={{ color: theme.palette.secondary.darker }}>
                                Notes
                            </Typography>
                        </Button>
                        <Divider />
                    </Grid>
                    <Grid xs={12} sx={{ margin: '20px' }}>
                        <Button onClick={handleFeedbackClick} sx={{ textAlign: 'left' }}>
                            <Typography sx={{ color: theme.palette.secondary.darker }}>
                                Feedback
                            </Typography>
                        </Button>
                        <Divider />
                    </Grid>
                    <Grid xs={12} sx={{ margin: '20px' }}>
                        <Button onClick={handleHiringContractClick} sx={{ textAlign: 'left' }}>
                            <Typography sx={{ color: theme.palette.secondary.darker }}>
                                Hiring Contract
                            </Typography>
                        </Button>
                        <Divider />
                    </Grid>

                </Card>
                <Grid item xs={12}>

                    <NotesCard item={NotesCardItem} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ExpertNotes;