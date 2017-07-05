/**
 * Created by zhoumq on 17/5/23.
 */
import React,{Component} from  'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class routeService extends Component{

    _routeView(type){
        switch (type){
            case 'login':
                Actions.login();
                break;
            case 'register':
                Actions.register();
                break;
            case 'parallaxScrollView':
                Actions.parallaxScrollView();
                break;
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>React-Native App</Text>
                </View>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={()=>{this._routeView('login')}}
                        style={styles.touchableOpacity}>
                        <View>
                            <Text style={styles.textWhite}>TouchableOpacity</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        underlayColor="#B96289"
                        onPress={()=>{this._routeView('register')}}
                        style={styles.TouchableHighlight}>
                        <View>
                            <Text style={styles.textWhite}>TouchableWithoutFeedback</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={()=>{this._routeView('parallaxScrollView')}}
                        style={styles.touchableOpacityBack}>
                        <View>
                            <Text style={styles.textBack}>parallaxScrollView</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:50
    },
    title:{
        alignItems:'center',
        height:30,
        justifyContent:'center'
    },
    touchableOpacity:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#35b998'
    },
    touchableOpacityBack:{
        width:300,
        height:50,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#FF7E7B'
    },
    TouchableHighlight:{
        marginTop:20,
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#B9809C'
    },
    textWhite:{
        color:'#ffffff'
    },
    textBack:{
        color:'#ffffff',
        fontSize:25
    }
});