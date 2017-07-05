/**
 * Created by zhoumq on 17/6/3.
 */
import * as types from '../types/ActionTypes';
export function start(value,status) {
    return {
        type:types.START,
        value:value
    }
}

export function end(value,status) {
    return {
        type:types.END,
        value:value
    }
}