/**
 * Created by zhoumq on 17/6/3.
 */
import * as types from '../types/ActionTypes';
const initState = {
    value:0
}

export default function timeReducer(state = initState,action) {
    switch (action.type){
        case types.START:
            return {
                ...state,
                value:action.value+1
            }
        case types.END:
            return {
                ...state,
                value:action.value
            }
        default:
            return state;
    }
}