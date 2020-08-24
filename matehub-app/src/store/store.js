// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// == Import : local
import rootReducer from './reducers/reducers';
import eventsRequestMW from './middlewares/eventsRequestMW';
import usersRequestMW from './middlewares/usersRequestMW';
import authRequestMW from './middlewares/authRequestMW';
import newsRequestMW from './middlewares/newsRequestMW';

// == Configuration redux-persist
const persistConfig = {
  key: "root",
  storage,
  timeout: 1000,
};

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    eventsRequestMW,
    usersRequestMW,
    authRequestMW,
    newsRequestMW
    // secondMiddleware,
  )
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

// == Store
const store = createStore(persistedReducer, enhancers);

const persistor = persistStore(store);

// == Export
export { store, persistor };
