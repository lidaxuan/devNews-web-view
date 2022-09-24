/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 16:12:50
 * @FilePath: /devNews-web-view/src/pages/demo/demo3/test1/children.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 16:14:29
 */
import React, { Component } from 'react';
import { Card } from 'antd';

export interface Props {
  text?: string;
}

export default class Children extends Component<Props> {
  render() {
    return (<Card title="这里是子组件">
      <p>接收到的父组件内容: {this.props.text}</p>
    </Card>);
  }
}