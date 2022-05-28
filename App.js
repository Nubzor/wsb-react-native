import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';

function App() {
  const animating = true;

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={animating} />
      <ActivityIndicator animating={animating} size="large" />
      <ActivityIndicator animating={animating} size={124} />
      <ActivityIndicator animating={animating} style={[{}, {
        transform: [{ scaleY: 5 }, { scaleX: 5 }]
      }]} color="#ff0000"/>
      <Text>Open up App.js to start working on dsadasdyour app! adasdasdasdasd</Text>
      <Button title="To jest przycisk" onPress={() => console.log('wcisniety!')} disabled={true} />
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
