import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  render() {
    return (<div>
      <h1>Index Page!</h1>
      <a href="#">首页</a><br/>
      <a href="pages/user.html">用户中心</a>
    </div>);
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'));
