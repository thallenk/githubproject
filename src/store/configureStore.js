import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
  } from '@reduxjs/toolkit';
  import repo from './repositoriesStore';
  import logger from './middleware/logger';
  
  const middleware = [...getDefaultMiddleware(), logger];
  
  const reducer = combineReducers({  repo });
  const store = configureStore({ reducer, middleware });
  
  export default store;