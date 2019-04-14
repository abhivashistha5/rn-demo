import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

export default class PlaceList extends Component {
  
  render () {
    let placesOutput = [];
    
    if (this.props.placeList && Array.isArray(this.props.placeList)) {
      placesOutput = this.props.placeList.map((place, index) => (
        <ListItem key={index} text={place} onItemPressed={() => { this.props.onListItemPressed(index); }}/>
      ));
    }
    
    return (
      <View style={styles.listContainer}>
        {placesOutput}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    margin: 5,
    justifyContent: 'space-evenly',
  }
});