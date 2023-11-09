import { Card, CardContent, Typography, Grid, Stack, Button, Rating } from '@mui/material';

const ProjectView = (props: any) => {
    return (
        <Card sx={{ margin: '40px 0' }}>
            <CardContent>
                <Grid container sx={{ padding: '40px' }}>
                    <Grid item xs={12} sx={{ display: 'flex', displayDirection: 'row', justifyContent: 'space-between' }}>
                        <Stack>
                            <Typography sx={{ fontSize: '16pt', color: '#555555' }}>Project Title</Typography>
                            <Typography sx={{ fontSize: '24pt', fontWeight: 'bold', color: '#444444' }}>{props.item.title}</Typography>
                        </Stack>
                        <Stack sx={{ alignItems: 'end' }}>
                            <Typography sx={{ fontSize: '16pt', color: '#555555' }}>Start Date</Typography>
                            <Typography sx={{ fontSize: '24pt', fontWeight: 'bold', color: '#444444' }}>{props.item.startDate}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{ padding: '40px 0' }}>
                        <Typography sx={{ fontSize: '16pt', padding: '10px 0', color: '#555555' }}>Meeting Agenda</Typography>
                        <Grid item xs={12}>
                            {
                                props.item.meetingAgenda.map((agendaItem: string) => (
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: '16pt', padding: '10px 0px 10px 50px', color: '#444444' }}>
                                            {agendaItem}
                                        </Typography>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ padding: '10px 0' }}>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: '16pt', padding: '10px 0', color: '#555555' }}>Feedback and reviews</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0' }}>
                                <Typography sx={{ fontSize: '16pt', fontWeight: 'bold', color: '#555555' }}>Your Review</Typography>
                                <Stack sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Rating value={props.item.yourReview.rating} readOnly precision={0.1}/>
                                    <Typography sx={{ fontSize: '16pt', marginLeft: '20px' }}>
                                        {props.item.yourReview.rating.toFixed(1)}/5
                                    </Typography>
                                </Stack>
                            </Grid>
                            {
                                props.item.yourReview.text === '' ?
                                    <Grid item xs={12} sx={{ display: 'flex', displayDirection: 'row', justifyContent: 'center' }}>
                                        <Button sx={{
                                            backgroundColor: '#333388',
                                            color: 'white',
                                            fontSize: '16pt',
                                            padding: '10px 30px',
                                            borderRadius: '20px'
                                        }}>
                                            Add Feedback
                                        </Button>
                                    </Grid>
                                    :
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: '16pt', padding: '10px 0', color: '#555555' }}>
                                            {props.item.yourReview.text}
                                        </Typography>
                                    </Grid>
                            }
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item xs={12} sx={{ display: 'flex', displayDirection: 'row', justifyContent: 'space-between', padding: '10px 0' }}>
                                <Typography sx={{ fontSize: '16pt', fontWeight: 'bold', color: '#555555' }}>Expert Review</Typography>
                                <Stack sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Rating value={props.item.expertReview.rating} readOnly precision={0.1}/>
                                    <Typography sx={{ fontSize: '16pt', marginLeft: '20px' }}>
                                        {props.item.expertReview.rating}/5
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ fontSize: '16pt', padding: '10px 0', color: '#555555' }}>
                                    {props.item.expertReview.text}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}

export default ProjectView;