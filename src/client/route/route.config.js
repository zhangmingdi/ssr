import Home from '../pages/home';
import Study from '../pages/study';

const arr = [
  {
    component: Home,
    path: '/',
    exact: true,
    name: 'Home',
  },
  {
    component: Study,
    path: '/study',
    exact: true,
    name: 'Study',
  },
];

export default arr;
