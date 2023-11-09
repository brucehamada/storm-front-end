import { Card, CardContent, Grid, Typography } from '@mui/material'

const HiringContractCard = (props: any) => {
    return (
        <Card sx={{
            marginLeft: '40px'
        }}>
            <CardContent>
                <Grid container padding={'30px'}>
                    <Grid item xs={12} marginBottom='5vh'>
                        <Typography sx={{
                            fontSize: '24pt',
                            fontWeight: 'bold',
                            color: '#444444'
                        }}>
                            Hiring Contract
                        </Typography>
                    </Grid>
                    <Grid container xs={6} spacing='20px'>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                fontWeight: 'bold',
                                color: '#444444'
                            }}>
                                Contract ID
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                textAlign: 'right',
                                color: '#666666'
                            }}>
                                {props.item.contractId}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                fontWeight: 'bold',
                                color: '#444444'
                            }}>
                                Contract Type
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                textAlign: 'right',
                                color: '#666666'
                            }}>
                                {props.item.contractType}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                fontWeight: 'bold',
                                color: '#444444'
                            }}>
                                Rate
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                textAlign: 'right',
                                color: '#666666'
                            }}>
                                {props.item.rate}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                fontWeight: 'bold',
                                color: '#444444'
                            }}>
                                Hours of Engagement Per week
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                textAlign: 'right',
                                color: '#666666'
                            }}>
                                {props.item.hoursOfEngagementPerWeek}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                fontWeight: 'bold',
                                color: '#444444'
                            }}>
                                Start Date
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                textAlign: 'right',
                                color: '#666666'
                            }}>
                                {props.item.startDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                fontWeight: 'bold',
                                color: '#444444'
                            }}>
                                Expert Information
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                textAlign: 'right',
                                color: '#666666'
                            }}>
                                {props.item.expertInfo}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                fontWeight: 'bold',
                                color: '#444444'
                            }}>
                                Name
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                textAlign: 'right',
                                color: '#666666'
                            }}>
                                {props.item.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                fontWeight: 'bold',
                                color: '#444444'
                            }}>
                                Company Details
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                textAlign: 'right',
                                color: '#666666'
                            }}>
                                {props.item.companyDetails}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                fontWeight: 'bold',
                                color: '#444444'
                            }}>
                                Client Name
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                textAlign: 'right',
                                color: '#666666'
                            }}>
                                {props.item.clientName}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                fontWeight: 'bold',
                                color: '#444444'
                            }}>
                                Company Name
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                textAlign: 'right',
                                color: '#666666'
                            }}>
                                {props.item.companyName}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                fontWeight: 'bold',
                                color: '#444444'
                            }}>
                                Location
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{
                                fontSize: '14pt',
                                textAlign: 'right',
                                color: '#666666'
                            }}>
                                {props.item.location}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default HiringContractCard;