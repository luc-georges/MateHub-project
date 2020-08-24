import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * Import css
 */
import './App.scss';
import 'semantic-ui-css/semantic.min.css';

/* Import components */
import NavBar from '../NavBar/NavBar';
import EventBar from '../../containers/EventBarContainer';
import HomePage from '../../containers/HomePageContainer';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import LoginPage from '../../containers/LoginPageContainer';
import ContactPage from '../ContactPage/ContactPage';
import CreateEvent from '../CreateEventPage/CreateEventPage';
import CreateEventPage from '../CreateEventPage/CreateEventPage';
import SearchEventPage from '../SearchEventPage/SearchEventPage';

/**
 * composant principale de l'application
 * @component
 * @param {Object} param0 
 */
function App({ getEvents, getTopUsers, checkAuth, isLogged }) {
  // eslint-disable-next-line
  useEffect(() => {
    getEvents();
    getTopUsers();
    checkAuth();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/registration">
          <RegistrationPage />
        </Route>
        <Route exact path="/login">
          {isLogged ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route exact path="/createevent">
          <CreateEventPage />
        </Route>
        <Route exact path="/searchevent">
          <SearchEventPage />
        </Route>
      </Switch>
      <EventBar />
    </div>
  );
}

export default App;

// PG_URL=postgres://matehub:matehub@localhost:5432/matehub
