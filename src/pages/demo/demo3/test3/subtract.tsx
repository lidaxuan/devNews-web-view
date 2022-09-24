/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-24 16:12:50
 * @FilePath: /devNews-web-view/src/pages/demo/demo3/test3/subtract.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 16:14:52
 */

import Add from './add';

export default class Subtract extends Add {
  title = '子组件: Subtract';
  buttonText = '减 10';
  // 重写父类(Add)的 onClick 方法
  onClick(): void {
    const { number = 10, onChange } = this.props;
    if (onChange) {
      const value = number - 10;
      onChange(value);
    }
  }
}
