import React, {Component} from 'react';
import style from './algLib.css';
import { Input, Button, Card } from 'antd';


export default class AlgLib extends Component {
  render () {
    return (
      <div>
        <div style={{'display':'inline-block'}}>
          <Input placeholder="add something..." />
        </div>
        <Button style={{'display':'inline-block'}}>add</Button>
        <Card style={{ width: 211 }}>
           <p>Card content</p>
           <p>Card content</p>
           <p>Card content</p>
         </Card>
      </div>
    )
  }
}
