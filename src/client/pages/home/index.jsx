import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import useStyles from 'isomorphic-style-loader/useStyles';
import { envInitialData } from '../../utils/envInitialData';
import Custom from './component/custom';
import styles from './style.less';

const Div = styled.div`
  font-size: 20px;
  color: blue;

  span {
    color: red;
    font-size: 18px;
  }
`;
console.log('styles._getContent()', styles._getCss());
const View = memo((props) => {
  // console.log('styles._getCss', styles._getCss());
  useStyles(styles);
  const [info, setInfo] = useState(envInitialData(props) || {});
  useEffect(() => {
    if (!info.data) {
      // console.log('本地请求数据');
      View.preFetch()
        .then((res) => {
          if (res) {
            setInfo(res);
          }
        });
    }
  }, []);
  return (
    <div>
      <Div>
        <button onClick={() => {
          alert('home页面');
        }}
        >
          点击
        </button>
        ssr的
        <span>
          {' '}
          {info.data}
        </span>
      </Div>
      <div className={styles.lessStyle}>
        lessStyle
      </div>
      <Custom />
    </div>
  );
});

View.preFetch = async () => {
  const fetchData = () => {
    return new Promise((reslove) => {
      setTimeout(() => {
        reslove({
          data: '请求的数据',
        });
      });
    });
  };

  const data = await fetchData();
  return data;
};

export default View;
