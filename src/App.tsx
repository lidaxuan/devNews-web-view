/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-09 20:49:06
 * @FilePath: /devNews-web-view/src/App.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-17 18:12:02
 */
import Application from 'src/layouts/index';
import React, { FC } from 'react';
// antd 国际化配置
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import Routers from 'src/routers/index';
import { Route, HashRouter, BrowserRouter } from "react-router-dom";
import './App.css';
import './styles/layouts.scss';
import 'src/styles/base.scss';


const App: FC = () => (
  <ConfigProvider locale={zhCN}>
    <HashRouter>
      <Application></Application>
    </HashRouter>
  </ConfigProvider>
);
export default App;



// export default class App extends React.Component {
//   render(): React.ReactElement {
//     return (
//       <ConfigProvider locale={zhCN}>
//         <HashRouter>
//           <Application></Application>
//         </HashRouter>
//       </ConfigProvider>
//     );
//   }
// }
