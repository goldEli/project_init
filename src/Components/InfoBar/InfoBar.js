import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './infoBar.css';
import {Button} from 'antd';


class InfoBar extends Component {
  render () {
    // console.debug('infobar this', this)
    return (
      <div className={style.infoBar}>
        <div className={style.content}>
          <div style={{margin:'13px 0 0 37px'}}>
            <span>你好！ </span><span>admin</span>
          </div>

          <div style={{'float':'right','marginTop':'-21px'}}>
            <Button>{this.props.data}</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state)=>{
    return {
      data:state.InfoBarReducer
    }
  }
)(InfoBar)
