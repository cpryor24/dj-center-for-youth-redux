import { combineReducers } from 'redux';
import resourcesReducer from './resources.reducer';
import awardsReducer from './awards.reducer';

export default combineReducers({
  resources: resourcesReducer,
  // awards: awardsReducer
});
