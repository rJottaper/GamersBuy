import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import Cart from '../../assets/cart-icon.svg'

const Header = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.name}>GamersBuy</Text>
      <Icon name="cart-plus" style={styles.icon} />
    </View>
  )
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    backgroundColor: '#00B0FF',
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E0E5EF'
  },
  icon: {
    fontSize: 24,
    color: '#E0E5EF',
    marginTop: 2
  }
});

export default Header;