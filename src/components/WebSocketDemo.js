import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';


export default class WebSocketDemo extends Component{

    state = {
        message: "",
        response: "Response"
    }
    websocket = null;

    connect = () => {

        console.log("connecting")
        var url = "wss://echo.websocket.org";
        
        this.websocket = new WebSocket(url);
        console.log(this.websocket);
        this.websocket.addEventListener('open', () => {
            console.log("connected")
            this.setState({
                response: "Connected"
            })
        }, false);
        this.websocket.addEventListener('error', (e) => {
            console.log("error: " + e.message);
            
        }, false);

        this.websocket.addEventListener('message', (e)=> {

            this.setState({
                response: "Received: " + e.data
            })
        }, false);
    }

    send = () => {
        this.websocket.send(this.state.message);
    }

    render(){

        return(
              <View>
                  <Button title="Connect" onPress={this.connect}></Button>
                  
                  <TextInput value={this.state.message}
                     onChangeText={(text)=> {this.setState({message: text})}} />

                  <Button title="Send" onPress={this.send}/>
                  <Text>{this.state.response}</Text>
              </View>  
        );


    }

}