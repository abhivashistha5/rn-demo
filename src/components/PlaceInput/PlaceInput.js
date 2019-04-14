import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {
  state = {
    placeName: ''
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

    this.props.onPlaceAdded(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={this.placeNameChangedHandler} />
        <Button style={styles.addButton} title='Add' onPress={this.placeSubmitHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: 30,
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
});