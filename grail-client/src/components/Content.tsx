import React from 'react';

import { useQuery } from '@tanstack/react-query';
import ContentGrid from './ContentGrid.tsx';

function Content({ queryMode }) {
    let apiUrl = 'http://localhost:8080/api/items/';

    const { isPending, error, data } = useQuery({
        queryKey: ['items'],
        queryFn: () => fetch(apiUrl + queryMode).then(res => res.json()),
    })

    if (isPending) return 'Loading...';

    if (error) return 'An error has occured: ' + error.message;

    return (
        <div className="App-content">
            <ContentGrid items={[...data]} />
        </div>
    )
}

export default Content;