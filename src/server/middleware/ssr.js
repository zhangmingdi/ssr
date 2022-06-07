import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import RootView from '../../client/pages/root';
import routeConfigsArr from '../../client/route/route.config';

export default async (req, res, next) => {
  const { path, url } = req;
  if (url.indexOf('.') > -1) {
    return;
  }
  const branch = matchRoutes(routeConfigsArr, path)[0];
  let component = {};
  if (branch) {
    component = branch.route.component;
  }
  let initialData = {};

  if (component.preFetch) {
    initialData = await component.preFetch();
  }

  const context = {
    initialData,
  };

  const reactStr = renderToString(
    <StaticRouter location={path} context={context}>
      <RootView />
    </StaticRouter>,
  );
  console.log('reactStr', reactStr);
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title></title>
  </head>
  <body>
      <div id="root">${reactStr}</div>
      <textarea id="textareaSsrData" style="display: none">${JSON.stringify(initialData)}</textarea>
  </body>
  <script type="text/javascript" src="/index.js"></script>
  </html>`;
  res.send(html);

  return next();
};
