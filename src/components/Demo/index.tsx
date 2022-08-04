import React from 'react';
import { Button } from 'antd';
import styles from './index.less';

const Demo: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Button type='primary'>我知道了</Button>
    </div>
  );
};

export default Demo;
