import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { matchRoutes } from 'react-router-config';
import RootView from '../../client/pages/root';
import routeConfigsArr from '../../client/route/route.config';

export default async (req, res, next) => {
  const { path, url } = req;
  if (url.indexOf('.') > -1) {
    return;
  }
  console.log('url', url, path);
  const branch = matchRoutes(routeConfigsArr, path);
  console.log('branch', branch);

  const reactStr = renderToString(
    <StaticRouter location={path}>
      <RootView />
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
