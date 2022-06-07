import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { envInitialData } from '../../utils/envInitialData';

const Div = styled.div`
  font-size: 20px;
  color: blue;

  span {
    color: red;
    font-size: 18px;
  }
`;
const View = memo((props) => {
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
