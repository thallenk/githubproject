import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
  } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import repo from './repositoriesStore';
import logger from './middleware/logger';

// using persist to persist the datas even rederecting pages.
  const persistConfig = {
    key: 'root',
    storage:storage,
    version: 1
  };
  
  // middleware
  const middleware = [...getDefaultMiddleware(), logger];
  
  // reducer
  const reducer = combineReducers({  repo: persistReducer(persistConfig, repo) });

  // sotre
  const store = configureStore({ reducer, middleware });
  
  export default store;