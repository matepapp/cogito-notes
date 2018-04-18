// @flow
import React from 'react';
import { connect } from 'react-redux';
import RichTextEditor from 'react-rte';
import { type State } from '../reducers';
import { Dispatch } from '../types';
import { noteActions } from '../actions';

type Props = {
  id: number,
  title: ?string,
  text: ?string,
  readOnly: ?boolean,
  dispatch?: Dispatch,
};

type EditorState = {
  value: any,
};

export class NoteEditor extends React.Component<Props, EditorState> {
  state = {
    value: RichTextEditor.createEmptyValue(),
  };

  defaultProps = {
    title: '',
    text: '',
    readOnly: true,
  };

  onChange = (value: any) => {
    this.setState({ value });

    // if (this.props.onChange) {
    //   this.props.onChange(value.toString('html'));
    // }
  };

  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(noteActions.getNoteByID(id));
    this.setState({
      value: RichTextEditor.createValueFromString(this.props.title, 'markdown'),
    });
  }

  render() {
    const { text, title, readOnly } = this.props;
    return (
      <RichTextEditor readOnly={readOnly} value={title + text} onChange={this.onChange} />
    );
  }
}

const mapStateToProps = (state: State): Props => {
  return {
    title: state.note.note.title,
    id: state.note.note.id,
    text: state.note.note.text,
    // TODO: implement editable logic
    // const readOnly = state.note.note ? (state.note.note.title) : '';
    readOnly: false,
  };
};

connect(mapStateToProps)(NoteEditor);
