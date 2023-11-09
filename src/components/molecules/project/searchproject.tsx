import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Button, Grid } from '@mui/material';
export const SearchProject = () => {
  const [keyword, setKeyWord] = useState('');
  return (
    <Grid container spacing={3}>
      <Grid item xs={10}>
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            value={keyword}
            placeholder="Search Messages"
            inputProps={{ 'aria-label': 'search messages' }}
            onChange={(event) => setKeyWord(event.target.value)}
          />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Button style={{ backgroundColor: 'black' }}>Filters</Button>
      </Grid>
    </Grid>
  );
};
