import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
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
  goToDeckPage = deck => {
    const { navigate } = this.props.navigation
    navigate('Deck', {
      title: deck.title,
      questions: deck.questions,
    })
  }
  createDeck = () => {
    const { navigate } = this.props.navigation
    navigate('CreateDeck', {})
  }

  render () {
    console.log(JSON.stringify(this.state))
    const { loading, decks } = this.state
    return (
      <View style={styles.homeView}>
        <NavigationEvents onDidFocus={this.getAllDecks} />
        { loading && <Text>Loading</Text>  }
        {  decks && Object.keys(decks).map( (deck, idx) => (
          <TouchableOpacity
            onPress ={() => this.goToDeckPage(decks[deck])}
            key = {idx}
          >
            <DeckCard
              title={ decks[deck].title }
              questionsCount={decks[deck].questions.length }
          />
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={ this.createDeck }>
          <Text style={styles.textButtonNewDeck}>Create Deck</Text>
        </TouchableOpacity>
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