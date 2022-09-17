/*
 * @Description: 系统左侧菜单
 * @Author: 李大玄
 * @Date: 2022-09-16 16:01:01
 * @FilePath: /devNews-web-view/src/layouts/side.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-17 15:16:30
 */

import _ from 'lodash';
import React from 'react';
import { Menu } from 'antd';
import * as routers from './router';
// import { useNavigate } from 'react-router';
// import IconFont from 'src/components/icon/index';
import { Route, HashRouter, BrowserRouter, useHistory, Link } from "react-router-dom";
import { routerMenus } from 'src/routers/config';
interface Props {
  fold?: boolean;
}


class Sider extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
    // this.onClickMenuItem = this.onClickMenuItem.bind(this);
  }
  onClickMenuItem = (data: any): void => {
    console.log('data', data);
    console.log(this.props);

    data = Object.assign({}, data);
    // const history = useHistory();
    // console.log('history', history);

    // // 页面跳转方法
    // history.push(data.key)
  };
  private getLabel(text: string): React.ReactNode {
    return (<span className="font-14 font-black middle">{text}</span>);
  }
  private getName(text: string): React.ReactNode {
    return (<span className="font-14">{text}</span>);
  }
  private getSubMenuItem(data: routers.MenuData, index: number): React.ReactNode {
    const name = this.getName(data.name);
    return (
      <Menu.Item onClick={() => this.onClickMenuItem(data)} key={data.key}>
        <Link to={data.path} key={data.path}>

          {name}
        </Link>
      </Menu.Item >
    );
  }
  private getSubMenu(data: routers.MenuData, index: number): React.ReactNode {
    if (data.children && data.children.length > 0) {
      // const icon = data.icon ? () : (); // <IconFont className="font-24 middle" type={data.icon}></IconFont>
      return (
        <Menu.SubMenu key={data.path + index} title={this.getLabel(data.name)}>
          {
            _.map(data.children, (item: routers.MenuData) => {
              return this.getSubMenuItem(item, index);
            })
          }
        </Menu.SubMenu>
      );
    } else {
      return this.getSubMenuItem(data, index);
    }
  }
  render() {

    return (<Menu mode="inline" inlineCollapsed={this.props.fold}>
      {
        _.map(routerMenus, (item: routers.MenuData, index: number) => {
          return this.getSubMenu(item, index);
        })
      }
    </Menu>);
  }
}


export default Sider;
