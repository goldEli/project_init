import React, {Component} from 'react';
import style from './ModelLib.js'
import {Modal, Button} from 'antd'

export default class ModelLib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  showModal() {
    this.setState({
      visible:true
    })
  }

  handleOk() {
    console.info('clicked OK')
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

  render () {
    return (
      <div>
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
