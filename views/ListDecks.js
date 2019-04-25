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
  goToDeckPage = (title) => {
    const { navigate } = this.props.navigation
    navigate('Deck', {
      title,
    })
  }

  createDeck = () => {
    const { navigate } = this.props.navigation
    navigate('CreateDeck', {})
  }

  render () {
    const { loading, decks } = this.state
    const deckIds = decks && Object.keys(decks);

    return (
      <View style={styles.homeView}>
        <NavigationEvents onDidFocus={this.getAllDecks} />
        { loading && <Text>Loading</Text>  }
          <TouchableOpacity style={styles.createButton} onPress={ this.createDeck }>
            <Text>Create New Deck</Text>
          </TouchableOpacity>
        { decks ?
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
          </ScrollView>
        : 
        <Text>Dont have decks created :( </Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  textButtonNewDeck: {
    textAlign: 'center',
  },
  createButton: {
    backgroundColor: '#ec38a1',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,   

    // marginBottom: 20,
    marginBottom: 15,
    marginHorizontal: 0
  },
});