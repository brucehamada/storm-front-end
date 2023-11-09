import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// material-ui

import { Box, Typography, Button } from '@mui/material';

// ==============================|| HEADER CONTENT - NOTIFICATION ||============================== //

const Meetings = () => {
  const anchorRef = useRef<any>(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    navigate('/meetings');
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
          Meetings
        </Typography>
      </Button>
    </Box>
  );
};

export default Meetings;
