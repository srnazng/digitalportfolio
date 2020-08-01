import React from 'react';
import Main from './Main.js';
import About from './About.js';
import Submissions from './Submissions.js';
import Sponsors from './Sponsors.js'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/About" component={About} />
        <Route path="/Submissions" component={Submissions} />
        <Route path="/Sponsors" component={Sponsors} />
      </Switch>
    </Router>
  );
}

export default App;