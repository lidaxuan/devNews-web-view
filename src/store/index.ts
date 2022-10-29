/*
 * @Description:
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-28 16:20:48
 * @FilePath: /devNews-web-view/src/store/index.ts
 */
// import { applyMiddleware, createStore, combineReducers } from 'redux';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// import { setUserInfo } from "./actions"

// /**
//  * 中间件
//  * 作用:如果不使用该中间件,当我们dispatch一个action时,需要给dispatch函数传入action对象；
//  * 但如果我们使用了这个中间件,那么就可以传入一个函数,这个函数接收两个参数:dispatch和getState。
//  * 这个dispatch可以在将来的异步请求完成后使用,对于异步action很有用
//  */
// import thunk from 'redux-thunk';

// // 引入reducer
// import reducers from './reducers';

// // 创建store实例
// // const store = createStore(
// //   reducers,
// //   applyMiddleware(thunk)
// // );
// const persistConfig = {
//   key: 'dev-news',
//   storage: storage,
//   // stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
// };

// // const reducer = combineReducers({ reducers })
// const myPersistReducer = persistReducer(persistConfig, reducers as any);

// export const store = createStore(myPersistReducer, applyMiddleware(thunk));

// export default store;

export function initStore() {
  if (!getUserInfo()) {
    setUserInfo();
  }
}
interface UserInfo {
  usernName: string,
  usernId: string | number,
  token: string,
  [key: string]: any
}

export function setUserInfo(params?: object): void {
  window.localStorage.setItem('userInfo', JSON.stringify(Object.assign({}, {
    usernName: '李大玄',
    usernId: '112',
    token: ''
  }, params) as UserInfo));
}
export function getUserInfo(): UserInfo {
  const userInfo = window.localStorage.getItem('userInfo');
  return JSON.parse(userInfo);
}