/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-09 21:40:28
 * @FilePath: /devNews-web-view/src/application/main.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-09 21:40:29
 */
/**
 * @file 项目入口文件
 * @author svon.me@gmail.com
 * @description 配置项目中用到的公共参数
 */

import React from 'react';
// antd 国际化配置
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
// 项目路由
// import Routers from 'src/routers/index';

// import('./config');

export default class Main extends React.Component {
  render(): React.ReactElement {
    // 配置 antd 中文模式
    return (<ConfigProvider locale={zhCN}>
      {/* <Routers></Routers> */}
    </ConfigProvider>);
  }
}

