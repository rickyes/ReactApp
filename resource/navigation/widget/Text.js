/**
 * Created by zhoumq on 17/7/1.
 */
import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    ReactElement
} from 'react-native';
import color from './color';
export function Heading1({style,...props}:Object):ReactElement {
    return <Text style={[styles.h1,style]} {...props}/>;
}

export function Heading2({style, ...props}: Object): ReactElement {
    return <Text style={[styles.h2, style]} {...props} />
}

export function Paragraph({style,...props}:Object):ReactElement {
    return <Text style={[styles.p,style]} {...props}/>
}

const styles = StyleSheet.create({
    h1:{
        fontSize:15,
        fontWeight:'bold',
        color:'#222222'
    },
    h2: {
        fontSize: 14,
        color: '#222222',
    },
    p:{
        fontSize:13,
        color:'#777777'
    }
});