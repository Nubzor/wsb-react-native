import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, Image, Modal } from 'react-native';

class App extends React.Component {
  state = {
    isAnimating: true,
    isModalVisible: false,
  }

  onPressHandler = () => {
    this.setState({
      isAnimating: !this.state.isAnimating,
    })
  }

  onModalPressHandler = () => {
    this.setState({
      isModalVisible: true,
    });
  }

  onModalClosePressHandler = () => {
    this.setState({
      isModalVisible: false,
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
        <Button title="Otwórz" style={styles.button} onPress={this.onModalPressHandler} />
        
        <Modal visible={this.state.isModalVisible}>
          <View>
            <Text>To jest text modala</Text>
            <Button title="Zamknij" onPress={this.onModalClosePressHandler}/>
          </View>
        </Modal>
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
  button: {
    border: '1px solid',
    borderColor: '#ccddee',
  },
  image: {
    width: '100px',
    height: '100px',
  }
});
