import React from 'react';
import styles from './index.less';
import MyTest from '../src';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <MyTest label="嘻嘻" />
    </div>
  );
}
