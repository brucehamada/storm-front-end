import { Grid, RadioGroup, Radio, Button, FormControl, FormLabel, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';
interface MeetingFeedbackProps {
  /**
   * Meeting Feedback
   */
  IsHelpful: string;
  /**
   * Was this meeting helpful for your project?
   */
  MeetedExpectation: string;
  /**
   * Did the expert meet your expectation?
   */
  Rate: string;
  /**
   * Rating you would give to this expert
   */
}
export const MeetingFeedback = ({ ...props }: MeetingFeedbackProps) => {
 
  const handleClick = () => {};
  return (
    <Box
      sx={{
        font: 'caption',
        width: '80%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10%',
        marginTop: '5%'
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset" sx={{ '& > *': { marginBottom: '10px' } }}>
            <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black' }}>
              Was this meeting helpful for your project?
            </FormLabel>
            <RadioGroup aria-label="Was this meeting helpful for your project?" name="radio-buttons-group" row>
              <Grid container spacing={20}>
                <Grid item xs={1}>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" style={{ whiteSpace: 'nowrap' }} />
                </Grid>
                <Grid item xs={1}>
                  <FormControlLabel value="no" control={<Radio />} label="No" style={{ whiteSpace: 'nowrap' }} />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" sx={{ '& > *': { marginBottom: '10px' } }}>
            <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black' }}>
              Did the expert meet your expectations?
            </FormLabel>
            <RadioGroup aria-label="Did the expert meet your expectations"  name="radio-buttons-group" row>
              <Grid container spacing={20}>
                <Grid item xs={1}>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" style={{ whiteSpace: 'nowrap' }} />
                </Grid>
                <Grid item xs={1}>
                  <FormControlLabel value="no" control={<Radio />} label="No" style={{ whiteSpace: 'nowrap' }} />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" sx={{ '& > *': { marginBottom: '10px' } }}>
            <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black' }}>
              Rating you would give to this expert?
            </FormLabel>
            <RadioGroup aria-label="Rating you would give to this expert?"  name="radio-buttons-group" row>
              <Grid container spacing={20}>
                <Grid item xs={1}>
                  <FormControlLabel value="1" control={<Radio />} label="1 Star" style={{ whiteSpace: 'nowrap' }} />
                </Grid>
                <Grid item xs={1}>
                  <FormControlLabel value="2" control={<Radio />} label="2 Star" style={{ whiteSpace: 'nowrap' }} />
                </Grid>
                <Grid item xs={1}>
                  <FormControlLabel value="3" control={<Radio />} label="3 Star" style={{ whiteSpace: 'nowrap' }} />
                </Grid>
                <Grid item xs={1}>
                  <FormControlLabel value="4" control={<Radio />} label="4 Star" style={{ whiteSpace: 'nowrap' }} />
                </Grid>
                <Grid item xs={1}>
                  <FormControlLabel value="5" control={<Radio />} label="5 Star" style={{ whiteSpace: 'nowrap' }} />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Button style={{ backgroundColor: '#0850c4', color: 'black', textTransform: 'none' }} onClick={handleClick}>
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
