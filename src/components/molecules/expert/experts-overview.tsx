import { useState } from 'react';

// material-ui
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box, Grid, Switch } from '@mui/material';

import { useTheme } from '@mui/material';
import { EditOffOutlined } from '@mui/icons-material';

// ==============================|| ACCORDION - CONTROLLED ||============================== //

const ExpertOverview = (props:any) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(panel);
  };

  
  return (
    <Box
    sx={{
      '& .MuiAccordion-root': {
        borderColor: theme.palette.divider,
        '& .MuiAccordionSummary-root': {
          bgcolor: 'transparent',
          flexDirection: 'row'
        },
        '& .MuiAccordionDetails-root': {
          borderColor: theme.palette.divider
        },
        '& .Mui-expanded': {
          color: theme.palette.primary.main
        }
      }
    }}
  >
        <Accordion expanded={expanded === 'panel1'}  onChange={handleChange('panel1')} style={{backgroundColor: '#ffffff', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" style={{backgroundColor: '#ffffff', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
            <Typography variant="h6" color={'darkblue'} fontSize={'1rem'} >Preferences</Typography>
          </AccordionSummary>
          <AccordionDetails style={{display: 'flex', flexDirection: 'row'}}>
            <Grid container spacing={2} style={{display:'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: '10px', marginTop: '10px'}} >
                <Typography variant="h6" fontWeight={'bold'} color={'grey'}>Availability</Typography>
                <Grid container style={{display: 'flex', alignItems:'center'}}>
                    <Grid item xs={6} md={9} >
                        <Typography variant="body1" color={'grey'}>Upto {props.weeklyCommitment} Hours Per Week</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <EditOffOutlined style={{fontSize: '13em.'}} />
                    </Grid>
                </Grid>
                <Typography variant="h6" fontWeight={'bold'} color={'grey'}>Job Reference</Typography>
                <Grid container style={{display: 'flex', alignItems:'center'}}>
                    <Grid item xs={6} md={9}>
                        <Typography variant="body1" color={'grey'}>Fractional Services</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                       <Switch defaultChecked/>
                    </Grid>
                </Grid>
                <Grid container style={{display: 'flex', alignItems:'center'}}>
                    <Grid item xs={6} md={9}>
                        <Typography variant="body1" color={'grey'}>1:1 Consultancy</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                       <Switch defaultChecked/>
                    </Grid>
                </Grid>
                <Grid container style={{display: 'flex', alignItems:'center'}}>
                    <Grid item xs={6} md={9}>
                        <Typography variant="body1" color={'grey'}>Projects</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                       <Switch defaultChecked/>
                    </Grid>
                </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{backgroundColor: '#ffffff'}}>
            <Typography variant="h6" color={'darkblue'} fontSize={'1rem'}>Proposals</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             {props.proposals}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{backgroundColor: '#ffffff'}}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style={{backgroundColor: '#ffffff'}}>
            <Typography variant="h6" color={'darkblue'} fontSize={'1rem'}>Invitations</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             {props.proposals}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{backgroundColor: '#ffffff', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px'}}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" style={{backgroundColor: '#ffffff', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px'}}>
          <Typography variant="h6" color={'darkblue'} fontSize={'1rem'}>Languages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {props.languages}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
  );
};

export default ExpertOverview;
