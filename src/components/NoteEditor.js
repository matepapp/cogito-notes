// @flow
import React from 'react';
import RichTextEditor from 'react-rte';

type Props = {
  title: string,
  readOnly: boolean,
  onChange: Function,
};

type State = {
  value: any,
};

export class NoteEditor extends React.Component<Props, State> {
  state = {
    value: RichTextEditor.createEmptyValue(),
  };

  onChange = (value: any) => {
    this.setState({ value });
    console.log(value.toString('markdown'));

    // if (this.props.onChange) {
    //   this.props.onChange(value.toString('html'));
    // }
  };

  componentDidMount() {
    this.setState({
      value: RichTextEditor.createValueFromString(this.props.title, 'markdown'),
    });
  }

  render() {
    return (
      <RichTextEditor
        readOnly={this.props.readOnly}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}