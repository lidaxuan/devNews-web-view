/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 16:12:50
 * @FilePath: /devNews-web-view/src/pages/demo/demo3/test3/add.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 16:14:45
 */


import React from 'react';
import { Card, Button } from 'antd';

interface Props {
  number?: number;
  onChange?: any
}

export default class Add extends React.Component<Props> {
  title = '子组件: Add';
  buttonText = '加 10';
  // 设置属性默认值
  static defaultProps: Props = {
    number: 0,
  };
  constructor(props: Props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(): void {
    const { number = 10, onChange } = this.props;
    if (onChange) {
      const value = number + 10;
      onChange(value);
    }
  }
  render(): React.ReactElement {
    return (<Card title={this.title}>
      <div>
        <p>count: {this.props.number}</p>
        <div>
          <Button type="primary" onClick={this.onClick}>{this.buttonText}</Button>
        </div>
      </div>
    </Card>);
  }
}
