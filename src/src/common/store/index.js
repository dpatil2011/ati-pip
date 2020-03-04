import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

export default (reducer, middleware) => {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['i18n'],
  };

  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = createStore(persistedReducer, applyMiddleware(middleware, thunk));
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};