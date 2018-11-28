import { combineReducers } from 'redux';
import resourcesReducer from './resources.reducer';
import awardsReducer from './awards.reducer';
import boardofdirectorsReducer from './boardofdirectors.reducer';
import programsReducer from './programs.reducer';

export default combineReducers({
  awards: awardsReducer,
  boardOfDirectors: boardofdirectorsReducer,
  programs: programsReducer,
  resources: resourcesReducer
});
