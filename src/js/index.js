import React from 'react';
import ReactDOM from 'react-dom';
import HeadElement from '@/components/HeadElement/HeadElement.js';

class Index extends React.Component {
  render() {
    return (<div>
      <h1>Index Page!</h1>
      <HeadElement/>
    </div>);
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'));
