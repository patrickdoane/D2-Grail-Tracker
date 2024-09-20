import QueryArea from './QueryArea';

function Content(queryMode) {
    if (queryMode.queryMode === 'uniques') {
        return (
            <div className="App-content">
                <QueryArea queryMode={queryMode}/>
            </div>
        )
    }

    else if (queryMode.queryMode === 'sets') {
        return (
            <div className="App-content">
                <p>Sets</p>
                <QueryArea queryMode={queryMode}/>
            </div>
        )
    }

    else if (queryMode.queryMode === 'other') {
        return (
            <div className="App-content">
                <p>Other</p>
            </div>
        )
    }

    else {
            return (
            <div className="App-content">
                <p>Submit a query</p>
            </div>
        )
    }
}

export default Content;