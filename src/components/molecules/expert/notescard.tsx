import { Card, CardContent, Grid, Typography } from '@mui/material';
import NotesItemCard from 'components/molecules/expert/notesitemcard';


const NotesCard = (props: any) => {
    return (
        <Card sx={{
            marginLeft: '40px'
        }}>
            <CardContent>
                <Grid container padding={'30px'}>
                    <Grid item xs={12} marginBottom='5vh'>
                        <Typography sx={{
                            fontSize: '24pt',
                            fontWeight: 'bold'
                        }}>
                            Notes
                        </Typography>
                    </Grid>
                    <Grid container spacing='20px'>
                        {
                            props.item.map((item: any) => (
                                <Grid item sx={{
                                    borderStyle: 'solid',
                                    borderWidth: '1px',
                                    borderColor: '#dddddd',
                                    borderRadius: '12px',
                                    padding: '20px',
                                    margin: '10px'
                                }}>
                                    <NotesItemCard item={item} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default NotesCard;