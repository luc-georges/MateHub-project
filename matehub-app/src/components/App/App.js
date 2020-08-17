import React from 'react';
import './App.scss';
import "semantic-ui-css/semantic.min.css";

/* Import components */
import NavBar from '../NavBar/NavBar';
import EventBar from '../EventBar/EventBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="middle">Temporaire</div>
      <EventBar />
    </div>
  );
}

export default App;
