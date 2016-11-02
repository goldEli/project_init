import React, {Component} from 'react';
import style from './navBar.css'
import {Link} from 'react-router'
import {Button} from 'antd'

export default class NavSide extends Component {

  render () {
    console.debug('navside this : ', this)
    return (
      <div className = {style.navSide}>
        <ul>
          <li><Link to="/AlgLib"><Button>算法库</Button></Link></li>
          <li><Link to="/ModelLib"><Button>模型库</Button></Link></li>
        </ul>
      </div>
    )
  }
}
