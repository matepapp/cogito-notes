import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationCard from '../Components/RegistrationCard';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import logo from '../Resources/img/logo.png';
const { Header, Footer, Content } = Layout;

const LoginPage = () => {
  return (
    <Layout>
      <Header>
        <Row>
          <Col span={10}>
            <img src={logo} alt="logo" />
          </Col>
          <Col span={14} />
        </Row>
      </Header>
      <Content style={{ marginTop: 50 }}>
        <Row>
          <Col span={8} />
          <Col span={8}>
            <RegistrationCard />
          </Col>
          <Col span={8} />
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
};

export default LoginPage;
