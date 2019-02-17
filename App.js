/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>Welcome to React Native!</Text>
  //       <Text style={styles.instructions}>To get started, edit App.js</Text>
  //       <Text style={styles.instructions}>{instructions}</Text>
  //     </View>
  //   );
  // }

  state = {
    placeName: '',
    places: [],
  }

  placeNameChangedHandler = (event) => {
    this.setState({
      placeName: event
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(this.state.placeName)
      }
    });
  }

  render () {
    const placesOutput = this.state.places.map((place, index) => (
      <ListItem key={index} text={place}/>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} onChangeText={this.placeNameChangedHandler} />
          <Button style={styles.addButton} title='Add' onPress={this.placeSubmitHandler}/>
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
    margin: 5
  },
  addButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%',
    margin: 5,
  }
});
