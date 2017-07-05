/**
 * Created by zhoumq on 17/5/20.
 */
import React,{PureComponent} from 'react';
import {
    View,
    StyleSheet,
    WebView,
    Dimensions
} from 'react-native';

const {width,height} = Dimensions.get('window');

export default class Webview extends PureComponent{

    constructor(props){
        super(props);
    }

    render(){
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <WebView
                    style={{width:width,height:height-20,backgroundColor:'gray'}}
                    source={{uri:params.url,method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                    scrollEnabled={true}
                />
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
});