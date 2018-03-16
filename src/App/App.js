import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegistrationPage from '../Pages/RegistrationPage';
import HomePage from '../Pages/HomePage';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/registration" component={RegistrationPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
