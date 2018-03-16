import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegistrationPage from '../Pages/RegistrationPage';
<<<<<<< HEAD
import HomePage from '../Pages/HomePage';
=======
import Home from '../Pages/Home';
>>>>>>> Registrationform changed due to the latest design.
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/registration" component={RegistrationPage} />
<<<<<<< HEAD
      <Route path="/" component={HomePage} />
=======
      <Route path="/" component={Home} />
>>>>>>> Registrationform changed due to the latest design.
    </Switch>
  );
};

export default App;
