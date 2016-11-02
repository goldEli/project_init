import React, {Component} from 'react';
import style from './infoBar.css'

export default class InfoBar extends Component {
  render () {
    return (
      <div className={style.infoBar}>
        <div className={style.content}>
          <div style={{margin:'13px 0 0 37px'}}>
            <span>你好！ </span><span>admin</span>
          </div>
        </div>
      </div>
    )
  }
}
