import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

import logo from './d2rlogo2.png';
import './App.css';
import Content from './components/Content';

const queryClient = new QueryClient();

function App() {
  const [queryMode, setQueryMode] = useState('default');
  const [count, setCount] = useState(0);

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
          <button className="nav-bar-stats" onClick={() => {
            setQueryMode('default');
            setCount(count + 1)
          }}>stats</button>
          <button className="nav-bar-uniques" onClick={() => {
            setQueryMode('unique')
            setCount(count + 1)
          }}>uniques</button>
          <button className="nav-bar-sets">sets</button>
          <button className="nav-bar-other">other</button>
        </div>
        <Content queryMode={queryMode} key={count}/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
