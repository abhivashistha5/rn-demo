import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

export default class PlaceList extends Component {
  
  // render () {
  //   let placesOutput = [];
    
  //   if (this.props.placeList && Array.isArray(this.props.placeList)) {
  //     placesOutput = this.props.placeList.map((place, index) => (
  //       <ListItem key={index} text={place} onItemPressed={() => { this.props.onListItemPressed(index); }}/>
  //     ));
  //   }
    
  //   return (
  //     <View style={styles.listContainer}>
  //       {placesOutput}
  //     </View>
  //   );
  // }

  render () {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.placeList}
        renderItem={(data) => {
          return (
            <ListItem placeImage={data.item.placeImage} text={data.item.place} onItemPressed={() => { this.props.onListItemPressed(data.item); }}/>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    margin: 5,
    // justifyContent: 'space-evenly',
  }
});