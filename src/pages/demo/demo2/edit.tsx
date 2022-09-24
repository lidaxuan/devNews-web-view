/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 14:57:13
 * @FilePath: /devNews-web-view/src/pages/demo/demo2/edit.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 17:08:09
 */
import React, { Component } from 'react';
import { Menu, Form, Input, Select, Button, Table, Switch, Popover, Pagination, Modal, message, DatePicker, Tag, Space } from 'antd';
import Basis from './common/basis';
enum statusEnum { }
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

export default class Edit extends Basis<Props, State>  {
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
  async UNSAFE_componentDidMount() {
    const data = await this.getDetail<State>();
    if (this.formRef) {
      const { current } = this.formRef;
      if (current) {
        // 表单回填
        current.setFieldsValue(data);
      }
    }
  }

  private getDetail<T>(): Promise<T> {
    return Promise.resolve({ name: '李大玄', age: 18 } as any);
  }
  onFinish(data: any): void {
    console.log(data);

  }
  getTitle(): React.ReactElement {
    return (<div>编辑</div>);
  }
}