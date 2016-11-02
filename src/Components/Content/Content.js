import React, {Component} from 'react';
import style from './content.css'

export default class Content extends Component {
  render () {
    return (
      <div className={style.content}>
        {this.props.children}
      </div>
    )
  }
}
