/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 10:34:06
 * @FilePath: /devNews-web-view/src/pages/index/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 11:04:51
 */
import React, { Component } from 'react';
import { Menu, Form, Input, Select, Button, Table, Switch, Popover, Pagination, Modal, message, DatePicker, Tag, Space } from 'antd';
import LineChart from './chart/LineChart';
import Keyboard from './chart/KeyBoard';
import BarChart from './chart/BarChart';
import PieChart from './chart/PieChart';
import MixinChart from './chart/MixinChart';

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
  }
  // 将要装载，在render之前调用；
  UNSAFE_componentWillMount() {
    // todo
  }
  // (装载完成），在render之后调用 建议请求接口
  componentDidMount() {
    this.initPage();
  }
  initPage() {
    console.log(1111);
  }

  render() {
    const { tableList } = this.state;
    return (
      <div>
        <div className="flex flex-ccb">
          <LineChart height={'350px'} className="mr-10" />
          <Keyboard height={'330px'} />
        </div>
        <div className="flex flex-ccb">
          <BarChart height={'350px'} className="mr-10" />
          <PieChart height={'330px'} />
        </div>
        <div className="flex flex-ccb">
          <MixinChart height={'330px'} />
        </div>
      </div>
    );
  }
}