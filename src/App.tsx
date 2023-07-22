import React from 'react';
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Github from './components/Github';
import Feet from "./components/Feet";
import Hidden from "./components/Hidden";
import './App.css';
import NewGuy from "./components/NewGuy";

function App() {
  return (
    <Router>
      <div className="navbar">
          <Link to="/home" className="nav-link">Accueil</Link>
          <Link to="/github" className="nav-link">GitHub</Link>
          <Link to="/login" className="nav-link">Connexion</Link>
      </div>
      <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" Component={Home} />
          <Route path="/github" Component={Github} />
          <Route path="/login" Component={Login} />
          <Route path="/feet" Component={Feet} />
          <Route path="/hidden" Component={Hidden} />
          <Route path={"/inscription"} Component={NewGuy} />
      </Routes>
    </Router>
  );
}

export default App;
