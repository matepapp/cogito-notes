// @flow
import React from 'react';
import { Layout, Row, Col, Tabs } from 'antd';
import { RegistrationForm, LoginForm } from '../components';
import { pathConstants } from '../constants';
import { type RouteProps } from '../types';
import logo from '../resources/img/logo.svg';

const TabPane = Tabs.TabPane;
const { Content } = Layout;

export class WelcomePage extends React.Component<RouteProps> {
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
              <Tabs
                defaultActiveKey={this.props.match.path}
                style={{ textAlign: 'center' }}>
                <TabPane tab="Login" key={pathConstants.LOGIN}>
                  <LoginForm />
                </TabPane>
                <TabPane tab="Registration" key={pathConstants.REGISTRATION}>
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
