import React from 'react';
import { Button } from 'antd';
import styles from './index.less';

const Demo: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h1>title</h1>
      <p>demo</p>
      <Button>Button</Button>
    </div>
  );
};

export default Demo;
