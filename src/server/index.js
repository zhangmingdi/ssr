import { renderToString } from 'react-dom/server';
import React from 'react';
import express from 'express';
import Home from '../../src/client/pages/home/index.jsx'
const app = express();

app.get('*', (req, res) => {
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
  </html>`;

    return res.send(html);
});

app.listen(9999, () => console.log('node listen 9999'));
