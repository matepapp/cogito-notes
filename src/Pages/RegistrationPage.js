import React from 'react';
import RegistrationForm from '../Components/RegistrationForm';
import { Layout, Row, Col } from 'antd';
import logo from '../Resources/img/logo.svg';

const { Content } = Layout;

const RegistrationPage = () => {
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
            <RegistrationForm />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default RegistrationPage;
