import React from 'react';
import { Input } from 'antd';

class InputRow extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.label}:</p>

        <Input placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default InputRow;
