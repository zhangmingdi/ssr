import Home from '../pages/home';
import Study from '../pages/study';

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
    component: Study,
  },
];

export default arr;
