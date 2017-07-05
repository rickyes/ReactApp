/**
 * Created by zhoumq on 17/5/24.
 */
import React,{Component} from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class animatedTest extends Component{

    constructor(props){
        super(props);
        this.state = {
            anim:[1,2,3].map(()=>new Animated.Value(0))
        };
    }

    componentDidMount(){
        var timing = Animated.timing;
        Animated.sequence([
            Animated.stagger(200,this.state.anim.map(left=>{
                return timing(left,{
                    toValue:0,
                });
            }).concat(
                this.state.anim.map(left=>{
                    return timing(left,{
                        toValue:0,
                    });
                })
            )),
            Animated.delay(400),
            timing(this.state.anim[0],{
               toValue:1
            }),
            timing(this.state.anim[1],{
                toValue:-1
            }),
            timing(this.state.anim[2],{
                toValue:0.5
            }),
            Animated.delay(400),
            Animated.parallel(this.state.anim.map((anim)=>timing(anim,{
                toValue:0
            })))
        ]).start();
    }

    render(){
        var views = this.state.anim.map(function (value,i) {
            return (
                <Animated.View
                    key={i}
                    style={[styles.demo,styles['demo'+i],{
                        left:value.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,200]
                        })
                    }]}>
                    <Text style={styles.text}>我是第{i+1}个View</Text>
                </Animated.View>
            );
        });

        return (
            <View style={styles.demo}>
                <Text style={styles.text}>演示</Text>
                {views}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    demo:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    text:{
        fontSize:30
    }
});