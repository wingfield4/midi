import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Demo from './Demo';
import Home from './Home';

const Pages = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path}>
          <route.Component />
        </Route>
      ))}
    </Switch>
  )
}

export default Pages;

const routes = [
  {
    path: '/demo',
    Component: Demo
  },
  {
    path: '/',
    Component: Home
  }
]