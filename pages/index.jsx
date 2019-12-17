import React from 'react';
import Button from '@demo/umi-origin-test';
import styles from './index.less';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Button>按钮</Button>
    </div>
  );
}
