import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from '../Pages/WelcomePage';
import HomePage from '../Pages/HomePage';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/home" component={HomePage} />
    </Switch>
  );
};

export default App;
