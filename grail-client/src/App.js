import { useState } from 'react';
import * as React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { styled, alpha } from '@mui/material/styles';
import { grey, brown } from '@mui/material/colors';
import { AppBar, ButtonGroup, CssBaseline, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

import logo from './d2rlogo2.png';
import './App.css';
import Content from './components/Content';

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: grey,
    secondary: brown,
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: 'auto',
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function App() {
  const [queryMode, setQueryMode] = useState('default');

  const handleStatsClick = () => {
    setQueryMode('default');
  }

  const handleUniquesClick = () => {
    setQueryMode('uniques');
  }

  const handleSetsClick = () => {
    setQueryMode('sets');
  }

  const handleOtherClick = () => {
    setQueryMode('other');
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <React.Fragment>
          <CssBaseline />
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
              <Toolbar >
                <Avatar src={logo} sx={{ width: 36, height: 36, mr: 2 }} />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Grail Tracker
                </Typography>
                <ButtonGroup size='small' sx={{ ml: 'auto', mr: 'auto' }}>
                  <Button variant="contained" color="inherit" onClick={handleStatsClick}>stats</Button>
                  <Button variant="contained" color="inherit" onClick={handleUniquesClick}>uniques</Button>
                  <Button variant="contained" color="inherit" onClick={handleSetsClick}>sets</Button>
                  <Button variant="contained" color="inherit" onClick={handleOtherClick}>other</Button>
                </ButtonGroup>
                <Search sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Toolbar>
            </AppBar>
            <Content queryMode={queryMode} />
          </Box>
        </React.Fragment>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
