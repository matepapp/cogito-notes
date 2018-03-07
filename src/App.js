import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  handleButtonTap = () => {
    alert('You tapped on button');
  };

  render() {
    return (
      <div className="App">
        <Button type="primary" onClick={this.handleButtonTap}>
          Button
        </Button>

        <Button type="primary" onClick={this.handleButtonTap}>
          Button2
        </Button>
      </div>
    );
  }
}

export default App;
