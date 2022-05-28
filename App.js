import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, Image } from 'react-native';

class App extends React.Component {
  state = {
    isAnimating: true,
  }

  onPressHandler = () => {
    this.setState({
      isAnimating: !this.state.isAnimating,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={this.state.isAnimating} />
        <ActivityIndicator animating={this.state.isAnimating} size="large" />
        <ActivityIndicator animating={this.state.isAnimating} size={124} />
        <Text>Open up App.js to start working on dsadasdyour app! adasdasdasdasd</Text>
        <Button title="To jest przycisk" onPress={this.onPressHandler} />
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
