/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-09 20:49:06
 * @FilePath: /devNews-web-view/src/App.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-17 15:14:18
 */
import Application from 'src/layouts/index';
import React, { FC } from 'react';
// antd 国际化配置
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import './App.css';
import Routers from 'src/routers/index';
import { Route, HashRouter, BrowserRouter } from "react-router-dom";


// const App: FC = () => (
//   // <BrowserRouter>
//   <ConfigProvider locale={zhCN}>
//     <div className="App">
//       <Application></Application>

//     </div >
//   </ConfigProvider>
//   // </BrowserRouter>
// );

// export default App;

export default class App extends React.Component {
  render(): React.ReactElement {
    // 配置 antd 中文模式
    return (
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <Application></Application>
        </HashRouter>
      </ConfigProvider>
    );
  }
}
