import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import EarTraining from './EarTraining';
import Home from './Home';
import Play from './Play';

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
    path: '/play',
    Component: Play
  },
  {
    path: '/earTraining',
    Component: EarTraining
  },
  {
    path: '/',
    Component: Home
  }
]