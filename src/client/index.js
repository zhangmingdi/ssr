import React from 'react';
import ReactDom from 'react-dom';
import Home from './pages/home/index';

ReactDom.hydrate(
  <Home />,
  document.getElementById('root'),
);
