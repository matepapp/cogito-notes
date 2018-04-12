// @flow
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { PrivateRoute } from '../components';
import { history } from '../helpers';
import { HomePage, WelcomePage } from '../pages';
import './App.css';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/login" component={WelcomePage} />
      </Switch>
    </Router>
  );
};

export default App;
