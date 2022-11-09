import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import LogInScreen from './src/screen/LogIn/LogInScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LogInScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
