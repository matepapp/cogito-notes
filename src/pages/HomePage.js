// @flow
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout, Menu, Icon, Tabs, Button, Popover } from 'antd';
import { connect } from 'react-redux';
import { NoteList, NoteEditor } from '../components';
import { authActions } from '../actions';
import { Dispatch } from '../types';
import logo from '../resources/img/logo.svg';

const { Content, Sider, Footer, Header } = Layout;
const TabPane = Tabs.TabPane;
const MenuItem = Menu.Item;

type State = {
  collapsed: boolean,
  popoverVisible: boolean,
};

type Props = {
  dispatch: Dispatch,
};

class Home extends React.Component<Props, State> {
  state: State = {
    collapsed: false,
    popoverVisible: false,
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  onMenuItemSelect = (object: Object) => {
    if (object.key === 'logout') {
      this.props.dispatch(authActions.logout());
    }
  };

  onPopoverClick = () => {
    this.setState(prevState => {
      return { ...prevState, popoverVisible: false };
    });
  };

  handlePopoverChange = (visible: boolean) => {
    this.setState(prevState => {
      return { ...prevState, popoverVisible: visible };
    });
  };

  render() {
    const operations = <Button>Extra Action</Button>;
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header
          style={{
            backgroundColor: '#FFF',
            padding: '0',
            boxShadow: '0px 1px 20px 20px #00000019',
          }}>
          <img src={logo} alt="logo" style={{ minWidth: '200px', height: '50%' }} />
          <Popover
            content={<a onClick={this.onPopoverClick}>Sign out</a>}
            trigger="click"
            visible={this.state.popoverVisible}
            onVisibleChange={this.handlePopoverChange}>
            <Button icon="user" type="dashed">
              Kiss Bela
              <Icon type="down" />
            </Button>
          </Popover>
        </Header>
        <Content style={{ padding: '50px' }}>
          <Tabs tabBarExtraContent={operations}>
            <TabPane tab="Tab 1" key="1">
              Content of tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of tab 2
            </TabPane>
          </Tabs>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Cogito Notes ©2018 Created by Mate Papp
        </Footer>
      </Layout>
      // <Layout >
      //   <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
      //     <Menu
      //       theme="dark"
      //       defaultSelectedKeys={['1']}
      //       mode="inline"
      //       onSelect={this.onMenuItemSelect}>
      //       <MenuItem key="notes">
      //         <Icon type="pie-chart" />
      //         <span>Note List</span>
      //         <Link to="/notes" />
      //       </MenuItem>
      //       <MenuItem key="logout">
      //         <Icon type="logout" />
      //         <span>Log out</span>
      //       </MenuItem>
      //     </Menu>
      //   </Sider>
      //   <Layout>
      //     <Content style={{ margin: '0 16px', textAlign: 'center' }}>
      //       <Route exact path="/notes" component={NoteList} />
      //       <Route
      //         path="/notes/:title"
      //         render={routeProps => (
      //           <NoteEditor
      //             {...routeProps}
      //             title={routeProps.match.params.title}
      //             readOnly={Math.random() >= 0.5}
      //           />
      //         )}
      //       />
      //     </Content>
      //   </Layout>
      // </Layout>
    );
  }
}

export const HomePage = connect(null)(Home);
