import * as ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from 'react-router-dom';
import RootView from './pages/root';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <RootView />
  </BrowserRouter>
  ,
);
