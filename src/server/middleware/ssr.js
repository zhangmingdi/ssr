import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Home from '../../client/pages/home';

export default async (req, res, next) => {
  const { path, url } = req;

  if (url.indexOf('.') > -1) {
    return;
  }
  const reactStr = renderToString(
    <StaticRouter location={path}>
      <Home />
    </StaticRouter>,
  );

  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title></title>
  </head>
  <body>
      <div id="root">${reactStr}</div>
  </body>
  <script type="text/javascript" src="/index.js"></script>
  </html>`;
  res.send(html);

  return next();
};
