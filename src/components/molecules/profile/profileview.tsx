import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import Avatar from 'components/@extended/Avatar';

const ProfileView = (props: any) => {
    return (
        <Card sx={{ margin: '40px 0' }}>
            <CardContent>
                <Grid container>
                    <Grid item xs={12} sx={{ padding: '20px', display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', direction: 'row', alignItems: 'center' }}>
                            <Avatar alt="avatar" src={props.item.avatar} sx={{ minHeight: '10vh', minWidth: '10vh' }} />
                            <Typography sx={{ margin: '0 40px 0', fontSize: '32pt', color: '#1212aa'}}>{props.item.name}</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '18pt', color: '#555555' }}>Mode: {props.item.mode}</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ padding: '40px', display: 'flex', direction: 'row', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography sx={{ fontSize: '18pt' }}>Date</Typography>
                            <Typography sx={{ fontSize: '18pt', fontWeight: 'bold'}}>{props.item.date}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: '18pt' }}>Start Time:</Typography>
                            <Typography sx={{ fontSize: '18pt', fontWeight: 'bold' }}>{props.item.startTime}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: '18pt' }}>End Time:</Typography>
                            <Typography sx={{ fontSize: '18pt', fontWeight: 'bold' }}>{props.item.endTime}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                            <Typography sx={{ fontSize: '18pt' }}>Duration:</Typography>
                            <Typography sx={{ fontSize: '18pt', fontWeight: 'bold' }}>{props.item.duration}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ProfileView;