import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactRouter, { hashHistory  } from 'react-router'
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router'
import ReduxThunk from 'redux-thunk'
import ReduxRedux, {Provider} from 'react-redux'
import Redux, { createStore, applyMiddleware, combineReducers } from 'redux'

import Main from './Components/Main.js';
import AlgLib from './Components/Content/AlgLib/AlgLib.js'
import ModelLib from './Components/Content/ModelLib/ModelLib.js'
import reducers from './redux/index.js'

const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk
)(createStore)

const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store = {store}>
    <Router history={hashHistory}>
          <Route path="/" component={Main}>
              <IndexRoute component={AlgLib}></IndexRoute>
              <Route path="/AlgLib" component={AlgLib}></Route>
              <Route path="/ModelLib" component={ModelLib}></Route>
          </Route>
    </Router>
  </Provider>
  ,document.getElementById('container')
)
