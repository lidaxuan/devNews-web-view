/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-28 16:18:40
 * @FilePath: /devNews-web-view/src/store/reducers.ts
 */
import { combineReducers } from 'redux';
// 默认值
const defaultState = {
  pageTitle: '你看这个玩',
  infoList: [],
  userInfo: {
    userName: '李大玄',
    userId: '1',
    token: '' // asdwqehtyetbgvaawf45g65jruehbgse5ty5hyet
  }
};

// 一个reducer就是一个函数
function pageTitle(state = defaultState.pageTitle, action) {
  // 不同的action有不同的处理逻辑
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.data;
    default:
      return state;
  }
}

function userInfo(state = defaultState.userInfo, action) {
  switch (action.type) {
    case 'SET_USER_INFO':
      return action.data;
    default:
      return state;
  }
}

function infoList(state = defaultState.infoList, action) {
  switch (action.type) {
    case 'SET_INFO_LIST':
      return action.data;
    default:
      return state;
  }
}

// 导出所有reducer
export default combineReducers({
  pageTitle,
  infoList,
  userInfo
} as any);
