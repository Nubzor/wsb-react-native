import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

function App() {
  const animating = false;

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={animating} hidesWhenStopped={false} />
      <Text>Open up App.js to start working on dsadasdyour app! adasdasdasdasd</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
