import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Text To Speech</Text>
        <Text style={styles.text}>Converter</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'black',
    color: 'white',
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'green',
    padding: 3,
  },
});
