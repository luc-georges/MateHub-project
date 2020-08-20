import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Import css
 */
import './App.scss';
import 'semantic-ui-css/semantic.min.css';

/* Import components */
import NavBar from '../NavBar/NavBar';
import EventBar from '../../containers/EventBarContainer';
import HomePage from '../Homepage/HomePage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import ContactPage from '../ContactPage/ContactPage';

/**
 * composant principale de l'application
 * @component
 * @param {Object} param0 
 */
function App({ getEvents, getTopUsers }) {
  // eslint-disable-next-line
  useEffect(() => {
    getEvents();
    getTopUsers();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/registration">
          <RegistrationPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
      </Switch>
      <EventBar />
    </div>
  );
}

export default App;

// PG_URL=postgres://matehub:matehub@localhost:5432/matehub
