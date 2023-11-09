import { Grid, Typography, Card, CardContent, Button } from '@mui/material';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';
import useTheme from '@mui/system/useTheme';

const MilestonesCard = (props: any) => {
  const theme = useTheme();
  const handleThisMonthClick = () => {};
  return (
    <Card
      sx={{
        marginLeft: '40px'
      }}
    >
      <CardContent>
        <Grid container padding={'30px'}>
          <Grid
            item
            xs={12}
            marginBottom="5vh"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography
              sx={{
                fontSize: '24pt',
                fontWeight: 'bold'
              }}
            >
              Milestones
            </Typography>
            <Button onClick={handleThisMonthClick}>
              <Typography
                sx={{
                  fontSize: '18pt',
                  textAlign: 'right',
                  color: 'black'
                }}
              >
                This Month
              </Typography>
              <ArrowDownIcon
                sx={{
                  color: theme.palette.primary.darker,
                  marginLeft: '5px'
                }}
              />
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: '#dddddd',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '10px'
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontSize: '12pt',
                        color: '#555555'
                      }}
                    >
                      Milestone
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        fontSize: '12pt',
                        color: '#555555'
                      }}
                    >
                      Expected Date of Delivery
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      sx={{
                        fontSize: '12pt',
                        color: '#555555'
                      }}
                    >
                      Actions
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              {props.item?.map((item: any) => (
                <Grid
                  item
                  xs={12}
                  sx={{
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: '#dddddd',
                    margin: '12px 0',
                    borderRadius: '12px',
                    padding: '20px'
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={6}>
                          <Typography
                            sx={{
                              fontSize: '12pt',
                              color: '#555555'
                            }}
                          >
                            Milestone
                            {item.milestoneNumber}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '16pt',
                              color: '#555555'
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography
                            sx={{
                              fontSize: '12pt',
                              color: '#555555'
                            }}
                          >
                            {item.endDate}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '16pt',
                              fontWeight: 'bold',
                              fontStyle: 'italic',
                              color: '#444444'
                            }}
                          >
                            {item.status}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          {item.status === 'upcoming' && (
                            <Button
                              sx={{
                                fontSize: '12pt',
                                color: '#555555',
                                textAlign: 'right'
                              }}
                            >
                              Start Now
                            </Button>
                          )}
                          {item.status === 'pending' && (
                            <Button
                              sx={{
                                fontSize: '12pt',
                                color: '#555555',
                                textAlign: 'right'
                              }}
                            >
                              Mark as Completed
                            </Button>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MilestonesCard;
