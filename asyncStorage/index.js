import { AsyncStorage } from 'react-native'

const storageKey = 'FLASHCARDS'

export function newDeck (name) {
  return AsyncStorage.mergeItem(storageKey, JSON.stringify({
    [name]: {
      title: name,
      questions: [],
    }
  }))
}

export const getDecks = async () => {
  const decks = await AsyncStorage.getItem(storageKey)
  return JSON.parse(decks)
}

export const addQuestion = async ( deck, question ) => {
  let data = await getDecks()
  data[deck].questions.push(question)
  AsyncStorage.setItem( storageKey, JSON.stringify( data ) )
}

export const getQuestionsByDeck = async(deckTitle) => {
  const decks = await getDecks()
  return decks[deckTitle].questions
}