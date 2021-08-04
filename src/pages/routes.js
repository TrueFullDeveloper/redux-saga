import { Route, Switch, Redirect } from "react-router-dom";
import { routesConfig } from "../config/routesConfig";
//Components
import LoginPage from "./login";
import SignupPage from "./signup";
import Profile from "./profile";

export const getRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        {routesConfig.map((routeItem, routeIndex) => (
          <Route key={routeIndex} path={routeItem.path} exact component={routeItem.component} />
        ))}
        <Route path={"/profile"} exact component={Profile} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      {routesConfig.map((routeItem, routeIndex) => (
        <Route key={routeIndex} path={routeItem.path} exact component={routeItem.component} />
      ))}
      <Route path={"/login"} exact component={LoginPage} />
      <Route path={"/signup"} exact component={SignupPage} />
      <Redirect to="/" />
    </Switch>
  );
};
