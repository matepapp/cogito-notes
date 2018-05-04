// @flow
import React from 'react';
import RichTextEditor from 'react-rte';

type Props = {
  readOnly: boolean,
  value: string,
  onValueChange: (value: string) => void,
};

type EditorState = { value: any };

const toolbarConfig = {
  display: [
    'INLINE_STYLE_BUTTONS',
    'BLOCK_TYPE_BUTTONS',
    'BLOCK_TYPE_DROPDOWN',
    'HISTORY_BUTTONS',
  ],
  INLINE_STYLE_BUTTONS: [
    { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: 'Normal', style: 'unstyled' },
    { label: 'Heading Large', style: 'header-one' },
    { label: 'Heading Medium', style: 'header-two' },
    { label: 'Heading Small', style: 'header-three' },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
  ],
};

export default class NoteEditor extends React.Component<Props, EditorState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: RichTextEditor.createValueFromString(props.value, 'markdown'),
    };
  }

  onChange = (value: any) => {
    this.setState({ value });
    this.props.onValueChange(value.toString('markdown'));
  };

  render() {
    return (
      <RichTextEditor
        toolbarConfig={toolbarConfig}
        readOnly={this.props.readOnly}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}
