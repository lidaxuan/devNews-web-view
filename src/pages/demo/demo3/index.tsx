/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 16:12:50
 * @FilePath: /devNews-web-view/src/pages/demo/demo3/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 16:14:42
 */

import React from 'react';
import { Row, Col } from 'antd';
import Test1 from './test1/index';
import Test2 from './test2/index';
import Test3 from './test3/index';

export default class Demo3 extends React.Component {
  render(): React.ReactElement {
    return (
      <Row>
        <Col span={24}>
          <Test1></Test1>
        </Col>
        <Col span={24}>
          <hr></hr>
        </Col>
        <Col span={24}>
          <Test2></Test2>
        </Col>
        <Col span={24}>
          <hr></hr>
        </Col>
        <Col span={24}>
          <Test3></Test3>
        </Col>
      </Row>
    );
  }
}

