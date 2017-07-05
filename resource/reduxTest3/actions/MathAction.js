/**
 * Created by zhoumq on 17/6/3.
 */
import * as types from '../types/ActionTypes';

export function add(value) {
    return {
        type:types.ADD,
        result:value
    }
}

export function minus(value) {
    return {
        type:types.MINUS,
        result:value
    }
}