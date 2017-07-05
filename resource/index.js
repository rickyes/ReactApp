/**
 * Created by zhoumq on 17/5/22.
 */
import React,{ Component } from 'react';
import { Scene,Router } from 'react-native-router-flux';
import loginUser from './service/loginUser';
import Movie from './service/Movie';
import parallaxScrollViewTest from './view/parallaxScrollViewTest';
import routeService from './service/routeService';

class App extends Component{
    render(){
        return (
            <Router>
                <Scene key="root">
                    <Scene key="routeService" component={routeService} title="路由管理"/>
                    <Scene key="login" component={loginUser} title="登录"/>
                    <Scene key="register" component={Movie} title="注册"/>
                    <Scene key="parallaxScrollView" component={parallaxScrollViewTest} title="显示"/>
                </Scene>
            </Router>
        );
    }
}

export default App;