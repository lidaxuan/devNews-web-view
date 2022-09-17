/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-09 20:49:06
 * @FilePath: /devNews-web-view/src/App.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-17 09:28:32
 */
import Application from './layouts/index';
import React, { FC } from 'react';
import './App.css';

import { Route, HashRouter, BrowserRouter } from "react-router-dom";


const App: FC = () => (
  <div className="App">
    <BrowserRouter>
      <Application></Application>
    </BrowserRouter >
  </div>

);

export default App;