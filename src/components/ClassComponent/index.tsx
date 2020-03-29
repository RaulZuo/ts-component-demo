import React, { Component } from 'react';
import './SubComponent.scss';

export default class ClassComponent extends Component<any, any> {
  render () {
    return (
      <div className="class-component">I am class component</div>
    );
  }  
}
