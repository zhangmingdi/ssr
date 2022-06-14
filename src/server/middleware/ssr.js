import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
// import StyleContext from 'isomorphic-style-loader/StyleContext';
import RootView from '../../client/pages/root';
import routeConfigsArr from '../../client/route/route.config';
import { getStaticRoute } from '../utils/index';

let staticRoute = [];
(async () => {
  staticRoute = await getStaticRoute(routeConfigsArr);
})();

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
  const sheet = new ServerStyleSheet();
  const css = new Set(); // CSS for all rendered React components
  // const insertCss = (...styles) => {
  //   return styles.forEach((style) => {
  //     return css.add(style._getCss());
  //   });
  // };
  const reactStr = renderToString(
    sheet.collectStyles(
      <StaticRouter location={path} context={context}>
        {/* <StyleContext.Provider value={{ insertCss }}> */}
        <RootView routeConfigsArr={staticRoute} />
        {/* </StyleContext.Provider> */}
      </StaticRouter>,
    )
    ,
  );
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title></title>
      <link rel="stylesheet" href="/main.css"></link>
      <style>${[...css].join('')}</style>
      ${sheet.getStyleTags()}
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
