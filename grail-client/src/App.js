import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import Button from '@mui/material/Button';

import logo from './d2rlogo2.png';
import './App.css';
import Content from './components/Content';

const queryClient = new QueryClient();

function App() {
  const [queryMode, setQueryMode] = useState('default');

  const handleStatsClick = () => {
    setQueryMode('default');
  }

  const handleUniquesClick = () => {
    setQueryMode('uniques');
  }

  const handleSetsClick = () => {
    setQueryMode('sets');
  }

  const handleOtherClick = () => {
    setQueryMode('other');
  }

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
          <Button className="nav-bar-stats" onClick={handleStatsClick}>stats</Button>
          <Button className="nav-bar-uniques" onClick={handleUniquesClick}>uniques</Button>
          <Button className="nav-bar-sets" onClick={handleSetsClick}>sets</Button>
          <Button className="nav-bar-other" onClick={handleOtherClick}>other</Button>
        </div>
        <Content queryMode={queryMode} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
