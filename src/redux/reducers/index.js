import { combineReducers } from 'redux';
import resourcesReducer from './resources.reducer';
import awardsReducer from './awards.reducer';
import boardofdirectorsReducer from './boardofdirectors.reducer';
import eventsReducer from './events.reducer';
import grantorsReducer from './grantors.reducer';
import programsReducer from './programs.reducer';
import secondaryProgramsReducer from './secondaryprograms.reducer';

export default combineReducers({
  awards: awardsReducer,
  boardOfDirectors: boardofdirectorsReducer,
  events: eventsReducer,
  grantors: grantorsReducer,
  programs: programsReducer,
  resources: resourcesReducer,
  secondaryprograms: secondaryProgramsReducer
});
