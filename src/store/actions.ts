/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-28 16:19:34
 * @FilePath: /devNews-web-view/src/store/actions.ts
 */
export function setPageTitle(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_PAGE_TITLE',
      data: data
    });
  };
}
export function setUserInfo(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_USER_INFO',
      data: data
    });
  };
}

export function setInfoList(data) {
  return (dispatch, getState) => {
    // 测试接口
    const url = 'http://localhost:8000/user';
    // 使用fetch实现异步请求
    window.fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res.json();
    }).then(res => {
      const { code, data } = res;
      if (code === 0) {
        dispatch({
          type: 'SET_INFO_LIST',
          data: data
        });
      }
    });
  };
}