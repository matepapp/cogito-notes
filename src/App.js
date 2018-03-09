import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button
          type="primary"
          onClick={() => {
            alert('You tapped on button');
          }}>
          Button
        </Button>
      </div>
    );
  }
}

export default App;
