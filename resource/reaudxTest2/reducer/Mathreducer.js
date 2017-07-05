/**
 * Created by zhoumq on 17/5/26.
 */

import * as Type from '../type/MathType';

const initState = {
    return:0
}

export default function mathReducer(state = initState,action) {
    switch (action.type){
        case Type.ADD:
            console.log('-----> mathRenducer action.type'+action.type);
            return {
                ...state,
                result:action.result+10,
            };
            break;
        case Type.MINUS:
            console.log('-----> mathRenducer action.type'+action.type);
            return {
                ...state,
                result:action.result-10,
            };
        default:
            return state;
    }
}