import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react';
import * as React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { AppBar, ButtonGroup, CssBaseline, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

import logo from './d2rlogo2.png';
import './App.css';
import Content from './components/Content.tsx';
import theme from './components/Theme.tsx';
import Search from './components/Search.tsx';
import SearchIconWrapper from './components/SearchIconWrapper.tsx';
import StyledInputBase from './components/StyledInputBase.tsx';

const queryClient = new QueryClient();

const styledTheme = createTheme(theme);

type QueryMode = "default" | "uniques" | "sets" | "other";

function App() {
  const [queryMode, setQueryMode] = useState<QueryMode>('default');

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
    <ThemeProvider theme={styledTheme}>
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
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
