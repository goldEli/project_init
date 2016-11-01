import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactRouter, { hashHistory  } from 'react-router'

import Main from './Components/Main.js';
import AlgLib from './Components/Content/AlgLib/AlgLib.js'
import ModelLib from './Components/Content/ModelLib/ModelLib.js'

import { Router, Route, IndexRoute, IndexRedirect } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <IndexRoute component={AlgLib}></IndexRoute>
          <Route path="/AlgLib" component={AlgLib}></Route>
          <Route path="/ModelLib" component={ModelLib}></Route>
      </Route>
</Router>

  ,document.getElementById('container')
)
