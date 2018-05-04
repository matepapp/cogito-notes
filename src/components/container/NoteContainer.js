/* @flow */
import React from 'react';
import { Spin, Row, Col } from 'antd';
import { connect } from 'react-redux';
import type { State } from '../../reducers';
import type { Dispatch, Note, RouteProps } from '../../types';
import { noteActions } from '../../actions';
import { NoteEditor, NoteHeader } from '../';
import { PATH } from '../../constants';

type ReduxProps = {
  loading: boolean,
  note?: Note,
};

type ActionProps = {
  getNoteByID: (id: string) => void,
  saveNote: (note: Note) => void,
};
type Props = ReduxProps & ActionProps & RouteProps;
type EditorState = { value: string };

class NoteContainer extends React.Component<Props, EditorState> {
  state = {
    value: '',
  };

  componentDidMount() {
    const { getNoteByID, match } = this.props;
    if (match.params.id && match.path !== PATH.NEW_NOTE) getNoteByID(match.params.id);
  }

  onEditorChanged = (value: string) => this.setState({ value });

  onSave = () => {
    const { note, saveNote } = this.props;
    if (note !== undefined) saveNote({ ...note, text: this.state.value });
  };

  renderSpinner = () => (
    <Row type="flex" justify="center">
      <Col span={12}>
        <Spin />
      </Col>
    </Row>
  );

  renderEditor = (note: Note) => (
    <div>
      <NoteHeader title={note.title} onSaveButton={this.onSave} />
      <Row type="flex" justify="center">
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <NoteEditor
            value={note.text}
            readOnly={note.is_edited}
            onValueChange={this.onEditorChanged}
          />
        </Col>
      </Row>
    </div>
  );

  render() {
    const { loading, note } = this.props;
    return !loading && note !== undefined
      ? this.renderEditor(note)
      : this.renderSpinner();
  }
}

const mapStateToProps = (state: State): ReduxProps => ({
  loading: state.note.loading,
  note: state.note.note,
});

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  getNoteByID: (id: string) => dispatch(noteActions.byID(id)),
  saveNote: (note: Note) => dispatch(noteActions.save(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
