import React from 'react';
import Button from '@demo/umi-origin-test';

export default function(props) {
  return (
    <div>
      {props.label}：<Button>my-test</Button>
    </div>
  );
}
