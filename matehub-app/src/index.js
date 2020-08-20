import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
=======
import App from './containers/AppContainer';
>>>>>>> feature/data-from-reducer-to-homepage
import * as serviceWorker from './serviceWorker';

import App from './containers/AppContainer';
import store from './store/store';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
