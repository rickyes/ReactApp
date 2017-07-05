/**
 * Created by zhoumq on 17/7/1.
 */
import React,{ PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class FindScreen extends PureComponent{

    render(){
        return (
            <View style={styles.container}>
                <Text>FindScreen</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
});