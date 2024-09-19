import {
  useQuery,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

import logo from './d2rlogo2.png';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Holy Grail Tracker for Diablo II: Resurrected
          </p>
        </header>
        <div className="search-bar">
          <input type="text" className="search-bar-input"></input>
          <button className="search-bar-input-button">search</button>
        </div>
        <div className="nav-bar">
          <button className="nav-bar-stats">stats</button>
          <button className="nav-bar-uniques">uniques</button>
          <button className="nav-bar-sets">sets</button>
          <button className="nav-bar-other">other</button>
        </div>
        <div className="App-content">
          <QueryArea />
        </div>
      </div>
    </QueryClientProvider>
  );
}

function QueryArea() {
  const { isPending, error, data } = useQuery({
    queryKey: ['items'],
    queryFn: () =>
      fetch('http://localhost:8080/api/items').then((res) => {
        return res.json();
      }
      ),
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

export default App;
