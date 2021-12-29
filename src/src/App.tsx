import React from "react";
import { Layout, Menu } from "tdesign-react";
import "tdesign-react/es/style/index.css";
import LeftMenu from "./components/menu";
import { Provider } from "mobx-react";
import store from "./store";

const { Content, Footer, Sider } = Layout;

export default function App() {
  return (
    <Provider {...store}>
      <Layout>
        <Sider>
          <LeftMenu />
        </Sider>
        <Layout>
          <Content>
            <div></div>
          </Content>
          <Footer>Copyright</Footer>
        </Layout>
      </Layout>
    </Provider>
  );
}
