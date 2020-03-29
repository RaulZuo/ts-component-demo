import React, { Component } from 'react';
import ClassComponent from './components/ClassComponent';

class Index extends Component<any, any> {
  render () {
    return (
      <div>
        <span>This is a react component with typescript</span>
        <ClassComponent />
      </div>
    );
  }
}

export default Index;
