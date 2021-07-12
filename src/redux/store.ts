import { createStore, Store } from 'redux';
import { persistStore, persistReducer as persist, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { rootReducer } from './reducers';
import middleware from './middleware';

const composeEnhancers = composeWithDevTools({ trace: true });

let store: Store;
let persistor: Persistor;

type InitRedux = {
  store: Store;
  persistor: Persistor;
};

export const initRedux = (persistKey: string, initialState?: Record<any, any>): InitRedux => {
  const persistConfig = {
    key: persistKey,
    storage,
  };

  store = createStore(persist(persistConfig, rootReducer), initialState, composeEnhancers(middleware));
  persistor = persistStore(store);
  return { store, persistor };
};

export const getStore = (): Store => {
  return store;
};
