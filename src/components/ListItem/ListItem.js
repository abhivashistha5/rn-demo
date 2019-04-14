import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ListItem extends Component {
  render() {
    return (
      <View style={styles.listItem}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#eee',
    margin: 5,
  }
});