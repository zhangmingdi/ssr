import React, { memo } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  Switch, Route, Redirect, BrowserRouter,
} from 'react-router-dom';
import routeConfigsArr from './route/route.config';

const RootView = memo(() => {
  <div>
    1321231
    {
      routeConfigsArr.map((v) => {
        const { name, ...rest } = v;
        return <Route key={v.path} {...v} />;
      })
    }
  </div>;
});

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <RootView />
  </BrowserRouter>
  ,
);
