// @flow
import React from 'react';
import { connect } from 'react-redux';
import RichTextEditor from 'react-rte';
import { type State } from '../reducers';
import { type Dispatch, type Note, type RouteProps } from '../types';
import { noteActions } from '../actions';

type ReduxProps = { note?: Note };
type ActionProps = { getNoteByID: (id: number) => void };
type Props = ReduxProps & ActionProps & RouteProps;
type EditorState = { value: any };

export class NoteEditor extends React.Component<Props, EditorState> {
  state = {
    value: RichTextEditor.createEmptyValue(),
  };

  onChange = (value: any) => {
    this.setState({ value });

    // if (this.props.onChange) {
    //   this.props.onChange(value.toString('html'));
    // }
  };

  componentDidMount() {
    const { getNoteByID } = this.props;
    const { id } = this.props.match.params.id;
    getNoteByID(id);
  }

  componentDidUpdate() {
    const { note } = this.props;
    if (note != null) {
      this.setState({
        value: RichTextEditor.createValueFromString(note.text, 'markdown'),
      });
    }
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

const mapStateToProps = (state: State): ReduxProps => ({ note: state.note.note });

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => {
  return {
    getNoteByID: (id: number) => dispatch(noteActions.getNoteByID(id)),
  };
};

connect(mapStateToProps, mapDispatchToProps)(NoteEditor);
