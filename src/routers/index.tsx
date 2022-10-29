/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-14 14:26:59
 * @FilePath: /devNews-web-view/src/routers/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-10-29 16:38:55
 */

import React, { lazy, Suspense } from "react";
import { Switch, HashRouter, BrowserRouter } from "react-router-dom";
import { Routes, Route, Router } from 'react-router';
// import { setUserInfo } from '../store/actions';
// import store from '../store';
// import { connect } from 'react-redux';

const Index = lazy(() => import("src/pages/index/index"));
const Demo1 = lazy(() => import("src/pages/demo/demo1"));
const Demo2 = lazy(() => import("src/pages/demo/demo2"));
const Demo3 = lazy(() => import("src/pages/demo/demo3"));
const ArticleList = lazy(() => import("src/pages/article/articleList"));
const CreateArticle = lazy(() => import("src/pages/article/createArticle"));
const UserManage = lazy(() => import("src/pages/userManage/userManage/index"));
const UserActive = lazy(() => import("src/pages/userManage/userActive/index"));

const HotArticles = lazy(() => import("src/pages/dataManage/hotArticles/index"));
const MaterialList = lazy(() => import("src/pages/dataManage/materialList/index"));
const Login = lazy(() => import("src/pages/login/index"));



function RootRoute(prop): React.ReactElement {
  return (
    <HashRouter>
      <Switch>
        <Router location={location} navigator={undefined} >

          <Suspense fallback={<h2>Loading..</h2>}>
            <Routes >
              {/* <Route path="/" element={<Application />}> */}
              <Route path="/" element={<Index />} />
              <Route path="/demo/1" element={<Demo1 />} />
              <Route path="/demo/2" element={<Demo2 />} />
              <Route path="/demo/3" element={<Demo3 />} />
              <Route path="/article/list" element={<ArticleList />} />
              <Route path="/article/create" element={<CreateArticle />} />
              <Route path="/user/list" element={<UserManage />} />
              <Route path="/user/active" element={<UserActive />} />
              <Route path="/data/hotArticles" element={<HotArticles />} />
              <Route path="/data/materialList" element={<MaterialList />} />
              <Route path="/login" element={<Login />} />
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