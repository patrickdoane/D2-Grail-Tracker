import { createTheme, styled } from "@mui/material";

import theme from './Theme.tsx';

const styledTheme = createTheme(theme);

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: styledTheme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default SearchIconWrapper;