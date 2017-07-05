/**
 * Created by zhoumq on 17/6/3.
 */
import * as types from '../types/ActionTypes';

const initState = {
    result:100
}

export default function mathRenducer(state = initState,action) {
    switch (action.type){
        case types.ADD:
            return {
                ...state,
                result:action.result+10
            }
        case types.MINUS:
            return {
                ...state,
                result:action.result-10
            }
        default:
            return state;
    }
}