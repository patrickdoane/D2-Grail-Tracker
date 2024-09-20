import QueryArea from './QueryArea';

function Content(queryMode, key) {
    console.log(queryMode)
    if (queryMode.queryMode == 'unique') {
        return (
            <div className="App-content">
                <QueryArea />
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