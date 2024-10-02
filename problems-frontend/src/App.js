/*
import logo from './logo.svg';
import './App.css';

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


export default App;
*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Problem1 from './components/Problem1';
import Problem2 from './components/Problem2';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/problem-1" element={<Problem1 />} />
                <Route path="/problem-2" element={<Problem2 />} />
            </Routes>
        </Router>
    );
}

export default App;
