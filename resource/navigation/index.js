/**
 * Created by zhoumq on 17/7/1.
 */
import React,{PureComponent} from 'react';
import {
    StatusBar
} from 'react-native';
import { StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import HotScreen from './screen/HotScreen';
import FindScreen from './screen/FindScreen';
import MineScreen from './screen/MineScreen';
import color from './widget/color';
import TabBarItem from './widget/TabBarItem';
import Time from '../reduxTest4/index';
import Webview from './widget/Webview';
import ReadingDetail from './screen/ReadingDetail';

class index extends PureComponent{

    constructor() {
        super()
    }

    render(){
        return (
            <Navigator />
        );
    }

}

const Tab = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title:'首页',
            tabBarLabel: '首页',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('../../img/tabbar/pfb_tabbar_homepage@2x.png')}
                selectedImage={require('../../img/tabbar/pfb_tabbar_homepage_selected@2x.png')}
                />
            )
        }),
    },
    Hot: {
        screen: HotScreen,
        navigationOptions: ({ navigation }) => ({
            title:'热度',
            tabBarLabel: '热度',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../../img/tabbar/pfb_tabbar_discover@2x.png')}
                    selectedImage={require('../../img/tabbar/pfb_tabbar_discover_selected@2x.png')}
                />
            )
        }),
    },
    Find: {
        screen: FindScreen,
        navigationOptions: ({ navigation }) => ({
            title:'发现',
            tabBarLabel: '发现',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../../img/tabbar/pfb_tabbar_order@2x.png')}
                    selectedImage={require('../../img/tabbar/pfb_tabbar_order_selected@2x.png')}
                />
            )
        }),
    },
    Mine: {
        screen: MineScreen,
        navigationOptions: ({ navigation }) => ({
            title:'我的',
            tabBarLabel: '我的',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../../img/tabbar/pfb_tabbar_mine@2x.png')}
                    selectedImage={require('../../img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                />
            )
        }),
    },
},{
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
        activeTintColor: color.theme,
        inactiveTintColor: '#979797',
        style: { backgroundColor: '#ffffff' },
    },
});

const Navigator = StackNavigator({
    Tab:{screen:Tab},
    Time:{screen:Time},
    Webview:{screen:Webview},
    ReadingDetail:{screen:ReadingDetail}
},{
    navigationOptions: {
        headerStyle: { backgroundColor: color.theme},
        headerBackTitle: null,
        headerTintColor: '#ffffff',
        showIcon: true,
    },
});

export default index;