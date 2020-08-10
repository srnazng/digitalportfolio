import React from 'react';
import Main from './Main.js';
import "./App.css";

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
      </Switch>
    </Router>
  );
}

export default App;