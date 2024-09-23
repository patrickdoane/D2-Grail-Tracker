import { useMutation } from '@tanstack/react-query';
function QueryItem(item, key, editItem) {
    const mutate = useMutation({
        mutationFn: (item) => {
            item.found = !item.found;

            return fetch(`http://localhost:8080/api/items/${item.id}`, {
                method: "PUT",
                body: JSON.stringify(item),
                headers: { "Content-Type": "application/json" }
            }).then(res => res.json())
        }
    })

    return (
        <div className='queryItem' key={item.item.id}>
            <p>{item.item.name}</p>
            <input type="checkbox" checked={item.item.found} onChange={e => mutate.mutate(item.item)}></input>
        </div>
    )
}

export default QueryItem;