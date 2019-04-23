import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './views/Deck';
import NewDeck from './views/NewDeck';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Deck/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
