import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';

export const SearchMessage = () => {
  const [keyword, setKeyWord] = useState('');
  return (
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
      <IconButton sx={{ p: '10px' }} aria-label="filterList">
        <FilterListIcon />
      </IconButton>
    </Paper>
  );
};
