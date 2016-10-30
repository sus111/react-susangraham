import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';

export default (
<Route path="/" component={App}>
  <IndexRoute component={About} />
  <Route path="/projects" component={Projects} />
  <Route path="/skills" component={Skills} />
</Route>
);
