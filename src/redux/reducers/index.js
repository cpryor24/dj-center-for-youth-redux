import { combineReducers } from 'redux';
import resourcesReducer from './resources.reducer';
import awardsReducer from './awards.reducer';
import boardofdirectorsReducer from './boardofdirectors.reducer';
import communityReducer from './community.reducer';
import eventsReducer from './events.reducer';
import grantorsReducer from './grantors.reducer';
import photosReducer from './photos.reducer';
import programsReducer from './programs.reducer';
import secondaryProgramsReducer from './secondaryprograms.reducer';
import youtubeReducer from './youtube.reducer';

export default combineReducers({
  awards: awardsReducer,
  boardOfDirectors: boardofdirectorsReducer,
  communityPartners: communityReducer,
  events: eventsReducer,
  grantors: grantorsReducer,
  photos: photosReducer,
  programs: programsReducer,
  resources: resourcesReducer,
  secondaryPrograms: secondaryProgramsReducer,
  youtubeVideos: youtubeReducer
});
