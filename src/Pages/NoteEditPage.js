// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import NoteEditor from '../Components/NoteEditor';

const { Content, Sider } = Layout;

type Props = {
  noteTitle: string,
};

class NoteEditPage extends React.Component<Props> {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" />
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Route
              path="/note/:title"
              render={routeProps => (
                <NoteEditor {...routeProps} isReadOnly title="valami" />
              )}
            />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default NoteEditPage;
