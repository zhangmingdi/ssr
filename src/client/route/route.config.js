import React from 'react';
import Home from '../pages/home';
// import Study from '../pages/study';

const asyncComp = (load) => {
  return class AsyncComp extends React.Component {
    static _load = load;

    constructor(props) {
      super(props);
      this.state = {
        Comp: null,
      };
    }

    componentDidMount() {
      const { Comp } = this.state;
      if (!Comp) {
        console.log('加载异步组件');
        this.asyncLoad();
      }
    }

    asyncLoad = async () => {
      const { default: Comp } = await AsyncComp._load();
      this.setState({ Comp });
    };

    render() {
      const { Comp } = this.state;
      return (
        Comp ? <Comp {...this.props} /> : <div>loading</div>
      );
    }
  };
};

const arr = [
  {
    // children: <Home />,
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    // children: <Study />,
    path: '/study',
    exact: true,
    name: 'Study',
    component: asyncComp(() => { return import('../pages/study'); }),
  },
];

export default arr;
