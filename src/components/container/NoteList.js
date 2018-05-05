// @flow
import React, { Component } from 'react';
import { List } from 'antd';
import { connect } from 'react-redux';
import { NoteCard, LoadingCardList } from '../';
import type { Note, Dispatch, RouteProps } from '../../types';
import type { State } from '../../reducers';
import { noteListActions, notificationActions } from '../../actions';

const styles = {
  grid: { gutter: 20, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 },
};

type Props = {
  loading: boolean,
  error?: string,
  notes?: Array<Note>,
};

type ActionProps = {
  copyURLNotification: (message: string) => void,
  loadNotes: () => void,
};

class NoteList extends Component<Props & ActionProps & RouteProps> {
  componentDidMount() {
    this.props.loadNotes();
  }

  onNoteShare = (note: Note) => {
    document.addEventListener('copy', event => {
      event.clipboardData.setData('text/plain', note.url);
      event.preventDefault();
    });
    document.execCommand('copy');
    document.removeEventListener('copy', event => event.preventDefault());
    this.props.copyURLNotification(`Note's link copied to clipboard`);
  };

  render() {
    const { notes, loading } = this.props;
    return loading ? (
      <LoadingCardList />
    ) : (
      <List
        grid={styles.grid}
        dataSource={notes}
        renderItem={(note: Note) => (
          <List.Item>
            <NoteCard
              id={note.id}
              title={note.title}
              // TODO: Refactor owner
              author="John Doe"
              // TODO: Refactor to desciption
              description={note.text.slice(0, 200)}
              creationDate={new Date(note.created).toLocaleDateString()}
              onShareButton={() => this.onNoteShare(note)}
            />
          </List.Item>
        )}
      />
    );
  }
}

const mapStateToProps = (state: State): Props => ({
  loading: state.noteList.loading,
  notes: state.noteList.notes,
  error: state.noteList.error,
});

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  copyURLNotification: (message: string) =>
    dispatch(notificationActions.success(message)),
  loadNotes: () => dispatch(noteListActions.list()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
