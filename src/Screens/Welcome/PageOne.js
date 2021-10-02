import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Controller from '../../assets/ps5controller.svg'

const PageOne = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome Gamer</Text>
      <View>
        <Controller width="300" height="300" />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text2}>At GamersBuy you will find all the games you need to get the best gameplay.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PageTwo')}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
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
    marginTop: 20
  },
  viewText: {
    backgroundColor: '#00B0FF',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 15
  },  
  text2: {
    color: '#E0E5EF',
    fontSize: 18,
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
})

export default PageOne;