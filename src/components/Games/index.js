import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Games = ({ name, price, image }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.image} />
        <View style={styles.viewText}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>${price}</Text>
        </View>
      </TouchableOpacity>
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
  }
});

export default Games;