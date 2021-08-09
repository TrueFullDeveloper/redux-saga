import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { routesConfig } from "../../config/routesConfig";
import { useSelector } from "react-redux";

const Routes = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Switch>
      {routesConfig.map((routeItem, routeIndex) => (
        <>
          {!isAuthenticated && routeItem.protected ? null : (
            <Route
              key={routeIndex}
              path={routeItem.path}
              exact={routeItem.exact}
              component={routeItem.component}
            />
          )}
        </>
      ))}
      <Redirect to="/page_not_found" />
    </Switch>
  );
};

export default Routes;
