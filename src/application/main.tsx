/*
 * @Description: 项目入口文件
 * @Author: 李大玄
 * @Date: 2022-09-09 21:40:28
 * @FilePath: /devNews-web-view/src/application/main.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-17 17:10:13
 */


import React from 'react';
// antd 国际化配置
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

export default class Main extends React.Component {
  render(): React.ReactElement {
    // 配置 antd 中文模式
    return (<ConfigProvider locale={zhCN}>
      {/* <Routers></Routers> */}
    </ConfigProvider>);
  }
}

