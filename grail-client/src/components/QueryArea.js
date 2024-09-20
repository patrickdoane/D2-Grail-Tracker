import { useQuery } from '@tanstack/react-query';

// this performs a GET request on /api/items
// TODO: split QueryArea based on query properties
function QueryArea(queryMode) {
    let apiUrl = 'http://localhost:8080/api/items/' + queryMode.queryMode.queryMode;

    const { isPending, error, data } = useQuery({
        queryKey: ['items'],
        queryFn: () => fetch(apiUrl).then(res => res.json()),
    });

    if (isPending) return 'Loading...';

    if (error) return 'An error has occured: ' + error.message;

    return (
        <div className="query-items">
            {data.map(item => {
                return (
                    <div key={item.id}><p>{item.name}</p></div>
                )
            })}
        </div>
    )
}

export default QueryArea;