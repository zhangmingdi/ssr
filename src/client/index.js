import React, { memo } from 'react';
import * as ReactDOM from 'react-dom/client';
import Home from './pages/home/index';

const RootView = memo(() => {
  <div>
    1321231
    <Home />
  </div>;
});

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <RootView />,
);
