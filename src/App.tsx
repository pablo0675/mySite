import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Home from './components/Home';
import Github from './components/Github';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ul>
            <li>
              <Link to="/login">Connexion</Link>
            </li>
            <li>
              <Link to="/home">Accueil</Link>
            </li>
            <li>
              <Link to="/github">GitHub</Link>
            </li>
          </ul>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/github" Component={Github} />
        </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
