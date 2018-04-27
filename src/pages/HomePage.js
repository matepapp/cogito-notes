// @flow
import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { PATH } from '../constants';
import { Header, NotesTab, NoteContainer } from '../components';

const { Content, Footer } = Layout;

export class HomePage extends React.Component<{}> {
  render() {
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header />
        <Content
          style={{ padding: '50px', alignItems: 'center', justifyContent: 'center' }}>
          <Switch>
            <Route exact path={PATH.NOTES} component={NotesTab} />
            <Route exact path={PATH.SHARED} component={NotesTab} />
            <Route path={`${PATH.NOTES}/:id`} component={NoteContainer} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Cogito Notes ©2018 Created by Mate Papp
        </Footer>
      </Layout>
    );
  }
}
