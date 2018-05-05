// @flow
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Tabs, Button } from 'antd';
import { PATH } from '../../constants';
import { NoteList } from '../../components';
import type { RouteProps } from '../../types';

const TabPane = Tabs.TabPane;

const style = {
  width: '80%',
  margin: '0 auto',
};

export const NotesTab = (props: RouteProps) => {
  const addNoteButton = (
    <Link to={PATH.NEW_NOTE}>
      <Button>New Note</Button>
    </Link>
  );

  return (
    <Tabs
      defaultActiveKey={props.match.path}
      tabBarExtraContent={addNoteButton}
      style={style}>
      <TabPane tab="My Notes" key={PATH.NOTES}>
        <Route exact path={PATH.NOTES} component={NoteList} />
      </TabPane>
      <TabPane tab="Shared Notes" key={PATH.SHARED}>
        Content of Shared Notes
      </TabPane>
    </Tabs>
  );
};
