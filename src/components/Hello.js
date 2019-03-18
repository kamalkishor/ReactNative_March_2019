import React from 'react';
import {View, Text} from 'react-native';

const Hello = (props)=>{

    return (
        <View>
            <Text>Hello {props.message}</Text>
            <Text>Generated @{new Date().toString()}</Text>
        </View>
    );
}

export default Hello;
