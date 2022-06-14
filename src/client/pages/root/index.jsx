import { memo } from 'react';
import {
  Route, Switch, Link,
} from 'react-router-dom';
// import routeConfigsArr from '../../route/route.config';

function RouteWithSubRoutes(route) {
  const { initialData } = route;
  return (
    <Route
      path={route.path}
      render={(props) => {
        return (
          <route.component {...props} routes={route.routes} initialData={initialData} />
        );
      }}
    />
  );
}
const RootView = memo((props) => {
  const { pathname, initialData, routeConfigsArr } = props;
  return (
    <div>
      <h1>Server Rendering Example</h1>
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
