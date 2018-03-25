import React from 'react';
import { Layout, Row, Col, Tabs } from 'antd';
import { RegistrationForm, LoginForm } from '../components';
import logo from '../resources/img/logo.svg';

const TabPane = Tabs.TabPane;
const { Content } = Layout;

const styleLogo = {
  marginTop: 50,
  width: '25%',
  height: '25%',
};

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
};

export default class WelcomePage extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Row style={styleCenter}>
          <img src={logo} alt="logo" style={styleLogo} />
        </Row>
        <Content style={{ paddingTop: 70 }}>
          <Row style={styleCenter}>
            <Col xs={20} sm={16} md={12} lg={8} xl={8}>
              <Tabs defaultActiveKey="login" style={{ textAlign: 'center' }}>
                <TabPane tab="Login" key="login">
                  <LoginForm />
                </TabPane>
                <TabPane tab="Registration" key="registration">
                  <RegistrationForm />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
