/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-14 14:26:59
 * @FilePath: /devNews-web-view/src/routers/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 16:28:03
 */

import React, { lazy, Suspense } from "react";
import { Switch, HashRouter, BrowserRouter } from "react-router-dom";
import { Routes, Route, Router } from 'react-router';

const Index = lazy(() => import("src/pages/index/index"));
const Demo1 = lazy(() => import("src/pages/demo/demo1"));
const Demo2 = lazy(() => import("src/pages/demo/demo2"));
const Demo3 = lazy(() => import("src/pages/demo/demo3"));
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
              <Route path="/" element={<Index />} />
              <Route path="/demo/1" element={<Demo1 />} />
              <Route path="/demo/2" element={<Demo2 />} />
              <Route path="/demo/3" element={<Demo3 />} />
              <Route path="/article/list" element={<Demo3 />} />
              <Route path="/article/create" element={<Demo3 />} />
              <Route path="*" element={<div>404</div>} />
              {/* </Route> */}
            </Routes>
          </Suspense>
        </Router >
      </Switch >
    </HashRouter >
  );
}
export default RootRoute;