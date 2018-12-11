import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Awards from './components/lists/AwardsList';
import UpdateAward from './components/dashboard/updateAward';
import Board from './components/lists/BoardList';
import Community from './components/lists/CommunityList';
import Events from './components/lists/EventsList';
import Grantors from './components/lists/GrantorsList';
import Programs from './components/lists/ProgramsList';
import Photos from './components/lists/PhotosList';
import Resources from './components/lists/ResourcesList';
import ServiceLearning from './components/lists/ServiceLearningList';
import Youtube from './components/lists/YoutubeList';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/about' component={About} />
            <Route path='/awards/:id' component={UpdateAward} />
            <Route path='/awards' component={Awards} />
            <Route path='/boardofdirectors' component={Board} />
            <Route path='/communitypartners' component={Community} />
            <Route path='/events' component={Events} />
            <Route path='/grantors' component={Grantors} />
            <Route path='/programs' component={Programs} />
            <Route path='/photos' component={Photos} />
            <Route path='/resources' component={Resources} />
            <Route path='/servicelearning' component={ServiceLearning} />
            <Route path='/youtube' component={Youtube} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
