/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 14:55:37
 * @FilePath: /devNews-web-view/src/pages/demo/demo2/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 15:57:29
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Create from './create';
import Edit from './edit';

// 参数接收
interface Props {
  [key: string]: any
}

// state
interface State {
  tableList: Array<any>;
  [key: string]: any;
}

export default class Form extends Component<Props, State>  {
  render(): React.ReactElement {
    return (
      <Row>
        <Col span={11}>
          <Create></Create>
        </Col>
        <Col span={2}></Col>
        <Col span={11}>
          <Edit></Edit>
        </Col>
      </Row>
    );
  }
}