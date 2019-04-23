import { AsyncStorage } from 'react-native'

const storageKey = 'NATIVE_FLASHCARDS'

export function createDeck ( name ) {
  return AsyncStorage.mergeItem(storageKey, JSON.stringify({
    [name]: {
      title: name,
      questions: [],
    }
  }))
}

export const getDecks = async () => (
  await AsyncStorage.getItem(storageKey)
)