import logo from './d2rlogo2.png';
import './App.css';

function App() {
  return (
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
    </div>
  );
}

export default App;
