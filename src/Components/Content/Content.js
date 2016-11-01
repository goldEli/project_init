import React, {Component} from 'react';
import style from './content.css'

import Routes from '../../routes/Routes.js'
import ReactRouter, { hashHistory  } from 'react-router'
import ReactRouterRedux, { syncHistoryWithStore } from 'react-router-redux'

export default class Content extends Component {
  render () {
    return (
      <div className={style.content}>
        {this.props.children}
      </div>
    )
  }
}
