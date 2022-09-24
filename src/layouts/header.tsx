/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 09:25:20
 * @FilePath: /devNews-web-view/src/layouts/header.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 10:29:44
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;
import { FullscreenOutlined, FullscreenExitOutlined, LoginOutlined } from '@ant-design/icons';
import screenfull from 'screenfull';
import { useBoolean } from 'ahooks';
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
      fullScreen: false
    } as State;
    this.initPage = this.initPage.bind(this);
    this.fullScreenBtn = this.fullScreenBtn.bind(this);
  }
  // 将要装载，在render之前调用；
  // UNSAFE_componentWillMount() {
  //   console.log(1);
  // }
  // screenfull.toggle();
  // (装载完成），在render之后调用 建议请求接口
  componentDidMount() {
    this.initPage();
  }
  initPage() {
    console.log(1111);
  }
  fullScreenBtn() {
    if (screenfull.isEnabled) {
      const element = document.body;
      screenfull.toggle(element);
    }
    this.setState({
      fullScreen: !this.state.fullScreen
    });
  }

  render() {
    const { tableList, fullScreen } = this.state;
    return (
      <div>
        <Header className="header flex flex-ccb">
          <div className="left">
            <div className="logo" />
            李大玄

          </div>
          <div className="right flex flex-aic">
            <div title="全屏按钮" onClick={this.fullScreenBtn} className="mr-15">
              {fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
            </div>
            <LoginOutlined className="pointer"/>
          </div>
        </Header>
      </div>
    );
  }
}