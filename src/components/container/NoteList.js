// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import { connect } from 'react-redux';
import { NoteCard, LoadingCardList } from '../';
import { PATH } from '../../constants';
import type { Note, Dispatch, RouteProps } from '../../types';
import type { State } from '../../reducers';
import { noteActions } from '../../actions';

const styles = {
  grid: { gutter: 20, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 },
};

type Props = {
  loading: boolean,
  error: ?string,
  notes: ?Array<Note>,
};

type ActionProps = { loadNotes: () => void };

class NoteList extends Component<Props & ActionProps & RouteProps> {
  componentDidMount() {
    this.props.loadNotes();
  }

  render() {
    const { notes, loading } = this.props;
    return !loading || !notes ? (
      <LoadingCardList />
    ) : (
      <List
        grid={styles.grid}
        dataSource={notes}
        renderItem={(note: Note) => (
          <List.Item>
            <Link to={`${PATH.NOTES}/${note.id}`}>
              <NoteCard title={note.title} author="John Doe" description={note.text} />
            </Link>
          </List.Item>
        )}
      />
    );
  }
}

const mapStateToProps = (state: State): Props => {
  return {
    loading: state.note.loading,
    notes: state.note.notes,
    error: state.note.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => {
  return {
    loadNotes: () => dispatch(noteActions.list()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
