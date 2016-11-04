import {combineReducers} from 'redux';
import AlgLibReducers from './AlgLib/algLib.reducers.js';
import InfoBarReducer from './infoBar/infoBar.reducer.js';

const initialState = {};
const reducers = combineReducers({
  AlgLibReducers,
  InfoBarReducer
},initialState)

export default reducers;
