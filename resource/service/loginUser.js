/**
 * Created by zhoumq on 17/5/22.
 */
import React,{Component} from 'react';
import {
    View,
    TextInput,
    Text
} from 'react-native';
export default class loginUser extends Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:40,color:'#35b998'}}>登录</Text>
                <View style={{marginTop:30}}>
                    <TextInput style={{width:300,height:70}}/>
                </View>
                <View>
                    <TextInput style={{width:300,height:70}}/>
                </View>
            </View>
        );
    }

}