// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import { Layout, Tabs, Button } from 'antd';
import { NoteList, Header } from '../components';

const { Content, Footer } = Layout;
const TabPane = Tabs.TabPane;

type Props = {
  activeTabKey: 'shared' | 'notes',
};

export class HomePage extends React.Component<Props> {
  static defaultProps = {
    activeTabKey: 'notes',
  };

  render() {
    const addNoteButton = <Button>New Note</Button>;
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header />
        <Content
          style={{ padding: '50px', alignItems: 'center', justifyContent: 'center' }}>
          <Tabs
            defaultActiveKey={this.props.activeTabKey}
            tabBarExtraContent={addNoteButton}
            style={{ width: '80%', margin: '0 auto' }}>
            <TabPane tab="My Notes" key="notes">
              <Route exact path="/" component={NoteList} />
            </TabPane>
            <TabPane tab="Shared Notes" key="shared">
              Content of Shared Notes
            </TabPane>
          </Tabs>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Cogito Notes ©2018 Created by Mate Papp
        </Footer>
      </Layout>
    );
  }
}
