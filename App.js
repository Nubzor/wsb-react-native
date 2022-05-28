import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, Image } from 'react-native';

class App extends React.Component {
  render() {
    const animating = true;

    return (
      <View style={styles.container}>
        <ActivityIndicator animating={animating} />
        <ActivityIndicator animating={animating} size="large" />
        <ActivityIndicator animating={animating} size={124} />
        <Text>Open up App.js to start working on dsadasdyour app! adasdasdasdasd</Text>
        <Button title="To jest przycisk" onPress={() => console.log('wcisniety!')} disabled={true} />
        <StatusBar style="auto" />
        <Image 
          fadeDuration={3000}
          source={require('./default.png')} 
          />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100px',
    height: '100px',
  }
});
