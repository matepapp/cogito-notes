// @flow
import React from 'react';
import { Layout, Icon, Popover, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { Dispatch } from '../types';
import { authActions } from '../actions';
import { type State } from '../reducers';
import { BorderlessButton } from '.';
import logo from '../resources/img/logo.svg';

type Props = {
  username: string,
  dispatch?: Dispatch,
};

type HeaderState = {
  popoverVisible: boolean,
};

class HeaderComponent extends React.Component<Props, HeaderState> {
  state = {
    popoverVisible: false,
  };

  onButtonClick = () => {
    this.setState({ popoverVisible: false });
    this.props.dispatch(authActions.logout());
  };

  handlePopoverChange = (visible: boolean) => {
    this.setState({ popoverVisible: visible });
  };

  render() {
    return (
      <Layout.Header
        style={{
          backgroundColor: '#FFF',
          width: '100%',
          padding: '0 10px',
          boxShadow: '0px 1px 20px 20px #0000001A',
        }}>
        <Row type="flex" justify="end">
          <Col span={8}>
            <img src={logo} alt="logo" style={{ width: '200px', height: '30%' }} />
          </Col>
          <Col span={4} offset={12}>
            <Popover
              content={
                <BorderlessButton icon="logout" onClick={this.onButtonClick}>
                  Sign Out
                </BorderlessButton>
              }
              trigger="click"
              visible={this.state.popoverVisible}
              onVisibleChange={this.handlePopoverChange}>
              <BorderlessButton icon="user">
                {this.props.username}
                <Icon type="down" />
              </BorderlessButton>
            </Popover>
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}

const mapStateToProps = (state: State): Props => {
  const username = state.auth.user ? state.auth.user.username : '';
  return { username };
};

export const Header = connect(mapStateToProps)(HeaderComponent);
