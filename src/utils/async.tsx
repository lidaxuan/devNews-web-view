/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-14 14:29:54
 * @FilePath: /devNews-web-view/src/utils/async.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 17:08:33
 */
import React, { Component } from 'react';

interface State {
  component: Component
}

interface Props {
  [key: string]: any;
}

export default function asyncComponent(importComponent: any) {
  class AsyncComponent extends Component<Props, State> {
    constructor(props: Props, contenx: any) {
      super(props, contenx);
      this.state = {
        component: null
      };
    }
    async UNSAFE_componentDidMount() {
      // 异步加载组件
      const result = await importComponent();
      if (result.default) {
        this.setState({ component: result.default });
      } else {
        this.setState({ component: result });
      }
    }
    render(): React.ReactElement {
      const Comp: any = this.state.component;
      return Comp ? <Comp {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}