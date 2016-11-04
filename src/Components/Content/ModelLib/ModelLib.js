import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './modelLib.css'
import {Modal, Button} from 'antd'
import ComNav from '../ComNav/ComNav.js'
import getAjax from '../../../libs/ajaxSrv/getAjax.js'
import * as actions from '../../../redux/infoBar/infoBar.action.js'


class ModelLib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      comNav: ''
    }
  }
  componentWillMount() {
    let _this = this
    getAjax.test(function (data) {
      _this.setState({
        comNav: data.modelLib
      })
    })
  }
  showModal() {
    this.setState({
      visible:true
    })
  }

  handleOk() {
    this.setState({
      visible:false
    })
  }

  handleCancel(e) {
    console.log(e);
    this.setState({
      visible:false
    })
  }

  timerPlus = () => {
    this.props.add()
  }

  timerSubtract = () => {
    this.props.subtract()
  }

  render () {
    // console.debug('ModelLib this : ', this)
    return (
      <div className={style.modelLib}>
        <Button onClick={this.timerPlus}>+</Button>
        <Button onClick={this.timerSubtract}>-</Button>
        <ComNav comNav={this.state.comNav}/>
        <Button onClick={this.showModal.bind(this)} type="primary">弹窗</Button>
        <Modal title="Basic Modal" visible={this.state.visible}
          onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    )
  }
}

export default connect(
  (state)=>({

  }),
  (dispatch)=>{
    return {
      add: () => {   //把所有action绑定到dispatch上
        dispatch(actions.timer('add'))
      },
      subtract: () => {   //把所有action绑定到dispatch上
        dispatch(actions.timer('subtract'))
      }
    }
  }
)(ModelLib)
