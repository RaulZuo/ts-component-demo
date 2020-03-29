import React, { Component } from 'react';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

class Index extends Component<any, any> {
  render () {
    return (
      <div>
        <span>This is a react component with typescript</span>
        <ClassComponent />
        <FunctionComponent />
      </div>
    );
  }
}

export default Index;
