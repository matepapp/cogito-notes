import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegistrationPage from '../Pages/RegistrationPage';
import Home from '../Pages/Home';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/registration" component={RegistrationPage} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;
