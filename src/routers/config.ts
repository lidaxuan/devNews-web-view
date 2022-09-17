/**
 * @file 路由配置
 */

/**
 * 定义路由
 * 定义路由时不要使用 param(/aa/:id) 模式，因为需要使用路径来匹配菜单选中项
 * 参数传递使用 query(?id=1) 模式
 */
export const routers = {
  dashboard: '/',
  demo: {
    '1': '/demo/1',
    '2': '/demo/2',
    '3': '/demo/3'
  },
  goods: {
    list: '/good/list',  // 商品列表
    create: '/goods/create', // 商品创建
    edit: '/goods/edit', // 商品编辑
  },
  order: {
    list: '/order', // 订单列表
    info: '/order/info',  // 订单详情
    service: {
      detail: '/order/service/detail', // 订单详情
      apply: '/order/service/apply',   //申请
      audit: '/order/service/audit',   //审核
      refund: '/order/service/refund'  //退款
    },
  },
  test: {
    in: '/test/in', // 注入
    study: '/test/study', // 注入
  },
  shop: {
    set: '/shop/set' //首页轮播配置
  },
  earnings: {
    earningsList: '/earnings/list'
  },
  live: {
    list: '/live/list', //直播列表
    add: '/live/add' //添加主播
  },
  system: {
    group: {
      info: '/system/group/info',
      share: '/system/group/share',
      service: '/system/group/service'
    }
  }
};

export interface routerItem {
  name: string;
  key: string;
  icon?: string;
  hidden?: boolean;
  children?: routerItem[];
}

// 菜单
export const routerMenus = [
  {
    name: '首页',
    key: '/', // 通过 key 可以从 routers 获取 path 路径
  },
  {
    name: '测试',
    key: 'demo',
    children: [
      { name: '测试1', key: 'ad', },
      { name: '测试2', key: 'demo.2', },
      { name: '测试3', key: 'demo.3', }
    ]
  },
  // {
  //   name: '商品管理',
  //   key: 'goods',
  //   icon: 'icongoods',
  //   children: [
  //     {
  //       name: '商品列表',
  //       key: 'goods.list',
  //       children: [
  //         { name: '添加商品', hidden: true, key: 'goods.create', },
  //         { name: '编辑商品', hidden: true, key: 'goods.edit', }
  //       ]
  //     },
  //   ]
  // },
  // {
  //   name: '订单管理',
  //   key: 'order',
  //   icon: 'iconorder',
  //   children: [
  //     {
  //       name: '订单列表',
  //       key: 'order.list',
  //       children: [
  //         // 订单列表中的订单详情
  //         { name: '订单详情', hidden: true, key: 'order.info', },
  //         { name: '订单详情', hidden: true, key: 'order.service.detail', },
  //         { name: '申请详情', hidden: true, key: 'order.service.apply', },
  //         { name: '审核处理', hidden: true, key: 'order.service.audit', },
  //         { name: '退款处理', hidden: true, key: 'order.service.refund', },
  //       ]
  //     },

  //   ]
  // },

];
