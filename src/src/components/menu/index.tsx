import React from "react";
import { Menu } from "tdesign-react";
const { MenuItem } = Menu;

interface MenuProps {}

interface MenuState {}

const Logo = () => <span>LOGO</span>;

// Menu
class LeftMenu extends React.Component<MenuProps, MenuState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Menu
        style={{ width: "100%", height: "100%", boxShadow: "none" }}
        logo={<Logo />}
      >
        <MenuItem value="1">总览</MenuItem>
        <MenuItem value="2">Whistle</MenuItem>
        <MenuItem value="3">工具</MenuItem>
      </Menu>
    );
  }
}

export default LeftMenu;
