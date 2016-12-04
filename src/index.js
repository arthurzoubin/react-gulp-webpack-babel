'use strict';

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './home';
import DemoOne from './demoone';
import DemoTwo from './demotwo';
import DemoThree from './demothree';
import DemoFour from './demofour';
import DemoFive from './demofive';
import DemoSix from './demosix';

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/demoone(/)" component={DemoOne} />
      <Route path="/demotwo(/)" component={DemoTwo} />
      <Route path="/demothree(/)" component={DemoThree} />
      <Route path="/demofour(/:name)" component={DemoFour} />
      <Route path="/demofive(/)" component={DemoFive} />
      <Route path="/demosix(/)" component={DemoSix} />
    </Route>
  </Router>
), document.querySelector("#app"));
