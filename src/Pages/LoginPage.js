import React from 'react';
import WrappedNormalLoginForm from '../Components/WrappedNormalLoginForm';
import { Layout, Row, Col } from 'antd';
import logo from '../Resources/img/logo.png';
const { Header, Footer, Content } = Layout;

const LoginPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Row>
          <Col span={10} />
          <Col span={4} style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={logo} alt="logo" />
          </Col>
        </Row>
      </Header>
      <Content style={{ paddingTop: 60 }}>
        <Row type="flex" justify="center">
          <Col xs={20} sm={16} md={12} lg={8} xl={8}>
            <WrappedNormalLoginForm style={{}} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default LoginPage;
