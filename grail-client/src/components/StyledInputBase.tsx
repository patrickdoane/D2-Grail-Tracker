import styled from "@emotion/styled";
import { createTheme, InputBase } from "@mui/material";

import theme from './Theme.tsx';

const styledTheme = createTheme(theme);

const StyledInputBase = styled(InputBase)( ({theme})  => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: styledTheme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${styledTheme.spacing(4)})`,
    transition: styledTheme.transitions.create('width'),
    [styledTheme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default StyledInputBase;