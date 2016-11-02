import Redux, { createStore, applyMiddleware, combineReducers } from 'redux'
import TodolistReducer from './todolist/todolist.reducer.js';
import reducer from './todolist/todolist.reducer.js'

const initialState = {}

const AlgLibReducers = combineReducers({
  TodolistReducer
},initialState)

export default  AlgLibReducers;
