import { Box, Button } from '@mui/material'
import useTheme from '@mui/system/useTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProfileView from 'components/molecules/profile/profileview';
import ProjectView from 'components/molecules/project/projectview';

const ProfileItem = {
    avatar: 'assets/images/avatar1.png',
    name: 'John Smith',
    date: '22nd July 2023',
    startTime: '3:05 PM',
    endTime: '4:05 PM',
    duration: '60 Minutes',
    mode: 'Video'
}

const ProjectItem = {
    title: 'Agile Development',
    startDate: '21st June 2023',
    meetingAgenda: [
        'Lorem ipsum dolor sit amet consectetur. Nec lacus amet nam adipiscing non. Integer nam a sit mi est. Ut nunc varius elementum',
        'Lorem ipsum dolor sit amet consectetur. Nec lacus amet nam adipiscing non. Integer nam a sit mi est. Ut nunc varius elementum',
        'Lorem ipsum dolor sit amet consectetur. Nec lacus amet nam adipiscing non. Integer nam a sit mi est. Ut nunc varius elementum'
    ],
    yourReview: {
        rating: 4,
        text: ''
    },
    expertReview: {
        rating: 3.4,
        text: 'Lorem ipsum dolor sit amet consectetur. Nec lacus amet nam adipiscing non. Integer nam a sit mi est. Ut nunc varius elementum'
    }
}

const handleBackClick = () => {

}

const Profile = () => {
    const theme = useTheme();
    return (
        <Box sx={{ padding: '5vw' }}>
            <Button onClick={handleBackClick}>
                <ArrowBackIcon sx={{ color: theme.palette.primary.darker, width: '50px', height: '50px' }} />
            </Button>
            <ProfileView item={ProfileItem} />
            <ProjectView item={ProjectItem} />
        </Box>
    )
}

export default Profile;