import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { columns } from "./columns.tsx";

function ContentGrid({items}): React.JSX.Element {
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