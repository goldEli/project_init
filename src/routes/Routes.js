import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router'

import Content from '../Components/Content/Content.js'
import AlgLib from '../Components/Content/AlgLib/AlgLib.js';
import ModelLib from '../Components/Content/ModelLib/ModelLib.js'

export default class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <IndexRoute component={Content}></IndexRoute>
        <Route path="/" conponent={Content}>
          <IndexRoute component={AlgLib}></IndexRoute>
          <Route path="/AlgLib" component={AlgLib}></Route>
          <Route path="/ModelLib" component={ModelLib}></Route>
        </Route>
      </Router>
    )
  }
}
