import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));
