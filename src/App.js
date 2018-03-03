import React from 'react';
import { Provider, Heading } from 'rebass';
import MyButton from './Components/Button';

const App = props => (
  <Provider>
    <Heading>Cogito Notes</Heading>
    <MyButton onClick={() => alert('Tapped on my button')} value="Push the button!" />
  </Provider>
);

export default App;
