/**
 * Created by zhoumq on 17/6/3.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {add,minus} from './actions/MathAction';

class Math extends Component{

    constructor(props){
        super(props);
        this.addPress = this.addPress.bind(this);
        this.minusPress = this.minusPress.bind(this);
        this.state = {
            result:100
        }
    }

    addPress(){
        this.props.dispatch(add(this.state.result));
    }

    minusPress(){
        this.props.dispatch(minus(this.state.result));
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.result!=this.props.result){
            this.state.result = nextProps.result;
            return true;
        }
    }

    render(){
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
                    {this.state.result}
                </Text>
            </View>
        );
    }
}

function select(store) {
    return {
        result:store.mathStore.result
    }
}

export default connect(select)(Math);