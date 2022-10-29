/*
 * @Description: 项目入口文件
 * @Author: 李大玄
 * @Date: 2022-09-09 21:40:28
 * @FilePath: /devNews-web-view/src/application/main.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-10-29 09:58:44
 */


import React from 'react';
// antd 国际化配置
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

export default class Main extends React.Component {
  //路由改变触发
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    return
    // 判断跳转路由不等于当前路由
    // if (nextProps.location.pathname !== this.props.location.pathname) {
    //   console.log("路由改变触发->url:" + window.location.href);
    //   //将url传出去
    //   window.parent.postMessage(JSON.stringify({ pagename: window.location.href }), "*");
    // }
  }
  render(): React.ReactElement {
    // 配置 antd 中文模式
    return (<ConfigProvider locale={zhCN}>
      {/* <Routers></Routers> */}
    </ConfigProvider>);
  }
}

