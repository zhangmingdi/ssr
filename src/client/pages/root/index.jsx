import { memo } from 'react';
import {
  Route, Routes, BrowserRouter as Router,
} from 'react-router-dom';
import routeConfigsArr from '../../route/route.config';

const RootView = memo(() => {
  console.log('我来了');
  return (
    <Router>
      <Routes>
        1321231
        {
          routeConfigsArr.map((v) => {
            const { name, ...rest } = v;
            return <Route key={v.path} {...v} />;
          })
        }
      </Routes>
    </Router>
  );
});

export default RootView;
