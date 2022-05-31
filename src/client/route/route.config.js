import Home from '../pages/home';
import Study from '../pages/study';

const arr = [
  {
    element: <Home />,
    path: '/',
    exact: true,
    name: 'Home',
  },
  {
    element: <Study />,
    path: '/study',
    exact: true,
    name: 'Study',
  },
];

export default arr;
