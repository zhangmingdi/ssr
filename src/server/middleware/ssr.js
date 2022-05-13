import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../../client/pages/home';

export default async (req, res, next) => {
  const { paht, url } = req;

  if (url.indexOf('.') > -1) {
    return;
  }
  const reactStr = renderToString(<Home />);

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
