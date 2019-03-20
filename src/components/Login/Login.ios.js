import React, {Component} from 'react';
import {View, TextInput, Button, Text, KeyboardAvoidingView} from 'react-native';



export default class Login extends Component{

    login = () => {
        this.props.navigation.navigate("appStack");
    }

    render(){

        return (

            <KeyboardAvoidingView 
                style={{flex: 1, justifyContent: 'center'}} behavior="padding">

                <Text style={{fontSize: 25, backgroundColor: 'teal', textAlign: 'center'}}>Login IOS Screen</Text>
                <TextInput placeholder="Email" keyboardType="email-address"/>
                <TextInput placeholder="Password" secureTextEntry={true}/>
                <Button title="Login" onPress={this.login}></Button>
                <Button title="Register"></Button>
            </KeyboardAvoidingView>
        );
    }
}