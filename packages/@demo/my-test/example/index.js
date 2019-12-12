import React from 'react';
import ReactDom from 'react-dom';
import MyTest from '../src';

ReactDom.render(
  <div>
    <MyTest label="嘻嘻" />
  </div>,
  document.getElementById('root'),
);
