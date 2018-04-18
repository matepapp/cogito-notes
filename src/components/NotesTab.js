// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import { Tabs, Button } from 'antd';
import { NoteList } from '../components';

const TabPane = Tabs.TabPane;

type Props = {
  activeTabKey: 'shared' | 'notes',
};

export const NotesTab = (props: Props) => {
  const addNoteButton = <Button>New Note</Button>;
  return (
    <Tabs
      defaultActiveKey={props.activeTabKey}
      tabBarExtraContent={addNoteButton}
      style={{ width: '80%', margin: '0 auto' }}>
      <TabPane tab="My Notes" key="notes">
        <Route exact path="/" component={NoteList} />
      </TabPane>
      <TabPane tab="Shared Notes" key="shared">
        Content of Shared Notes
      </TabPane>
    </Tabs>
  );
};

NotesTab.defaultProps = {
  activeTabKey: 'notes',
};
