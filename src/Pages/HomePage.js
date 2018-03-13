import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import NoteList from '../Components/NoteList';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class HomePage extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Log out</span>
              <Link to="/">Go back to Login!</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <NoteList />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default HomePage;
