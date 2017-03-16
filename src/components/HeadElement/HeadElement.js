import React, {Component} from 'react';
import {Menu, Dropdown, Icon} from 'antd';

import './headElement.less';

const Item = Menu.Item; // 必须这样引入,否则build时会报错
const HoverMenu = (<Menu className="myAccount">
    <Item key="0">
      <span ><a href="../pages/personalCenter.html"> 个人中心</a></span>
    </Item>
    <Item key="1">
      <span >个人信息</span>
    </Item>
  </Menu>);

class HeadElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="headElement">
        <header>
          <div className="logIn">
            <div className="customerNameLeft">
              <span className="pageHomMargin">Hi～亲爱的XXX用户</span>
              <a href="../pages/registerPage.html"><span className="pageHomMargin">登陆</span></a>
              <a href="../pages/registration.html"><span className="pageHomMargin">免费注册</span></a>
            </div>
            <div className="customerNameRight">
              <Dropdown overlay={HoverMenu} trigger={['hover']} style={{marginRight: 15}} placement="bottomLeft">
                <a className="ant-dropdown-a myAcou" href="#">
                  我的账户 <Icon type="down"/>
                </a>
              </Dropdown>
              <a href="./images/personalCenter.html?myForm">
                <span className="pageHomMarginRig"><img src={require('./images/headPubOrder.png')} alt=""/>我的订单</span></a>
              <a href="#"> <span className="pageHomMarginRig"><img src={require('./images/headPubStar.png')} alt=""/>我的购物车</span></a>
              <a href="#" target="_blank"> <span className="pageHomMarginRig"><img src={require('./images/headPubPhone.png')} alt=""/>下载App</span></a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default HeadElement;
