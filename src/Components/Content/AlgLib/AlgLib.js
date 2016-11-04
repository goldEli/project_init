import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Input, Button, Card } from 'antd';
import { bindActionCreators } from 'redux';

import style from './algLib.css';
import * as actions from '../../../redux/AlgLib/todolist/todolist.action.js';
import ComNav from '../ComNav/ComNav.js';
import getAjax from '../../../libs/ajaxSrv/getAjax.js'




class AlgLib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comNav: ''
    }
  }
  componentWillMount() {
    let _this = this
    getAjax.test(function (data) {
      _this.setState({
        comNav: data.algLib
      })
    })
  }
  add = () =>{
    let inputValue = this.refs.input.refs.input.value;
    let id = this.props.data.length;
    this.props.actions.addTodo(inputValue, id)
  }

  renderItem=()=>{
    return  this.props.data.map((item,index)=>{
      return ( <p key={index}>{item.name}</p>)
    })
  }
  render () {
    return (
      <div className={style.algLib}>
        <ComNav comNav={this.state.comNav}/>
        <div style={{'display':'inline-block'}}>
          <Input type="text"  ref="input" placeholder="add something..." />
        </div>
        <Button onClick={this.add} style={{'display':'inline-block'}}>add</Button>
        <Card style={{ width: 211 }}>
          {this.renderItem()}
         </Card>
      </div>
    )
  }
}

export default connect(
  (state)=>({
    data:state.AlgLibReducers.TodolistReducer.data
  }),
  (dispatch)=>({
    actions: bindActionCreators(actions, dispatch)   //把所有action绑定到dispatch上
  })
)(AlgLib)
