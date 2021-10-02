import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerView}>
      <Text style={styles.name}>GamersBuy</Text>
      <TouchableOpacity>
        <Icon name="cart-plus" style={styles.icon} onPress={() => navigation.navigate('Cart')} />
      </TouchableOpacity>
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