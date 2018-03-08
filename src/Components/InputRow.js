import React from 'react';
import { Input } from 'antd';

class InputRow extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>{this.props.label}:</p>
        </div>
        <div>
          <Input placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
}

export default InputRow;
