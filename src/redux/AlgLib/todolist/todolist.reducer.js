import * as types from './todolist.types.js'
//初始化数据
let initData = {
  showType: '',
  data: [
      {name:'SKT', id:'0'},
      {name:'EDG', id:'1'},
      {name:'RNG', id:'2'},
      {name:'ROX', id:'3'}
  ]
}

const TodolistReducer = (state = initData, action = {}) => {
  switch (action.type) {
    case types.add:
    {
      return Object.assign({},state,{data: [...state.data,{name:action.inputValue, id:action.id}]})
    }
    default:
      return state
  }
}

export default TodolistReducer
