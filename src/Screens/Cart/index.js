import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

const Cart = ({ route }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (route.params) {
      const { name, price } = route.params
      setItems(items => [ ...items, { name, price } ])
    }
  }, [route.params])

  console.log(items)

  const total = items.map(item => (
    item.price
  ))

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CART</Text>
      <View style={styles.gamesBuy}>
        <Text style={styles.textGamesBuy}>You are Buying: </Text>
      </View>
      <View>
        {items.map(games => (
          <View style={styles.viewItem}>
            <Text style={styles.textItem}>{games.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.totalView}>
        <Text style={styles.totalText}>TOTAL = ${total}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E0E5EF',
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00B0FF',
    marginTop: 40
  },
  gamesBuy: {
    backgroundColor: '#00B0FF',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  textGamesBuy: {
    color: '#E0E5EF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  viewItem: {
    backgroundColor: '#00B0FF',
    marginTop: 10,
    width: 300,
    padding: 10,
    borderRadius: 10,
  },
  textItem: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E5EF',
  },
  totalView: {
    backgroundColor: '#00B0FF',
    padding: 15,
    marginTop: 30,
    width: 350,
    borderRadius: 10
  },
  totalText: {
    color: '#E0E5EF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#00B0FF',
    width: 400,
    marginTop: 50,
    padding: 15,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#E0E5EF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default Cart;
