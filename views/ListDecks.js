import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, ScrollView, FlatList } from 'react-native'
import { getDecks } from '../asyncStorage'
import DeckCard from '../components/DeckCard'
import { NavigationEvents } from 'react-navigation';


export default class DecksList extends React.Component {
  static navigationOptions = {
    title: 'Decks List',
  }

  state = {
    loading: true,
    decks: []
  }

  componentDidMount() {
    this.getAllDecks()
  }

  getAllDecks = async() => {
    const decks = await getDecks()
     this.setState( state => ({
       ...state,
       loading: false,
       decks,
     }))
  }
  goToDeckPage = (title, questions) => {
    const { navigate } = this.props.navigation
    navigate('Deck', {
      title,
      questions
    })
  }

  createDeck = () => {
    const { navigate } = this.props.navigation
    navigate('CreateDeck', {})
  }

  render () {
    console.log(JSON.stringify(this.state))
    const { loading, decks } = this.state
    const deckIds = Object.keys(decks);

    return (
      <View style={styles.homeView}>
        <NavigationEvents onDidFocus={this.getAllDecks} />
        { loading && <Text>Loading</Text>  }
        { decks &&
          <ScrollView>
          <FlatList
            data={ deckIds }
            renderItem={ ( { item } ) => {
              return <DeckCard
                title={ decks[item].title }
                questions={ decks[item].questions }
                goToDeckPage= { this.goToDeckPage }
              />
            }}
            keyExtractor={ (deckIds, index) => index.toString()}
          />
          <TouchableOpacity onPress={ this.createDeck }>
            <Text>Create Deck</Text>
          </TouchableOpacity>
          </ScrollView>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textButtonNewDeck: {
    textAlign: 'center',
  }
});