// @flow
import React from 'react';
import { Button, Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { Header, NotesTab, NoteEditor } from '../components';

const { Content, Footer } = Layout;

export const HomePage = () => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header />
      <Content
        style={{ padding: '50px', alignItems: 'center', justifyContent: 'center' }}>
        <Switch>
          <Route exact path="/" component={NotesTab} />
          <Route path="/notes/:id" component={NoteEditor} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Cogito Notes ©2018 Created by Mate Papp
      </Footer>
    </Layout>
  );
};
