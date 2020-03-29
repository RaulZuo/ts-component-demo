import React from 'react';
import { Button } from '@alifd/next';
import './index.scss';

const FunctionComponent = (props: any) => {
  const { text } = props;
  return (
    <div>
      <span className="component-title">This is a function component</span>
      <Button type="primary">{text}</Button>
    </div>
  ); 
}

export default FunctionComponent;
