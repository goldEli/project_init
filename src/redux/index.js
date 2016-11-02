import {combineReducers} from 'redux';
import AlgLibReducers from './AlgLib/algLib.reducers.js'

const initialState = {};
const reducers = combineReducers({
  AlgLibReducers
},initialState)

export default reducers;
