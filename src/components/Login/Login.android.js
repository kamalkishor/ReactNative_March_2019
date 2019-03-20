import React, {Component} from 'react';
import {View, TextInput, Button, 
        Text, KeyboardAvoidingView, 
        Platform, ToastAndroid, Dimensions, Animated} from 'react-native';



export default class Login extends Component{

    state = {
        width: (Dimensions.get("screen").width)/2,
        opacity: new Animated.Value(0),
        fontSize: new Animated.Value(15)
    }

    componentDidMount(){

        Animated
            .timing(this.state.opacity, {duration: 4000, toValue: 1, useNativeDriver: false})
            .start();
            Animated
            .timing(this.state.fontSize, {duration: 4000, toValue: 30, useNativeDriver: false})
            .start();
            
    }

    constructor(){

        super();
        var dimensions = Dimensions.get('screen');
        console.log(dimensions);

        Dimensions.addEventListener('change', ()=> {

            var dimensions = Dimensions.get('screen');
            console.log("Changed: ", dimensions);
            this.setState({
                width: (Dimensions.get("screen").width)/2
            });

        }, false);
    }



    login = () => {
        this.props.navigation.navigate("appStack");
    }

    render(){

        if(Platform.OS === "android"){
            ToastAndroid.show("This is on Android", ToastAndroid.LONG);
        }
        if(Platform.OS === "ios"){
            alert("This is on IOS");
        }

        return (

            <KeyboardAvoidingView 
                style={{flex: 1, justifyContent: 'center'}} behavior="padding">

                <Animated.Text style={{alignSelf:'center', fontSize: this.state.fontSize, opacity: this.state.opacity,
                    backgroundColor: 'teal', textAlign: 'center', width: this.state.width}}>Login Android Screen
                </Animated.Text>
                <TextInput placeholder="Email" keyboardType="email-address"/>
                <TextInput placeholder="Password" secureTextEntry={true}/>
                <Button title="Login" onPress={this.login}></Button>
                <Button title="Register"></Button>
            </KeyboardAvoidingView>
        );
    }
}