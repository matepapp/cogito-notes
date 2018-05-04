// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import { Tabs, Button } from 'antd';
import { PATH } from '../constants';
import { NoteList } from '../components';
import type { RouteProps } from '../types';

const TabPane = Tabs.TabPane;

export const NotesTab = (props: RouteProps) => {
  const addNoteButton = <Button>New Note</Button>;
  return (
    <Tabs
      defaultActiveKey={props.match.path}
      tabBarExtraContent={addNoteButton}
      style={{ width: '80%', margin: '0 auto' }}>
      <TabPane tab="My Notes" key={PATH.NOTES}>
        <Route exact path={PATH.NOTES} component={NoteList} />
      </TabPane>
      <TabPane tab="Shared Notes" key={PATH.SHARED}>
        Content of Shared Notes
      </TabPane>
    </Tabs>
  );
};
