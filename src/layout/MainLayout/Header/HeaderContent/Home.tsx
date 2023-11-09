import { useRef, useState } from 'react';

// material-ui

import { Box, Typography, Button } from '@mui/material';

// project import

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';
// ==============================|| HEADER CONTENT - NOTIFICATION ||============================== //

const Home = () => {
  const userContext = useContext(JWTContext);
  const anchorRef = useRef<any>(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    if (userContext?.user?.type === 'customer') {
      navigate('/client/home');
    } else {
      navigate('/expert/home');
    }
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
          Home
        </Typography>
      </Button>
    </Box>
  );
};

export default Home;
