/**
 * Created by zhoumq on 17/5/23.
 */
import React,{ Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class parallaxScrollViewTest extends Component{

    render(){
        return (
            <ParallaxScrollView
                contentBackgroundColor="pink"
                parallaxHeaderHeight={200}
                fadeOutForeground={true}
                renderForeground={() => (
                    <Image style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }} source={require('../../img/2.jpg')}/>
                )}>
                <View style={{ height: 500 }}>
                    <Text>Scroll me</Text>
                </View>
            </ParallaxScrollView>
        );
    }

}