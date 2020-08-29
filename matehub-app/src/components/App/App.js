import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * Import css
 */
import './App.scss';
import 'semantic-ui-css/semantic.min.css';

/* Import components */
import NavBar from '../../containers/NavBarContainer';
import EventBar from '../../containers/EventBarContainer';
import HomePage from '../../containers/HomePageContainer';
import RegistrationPage from '../../containers/RegistrationPageContainer';
import LoginPage from '../../containers/LoginPageContainer';
import ContactPage from '../ContactPage/ContactPage';
import CreateEventPage from '../../containers/CreateEventPageContainer';
import SearchEventPage from '../SearchEventPage/SearchEventPage';
import ProfilePage from '../../containers/ProfilePageContainer';
import PersonnalProfilePage from '../../containers/PersonnalProfilePageContainer';
import GettingStarted from '../GettingStarted/GettingStarted';
/**
 * composant principale de l'application
 * @component
 * @param {Object} param0
 */
function App({
  getEvents,
  getTopUsers,
  checkAuth,
  getNews,
  isLogged,
  registered,
}) {
  // eslint-disable-next-line
  useEffect(() => {
    getNews();
    getEvents();
    getTopUsers();
    checkAuth();
    // getUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/profile/:name" component={ProfilePage} />
        <Route
          exact
          path="/personnalprofile"
          component={PersonnalProfilePage}
        />
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/registration">
          {registered ? <Redirect to="/login" /> : <RegistrationPage />}
        </Route>
        <Route exact path="/login">
          {isLogged ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route exact path="/createevent">
          {isLogged ? <CreateEventPage /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/searchevent">
          <SearchEventPage />
        </Route>
        <Route exact path="/gettingstarted">
          <GettingStarted />
        </Route>
      </Switch>
      <EventBar />
    </div>
  );
}

export default App;

// PG_URL=postgres://matehub:matehub@localhost:5432/matehub
