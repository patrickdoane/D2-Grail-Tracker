import { useMutation } from '@tanstack/react-query';
import React from 'react';

function QueryItem({item}) {
    const mutate = useMutation({
        mutationFn: async editedItem => {
            item.found = !item.found;
            const res = await fetch(`http://localhost:8080/api/items/${item.id}`, {
                method: "PUT",
                body: JSON.stringify(editedItem),
                headers: { "Content-Type": "application/json" }
            });
            return await res.json();
        }
    })

    return (
        <div className='queryItem' key={item.id}>
            <p>{item.name}</p>
            <input type="checkbox" checked={item.found} onChange={e => mutate.mutate(item)}></input>
        </div>
    )
}

export default QueryItem;