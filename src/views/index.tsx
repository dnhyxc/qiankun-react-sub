import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";

import "./index.css";

const { Sider, Content } = Layout;

interface IProps {
  children: ReactNode;
}

const App: React.FC<IProps> = ({ children }) => {
  let navigate = useNavigate();

  const onChangeMenu = (value: any) => {
    if (value.key === "home") {
      navigate("/");
    } else {
      navigate("/about");
    }
  };

  return (
    <Layout className="layout">
      <Sider width={180} theme="light" className="sider">
        <Menu
          mode="inline"
          style={{ width: 180 }}
          onClick={onChangeMenu}
          defaultSelectedKeys={["home"]}
        >
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
        </Menu>
      </Sider>
      <Content id="main-content">{children}</Content>
    </Layout>
  );
};

export default App;
