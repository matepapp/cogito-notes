// @flow
import React from 'react';
import { Layout, Icon, Popover, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import type { Dispatch } from '../../types';
import type { State } from '../../reducers';
import { authActions } from '../../actions';
import { BorderlessButton } from '../presentational';
import logo from '../../resources/img/logo.svg';
import { PATH } from '../../constants';

const styles = {
  layout: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: '0 10px',
    boxShadow: '0px 1px 20px 20px #0000001A',
  },
  logo: {
    width: '300px',
    height: '60%',
  },
};

type Props = { fullName: string };
type ActionProps = { logOut: () => void };
type HeaderState = { popoverVisible: boolean };

class Header extends React.Component<Props & ActionProps, HeaderState> {
  state = {
    popoverVisible: false,
  };

  onButtonClick = () => {
    this.setState({ popoverVisible: false });
    this.props.logOut();
  };

  handlePopoverChange = (visible: boolean) => {
    this.setState({ popoverVisible: visible });
  };

  render() {
    return (
      <Layout.Header style={styles.layout}>
        <Row type="flex" justify="end">
          <Col span={8}>
            <Link to={PATH.NOTES}>
              <img src={logo} alt="logo" style={styles.logo} />
            </Link>
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
                {this.props.fullName}
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
  const fullName = state.auth.user
    ? `${state.auth.user.first_name} ${state.auth.user.last_name}`
    : '';

  return { fullName };
};

const mapDispathToProps = (dispatch: Dispatch): ActionProps => ({
  logOut: () => dispatch(authActions.logout()),
});

export default connect(mapStateToProps, mapDispathToProps)(Header);
