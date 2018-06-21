import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loadable from "react-loadable";

// import { PageNotFound, Layout } from "../components";

var Home = Loadable({
  loader: () => import("../containers/Prueba"),
  loading() {
    return <div>cargando...</div>;
  }
});

//import Home from "../containers/Home.js";

const routes = [
  {
    path: "/",
    Component: Home,
    useLayout: true,
    isPrivate: false
  }
  // {
  //   path: "*",
  //   Component: PageNotFound,
  //   useLayout: false,
  //   isPrivate: false
  // }
];

const AppRoute = ({ path, component: Component, isPrivate }) => {
  if (isPrivate) {
    return <PrivateRoute path={path} component={Component} />;
  }
  return <Route path={path} render={props => <Component {...props} />} />;
};

export const MainRoutes = () => (
  <Switch>
    {routes.map(({ path, useLayout, Component, isPrivate }) => {
      const RouteCustom = useLayout ? AppRoute : Route;
      return (
        <RouteCustom
          key={path}
          path={path}
          component={Component}
          isPrivate={isPrivate}
        />
      );
    })}
  </Switch>
);

export default MainRoutes;
