import { combineReducers } from '@reduxjs/toolkit';
import healthStatusReducer from './reducers/healthStatusReducer';

const rootReducer = combineReducers({
  healthStatus: healthStatusReducer,
});

export default rootReducer;
