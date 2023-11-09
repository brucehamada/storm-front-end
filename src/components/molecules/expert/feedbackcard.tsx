import { Card, CardContent, Grid, Typography, Button } from '@mui/material'

const FeedbackCard = (props: any) => {
    return (
        <Card sx={{
            marginLeft: '40px'
        }}>
            <CardContent>
                <Grid container padding={'30px'}>
                    <Grid item xs={9} marginBottom='5vh'>
                        <Typography sx={{
                            fontSize: '24pt',
                            fontWeight: 'bold'
                        }}>
                            Feedback
                        </Typography>
                        <Grid container spacing='20px'>
                            <Grid item xs={12} marginTop='60px'>
                                <Typography fontSize={'12pt'} sx={{
                                    color: '#666666'
                                }}>
                                    This contract is not yet eligible for feedback
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button sx={{
                                    backgroundColor: 'blue',
                                    color: 'white',
                                    fontSize: '14pt',
                                    padding: '10px 40px',
                                    borderRadius: '20px'
                                }}>
                                    Request Feedback
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default FeedbackCard;