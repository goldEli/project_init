import React, {Component} from 'react';
import style from './NavSide.css'
import {Link} from 'react-router'
import {Button} from 'antd'

export default class NavSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classname: 'AlgLib'
    }
  }

  componentDidMount() {
      let name = window.location.hash.substr(2)
      console.info(name)
      this.setState({
        classname:name
      })
  }

  handleClick = (name) => {

    if (this.state.classname != name && name != '') {
      this.setState({
        classname: name
      })
    }
  }
  render () {
    return (
      <div className = {style.navSide}>
        <ul>
          <li><span className={style.icon_bigData}></span><p>大数据<br/>机器学习</p></li>
          <li onClick={e=>this.handleClick('AlgLib')} className={this.state.classname == 'AlgLib' ? style.cur_bg : ''}><Link to="/AlgLib"><span className={style.icon_alg}></span><p>算法库</p></Link></li>
          <li onClick={e=>this.handleClick('ModelLib')} className={this.state.classname == 'ModelLib' ? style.cur_bg : ''}><Link to="/ModelLib"><span className={style.icon_model}></span><p>模型库</p></Link></li>
        </ul>
      </div>
    )
  }
}
