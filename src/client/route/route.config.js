import Home from '../pages/home';
import Study from '../pages/study';

const arr = [
  {
    element: <Home />,
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    element: <Study />,
    path: '/study',
    exact: true,
    name: 'Study',
    component: Study,
  },
];

export default arr;
