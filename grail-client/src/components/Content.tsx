import React from 'react';

import { useQuery } from '@tanstack/react-query';
import ContentGrid from './ContentGrid.tsx';
import Stats from './Stats.tsx';

function Content({ queryMode }): string | React.JSX.Element {
    const apiUrl = 'http://localhost:8080/api/items';

    const { isPending, error, data } = useQuery({
        queryKey: ['items', queryMode],
        queryFn: async () => {
            if (queryMode === 'default') {
                let res = fetch(apiUrl);
                return (await res).json();
            }
             else {
                let res = fetch(apiUrl + '/' + queryMode);
                return (await res).json();
             }
        },
    })

    if (isPending) return 'Loading...';

    if (error) return 'An error has occured: ' + error.message;

    return (
        <div className="App-content">
            { queryMode === 'default' && data && <Stats items={[...data]}/> }
            { queryMode !== 'default' && data && <ContentGrid items={[...data]} /> }
        </div>
    )
}

export default Content;