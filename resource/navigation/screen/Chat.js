/**
 * Created by zhoumq on 17/7/1.
 */
import React,{PureComponent} from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class Chat extends PureComponent {
    static navigationOptions = ({navigation}) => ({
        title:`Chat with ${navigation.state.params.user}`,
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}