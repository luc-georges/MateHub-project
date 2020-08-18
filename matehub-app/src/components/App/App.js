import React from 'react';
import './App.scss';
import "semantic-ui-css/semantic.min.css";

/* Import components */
import NavBar from '../NavBar/NavBar';
import EventBar from '../EventBar/EventBar';
import './App.css';
import HomePage from '../Homepage/HomePage';
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="middle">Temporaire</div>
      <EventBar />
      <header className="App-header">
        <HomePage />
      </header>
    </div>
  );
}

export default App;
