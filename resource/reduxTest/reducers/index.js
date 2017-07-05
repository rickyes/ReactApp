/**
 * Created by zhoumq on 17/5/24.
 */

import { combineReducers } from 'redux';
import userReducer from './user';

export default combineReducers({
   userStore:userReducer,
});