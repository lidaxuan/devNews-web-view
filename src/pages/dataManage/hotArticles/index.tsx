/*
 * @Description: 热点文章
 * @Author: 李大玄
 * @Date: 2022-10-29 09:48:49
 * @FilePath: /devNews-web-view/src/pages/dataManage/hotArticles/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-10-29 09:49:09
 */

import React, { Component } from 'react';
import { Menu, Form, Input, Select, Button, Table, Switch, Popover, Pagination, Modal, message, DatePicker, Tag, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

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


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: '热点文章',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '手机号',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '归属地',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '用户标签',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>查看 {record.name}</a>
        <a>禁用/启用</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['loser'] },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
  { key: '4', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
  { key: '5', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
  { key: '6', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
  { key: '7', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
  { key: '8', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
  { key: '9', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
  { key: '10', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
  { key: '11', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
];

export default class Scroll extends Component<Props, State>  {
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
    this.onChange = this.onChange.bind(this);
  }
  // 将要装载，在render之前调用；
  UNSAFE_componentWillMount() {
    // todo
    this.setState({
      tableList: data
    });
  }
  // (装载完成），在render之后调用 建议请求接口
  UNSAFE_componentDidMount() {
    this.initPage();
  }
  initPage() {
    // todo
  }

  private onChange(val) {
    console.log(val);
  }

  render() {
    const { tableList } = this.state;
    return (
      <div>
        <Table onChange={this.onChange} columns={columns} dataSource={tableList} />
      </div>
    );
  }
}