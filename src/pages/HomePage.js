// @flow
import React from 'react';
import { Layout } from 'antd';
import { Header, NotesTab } from '../components';

const { Content, Footer } = Layout;

export const HomePage = () => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header />
      <Content
        style={{ padding: '50px', alignItems: 'center', justifyContent: 'center' }}>
        <NotesTab />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Cogito Notes ©2018 Created by Mate Papp
      </Footer>
    </Layout>
  );
};
