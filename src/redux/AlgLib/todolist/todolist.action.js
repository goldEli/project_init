import * as types from './todolist.types.js'



export const addTodo = (inputValue, id) => {
  return {
    type: types.add,
    inputValue:inputValue,
    id: id
  }
}
