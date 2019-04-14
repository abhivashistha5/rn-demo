import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ListItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onItemPressed}>
        <View style={styles.listItem}>
          <Text>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#eee',
    margin: 5,
  }
});