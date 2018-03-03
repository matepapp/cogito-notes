// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { Provider, Heading, Button } from 'rebass';

const App = props => (
  <Provider>
    <Heading>Cogito Notes 📝</Heading>
    <Button>Push the button!</Button>
  </Provider>
);

export default App;
