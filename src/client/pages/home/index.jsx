import { memo, useEffect, useState } from 'react';
import { envInitialData } from '../../utils/envInitialData';

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
      <button onClick={() => {
        alert('home页面');
      }}
      >
        点击
      </button>
      ssr的
      {info.data}
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
