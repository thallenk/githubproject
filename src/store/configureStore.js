import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
  } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
  import repo from './repositoriesStore';
  import logger from './middleware/logger';

  const persistConfig = {
    key: 'root',
    storage:storage,
    version: 1
  };
  
  
  const middleware = [...getDefaultMiddleware(), logger];
  
  const reducer = combineReducers({  repo: persistReducer(persistConfig, repo) });
  const store = configureStore({ reducer, middleware });
  
  export default store;