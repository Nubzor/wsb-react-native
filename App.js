import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, Image, Modal, TouchableHighlight } from 'react-native';

class App extends React.Component {
  state = {
    isModalVisible: false,
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
        {/* <ActivityIndicator animating={this.state.isAnimating} size="large" /> */}
        <StatusBar style="auto" />

        <TouchableHighlight onPress={this.onModalPressHandler}>
          <Image 
            fadeDuration={3000}
            source={require('./default.png')} 
            />
        </TouchableHighlight>
        
        <Modal visible={this.state.isModalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <Image 
              source={{
                uri: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
                width: 300,
                height: 200,
              }} 
            />
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
    backgroundColor: '#bbb',
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
  },
  modalContainer: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
