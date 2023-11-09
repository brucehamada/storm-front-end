import { Card, Grid, Typography ,Button} from '@mui/material';
import MainCard from 'components/MainCard';
import LinearProgress from '@mui/material/LinearProgress';
import useTheme from '@mui/system/useTheme';

const JobOverviewCard = (props: any) => {
    const theme = useTheme();
    return (
        <>
        <Card sx={{
            height:'100%', 
            minHeight:'80vh', 
            marginLeft:'40px'
            }}>
            <Grid xs={12}>
                <Typography variant='h2'sx={{padding:'20px'}}>
                    Job Overview
                </Typography>
            </Grid>
            <Grid container xs={12} sx={{paddingBottom:'20px'}}>
                <Grid xs={9}>
                <MainCard sx={{ height: '100%',margin:'20px'}}>
                    <Typography>
                        Description
                    </Typography>
                    <Typography>
                        {props.item.description}
                    </Typography>
                    <Grid container xs={12} sx={{paddingTop:'10vh'}}>
                        <Grid xs={3}>
                            <Typography>
                                Duration
                            </Typography>
                            <Typography>
                            {props.item.Duration}
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <Typography>
                                Start Date
                            </Typography>
                            <Typography>
                            {props.item.StartDate}
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <Typography>
                                Engagement Type
                            </Typography>
                            <Typography>
                            {props.item.EngagementType}
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <Typography>
                                Amount
                            </Typography>
                            <Typography>
                            {props.item.Amount}
                            </Typography>
                        </Grid>
                    </Grid>
                </MainCard>
                </Grid>
                <Grid xs={3}>
                <MainCard sx={{ height: '100%', minHeight:'30vh',margin:'20px'}}>
                    <Typography>
                        Client Information
                    </Typography>
                    <Typography variant='h5'>
                        {props.item.ClientInformation[0]}
                    </Typography>
                    <Typography variant='h5'>
                        {props.item.ClientInformation[1]}
                    </Typography>
                    <Typography variant='h5'>
                        {props.item.ClientInformation[2]}
                    </Typography>
                    
                    <Grid container xs={12} sx={{marginTop:'50px'}}>
                    <Grid container xs={12}>
                        <Button sx={{textAlign:'left'}}>
                            <Typography variant='h4'sx=
                            {{color:theme.palette.primary.darker}}>
                                View Original Offer
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid container xs={12}>
                    <Button sx={{textAlign:'left'}}>
                            <Typography variant='h4'sx=
                            {{color:theme.palette.primary.darker}}>
                                View Original Proposal
                            </Typography>
                        </Button>
                    </Grid>
                    </Grid>
                </MainCard>
                </Grid>
            </Grid>
            <Grid container xs={12} sx={{paddingBottom:'3vh'}}>
            <Grid xs={9}>
                <MainCard sx={{ height: '100%' , minHeight:'50vh',margin:'20px'}}>
                    <Typography variant='h3' >
                        Recent Activities
                    </Typography>
                    <Grid container xs={12} sx={{paddingTop:'3vh'}}>
                        <Grid xs={3}>
                            <Typography sx={{marginBottom:'10pt'}}>
                                Date
                            </Typography>
                            <Typography sx={{marginBottom:'10pt'}}>
                                {props.item.Date[0]}
                            </Typography>
                            <Typography sx={{marginBottom:'10pt'}}>
                                {props.item.Date[1]}
                            </Typography>
                        </Grid>
                        <Grid xs={9}>
                            <Typography sx={{marginBottom:'10pt'}}>
                                Description
                            </Typography>
                            <Typography sx={{marginBottom:'10pt'}}>
                                {props.item.Description[0]}
                            </Typography>
                            <Typography sx={{marginBottom:'10pt'}}>
                                {props.item.Description[1]}
                            </Typography>
                        </Grid>
                    </Grid>
                </MainCard>
                </Grid>
                <Grid xs={3}>
                <MainCard sx={{ height: '100%' , minHeight:'50vh',margin:'20px'}}>
                    <Typography variant='h3' sx={{marginBottom:'10pt'}}>
                        Earnings
                    </Typography>
                    <Typography variant='h3' sx={{marginBottom:'10pt'}}>
                        $1000.00
                    </Typography>
                    <LinearProgress variant="determinate" value={50} sx={{marginBottom:'10pt'}}/>
                    <Typography sx={{marginBottom:'10pt'}}>
                        4:00 Hours
                    </Typography>
                    <Grid xs={12}>
                        <Button variant="outlined">
                        View Timesheet
                        </Button>
                    </Grid>
                    

                </MainCard>
                </Grid>
                
                
            </Grid>
        </Card>
        </>

    );
}
export default JobOverviewCard;