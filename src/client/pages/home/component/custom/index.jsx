import { memo } from 'react';
import styles from './style.less';

const Custom = memo(() => {
  return (
    <div className={styles.purple}>我是组件</div>
  );
});

export default Custom;
