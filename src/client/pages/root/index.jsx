import { memo } from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import routeConfigsArr from '../../route/route.config';

const RootView = memo(() => (
  <Routes>
    {
      routeConfigsArr.map((v) => {
        const { name, ...rest } = v;
        return <Route key={v.path} {...v} />;
      })
    }
  </Routes>
));

export default RootView;
