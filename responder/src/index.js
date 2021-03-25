import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './index.scss';


import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/landing" component={LandingPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);