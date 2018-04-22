// @flow
import React from 'react';
import { Layout, Row, Col, Tabs } from 'antd';
import { connect } from 'react-redux';
import { RegistrationForm, LoginForm } from '../components';
import { type State } from '../reducers';
import { UserInfo } from '../types';
import logo from '../resources/img/logo.svg';

const TabPane = Tabs.TabPane;
const { Content } = Layout;

type Props = {
  user: ?UserInfo,
};

class Page extends React.Component<Props> {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={logo}
            alt="logo"
            style={{ marginTop: 50, width: '25%', height: '25%' }}
          />
        </Row>
        <Content style={{ paddingTop: 70 }}>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
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

const mapStateToProps = (state: State): Props => {
  return {
    user: state.auth.user,
  };
};

export const WelcomePage = connect(mapStateToProps)(Page);
