import React, { Component } from 'react';
import { Modal, View, Text, Image, Button, StyleSheet } from 'react-native';

export default class PlaceDetail extends Component {

  render() {
    let modalContent = null;

    if (this.props.selectedPlace) {
      modalContent = (
        <View>
          <Image resizeMode='contain' style={styles.image} source={{uri: this.props.selectedPlace.placeImage}} />
          <Text style={styles.text}>{this.props.selectedPlace.place}</Text>
        </View>
      );
    }

    return (
      <Modal onRequestClose={this.props.onModalClose} visible={this.props.selectedPlace !== null} animationType='slide'>
        <View style={styles.modalContainer}>
          {modalContent}
          <View>
            <Button title='DELETE' color='red' onPress={this.props.onPlaceDeleted} />
            <Button title='CLOSE' onPress={this.props.onModalClose} />
          </View>
        </View>
      </Modal>
    );
  }

}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
  },
  image: {
    height: 200,
    width: "100%",
    backgroundColor: '#8e2f55',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});