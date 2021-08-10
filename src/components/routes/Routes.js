import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { routesConfig } from "../../config/routesConfig";
import { useSelector } from "react-redux";

const Routes = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const routes = routesConfig.map(routeItem => {
    if (!isAuthenticated && routeItem.protected) {
      return {
        ...routeItem,
        component: lazy(() => import("../../pages/notFoundPage")),
        exact: true,
      };
    }

    return routeItem;
  });

  return (
    <Switch>
      {routes.map((routeItem, routeIndex) => (
        <Route
          key={routeIndex}
          path={routeItem.path}
          exact={routeItem.exact}
          component={routeItem.component}
        />
      ))}
      <Redirect to="/not_found" />
    </Switch>
  );
};

export default Routes;
