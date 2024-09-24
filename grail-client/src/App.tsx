import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react';
import * as React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Content from './components/Content.tsx';
import theme from './components/Theme.tsx';
import { QueryMode } from './QueryMode.tsx';
import AppHeader from './components/AppHeader.tsx';
import './App.css';

const queryClient = new QueryClient();

const styledTheme = createTheme(theme);

function App(): React.JSX.Element {
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
            <AppHeader handleStatsClick={handleStatsClick} handleUniquesClick={handleUniquesClick} handleSetsClick={handleSetsClick} handleOtherClick={handleOtherClick}/>
            <Content queryMode={queryMode} />
          </Box>
        </React.Fragment>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
