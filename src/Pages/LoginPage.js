import React from 'react';
import WrappedNormalLoginForm from '../Components/WrappedNormalLoginForm';
import { Layout, Row, Col } from 'antd';
import logo from '../Resources/img/logo.svg';

const { Header, Content } = Layout;

const LoginPage = () => {
  const styleLogo = {
    marginTop: 50,
    width: '25%',
    height: '25%',
  };

  const styleCenter = {
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Row style={styleCenter}>
        <img src={logo} alt="logo" style={styleLogo} />
      </Row>
      <Content style={{ paddingTop: 70 }}>
        <Row style={styleCenter}>
          <Col xs={20} sm={16} md={12} lg={8} xl={8}>
            <WrappedNormalLoginForm style={{}} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default LoginPage;
