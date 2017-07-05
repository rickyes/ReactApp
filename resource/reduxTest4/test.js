/**
 * Created by zhoumq on 17/6/3.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

export default class test extends Component{

    constructor(props){
        super(props);
        this.state = {
            value:0,
            status:true
        }
            setInterval(()=>{
                if(this.state.status){
                    this.setState({
                        value:this.state.value+1
                    });
                }
            },1);
    }


    render(){
        let str = this.state.status ? "暂停":"开始";
        let time = '';
        if(this.state.value<60){
            time = ''+this.state.value;
        }else if(this.state.value>60&&this.state.value<3600){
            let tem = Math.floor(this.state.value/60);
            let tems = '';
            let ms = (this.state.value-tem*60);
            let mss = '';
            if(tem<10){
                tems = '0'+tem;
            }else{
                tems = tem;
            }
            if(ms<10)
                mss = '0'+ms;
            else{
                mss = ms;
            }
            time = ''+tems+':'+mss;
        }else if(this.state.value>3600&&this.state.value<216000){
            let hs = Math.floor(this.state.value/3600);
            let hss = '';
            let tem = Math.floor((this.state.value-hs*3600)/60);
            let tems = '';
            let ms = (this.state.value-(hs*3600+tem*60));
            let mss = '';
            if(hs<10){
                hss = '0'+hs;
            }else{
                hss = hs;
            }
            if(tem<10){
                tems = '0'+tem;
            }else{
                tems = tem;
            }
            if(ms<10)
                mss = '0'+ms;
            else{
                mss = ms;
            }
            time = hss+':'+tems+':'+mss;
        }
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#5B9BB9',fontSize:30,fontWeight:'bold',marginBottom:250}}>Redux计时器</Text>
                <Text style={{color:'#35b998',fontSize:50,fontWeight:'bold',marginTop:20}}>{time}</Text>
                <TouchableHighlight
                    style={{justifyContent:'center',alignItems:'center',marginTop:20,backgroundColor:'#3b5999',width:200,height:50,borderRadius:15}}
                    onPress={()=>{this.setState({status:!this.state.status})}}>
                    <Text style={{color:'white',fontSize:20}}>{str}</Text>
                </TouchableHighlight>
            </View>
        );
    }

}
