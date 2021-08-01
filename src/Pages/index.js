import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import About from './About';
import EarTraining from './EarTraining';
import Home from './Home';
import HowTo from './HowTo';
import LearnChords from './LearnChords';
import Play from './Play';
import PlayAlong from './PlayAlong';

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
    path: '/about',
    Component: About
  },
  {
    path: '/earTraining',
    Component: EarTraining
  },
  {
    path: '/howTo',
    Component: HowTo
  },
  {
    path: '/learnChords',
    Component: LearnChords
  },
  {
    path: '/play',
    Component: Play
  },
  {
    path: '/playAlong',
    Component: PlayAlong
  },
  {
    path: '/',
    Component: Home
  }
]