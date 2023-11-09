import {
  Card,
  Button,
  Chip,
  Typography,
  Grid,
  Stack,
  CardContent,
  // CardActions,
  Drawer,
  List,
  ListItem,
  RadioGroup,
  FormControl,
  Radio,
  FormControlLabel,
  TextField,
  InputLabel
  // CardActionArea
} from '@mui/material';
import { VerifiedUser, BusinessCenter, StarRounded, PinDrop, Poll, FavoriteBorderOutlined } from '@mui/icons-material';
import { useState, useContext } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Calendar from 'components/Calendar';
import Avatar from 'components/@extended/Avatar';
import useTheme from '@mui/system/useTheme';
import avatarImage from 'assets/images/users/avatar-1.png';
import JWTContext from 'contexts/JWTContext';
import { sendInvitation } from 'store/reducers/invitation';
import { dispatch } from 'store';
import { Link } from 'react-router-dom';
const RecommendedExpert = (props: any) => {
  const userContext = useContext(JWTContext);
  const theme = useTheme();
  const [isOpen, setOpen] = useState(false);
  const [isInvitationOpen, setInvitationOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [invitationType, setInvitationType] = useState('meeting');
  const handleFavoriteClick = () => {};
  const handleInviteClick = () => {
    setInvitationOpen(true);
  };
  const handleBookCallClick = (event: any) => {
    event.preventDefault();
    setOpen(true);
  };
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };
  const handleBackClick = () => {
    setOpen(false);
  };
  const toggleInvitationDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setInvitationOpen(open);
  };
  const handleInvitationBackClick = () => {
    setInvitationOpen(false);
  };
  const handleInvitationTypeChange = (event: any) => {
    setInvitationType(event?.target.value);
  };
  const handleSendClick = (event: any) => {
    event.preventDefault();
    dispatch(sendInvitation(props.jobId, invitationType, message, props.expert.email));
  };

  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)} sx={{ minWidth: '70vw' }}>
        <List sx={{ minWidth: '70vw' }}>
          <ListItem>
            <Grid container>
              <Grid item xs={6}>
                <Stack direction="row" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Button onClick={handleBackClick}>
                    <ArrowBackIcon sx={{ fontSize: '2rem' }} />
                  </Button>
                  <Typography variant="h2" sx={{ color: theme.palette.secondary }}>
                    Back
                  </Typography>
                </Stack>
                <Typography variant="h5">{userContext?.user?.fullName}</Typography>
                <Typography variant="h3">30 Minutes Meeting</Typography>
                <Typography variant="h5">30 Min</Typography>
              </Grid>
              <Grid item xs={6}>
                <Calendar receiverEmail={props.expert.email} />
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Drawer>
      <Drawer anchor="right" open={isInvitationOpen} onClose={toggleInvitationDrawer(false)} sx={{ maxWidth: '40vw' }}>
        <List sx={{ width: '40vw', padding: '2vw' }}>
          <ListItem>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Stack direction="row" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Button onClick={handleInvitationBackClick}>
                    <ArrowBackIcon sx={{ fontSize: '1rem' }} />
                  </Button>
                  <Typography variant="h4" sx={{ color: theme.palette.secondary }}>
                    Send an Invite
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="meeting"
                    name="radio-buttons-group"
                    onChange={handleInvitationTypeChange}
                  >
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }} spacing={1}>
                      <Grid item xs={6}>
                        <FormControlLabel value="meeting" control={<Radio />} label="One on One Meeting" />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControlLabel
                          value="proposal"
                          control={<Radio />}
                          label="For a Project Proposal"
                          sx={{ whiteSpace: 'nowrap' }}
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Your Message</InputLabel>
                <TextField
                  fullWidth
                  multiline
                  variant="filled"
                  InputProps={{
                    disableUnderline: true
                  }}
                  rows={5}
                  sx={{ borderRadius: '20px' }}
                  onChange={(event: any) => setMessage(event.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  style={{
                    backgroundColor: theme.palette.primary.darker,
                    color: theme.palette.secondary.lighter,
                    width: '100%',
                    textTransform: 'none',
                    marginBottom: '1vh'
                  }}
                  onClick={handleSendClick}
                >
                  Send Invite
                </Button>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Drawer>
      <Card style={{ marginBottom: '2vh' }}>
        {/* <CardActionArea onClick={handleCardClick}> */}
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'left' }}>
                  <Stack direction="row" sx={{}}>
                    <Avatar alt="User icon" src={avatarImage} sx={{ marginRight: '2vw' }} />
                    <Link to={'/client/search-expert'} state={{ expert: props.expert }}>
                      <Typography variant="h3">{props.expert.name}</Typography>
                    </Link>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  {props.experience?.map((item: string, index: number) => (
                    <Chip key={index} label={item} style={{ backgroundColor: theme.palette.primary.normal, borderRadius: '50%' }} />
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Summary</Typography>
                  <Typography variant="body1">{props.expert.summary}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Stack direction={'column'}>
                    <Typography variant="body2">Next Availability</Typography>
                    <Typography variant="body1">{props.expert.availability}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  {/* <CardActions
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'rgb(241,246,255)',
                        padding: '20px',
                        borderRadius: '5px'
                      }}
                    > */}
                  <Button
                    onClick={handleBookCallClick}
                    style={{
                      backgroundColor: theme.palette.primary.darker,
                      color: theme.palette.secondary.lighter,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Book a Call
                  </Button>
                  {/* </CardActions> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack direction={'row'}>
                    <VerifiedUser
                      sx={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.secondary.lighter, marginRight: '1vw' }}
                    />
                    <Typography variant="body2">{props.expert.verifiedStatus ? props.expert.verifiedStatus : 'Unverified'}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction={'row'}>
                    <BusinessCenter
                      sx={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.secondary.lighter, marginRight: '1vw' }}
                    />
                    <Typography variant="body2">{props.expert.organization ? props.expert.organization : 'Not inserted'}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction={'row'}>
                    <Poll
                      sx={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.secondary.lighter, marginRight: '1vw' }}
                    />
                    <Typography variant="body2">{props.expert.jobCompleteness ? props.expert.jobCompleteness : 'Not inserted'}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction={'row'}>
                    <StarRounded
                      sx={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.secondary.lighter, marginRight: '1vw' }}
                    />
                    <Typography variant="body2">{props.expert.review ? props.expert.review : 'Not inserted'}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction={'row'}>
                    <PinDrop
                      sx={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.secondary.lighter, marginRight: '1vw' }}
                    />
                    <Typography variant="body2">{props.expert.country ? props.expert.country : 'Not inserted'}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  {/* <CardActions
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '20px',
                        borderRadius: '5px',
                        justifyContent: 'flex-start',
                        alignItems: 'left'
                      }}
                    > */}
                  <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button onClick={handleFavoriteClick}>
                      <FavoriteBorderOutlined />
                    </Button>
                    <Button style={{ backgroundColor: theme.palette.primary.dark, color: 'white' }} onClick={handleInviteClick}>
                      <Typography variant="h5" sx={{ color: 'white', minWidth: '5vw' }}>
                        Invite
                      </Typography>
                    </Button>
                  </Stack>
                  {/* </CardActions> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </>
  );
};
export default RecommendedExpert;
