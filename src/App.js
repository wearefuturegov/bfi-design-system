import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Pages/Home';
import Principles from './components/Pages/Principles';
import './App.scss';

class App extends Component {
  render() {
    return(
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/principles" component={Principles} />
        </Switch>
      </Router>
    );
  }
}

export default App;
