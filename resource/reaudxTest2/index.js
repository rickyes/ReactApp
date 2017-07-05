/**
 * Created by zhoumq on 17/5/26.
 */

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer/reducers';
const middlewares = [thunk];
const createSoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
import React,{Component} from 'react';
import Main from './Main';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            store:createSoreWithMiddleware(reducers)
        }
    }

    render(){
        return (
            <Provider store={this.state.store}>
                <Main/>
            </Provider>
        );
    }

}