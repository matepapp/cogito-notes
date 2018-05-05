// @flow
import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { PATH } from '../constants';
import { Header, NotesTab, NoteContainer } from '../components';

const styles = {
  layout: { minHeight: '100vh' },
  footer: { textAlign: 'center' },
  content: {
    padding: '50px',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const { Content, Footer } = Layout;

export class HomePage extends React.Component<{}> {
  render() {
    return (
      <Layout style={styles.layout}>
        <Header />
        <Content style={styles.content}>
          <Switch>
            <Route exact path={PATH.NOTES} component={NotesTab} />
            <Route exact path={PATH.SHARED} component={NotesTab} />
            <Route exact path={PATH.NEW_NOTE} component={NoteContainer} />
            <Route path={`${PATH.NOTES}/:id`} component={NoteContainer} />
          </Switch>
        </Content>
        <Footer style={styles.footer}>Cogito Notes ©2018 Created by Mate Papp</Footer>
      </Layout>
    );
  }
}
