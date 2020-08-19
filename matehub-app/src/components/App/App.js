import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';

/* Import components */
import NavBar from '../NavBar/NavBar';
// import EventBar from '../EventBar/EventBar';
import EventBar from '../../containers/EventBarContainer';
import HomePage from '../Homepage/HomePage';
import 'semantic-ui-css/semantic.min.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <EventBar />
    </div>
  );
}

export default App;

// PG_URL=postgres://matehub:matehub@localhost:5432/matehub
