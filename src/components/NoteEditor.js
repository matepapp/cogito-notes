// @flow
import React from 'react';
import { connect } from 'react-redux';
import RichTextEditor from 'react-rte';
import { type State } from '../reducers';
import { type Dispatch, type Note, type RouteProps } from '../types';
import { noteActions } from '../actions';

type ReduxProps = { note?: Note };
type ActionProps = { getNoteByID: (id: string) => void };
type Props = ReduxProps & ActionProps & RouteProps;
type EditorState = { value: any };

class Editor extends React.Component<Props, EditorState> {
  state = {
    value: RichTextEditor.createEmptyValue(),
  };

  onChange = (value: any) => {
    this.setState({ value });
  };

  componentWillReceiveProps(nextProps: Props) {
    const { note } = nextProps;
    if (note != null)
      this.setState({
        value: RichTextEditor.createValueFromString(note.text, 'markdown'),
      });
  }

  componentDidMount() {
    const { getNoteByID, match } = this.props;
    getNoteByID(match.params.id);
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
    getNoteByID: (id: string) => dispatch(noteActions.getNoteByID(id)),
  };
};

export const NoteEditor = connect(mapStateToProps, mapDispatchToProps)(Editor);
