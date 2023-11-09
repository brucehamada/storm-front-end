import { useEffect, useState } from 'react';
import JWTContext from 'contexts/JWTContext';
import { useContext } from 'react';
// material-ui
import { Box, FormControl, InputAdornment, InputBase, Button, Typography, SvgIcon } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import { useNavigate } from 'react-router-dom';
import { findJob } from 'store/reducers/jobs';
// assets
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { dispatch, useSelector } from 'store';
import { findExperts } from 'store/reducers/experts';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => {
  const userContext = useContext(JWTContext);
  const theme = useTheme();
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const searchJobResult = useSelector((state) => state.jobs.expertSearchResults);
  const searchExpertResult = useSelector((state) => state.experts.allExperts);

  const handleToggle = () => {
    if (userContext?.user?.type === 'customer') {
      navigate('/client/search');
    } else {
      navigate('/expert/findjobs');
    }
  };
  useEffect(() => {
    const inputSearch = document.getElementById('header-search');
    if (inputSearch != null) inputSearch.style.padding = '0px 0px';
  }, [dispatch]);

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      if (userContext?.user?.type === 'expert') {
        dispatch(findJob(keyword));
        navigate('/expert/findjobs', { state: { searchResult: searchJobResult, keyword: keyword } });
      } else if (userContext?.user?.type === 'customer') {
        dispatch(findExperts(keyword, '', [], '', []));
        navigate('/client/search', { state: { searchResult: searchExpertResult, keyword: keyword } });
      }
    } else {
      return false;
    }
  };

  return (
    <Box
      sx={{
        width: '80%',
        ml: { xs: 0, md: 1 },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <FormControl sx={{ width: { xs: '100%', md: '30rem' } }} onKeyDown={handleKeyDown}>
        <InputBase
          size="small"
          style={{ paddingLeft: '10px' }}
          onChange={(event: any) => setKeyword(event.target.value)}
          onKeyDown={(event: any) => handleKeyDown}
          startAdornment={
            <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center', mr: '0.8rem' }}>
              <SvgIcon>
                <svg width="28px" height="28px" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="carbon:search">
                    <path
                      id="Vector"
                      fill="#949A9C"
                      d="M29.7579 27.8361L22.2059 20.2841C24.0207 18.1054 24.9257 15.311 24.7326 12.482C24.5395 9.65309 23.2632 7.00751 21.1692 5.09563C19.0752 3.18376 16.3247 2.15279 13.4899 2.2172C10.6551 2.28161 7.95428 3.43644 5.94927 5.44146C3.94426 7.44647 2.78943 10.1473 2.72501 12.9821C2.6606 15.8169 3.69157 18.5673 5.60344 20.6614C7.51532 22.7554 10.1609 24.0317 12.9898 24.2248C15.8188 24.4179 18.6132 23.5129 20.7919 21.6981L28.3439 29.2501L29.7579 27.8361ZM4.75793 13.2501C4.75793 11.4701 5.28577 9.73003 6.2747 8.24998C7.26363 6.76994 8.66924 5.61639 10.3138 4.9352C11.9583 4.25401 13.7679 4.07578 15.5137 4.42305C17.2596 4.77032 18.8632 5.62748 20.1219 6.88615C21.3806 8.14483 22.2377 9.74847 22.585 11.4943C22.9323 13.2401 22.754 15.0497 22.0728 16.6943C21.3917 18.3388 20.2381 19.7444 18.7581 20.7333C17.278 21.7223 15.538 22.2501 13.7579 22.2501C11.3718 22.2475 9.08414 21.2984 7.39689 19.6112C5.70964 17.9239 4.76058 15.6363 4.75793 13.2501Z"
                    />
                  </g>
                </svg>
              </SvgIcon>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <Button
                onClick={handleToggle}
                variant="outlined"
                color="primary"
                style={{ borderRadius: '2rem', width: '10rem', height: '3rem', gap: '0.8rem' }}
              >
                <Typography style={{ color: theme.palette.primary.darker }} variant="h4">
                  {userContext?.user?.type === 'customer' ? 'Experts' : 'Jobs'}
                </Typography>
                <KeyboardArrowDownIcon style={{ color: theme.palette.primary.darker }} />
              </Button>
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            'aria-label': 'weight'
          }}
          placeholder={userContext?.user?.type === 'customer' ? 'Find Experts' : 'Find Jobs'}
          sx={{
            borderRadius: '2rem',
            height: '3rem',
            backgroundColor: theme.palette.secondary.lighter,
            fontSize: '18px'
          }}
        />
      </FormControl>
    </Box>
  );
};

export default Search;
