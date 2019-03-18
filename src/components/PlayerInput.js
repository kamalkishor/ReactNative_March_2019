import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';


class PlayerInput extends Component{

    render(){
        return (

            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="PlayerName"/>
                <Button style={styles.button} title="Add"/>
            </View>
            
        );
    }
}

export default PlayerInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    input: {
        width: "80%",
        marginRight: 5 
    },
    button: {
        width: "20%",
    }

});