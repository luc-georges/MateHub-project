import React from 'react';
import './App.scss';

/* Import components */
import NavBar from '../NavBar/NavBar';
import EventBar from '../EventBar/EventBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <EventBar />
    </div>
  );
}

export default App;
