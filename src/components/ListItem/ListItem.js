import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class ListItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onItemPressed}>
        <View style={styles.listItem}>
          <Image style={styles.image} source={this.props.placeImage}/>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#eee',
    margin: 5,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    margin: 5,
  },
  image: {
    height: 30,
    width: 30,
  }
});