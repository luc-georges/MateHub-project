// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// == Import : local
import rootReducer from './reducers/reducers';
import eventsRequestMW from './middlewares/eventsRequestMW';
import usersRequestMW from './middlewares/usersRequestMW';

// == Configuration redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    eventsRequestMW,
    usersRequestMW
    // secondMiddleware,
  )
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

// == Store
const store = createStore(persistedReducer, enhancers);

const persistor = persistStore(store);

// == Export
export { store, persistor };
