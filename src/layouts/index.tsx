/*
 * @Description:
 * @Author: 李大玄
 * @Date: 2022-09-09 21:13:13
 * @FilePath: /devNews-web-view/src/layouts/index.tsx
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-17 09:36:40
 */
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import Routers from 'src/routers/index';
import Side from './side';

import React from "react";
import "../assets/style/layouts.scss";
const { Header, Content, Sider } = Layout;


interface Props {
  children?: React.ReactElement | Array<React.ReactElement>;
  [key: string]: any;
}

interface State {
  fold: boolean;
}

class Layouts extends React.Component<Props, State> {
  state = {
    fold: false
  }
  constructor(props: any) {
    super(props);
    this.onChangeFoldStatus = this.onChangeFoldStatus.bind(this);
  }
  private getLayoutClassName(): string {
    const name = ['app-layout-main'];
    if (this.state.fold) {
      name.push('fold');
    }
    return name.join(' ');
  }
  private onChangeFoldStatus(): void {
    const fold = !this.state.fold;
    this.setState({ fold });
  }
  render(): React.ReactElement {
    return (
      <Layout>
      <Header className="header">
        <div className="logo" />
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          {/* <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          /> */}
          <Side></Side>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280 }}>
            {/* Content */}
            <Routers></Routers>
  
          </Content>
        </Layout>
      </Layout>
    </Layout>
    );
    // if (this.props.children) {
    //   return ;
    // } else {
    //   // 异常时
    //   // return (<Redirect to='/404'/>);
    //   return (<div>404</div>);
    // }
  }
}

export default Layouts;



// const App = () => (
 
// );

// export default App;
