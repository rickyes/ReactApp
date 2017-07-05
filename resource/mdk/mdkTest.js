/**
 * Created by zhoumq on 17/5/29.
 */
import React,{ Component } from 'react';
import {
    View,
    Text,
    ToastAndroid,
    StyleSheet
} from 'react-native';
import {
    MKButton,
    MKTextField,
    MKColor,
    MKSpinner
} from 'react-native-material-kit';
import Toast from 'react-native-root-toast';

const SingleColorSpinner = MKSpinner.singleColorSpinner()
    .withStyle()
    .build();

const ColoredRaisedButton = MKButton.coloredButton()
    .withText('BUTTON')
    .withOnPress(() => {
        ToastAndroid.show("Hi, it's a colored button!",ToastAndroid.LONG);
    })
    .build();

const Textfield = MKTextField.textfield()
    .withPlaceholder('Text...')
    .build();

const CustomTextfield = MKTextField.textfield()
    .withPlaceholder('Text…')
    .withStyle()
    .withTintColor(MKColor.Lime)
    .withTextInputStyle({color: MKColor.Orange})
    .build();



export default class mdkTest extends Component{

    constructor(props){
        super(props);
        var toast = Toast.show('This is a message', {
            duration: Toast.durations.LONG,
            position: Toast.positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            onShow: () => {
                // calls on toast\`s appear animation start
            },
            onShown: () => {
                // calls on toast\`s appear animation end.
            },
            onHide: () => {
                // calls on toast\`s hide animation start.
            },
            onHidden: () => {
                // calls on toast\`s hide animation end.
            }
        });

// You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
        setTimeout(function () {
            Toast.hide(toast);
        }, 3000);
    }

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:40,color:'#35b998'}}>登录</Text>
                <View style={{marginTop:30}}>
                    <CustomTextfield textInputStyle={styles.constructor}/>
                </View>
                <View>
                    <CustomTextfield textInputStyle={styles.constructor}/>
                </View>
                <SingleColorSpinner/>
                <MKSpinner style={styles.spinner}/>
                <View style={{marginTop:30}}>
                    <ColoredRaisedButton/>
                </View>
            </View>
        );
    }

}

var styles = StyleSheet.create({

    constructor:{
        width:300,
        height:70
    },
    spinner: {
        //width: 22,
        //height: 22,
    }

});