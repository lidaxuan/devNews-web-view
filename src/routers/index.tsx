/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-14 14:26:59
 * @FilePath: /devNews-web-view/src/routers/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-17 09:52:45
 */

import Application from '../layouts/index';
import { Switch } from "react-router-dom";
import { Routes, Route, Router, } from 'react-router';
import { lazy } from "react";
import React from "react";

const Home = lazy(() => import("src/pages/test/in"))
const Login = lazy(() => import("src/pages/test/classify/clock"))

function RootRoute(): JSX.Element {
  return (
    <Switch>
      <Router location={'/'} navigator={undefined} >
        <Routes >
          {/* <Route element={<Application />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ad" element={<Login />} />
          {/* </Route> */}
        </Routes>
      </Router >
    </Switch>
  );
}
export default RootRoute