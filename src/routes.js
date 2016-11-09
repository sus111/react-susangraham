import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/about';
import Projects from './components/projects';
import Splash from './components/splash';

export default (
  <Router>
    <Route path="/app" component={App}>
      <IndexRoute path="/app/about" component={About} />
      <Route path="/app/projects" component={Projects} />
    </Route>
  </Router>

);
