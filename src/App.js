import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from './components/LandingPage/LandingPage'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Music from './components/Music/Music'
import Contact from './components/Contact/Contact'
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/work" component={Portfolio} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
