/**
 * Created by zhoumq on 17/7/1.
 */

import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'

import color from './color'
import { screen} from '../common'

// create a component
class Separator extends PureComponent {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    line: {
        width: screen.width,
        height: screen.onePixel,
        backgroundColor: color.border,
    },
});

export default Separator;
