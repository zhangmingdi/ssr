import * as ReactDOM from 'react-dom/client';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import {
  BrowserRouter,
} from 'react-router-dom';
import RootView from './pages/root';
import routeConfigsArr from './route/route.config';

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => { return style._insertCss(); });
  return () => { return removeCss.forEach((dispose) => { return dispose(); }); };
};
const { pathname } = document.location;
const initialData = JSON.parse(document.getElementById('textareaSsrData').value);
ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <StyleContext.Provider value={{ insertCss }}>
      <RootView pathname={pathname} initialData={initialData} routeConfigsArr={routeConfigsArr} />
    </StyleContext.Provider>
  </BrowserRouter>

  ,
);
