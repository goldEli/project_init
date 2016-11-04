import React, {Component} from 'react';
import style from './content.css'

export default class Content extends Component {
  render () {
    // console.debug('content this : ', this)
    return (
      <div className={style.content}>
        {this.props.children}
      </div>
    )
  }
}
