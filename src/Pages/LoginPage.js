import React from 'react';
import RegistrationCard from '../Components/RegistrationCard';
import { Layout, Row, Col } from 'antd';
import logo from '../Resources/img/logo.png';
const { Header, Footer, Content } = Layout;

const LoginPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Row>
          <Col span={10}>
            <img src={logo} alt="logo" />
          </Col>
        </Row>
      </Header>
      <Content style={{ paddingTop: 60 }}>
        <Row type="flex" justify="center">
          <Col xs={20} sm={16} md={12} lg={8} xl={8}>
            <RegistrationCard />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default LoginPage;
