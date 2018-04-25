// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import { Tabs, Button } from 'antd';
import { pathConstants } from '../constants';
import { NoteList } from '../components';
import { type RouteProps } from '../types';

const TabPane = Tabs.TabPane;

export const NotesTab = (props: RouteProps) => {
  const addNoteButton = <Button>New Note</Button>;
  return (
    <Tabs
      defaultActiveKey={props.match.path}
      tabBarExtraContent={addNoteButton}
      style={{ width: '80%', margin: '0 auto' }}>
      <TabPane tab="My Notes" key={pathConstants.NOTES}>
        <Route exact path={pathConstants.NOTES} component={NoteList} />
      </TabPane>
      <TabPane tab="Shared Notes" key={pathConstants.SHARED}>
        Content of Shared Notes
      </TabPane>
    </Tabs>
  );
};
