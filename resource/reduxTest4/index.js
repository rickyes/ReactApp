/**
 * Created by zhoumq on 17/6/3.
 */
import React,{Component} from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import Time from './Time';
import reducers from './reducer/reducers';
const applyMiddle = [thunk];
const createStoreWithMiddle = applyMiddleware(...applyMiddle)(createStore);

export default class index extends Component{

    constructor(props) {
        super(props);
        this.state = {
            store:createStoreWithMiddle(reducers)
        };
    }

    render(){
        return (
            <Provider store={this.state.store}>
                <Time/>
            </Provider>
        );
    }

}