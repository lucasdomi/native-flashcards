import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { getDecks } from '../asyncStorage'
import DeckCard from '../components/DeckCard'


export default class DecksList extends React.Component {
  state = {
    loading: true,
    decks: []
  }
  
  async componentDidMount() {
    const decks = await getDecks()
    this.setState( state => ({
      ...state,
      loading: false,
      decks,
    }))
  }

  render () {
    console.log(JSON.stringify(this.state))
    const { loading, decks } = this.state
    return (
      <View>
        { loading && <Text>Loading</Text>  }
        {  decks && Object.keys(decks).map( (deck, idx) => (
          <DeckCard
            key={ idx }
            title={ decks[deck].title }
            questionsCount={ decks[deck].questions.length }
          />
        ))}
        <TouchableOpacity onPress={ this.createDeck }>
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  homeView: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});