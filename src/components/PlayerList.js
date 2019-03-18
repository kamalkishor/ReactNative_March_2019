import React, {Component} from 'react';
import {View, Text} from 'react-native'

class PlayerList extends Component{

    render(){

        return (
            <View>
                <Text>List of Players</Text>

                {this.props.players.map((item, index) => {

                    return (
                        <View key={item.id}>
                            <Text>{item.name}</Text>
                        </View>
                    );

                })}
            </View>
        );

    }

}


export default PlayerList;