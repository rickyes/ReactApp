/**
 * Created by zhoumq on 17/6/3.
 */
import {Provider} from 'react-redux';
import {
    createStore,applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reduces/reducers';
const middlewares = [thunk];
const createStoreMiddleware = applyMiddleware(...middlewares)(createStore);
import React,{Component} from 'react';
import Math from './Math';

export default class index extends Component{

    constructor(props){
        super(props);
        this.state = {
            store:createStoreMiddleware(reducers)
        }
    }

    render(){
        return (
            <Provider store={this.state.store}>
                <Math/>
            </Provider>
        );
    }

}