import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchResources } from './redux/actions/resources.actions';
import 'bootstrap/dist/css/bootstrap.css';

store.dispatch( fetchResources() );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
