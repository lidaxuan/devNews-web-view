/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-14 14:26:59
 * @FilePath: /devNews-web-view/src/routers/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-17 16:59:16
 */

import React, { lazy, Suspense } from "react";
import Application from '../layouts/index';
import { Switch, HashRouter, BrowserRouter } from "react-router-dom";
import { Routes, Route, Router } from 'react-router';
import asnyc from 'src/utils/async';
const Home = lazy(() => import("src/pages/test/in"));
const Login = lazy(() => import("src/pages/test/classify/clock"));

function RootRoute(): React.ReactElement {
  return (
    <HashRouter>
      <Switch>
        <Router location={'/'} navigator={undefined} >

          <Suspense fallback={<h2>Loading..</h2>}>
            <Routes >
              {/* <Route path="/" element={<Application />}> */}
              <Route path="/login" element={<Login />} />
              <Route path="/ad" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
              {/* </Route> */}
            </Routes>
          </Suspense>
        </Router >
      </Switch >
    </HashRouter >
  );
}
export default RootRoute;