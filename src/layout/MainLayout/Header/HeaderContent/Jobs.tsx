import { useRef, useState } from 'react';

// material-ui

import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// project import

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// ==============================|| HEADER CONTENT - NOTIFICATION ||============================== //

const Jobs = () => {
  const navigate = useNavigate();
  const anchorRef = useRef<any>(null);

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    navigate('/client/job-home');
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <Button
        color="secondary"
        sx={{ color: 'text.primary', width: '100%' }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          Jobs
        </Typography>
        <KeyboardArrowDownIcon />
      </Button>
    </Box>
  );
};

export default Jobs;
