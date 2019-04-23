import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './views/Deck';
import NewDeck from './views/NewDeck';
import DecksList from './views/ListDecks';
import { createStackNavigator,  createAppContainer} from 'react-navigation'

const MainNavigator = createStackNavigator({
  Home: {screen: DecksList},
  Deck: {screen: Deck},
	CreateDeck: {screen: NewDeck},
});

const App = createAppContainer(MainNavigator)
export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
