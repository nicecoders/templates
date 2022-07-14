import { Button } from 'antd-mobile'
import styles from './index.less';

export default function () {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>welcome! there is nicecode!</h1>
      <Button color='primary' fill='solid' block>
        你好
      </Button>
    </div>
  );
}
