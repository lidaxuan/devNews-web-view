/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-10-29 10:33:55
 * @FilePath: /devNews-web-view/src/pages/login/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-10-29 16:53:33
 */
import React from "react";
import { Form, Row, Button, Input, message, Tooltip } from "antd";
import axios from "axios";
import { FormInstance } from 'antd/lib/form';
import './index.scss';
import { setUserInfo } from '../../store';
import { v1 } from 'uuid';

interface Props {
  [key: string]: any
}
interface State {
  [key: string]: any
}
class Login extends React.Component<State, Props>{
  constructor(props: Props) {
    super(props);
    this.state = {
      basis: '',
      username: "",
      password: "",
      loginType: 1
    } as State;
    this.change = this.change.bind(this);
  }

  loginFormRef = React.createRef<FormInstance>(); // 与render函数中的登录Form组件进行绑定
  regFormRef = React.createRef<FormInstance>(); // 与render函数中的注册Form绑定

  login = async () => { // 点击登录后执行的函数
    // 对表单控件进行规则验证：验证设置了rules属性的控件
    await this.loginFormRef.current.validateFields().then(value => {
      // 验证成功
      // value存放了通过验证的控件的值
      this.setState({ // 将用户名和密码更新为输入的值
        username: value.username,
        password: value.password
      });
      // if (value.username == this.state.basis && value.password == this.state.basis) {
      setUserInfo({ token: this.state.basis });
      window.location.hash = '/';
      history.go(0);
      // window.location.replace(`${window.location.href}`);
      // } else {
      message.error('用户名或密码错误');
      // }
      // 向服务器发起登录请求
      // axios.post("http://localhost:8089/admin/login", { user: value })
      //   .then(result => {
      //     if (result.data.code == 1000) { // 登录成功
      //       // 将用户名写入sessionStorage中，这可以制作用户名显示在页面上的效果
      //       sessionStorage.setItem("username", value.username);
      //       // 将token写入
      //       sessionStorage.setItem("token", result.data.token);
      //       // 进行页面的跳转，/home是自定义的跳转路由，在本例中不定义
      //       // this.props.history.push("/home");
      //     } else { // 登录失败
      //       message.error(result.data.msg);
      //       return;
      //     }
      //   }).catch(err => {
      //     console.log(err);
      //   });
    });
  };


  register = async () => {
    await this.regFormRef.current.validateFields().then(value => {
      axios.post("http://localhost:8089/admin/register", value)
        .then(result => { // 注册成功
          // 给出消息提示
          message.success(result.data.msg);
          // 接下来可以让页面跳转到登录页面，由于本案例两个页面在一起，因此这句话不使用
          // this.props.history.push("/");
        }).catch(err => {
          console.log(err);
        });
    });
  };
  change() {
    this.setState({
      loginType: this.state.loginType == 1 ? 2 : 1
    });
  }

  UNSAFE_componentWillMount() {
    const basis = v1();
    console.log('basis', basis);
    this.setState({ basis });
  }
  getLogin(): React.ReactElement {
    return (
      <Form ref={this.loginFormRef} labelCol={{ span: 6 }}>
        <Row>
          <h2>用户登录</h2>
        </Row>
        <Row>
          <Form.Item className="wmax" label={"用户名："} name={"username"} rules={[{ required: true, message: "用户名不能为空" }]}>
            <Input placeholder={"用户名"} className="wmax" />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item className="wmax" label="密&nbsp;&nbsp;&nbsp;码：" name={"password"} rules={[{ required: true, message: "密码不能为空" }]}>
            <Input.Password placeholder={"密码"} className="wmax" />
          </Form.Item>
        </Row>
        <Row>
          <Button className="wmax" type={"primary"} onClick={this.login}>登录</Button>
        </Row>
      </Form>
    );
  }

  getRegister(): React.ReactElement {
    return (
      <Form ref={this.regFormRef} labelCol={{ span: 6 }}>
        <Row>
          <h2>用户注册</h2>
        </Row>
        <Row>
          <Form.Item className="wmax" label={"用户名："} name={"username"} rules={[{ required: true, message: "用户名不能为空" }]}>
            <Input className="wmax" placeholder={"用户名"} />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item className="wmax" label="密&nbsp;&nbsp;&nbsp;码：" name={"password"} rules={[{ required: true, message: "密码不能为空" }]}>
            <Input.Password className="wmax" placeholder={"密码"} />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item className="wmax" label={"确认密码："} name={"confirmPwd"} rules={[
            { required: true, message: "确认密码不能为空" },
            {
              validator: (rules, value) => {
                // 获取用户输入的密码
                const pwd = this.regFormRef.current.getFieldValue("password");
                if (pwd && pwd !== value) {
                  // value表示当前控件的值
                  return Promise.reject("两次密码不一致");
                } else {
                  return Promise.resolve(); // 表示验证通过
                }
              }
            }
          ]}>
            <Input.Password className="wmax" placeholder={"密码"} />
          </Form.Item>
        </Row>
        <Row>
          <Button className="wmax" type={"primary"} onClick={this.register}>注册</Button>
        </Row>
      </Form>
    );
  }

  render() {
    console.log('this.state.basis', this.state.basis);

    const { loginType } = this.state;
    return (
      <div className=" hmax wmax content">
        <div className="box br-10" style={{}}>
          <Tooltip title={loginType == 1 ? '注册' : '登录'}>
            <div className="horn" onClick={this.change}></div>
          </Tooltip>
          {
            loginType == 1 ? this.getLogin() : this.getRegister()
          }
          {/* <Button style={{ float: 'right' }} className="" type={"text"} onClick={this.login}>注册</Button> */}
        </div>
      </div>
    );
  }
}

export default Login;
