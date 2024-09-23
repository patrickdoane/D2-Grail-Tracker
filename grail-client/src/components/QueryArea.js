import { useQuery } from '@tanstack/react-query';

import QueryItem from './QueryItem';

// this performs a GET request on /api/items
// TODO: split QueryArea based on query properties
function QueryArea({queryMode}) {
    let apiUrl = 'http://localhost:8080/api/items/' + queryMode;

    const { isPending, error, data } = useQuery({
        queryKey: ['items'],
        queryFn: () => fetch(apiUrl).then(res => res.json()),
    });

    if (isPending) return 'Loading...';

    if (error) return 'An error has occured: ' + error.message;

    return (
        <div className="query-items">
            {data.map(item => <QueryItem item={item} key={item.id} />)}
        </div>
        // <div className="query-items">
        //     {data.map(item => {
        //         return (
        //             <div key={item.id}>
        //                 <p>{item.name}</p>
        //                 <input type="checkbox" checked={item.checked} />
        //             </div>
        //         )
        //     })}
        // </div>
    )
}

export default QueryArea;