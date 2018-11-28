import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchPrograms } from './redux/actions/programs.actions';
import 'bootstrap/dist/css/bootstrap.css';

store.dispatch( fetchPrograms() );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
