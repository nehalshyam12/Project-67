import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from 'react-native-elements';
import * as Speech from 'expo-speech';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toSay: '',
    };
  }

  speak = () => {
    if (this.state.toSay != '') {
      Speech.speak(this.state.toSay);
    } else{
      alert('The input box is empty.');
    }
  };

  render() {
    return (
      <View>
        <AppHeader />

        <Image
          style={styles.image}
          source={require('./components/Text to speech.png')}
        />

        <TextInput
          style={styles.input}
          placeholder="Type your text here."
          onChangeText={(val) => {
            this.setState({ toSay: val });
          }}
        />

        <TouchableOpacity style={styles.container} onPress={this.speak}>
          <Text style={styles.text}>Speak</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    marginTop: 30,
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
  },

  container: {
    backgroundColor: 'green',
    alignSelf: 'center',
    marginTop: 10,
    padding: 3,
    borderWidth: 2,
    borderRadius: 3,
  },

  image: {
    marginTop: 20,
    alignSelf: 'center',
    width: 200,
    height: 200,
  },

  text: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
