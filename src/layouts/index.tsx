/*
 * @Description:
 * @Author: 李大玄
 * @Date: 2022-09-09 21:13:13
 * @FilePath: /devNews-web-view/src/layouts/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-10-29 16:47:23
 */
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { AutoComplete, Breadcrumb, Layout, Menu } from "antd";
// import store from '../store';
import Routers from 'src/routers/index';
import Side from './side';
import Header from './header';
import { Route, HashRouter, BrowserRouter } from "react-router-dom";
import { routerMenus } from 'src/routers/config';
import React, { Children } from "react";
const { Content, Sider } = Layout;
import _ from 'lodash';
import Login from '../pages/login';
import { getUserInfo } from '../store';

interface Props {
  children?: React.ReactElement | Array<React.ReactElement>;
  [key: string]: any;
}

interface State {
  fold: boolean;
  breadcrumb: Array<any>;
}

class Layouts extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      fold: false,
      breadcrumb: []
    };
    this.onChangeFoldStatus = this.onChangeFoldStatus.bind(this);
    this.getBreadcrumb = this.getBreadcrumb.bind(this);
  }

  private getLayoutClassName(): string {
    const name = ['app-layout-main'];
    if (this.state.fold) {
      name.push('fold');
    }
    return name.join(' ');
  }
  private onChangeFoldStatus(): void {
    const fold = !this.state.fold;
    this.setState({ fold });
  }
  private getBreadcrumb(): void {
    const selectedKeys: string = window.location.hash.replace('#', '') || '';
    let list = [];
    for (let i = 0; i < routerMenus.length; i++) {
      const children = [].concat(routerMenus[i].children || []);
      if (children.length) {
        for (let j = 0; j < children.length; j++) {
          if (children[j].path == selectedKeys) {
            list = [].concat(routerMenus[i] || [], children[j] || []);
            break;
          }
        }
      } else if (routerMenus[i].path == selectedKeys) {
        list = [routerMenus[i]];
      }
    }
    this.setState({
      breadcrumb: list
    });
  }
  UNSAFE_componentDidMount(): void {
    this.getBreadcrumb();
  }
  render(): React.ReactElement {
    const { breadcrumb } = this.state;
    console.log('getUserInfo()-----------', getUserInfo());

    const userInfo = getUserInfo() as any;
    if (!userInfo.token) {
      window.location.hash = '/login';
      return (
        <Login></Login>
      );
    }
    return (
      <Layout>
        <Header />
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Side getBreadcrumb={this.getBreadcrumb}></Side>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {
                _.map(breadcrumb, (item, index) => {
                  return (
                    <Breadcrumb.Item key={index}>{item.name}</Breadcrumb.Item>
                  );
                })
              }
            </Breadcrumb>
            <Content className="site-layout-background " style={{ padding: 24, margin: 0, minHeight: 280, overflowY: 'auto' }}>
              <Routers></Routers>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Layouts;