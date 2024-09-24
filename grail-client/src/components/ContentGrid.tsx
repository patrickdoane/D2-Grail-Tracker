import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { columns } from "./columns.tsx";
import { useMutation } from "@tanstack/react-query";

function ContentGrid({ items }): React.JSX.Element {
    const getId = row => {
        return row.id;
    }

    const mutation = useMutation({
        mutationFn: async (updatedRow) => {
            const id = getId(updatedRow);
            const res = await fetch(`http://localhost:8080/api/items/${id}`, {
                method: "PUT",
                body: JSON.stringify(updatedRow),
                headers: { "Content-Type": "application/json" }
            });

            return res.json();
        }
    })

    return <DataGrid
        rows={items}
        columns={columns}
        autoHeight
        checkboxSelection
        disableRowSelectionOnClick
        processRowUpdate={(updatedRow, originalRow) => {
            mutation.mutate(updatedRow)
            return updatedRow;
        }}
        onProcessRowUpdateError={error => console.log(error)}
    />
}

export default ContentGrid;