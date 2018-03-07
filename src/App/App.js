import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import Home from '../Pages/Home';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default App;
