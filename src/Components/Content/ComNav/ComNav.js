import React, {Component} from 'react';
import style from './comNav.css';

import {Button, Icon} from 'antd';

export default class ComNav extends Component{
  constructor(props) {
    super(props);
    this.state = {
      titleName: ''
    }
  }
  componentDidMount() {
    let timer = setInterval(e=>{
      if (this.props.comNav != '') {
        this.setState({
          titleName:this.props.comNav[0]
        })
        clearInterval(timer);
      }
    })
  }
  handleClick = (name) => {
    if (name != '' && this.state.titleName != name) {
      this.setState({
        titleName: name
      })
    }
  }
  domItem = () => {
    if (this.props.comNav == '') return;
    let _this = this
    return this.props.comNav.map((item, index) => {
      return <span onClick={()=>{_this.handleClick(item)}} className={_this.state.titleName == item ? style.item_active : style.item} key={index}>{item}</span>
    })
  }
  render() {

    return (
      <div className={style.comNav}>
        {this.domItem()}
        <div className={style.plusButton}>
          <Button>
              <Icon type="plus" /> 自定义算法
          </Button>
        </div>
      </div>
    )
  }
}
