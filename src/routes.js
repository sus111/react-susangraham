import React from 'react';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/about';
import Projects from './components/projects';
import Splash from './components/splash';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About} />
      <Route path="/projects" component={Projects} />
    </Route>
  </Router>

);
