import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, Alert} from 'react-native'

class PlayerList extends Component{

    display= (evt, name) => {

        Alert.alert("Player Information", name, [
            {text: 'OK', onPress: () => console.log("OK Pressed")}
        ], {cancelable: true})
    }

    render(){

        const jsx = this.props.players.map((item, index) => {

            return (
                <TouchableOpacity key={item.id} onPress={() => {this.display(item.name)}}>
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <Image source={item.image} 
                            style={{width: 55, height: 55, marginLeft: 5, marginRight: 5}}
                            />
                        <Text style={{fontSize: 20}}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            );
        });

        return (
            <View>
                <Text>List of Players</Text>
                <ScrollView style={{width: "100%"}}>
                    {this.props.players.length === 0 ? <Text>No Players</Text> : jsx}
                </ScrollView>
            </View>
        );

    }

}


export default PlayerList;