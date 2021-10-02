import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Buy from '../../assets/buygames.svg'

const PageTwo = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Best Price</Text>
      <View>
        <Buy width="300" height="300" />
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.Title}>The Best Current Games at The Best Market Prices</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Let's Buy</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#E0E5EF',
  },
  text: {
    color: '#00B0FF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30
  },
  viewTitle: {
    backgroundColor: '#00B0FF',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 15
  },
  Title: {
    color: '#E0E5EF',
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  button: {
    backgroundColor: '#00B0FF',
    marginTop: 30,
    paddingVertical: 20,
    width: '85%',
    borderRadius: 10
  },
  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#E0E5EF',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default PageTwo;