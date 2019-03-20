import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';



class Counter extends Component{

    static navigationOptions = {
        title: "Counter"
      }

    state = {
        count: 0
    };

    constructor(){

        super();
        this.decr = this.decr.bind(this);
    }

    inc= () => {
        //this.state.count++;
        console.log(this);
        this.setState({
            count: this.state.count + 1
        })
    }
    decr(){
        console.log(this);
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){

        return (
            <View>
                <Text>Counter: {this.state.count} </Text>

                <Button title="Increment" onPress={this.inc}/>
                <Button title="Decrement" onPress={this.decr}/>
                <Button title="Next" onPress={() => {this.props.navigation.navigate("redux")}}/>
            </View>
        );

    }


}

export default Counter;