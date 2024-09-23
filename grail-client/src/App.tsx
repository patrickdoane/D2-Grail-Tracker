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
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

import logo from './d2rlogo2.png';
import './App.css';
import Content from './components/Content.tsx';
import theme from './components/Theme.tsx';
import Search from './components/Search.tsx';
import SearchIconWrapper from './components/SearchIconWrapper.tsx';
import StyledInputBase from './components/StyledInputBase.tsx';

const queryClient = new QueryClient();

const styledTheme = createTheme(theme);

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows: GridRowsProp = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


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
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
            <Content queryMode={queryMode} />
          </Box>
        </React.Fragment>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
