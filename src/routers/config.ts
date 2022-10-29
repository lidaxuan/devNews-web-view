/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-14 14:26:59
 * @FilePath: /devNews-web-view/src/routers/config.ts
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-10-29 09:46:30
 */

/**
 * 定义路由
 * 定义路由时不要使用 param(/aa/:id) 模式，因为需要使用路径来匹配菜单选中项
 * 参数传递使用 query(?id=1) 模式
 */

export interface routerItem {
  name: string;
  key: string;
  icon?: string;
  hidden?: boolean;
  path?: string;
  children?: routerItem[];
}

// 菜单
export const routerMenus = [
  {
    name: '首页',
    icon: 'icon-qian',
    key: 'home', // 通过 key 可以从 routers 获取 path 路径
    path: '/', // 通过 key 可以从 routers 获取 path 路径
  },
  {
    name: 'demo',
    key: 'demo',
    icon: 'icon-qian',
    children: [
      { name: 'demo1', path: '/demo/1', key: 'ad', icon: 'icon-qian' },
      { name: 'demo2', path: '/demo/2', key: 'demo.2', icon: 'icon-qian' },
      { name: 'demo3', path: '/demo/3', key: 'demo.3', icon: 'icon-qian' }
    ]
  },
  {
    name: '文章管理',
    key: 'article',
    icon: 'icon-qian',
    children: [
      { name: '文章列表', path: '/article/list', key: 'article.list', icon: 'icon-qian' },
      { name: '新建文章', path: '/article/create', key: 'article.create', icon: 'icon-qian' },
    ]
  },
  {
    name: '用户管理',
    key: 'user',
    icon: 'icon-qian',
    children: [
      { name: '用户列表', path: '/user/list', key: 'user.list', icon: 'icon-qian' },
      { name: '用户活跃度', path: '/user/active', key: 'user.create', icon: 'icon-qian' },
    ]
  },
  {
    name: '数据管理',
    key: 'data',
    icon: 'icon-qian',
    children: [
      { name: '热点文章', path: '/data/hotArticles', key: 'data.hotArticles', icon: 'icon-qian' },
      { name: '素材管理', path: '/data/materialList', key: 'data.materialList', icon: 'icon-qian' },
      // { name: '新建文章', path: '/article/create', key: 'article.create', icon: 'icon-qian' },
    ]
  },
];
