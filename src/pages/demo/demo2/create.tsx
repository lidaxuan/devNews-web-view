/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 14:56:57
 * @FilePath: /devNews-web-view/src/pages/demo/demo2/create.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 17:08:06
 */
import React, { Component } from 'react';
import { Menu, Form, Input, Select, Button, Table, Switch, Popover, Pagination, Modal, message, DatePicker, Tag, Space } from 'antd';
import Basis from './common/basis';
// 参数接收
interface Props {
  [key: string]: any
}
// 某个对象
interface form extends Props {
  id: number | string;
  name: string;
}

// state
interface State {
  tableList: Array<any>;
  [key: string]: any;
}

export default class Create extends Basis<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      tableList: [],
      form: {
        id: '',
        name: '',
      } as form,
    } as State;
    // this.initPage = this.initPage.bind(this);
  }

  // (装载完成），在render之后调用 建议请求接口
  UNSAFE_componentDidMount() {
    // todo
  }
  getTitle(): React.ReactElement {
    return (<div>新建</div>);
  }
  onFinish(data: State) {
    console.log(data);

  }
}