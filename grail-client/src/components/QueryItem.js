function QueryItem(item) {
    return (
        <div className='queryItem' key={item.item.id}>
            <p>{item.item.name}</p>
            <input type="checkbox" checked={item.item.checked} />
        </div>
    )
}

export default QueryItem;