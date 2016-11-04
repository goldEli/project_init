import React, {Component} from 'react';

import './main.css';

import NavSide from './NavSide/NavSide.js'
import InfoBar from './InfoBar/InfoBar.js'
import Content from './Content/Content.js'

export default class Main extends Component {
  render () {
    // console.debug('main this : ', this)
    return (
      <div className="wrap">
        <NavSide />
        <InfoBar />
        <Content children={this.props.children}/>
      </div>
    )
  }
}
