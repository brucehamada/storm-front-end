import Meetingscard from "components/molecules/expert/Meetingscard";
import{Grid} from '@mui/material';

const meetingcontent = {
    Date:'30th Apr 2023',
    StartTime:'3:00 PM',
    EndTime:'4:00 PM',
    Duration:'60 Minutes',
    Mode:'image',
    AmountPaid:'$200',
    MeetingAgenda:'Lorem ipsum dolor sitamet consectetur',   
}

const Meetings = ()=>{
    return(
        <Grid container spacing={5}>
            <Grid item xs={12}></Grid>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={9}>
                <Meetingscard item={meetingcontent}/>
            </Grid>
        </Grid>
    )
}
export default Meetings;