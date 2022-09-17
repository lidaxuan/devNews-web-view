/*
 * @Description: 系统左侧菜单
 * @Author: 李大玄
 * @Date: 2022-09-16 16:01:01
 * @FilePath: /devNews-web-view/src/layouts/side.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-17 17:23:50
 */

import _ from 'lodash';
import React from 'react';
import { Menu } from 'antd';
import * as routers from './router';
import { useNavigate, useLocation, useParams } from 'react-router';
import IconFont from 'src/components/icon/index';
import { Route, HashRouter, BrowserRouter, useHistory, Link } from "react-router-dom";
import { routerMenus } from 'src/routers/config';
interface Props {
  fold?: boolean;
}
interface menuData {
  selectedKeys: Array<any>,
  openKeys: Array<any>,
  [key: string]: any;
}


class Sider extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
    this.getSelectKeys = this.getSelectKeys.bind(this);
  }
  onClickMenuItem = (data: any): void => {
    console.log('data', data);
  };
  private getLabel(text: string): React.ReactNode {
    return (<span className="font-14 font-black middle">{text}</span>);
  }
  private getName(text: string): React.ReactNode {
    return (<span className="font-14">{text}</span>);
  }
  private getSubMenuItem(data: routers.MenuData, index: number): React.ReactNode {
    const name = this.getName(data.name);
    const icon = data.icon ? <IconFont className="font-24 middle" type={data.icon}></IconFont> : void 0; // 
    return (
      <Menu.Item onClick={() => this.onClickMenuItem(data)} icon={icon} key={data.path}>
        {/* <span>{data.path}</span> */}
        <Link to={data.path} key={data.path}>
          {name}
        </Link>
      </Menu.Item >
    );
  }
  private getSubMenu(data: routers.MenuData, index: number): React.ReactNode {
    if (data.children && data.children.length > 0) {
      const icon = data.icon ? <IconFont className="font-24 middle" type={data.icon}></IconFont> : void 0; // 
      return (
        <Menu.SubMenu key={data.key} icon={icon} title={this.getLabel(data.name)}>
          {/* <span>{data.key}</span> */}
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
  private getSelectKeys(): menuData {
    // const location = useLocation();
    // console.log(window.location.hash.replace('#', ''));

    const obj = {
      selectedKeys: [window.location.hash.replace('#', '')],
      openKeys: []
    };
    for (let i = 0; i < routerMenus.length; i++) {
      const children = [].concat(routerMenus[i].children || []);
      for (let j = 0; j < children.length; j++) {
        if (children[j].path == obj.selectedKeys) {
          obj.openKeys = [routerMenus[i].key];
          break;
        }
      }
    }
    return obj;
  }
  render() {
    const state = this.getSelectKeys();
    console.log('state', state);

    return (<Menu mode="inline" defaultSelectedKeys={state.selectedKeys} defaultOpenKeys={state.openKeys} inlineCollapsed={false}>
      {
        _.map(routerMenus, (item: routers.MenuData, index: number) => {
          return this.getSubMenu(item, index);
        })
      }
    </Menu>);
  }
}


export default Sider;
