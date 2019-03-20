import React, {Component} from 'react';
import {View, TextInput, Button, FlatList, Text, Linking} from 'react-native';
export default class Search extends Component{

    state= {
        searchText: "",
        results: []
    }

    search = () => {
        console.log("seraching");
        var url 
            = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" 
                                                                        + this.state.searchText;
        fetch(url)
            .then((resp) => {
               // console.log(resp);
                return  resp.json()
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    results: data
                });
            })
            .catch((error) => {
                console.log(error);       
            }) 
    }

    render(){
        return (
            <View>
                <TextInput value={this.state.searchText} 
                    onChangeText={(text) => {this.setState({searchText: text})}}  />

                <Button title="Search" onPress={this.search}/>

                <FlatList data={this.state.results[1]} 
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(dataItem) => {
                            return (
                                <View>
                                    <Text>{dataItem.item}</Text>
                                    <Text>{this.state.results[2][dataItem.index]}</Text>
                                    <Text onPress={() => {Linking.openURL(this.state.results[3][dataItem.index])}} >Details</Text>
                                    <Text onPress={() => {Linking.openURL("geo:37.484847,-122.148386")}} >Map</Text>
                                    <Text onPress={() => {Linking.openURL("tel:98000000")}} >Call</Text>
                                </View>
                            );
                        }}/>
            </View>
        );
    }

}
