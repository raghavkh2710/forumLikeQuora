import React from 'react';
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import * as S from './styled';

const { SubMenu } = Menu;

class Sider extends React.Component {
  state = {
    current: '1',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <>
        <S.StyledMenu
          theme='dark'
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
            <S.StyledMenuItem key="1">Entrepreneurship</S.StyledMenuItem>
            <S.StyledMenuItem key="2">Everyday Science</S.StyledMenuItem>
            <S.StyledMenuItem key="3">Computer Science</S.StyledMenuItem>
            <S.StyledMenuItem key="4">Machine Learning</S.StyledMenuItem>
        </S.StyledMenu>
      </>
    );
  }
}

export default Sider;