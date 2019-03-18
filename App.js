/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Hello from './src/components/Hello';
import Counter from './src/components/Counter';
import PlayerInput from './src/components/PlayerInput';
import PlayerList from './src/components/PlayerList';
import PlayerImage from './src/assets/player.jpg'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  state = {
    playerName: "Messi",
    players: []
  }

  addPlayer = () => {

    const players = [...this.state.players];
    players.push({
      id: Math.random() * 10,
      name: this.state.playerName,
      image: PlayerImage
    });

    this.setState({
      players: players
    }, () => {
      console.log(this.state.players);
    });
    
  }

  changePlayer = (text) => {

    this.setState({
      playerName: text
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!!!!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {/* <Hello message="ReactNative"/> */}

        {/* <Counter />
        <Counter /> */}
        <PlayerInput playerName={this.state.playerName} 
                                  change={this.changePlayer}
                                  save= {this.addPlayer}/>
        <PlayerList players={this.state.players}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
