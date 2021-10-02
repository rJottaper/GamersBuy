import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, } from 'react-native';

import Header from '../../components/Header';
import Games from '../../components/Games';

import Date from '../../products.json';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.title}>Buy Your New Game and Be Happy</Text>
      <FlatList 
        data={Date}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Games image={item.image} name={item.name} price={item.price} key={() => item.id} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E5EF'
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00B0FF'
  }
});

export default Home;