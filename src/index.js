import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import { fetchAwards } from './redux/actions/awards.actions';
import { fetchBoardOfDirectors } from './redux/actions/boardofdirectors.actions';
import { fetchCommunityPartners } from './redux/actions/community.actions';
import { fetchEvents } from './redux/actions/events.actions';
import { fetchGrantors } from './redux/actions/grantors.actions';
import { fetchPhotos } from './redux/actions/photos.actions';
import { fetchPrograms } from './redux/actions/programs.actions';
import { fetchResources } from './redux/actions/resources.actions';
import { fetchServiceLearning } from './redux/actions/servicelearning.actions';
import { fetchYoutube } from './redux/actions/youtube.actions';

store.dispatch( fetchAwards() );
store.dispatch( fetchBoardOfDirectors() );
store.dispatch( fetchCommunityPartners() );
store.dispatch( fetchEvents() );
store.dispatch( fetchGrantors() );
store.dispatch( fetchPhotos() );
store.dispatch( fetchPrograms() );
store.dispatch( fetchResources() );
store.dispatch( fetchServiceLearning() );
store.dispatch( fetchYoutube() );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
