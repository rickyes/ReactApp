/**
 * Created by zhoumq on 17/5/26.
 */

import * as types from '../type/MathType';

export function add(intvalue) {
    console.log('----> MainAction add intvalue'+intvalue);
    return {
        type:types.ADD,
        result:intvalue
    }
}

export function minus(intvalue) {
    console.log('-----> MainAction minus intvalue'+intvalue);
    return {
        type:types.MINUS,
        result:intvalue
    }
}