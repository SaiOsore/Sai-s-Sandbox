import foldersReducer from './folders';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  folders: foldersReducer,
})

export default allReducers;