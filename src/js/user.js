import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
  render() {
    return (
      <div>
        <h1>User Page!</h1>
        <a href="../index.html">首页</a><br/>
        <a href="#">用户中心</a>
      </div>);
  }
}

ReactDOM.render(<User/>, document.getElementById('app'));
