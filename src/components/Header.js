// @flow
import React from 'react';
import { Layout, Icon, Button, Popover } from 'antd';
import { connect } from 'react-redux';
import { Dispatch } from '../types';
import { authActions } from '../actions';
import { type State } from '../reducers';
import { BorderlessButton } from '.';
import logo from '../resources/img/logo.svg';

type Props = {
  username?: string,
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
          boxShadow: '0px 1px 20px 20px #0000001A',
        }}>
        <img src={logo} alt="logo" style={{ minWidth: '200px', height: '50%' }} />
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
      </Layout.Header>
    );
  }
}

const mapStateToProps = (state: State): Props => {
  return {
    username: state.auth.user.username,
  };
};

export const Header = connect(mapStateToProps)(HeaderComponent);
