import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'name',
    width: 150,
    editable: false,
  },
  {
    field: 'type',
    headerName: 'type',
    width: 150,
    editable: false,
  },
  {
    field: 'quality',
    headerName: 'quality',
    width: 150,
    editable: false,
  },
  {
    field: 'itemLvl',
    headerName: 'itemLvl',
    width: 150,
    editable: false,
  },
  {
    field: 'found',
    headerName: 'found',
    width: 150,
    editable: true,
    type: 'boolean'
  },
];

function ContentGrid({items}) {
    return <DataGrid
        rows={items}
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
}

export default ContentGrid;