import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Happiest Hour Featured Bars</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textDecorationLine: 'underline',
    textAlign: 'center',
    padding: 5,
  },
});

export default App;
