import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';

import Products from '../../products.json'

const Games = ({ name, price, image, onPress }) => {
  const modalizeRef = useRef(null);
  
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const navigation = useNavigation();

  const sendGame = () => {
    navigation.navigate('Cart', {
      name: name,
      price: price
    })
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onOpen} >
        <Image style={styles.image} />
        <View style={styles.viewText}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>${price}</Text>
        </View>
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        snapPoint={180}
        modalHeight={180}
        modalStyle={styles.modalView}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{name}</Text>
          <Text style={styles.modalText}>${price}</Text>
        </View>
        <TouchableOpacity style={styles.modalButton} onPress={sendGame}>
          <Text style={styles.modalButtonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </Modalize>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  button: {
    flex: 1,
    backgroundColor: '#B9C7DA',
    borderRadius: 15,
    paddingTop: 15,
    width: '100%'
  },
  image: {
    width: 250,
    height: 250
  },
  viewText: {
   backgroundColor: '#E0E5EF',
   borderWidth: 0.5,
   borderColor: '#B9C7DA',
   borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#B9C7DA'
  },
  modalView: {
    backgroundColor: '#B9C7DA',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E5EF'
  },
  modalButton: {
    backgroundColor: '#E0E5EF',
    marginTop: 45,
    padding: 18,
    width: 250,
    borderRadius: 5
  },
  modalButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#B9C7DA'
  }
});

export default Games;