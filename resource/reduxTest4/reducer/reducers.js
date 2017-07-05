/**
 * Created by zhoumq on 17/6/3.
 */
import {combineReducers} from 'redux';
import TimeReducer from './TimeReducer';

export default combineReducers({
    timeStore:TimeReducer
});