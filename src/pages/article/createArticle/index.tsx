/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 17:24:03
 * @FilePath: /devNews-web-view/src/pages/article/createArticle/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 17:24:04
 */

import React, { Component } from 'react';
import { Menu, Form, Input, Select, Button, Table, Switch, Popover, Pagination, Modal, message, DatePicker, Tag, Space } from 'antd';
import Editor from 'src/components/editor';
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

export default class ArticleList extends Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      tableList: [],
      form: {
        id: '',
        name: '',
      } as form,
    } as State;
    this.initPage = this.initPage.bind(this);
  }
  // 将要装载，在render之前调用；
  UNSAFE_componentWillMount() {
    // todo
  }
  // (装载完成），在render之后调用 建议请求接口
  UNSAFE_componentDidMount() {
    // todo
  }
  initPage() {
    console.log(1111);
  }

  render() {
    const { tableList } = this.state;
    return (
      <div>
        <Editor></Editor>
      </div>
    );
  }
}