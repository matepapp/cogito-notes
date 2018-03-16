// @flow
import React from 'react';
import { Input } from 'antd';

type Props = {
  label: string,
  placeholder: string,
};

class InputRow extends React.Component<Props> {
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
