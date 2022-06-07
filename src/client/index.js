import * as ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from 'react-router-dom';
import RootView from './pages/root';

const { pathname } = document.location;
const initialData = JSON.parse(document.getElementById('textareaSsrData').value);
ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <RootView pathname={pathname} initialData={initialData} />
  </BrowserRouter>
  ,
);
