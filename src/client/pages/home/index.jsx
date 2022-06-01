import { memo } from 'react';

const View = memo((props) => (<div>hello world 我就是一个ssr</div>));

View.preFetch = async () => {
  const fetchData = () => new Promise((reslove) => {
    setTimeout(() => {
      reslove({
        data: '我是mock的数据',
      });
    });
  });

  const data = await fetchData();
  return data;
};

export default View;
