import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, Image, Modal, Text, TouchableHighlight } from 'react-native';

const images = [
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
    description: 'to jest jakis opis mojeg wspaniałego zdjecia',
  },
  {
    url: 'https://www.tailorbrands.com/wp-content/uploads/2020/06/mcdonalds-logo-a-1.png',
    description: 'to jest inny opis mojeg drugiego wspaniałego zdjecia',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297__340.png',
    description: 'to jest inny opis trzeciego wspaniałego zdjecia',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
  {
    url: 'https://v.wpimg.pl/MDc0OC5wYiUCUjlwGgxvMEEKbSpcVWFmFhJ1YRpFfHwbAXxzGgQqMxMeODNWEyNqE1xgIgdHdCZWBXl1DUYvJloELnZTRSl9U1N3IQVDfHRUBHdtRRkqZh4',
  },
];

class App extends React.Component {
  state = {
    isModalVisible: false,
    modalImageUrl: '',
    modalDescription: '',
  }

  onModalPressHandler = (visible, image) => {
    this.setState({
      isModalVisible: visible,
      modalImageUrl: image && image.url,
      modalDescription: image && image.description
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        {images.map(image => {
          return (<TouchableHighlight key={image.url} onPress={() => this.onModalPressHandler(true, image)} style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              source={{
                uri: image.url,
                width: 100,
                height: 100,
              }} 
            />
          </TouchableHighlight>)
        })}
        
        <Modal visible={this.state.isModalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <Image 
              fadeDuration={3000}
              resizeMode="contain"
              source={{
                uri: this.state.modalImageUrl,
                width: 300,
                height: 300,
              }} 
            />
            <Text>{this.state.modalDescription}</Text>
            <Button title="Zamknij" onPress={() => this.onModalPressHandler(false)}/>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 30,
  },
  imageContainer: {
    backgroundColor: '#fff',
    padding: 5,
    margin: 5,
  },
  modalContainer: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
