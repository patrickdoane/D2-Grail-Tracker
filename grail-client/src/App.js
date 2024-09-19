import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

import logo from './d2rlogo2.png';
import './App.css';
import QueryArea from './components/QueryArea';

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

export default App;
