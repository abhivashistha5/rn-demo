/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

import placeImage from './src/assets/snow_covered.jpg';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
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
    places: [],
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          place: placeName,
          placeImage: placeImage,
        })
      }
    });
  }

  placeDeleteHandler = item => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => item.key !== place.key)
      }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList style={styles.placeList} placeList={this.state.places} onListItemPressed={this.placeDeleteHandler}/>
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
  placeList: {
    justifyContent: 'center',
  }
});
