/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 14:56:02
 * @FilePath: /devNews-web-view/src/pages/demo/demo2/common/basis.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 17:08:12
 */
import React, { Component } from 'react';
import { Menu, Form, Input, Select, Button, InputNumber, Table, Switch, Popover, Pagination, Modal, message, DatePicker, Tag, Space } from 'antd';
import { FormInstance } from 'antd/lib/form';
// 参数接收
interface BasisProps {
  [key: string]: any
}

// state
interface BasisState {
  [key: string]: any;
}

const formProps: any = {
  labelCol: {
    style: {
      width: '120px'
    }
  },
  autoComplete: 'off'
};
export default abstract class FormBasis<Props extends BasisProps, State extends BasisState> extends Component<Props, State>  {
  formRef = React.createRef<FormInstance>();
  formSpaceName = '';
  constructor(props: Props) {
    super(props);

    this.getTitle = this.getTitle.bind(this);
    this.onFinish = this.onFinish.bind(this);
  }

  // (装载完成），在render之后调用 建议请求接口
  UNSAFE_componentDidMount() {
    //todo
  }
  abstract getTitle(): React.ReactNode;
  abstract onFinish(val: State): void;

  protected getFieldValue<T>(key: string): T {
    if (this.formRef) {
      const { current } = this.formRef;
      if (current && current.getFieldValue) {
        const value: T = current.getFieldValue(key);
        return value;
      }
    }
    return void 0;
  }

  protected getNameView(): React.ReactNode {
    const key = 'name';
    const length = 32;
    // 获取
    const value = this.getFieldValue<string>(key) || '';
    const message = '请输入姓名';
    const suffix: React.ReactNode = (
      <span>{value.length}/{length}</span>
    );
    const rules = [
      { required: true }
    ];
    return (<Form.Item name={key} label="姓名" rules={rules}>
      <Input placeholder={message} maxLength={length} suffix={suffix} />
    </Form.Item>);
  }
  protected getAgeView(): React.ReactNode {
    const key = 'age';
    const length = 32;
    // 获取
    const message = '请输入年龄';
    const rules = [
      { required: true }
    ];
    return (<Form.Item name={key} label="年龄" rules={rules}>
      <InputNumber style={{ width: '100%' }} placeholder={message} maxLength={length} />
    </Form.Item>);
  }
  protected getContent(): React.ReactNode {
    const props = {
      ...formProps,
      layout: 'vertical',
      ref: this.formRef,
      name: this.formSpaceName,
      onFinish: this.onFinish,
      // onValuesChange: this.onChangeValues
    };
    return (<Form {...props}>
      {this.getNameView()}
      {this.getAgeView()}
      <Form.Item>
        <Button type="primary" htmlType="submit">保存</Button>
      </Form.Item>
    </Form>);
  }
  render() {
    const { tableList } = this.state;
    return (
      <div>
        <div>
          {this.getTitle()}
        </div>
        <div>
          {this.getContent()}
        </div>
      </div >
    );
  }
}