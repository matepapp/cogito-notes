import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import NoteList from '../Components/NoteList';
import NoteEditor from '../Components/NoteEditor';
const { Content, Sider } = Layout;

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
              <Link to="/registration">Go back to Login!</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Route path="/notes" component={NoteList} />
            <Route
              path="/note/:title"
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

export default HomePage;
