/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-09 21:37:09
 * @FilePath: /devNews-web-view/webpack.config.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-09 21:37:10
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck


const argv = require('@fengqiaogang/argv');

const option = async function (_, env) {
  const data = Object.assign({}, env, argv);
  // 此处控制读取 config 下面的环境变量信息, 默认为 production
  data['mode'] = data.env || 'production';
  if (data.w) {
    const webpack = require('./build/devserver');
    return Promise.resolve(webpack(data));
  } else {
    const webpack = require('./build/webpack');
    return Promise.resolve(webpack(data));
  }
};

module.exports = option;