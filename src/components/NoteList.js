// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import { connect } from 'react-redux';
import { NoteCard, LoadingCardList } from '.';
import { type Note, type Dispatch } from '../types';
import { noteActions } from '../actions';
import { type State } from '../reducers';

type Props = {
  loading: boolean,
  error: ?string,
  notes: ?Array<Note>,
  dispatch?: Dispatch,
};

class NoteListComponent extends Component<Props> {
  componentDidMount() {
    this.props.dispatch(noteActions.list());
  }

  render() {
    const { notes, loading } = this.props;
    return loading || notes == null ? (
      <LoadingCardList />
    ) : (
      <List
        grid={{ gutter: 20, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 }}
        dataSource={notes}
        renderItem={(note: Note) => (
          <List.Item>
            <Link to={`/notes/${note.id}`}>
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

export const NoteList = connect(mapStateToProps)(NoteListComponent);
