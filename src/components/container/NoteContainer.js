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
  isEditing?: boolean,
};

type ActionProps = {
  getNoteByID: (id: string) => void,
  saveNote: (note: Note) => void,
  editNote: (note: Note) => void,
  shareNote: (note: Note) => void,
};

type Props = ReduxProps & ActionProps & RouteProps;
type EditorState = {
  title: string,
  value: string,
};

class NoteContainer extends React.Component<Props, EditorState> {
  state = {
    value: '',
    title: '',
  };

  componentDidMount() {
    const { getNoteByID, match } = this.props;
    if (match.params.id && match.path !== PATH.NEW_NOTE) getNoteByID(match.params.id);
  }

  onEditorChange = (value: string) =>
    this.setState((prevState: EditorState) => ({ ...prevState, value }));

  onTitleChange = (title: string) =>
    this.setState((prevState: EditorState) => ({ ...prevState, title }));

  onSave = () => {
    const { note, saveNote } = this.props;
    const { value, title } = this.state;
    if (note !== undefined) saveNote({ ...note, text: value, title });
  };

  onEdit = () => {
    const { note, editNote } = this.props;
    if (note !== undefined) editNote(note);
  };

  onShare = () => {
    const { note, shareNote } = this.props;
    if (note !== undefined) shareNote(note);
  };

  renderSpinner = () => (
    <Row type="flex" justify="center">
      <Col span={12}>
        <Spin />
      </Col>
    </Row>
  );

  renderEditor = (title: string, text: string, readOnly: boolean, editing: boolean) => (
    <div>
      <NoteHeader
        title={title}
        editing={editing}
        readOnly={readOnly}
        onTitleChange={this.onTitleChange}
        onSaveButton={this.onSave}
        onEditButton={this.onEdit}
        onShareButton={this.onShare}
      />
      <Row type="flex" justify="center">
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <NoteEditor
            value={text}
            readOnly={!editing}
            onValueChange={this.onEditorChange}
          />
        </Col>
      </Row>
    </div>
  );

  render() {
    const { loading, note, isEditing, match } = this.props;
    const editing = isEditing !== undefined ? isEditing : false;

    if (loading) return this.renderSpinner();

    return note === undefined || match.path === PATH.NEW_NOTE
      ? this.renderEditor('', '', false, true)
      : this.renderEditor(note.title, note.text, false, editing);
  }
}

const mapStateToProps = (state: State): ReduxProps => ({
  loading: state.note.loading,
  note: state.note.note,
  isEditing: state.note.isEditing,
});

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  getNoteByID: (id: string) => dispatch(noteActions.byID(id)),
  saveNote: (note: Note) => dispatch(noteActions.save(note)),
  editNote: (note: Note) => dispatch(noteActions.edit(note)),
  shareNote: (note: Note) => dispatch(noteActions.share(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
