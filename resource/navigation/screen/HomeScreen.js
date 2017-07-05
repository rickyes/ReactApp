/**
 * Created by zhoumq on 17/7/1.
 */
import React,{ PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class HomeScreen extends PureComponent{

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigate('Time')}>
                    <Text style={{color:'white',fontSize:20}}>Redux计时器</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        backgroundColor:'#35b998',
        width:200,
        height:50,
        borderRadius:10
    }
});