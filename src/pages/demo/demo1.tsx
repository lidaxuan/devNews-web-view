/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 11:11:36
 * @FilePath: /devNews-web-view/src/pages/demo/demo1.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 17:08:03
 */
import React, { Component } from 'react';
import { Slider, Menu, Form, Input, Select, Button, Table, Switch, Popover, Pagination, Modal, message, DatePicker, Tag, Space } from 'antd';

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
      width: 200,
      height: 200,
    } as State;
    this.initPage = this.initPage.bind(this);
    this.getStyle = this.getStyle.bind(this);
    this.widthChange = this.widthChange.bind(this);
    this.heightChange = this.heightChange.bind(this);
  }
  // 将要装载，在render之前调用；
  UNSAFE_componentWillMount() {
    // todo
  }
  // (装载完成），在render之后调用 建议请求接口
  UNSAFE_componentDidMount() {
    this.initPage();
  }
  initPage() {
    // console.log(1111);
  }
  private getStyle() {
    const { width, height } = this.state;
    const style = {
      width: `${width}px`,
      height: `${height}px`,
      display: 'inline-block'
    };
    return style;
  }
  widthChange(width: number) {
    this.setState({ width });
  }
  heightChange(height: number) {
    this.setState({ height });
  }

  render() {
    const { width, height } = this.state;
    return (
      <div>
        宽<Slider min={10} onChange={this.widthChange} max={600} defaultValue={width} />
        高<Slider min={10} onChange={this.heightChange} max={600} defaultValue={height} />
        <div style={this.getStyle()}>
          <img src="https://t7.baidu.com/it/u=434014116,2108959724&fm=193&f=GIF" width={'100%'} height={'100%'} alt="" />
        </div>
      </div>
    );
  }
}