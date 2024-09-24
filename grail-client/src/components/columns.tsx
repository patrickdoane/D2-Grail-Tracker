import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
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
