import { memo } from 'react';
import {
  Route, Switch, Link,
} from 'react-router-dom';
import routeConfigsArr from '../../route/route.config';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => {
        return (
          <route.component {...props} routes={route.routes} />
        );
      }}
    />
  );
}
const RootView = memo((props) => {
  const { pathname, initialData } = props;
  return (
    <div>
      <h1>Server Rendering Example</h1>
      <p>
        If you check out the HTML source of this page, you'll notice that it
        already contains the HTML markup of the app that was sent from the
        server!
      </p>

      <p>
        This is great for search engines that need to index this page. It's also
        great for users because server-rendered pages tend to load more quickly
        on mobile devices and over slow networks.
      </p>

      <p>
        Another thing to notice is that when you click one of the links below
        and navigate to a different URL, then hit the refresh button on your
        browser, the server is able to generate the HTML markup for that page as
        well because you're using React Router on the server. This creates a
        seamless experience both for your users navigating around your site and
        for developers on your team who get to use the same routing library in
        both places.
      </p>
      {
      routeConfigsArr.map((v) => {
        return (
          <>
            <Link key={v.path} to={v.path}>
              {v.name}
            </Link>
          &nbsp;
          </>

        );
      })
    }
      <Switch>
        {
          routeConfigsArr.map((v) => {
            if (v.path === pathname) {
              return (
                <RouteWithSubRoutes
                  key={v.path}
                  initialData={initialData}
                  pathname={pathname}
                  {...v}
                />
              );
            }
            return (
              <RouteWithSubRoutes
                key={v.path}
                {...v}
              />
            );
          })
        }
      </Switch>
    </div>

  );
});

export default RootView;
