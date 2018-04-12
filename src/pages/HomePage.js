// @flow
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { NoteList, NoteEditor } from '../components';
import { authActions } from '../actions';
import { Dispatch } from '../types';

const { Content, Sider } = Layout;
const MenuItem = Menu.Item;

type State = {
  collapsed: boolean,
};

type Props = {
  dispatch: Dispatch,
};

class Home extends React.Component<Props, State> {
  state: State = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  onMenuItemSelect = (object: Object) => {
    if (object.key === 'logout') {
      this.props.dispatch(authActions.logout());
    }
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            onSelect={this.onMenuItemSelect}>
            <MenuItem key="notes">
              <Icon type="pie-chart" />
              <span>Note List</span>
              <Link to="/notes" />
            </MenuItem>
            <MenuItem key="logout">
              <Icon type="logout" />
              <span>Log out</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px', textAlign: 'center' }}>
            <Route exact path="/notes" component={NoteList} />
            <Route
              path="/notes/:title"
              render={routeProps => (
                <NoteEditor
                  {...routeProps}
                  title={routeProps.match.params.title}
                  readOnly={Math.random() >= 0.5}
                />
              )}
            />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export const HomePage = connect(null)(Home);