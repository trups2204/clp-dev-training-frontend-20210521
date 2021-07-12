import { combineReducers } from 'redux';

import { reducer as appReducer } from './app';

export const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
