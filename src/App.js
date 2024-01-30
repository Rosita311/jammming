import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tracklist from '../Tracklist/Tracklist;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



const App = () => {
  const [searchResults, setSearchResults] = useState([]);
    return ( 
    <div>
      <ResultsList tracks={searchResults} />
    </div>;
    );
  }

  export default App;

export default App;
