import React from 'react';
import { Layout, Menu, Icon } from 'antd';
// import 'antd/es/layout/style/index.less'; // 因为使用了umi-plugin-react，所以我们不需要自己引入样式
import logo from '../../../assets/logo.png';
import './index.less';
import PageHeaderWrapper from './page-header-wrapper';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default function(props) {
  return (
    <Layout className="basic-layout">
      <Header
        className="basic-layout_header"
        style={{
          // TODO: 传入颜色
          backgroundColor: '#cc3333',
        }}
      >
        <div
          // TODO: 点击跳转到首页
          style={{
            // TODO: 计算宽度
            width: 230,
          }}
        >
          {/* TODO:传入logo */}
          <img className="basic-layout_header-logo" src={logo} alt="logo" />
          {/* TODO: 传入title */}
          <span className="basic-layout_header-title">管理系统</span>
        </div>
        <Menu
          // theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          className="basic-layout_header-menu"
          style={{
            // TODO: 传入颜色
            backgroundColor: '#cc3333',
            borderBottom: '1px solid #cc3333',
          }}
        >
          {/* TODO: 传入菜单 */}
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">实时监测</Menu.Item>
          <Menu.Item key="3">运行管理</Menu.Item>
          {/* TODO: 登录用户信息 */}
        </Menu>
      </Header>

      <Layout>
        {/* TODO: 传入宽度 */}
        <Sider breakpoint="lg" collapsible width={250} theme="dark">
          <Menu
            className="basic-layout_sider-menu"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content
        // TIP: 主要内容的滚动在这里
        // onScroll={() => {
        //   console.log(99);
        // }}
        >
          <PageHeaderWrapper />
          {props.children}
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
        </Content>
      </Layout>
    </Layout>
  );
}
