import { alpha, createTheme, styled } from "@mui/material";

import theme from './Theme.tsx';

const styledTheme = createTheme(theme);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: styledTheme.shape.borderRadius,
  backgroundColor: alpha(styledTheme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(styledTheme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [styledTheme.breakpoints.up('sm')]: {
    marginLeft: 'auto',
    width: 'auto',
  },
}));


export default Search;