import { grey, brown } from "@mui/material/colors";

import type {} from '@mui/x-data-grid/themeAugmentation';

const theme = {
  palette: {
    primary: grey,
    secondary: brown,
  },
   components: {
    // Use `MuiDataGrid` on DataGrid, DataGridPro and DataGridPremium
    MuiDataGrid: {
      styleOverrides: {
        root: {
        },
      },
    },
  },
}

export default theme;