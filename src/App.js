import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from './components/LandingPage/LandingPage'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
    </Router>
  );
}

export default App;
