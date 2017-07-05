/**
 * Created by zhoumq on 17/5/26.
 */

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {add,minus} from './action/MathAction';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

class Main extends Component{

    constructor(props){
        super(props);
        this.addPress = this.addPress.bind(this);
        this.minusPress = this.minusPress.bind(this);
        this.state = {
            intvalue:100,
        }
    }

    addPress(){
        console.log('-----> Main addPress');
        this.props.dispatch(add(this.state.intvalue));
    }

    minusPress(){
        console.log('-----> Main minusPress');
        this.props.dispatch(minus(this.state.intvalue));
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('-----> Main shouldComponentUpdate');
        if(nextProps.result != this.props.result){
            this.state.intvalue = nextProps.result;
            console.log('-----> Main shouldComponentUpdate this.state.intvalue');
            return true;
        }
    }

    render(){
        console.log('-----> Main render');
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{marginTop:10,color:'#35b998',fontSize:50,justifyContent:'center'}}>
                    React-Redux
                </Text>
                <TouchableHighlight onPress={this.addPress}>
                    <Text style={{fontSize:50,justifyContent:'center',marginTop:30}}>
                        按我会加
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.minusPress}>
                    <Text style={{fontSize:50,justifyContent:'center',marginTop:10}}>
                        按我会减
                    </Text>
                </TouchableHighlight>
                <Text style={{marginTop:30,color:'#ffaa11',fontSize:50,justifyContent:'center'}}>
                    {this.state.intvalue}
                </Text>
            </View>
        );
    }

}

function select(store){
    return {
        result:store.mathStore.result
    }
}

export default connect(select)(Main);