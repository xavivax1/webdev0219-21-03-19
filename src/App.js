import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Jumbotron from './components/Jumbotron';
import NoMatch from './pages/NoMatch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Jumbotron>
            <Navbar />
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route exact path="/about" component={ About }/>
              <Route exact path="/user/:username" component={ User }/>
              <Route component={ NoMatch }/>
            </Switch>
          </Jumbotron>
        </Router>
      </div>
    );
  }
}

export default App;
