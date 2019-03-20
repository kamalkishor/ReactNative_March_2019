import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import {connect} from 'react-redux';

class ReduxCounter extends Component{

    static navigationOptions = {
        title: "Redux"
      }

    constructor(){

        super();
        this.decr = this.decr.bind(this);
    }

    inc= () => {
       this.props.inc();
    }
    decr(){
        this.props.decr();
    }

    render(){

        return (
            <View>
                <Text>Counter: {this.props.counter} </Text>

                <Button title="Increment" onPress={this.inc}/>
                <Button title="Decrement" onPress={this.decr}/>
            </View>
        );

    }


}
const mapPropsToState = (state)=> {

    return {
        counter: state.count
    }
}
const mapPropToDispatch = (dispatch) => {
    return {
        inc : () => {dispatch({type: "INC"})},
        decr: () => {dispatch({type: "DECR"})}
    }
}

export default connect(mapPropsToState, mapPropToDispatch)(ReduxCounter);