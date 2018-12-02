import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Board from './components/Board';
import Community from './components/Community';
import Events from './components/Events';
import Grantors from './components/Grantors';
import Programs from './components/Programs';
import Photos from './components/Photos';
import Resources from './components/Resources';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/board' component={Board} />
          <Route path='/communitypartners' component={Community} />
          <Route path='/events' component={Events} />
          <Route path='/grantors' component={Grantors} />
          <Route path='/programs' component={Programs} />
          <Route path='/photos' component={Photos} />
          <Route path='/resources' component={Resources} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
