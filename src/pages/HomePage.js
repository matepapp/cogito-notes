// @flow
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout, Tabs, Button } from 'antd';
import { connect } from 'react-redux';
import { NoteList, NoteEditor, Header } from '../components';
import { UserInfo } from '../types';
import { type State } from '../reducers';

const { Content, Footer } = Layout;
const TabPane = Tabs.TabPane;

class Home extends React.Component<{}> {
  render() {
    const operations = <Button>Extra Action</Button>;
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header username="Nagy Arpad" />
        <Content style={{ padding: '50px' }}>
          <Tabs tabBarExtraContent={operations}>
            <TabPane tab="Tab 1" key="1">
              Content of tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of tab 2
            </TabPane>
          </Tabs>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Cogito Notes ©2018 Created by Mate Papp
        </Footer>
      </Layout>
      //   <Layout>
      //     <Content style={{ margin: '0 16px', textAlign: 'center' }}>
      //       <Route exact path="/notes" component={NoteList} />
      //       <Route
      //         path="/notes/:title"
      //         render={routeProps => (
      //           <NoteEditor
      //             {...routeProps}
      //             title={routeProps.match.params.title}
      //             readOnly={Math.random() >= 0.5}
      //           />
      //         )}
      //       />
      //     </Content>
      //   </Layout>
      // </Layout>
    );
  }
}

export const HomePage = connect(null)(Home);
