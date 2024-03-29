import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';


class PlayerInput extends Component{

    render(){
        
        return (

            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="PlayerName" 
                                            value={this.props.playerName}
                                            onChangeText={this.props.change}/>
                <Button style={styles.button} title="Add" onPress={this.props.save}/>
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