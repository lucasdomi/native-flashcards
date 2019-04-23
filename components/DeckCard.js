import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class DeckCard extends React.Component {
  render() {
    const { title, questionsCount } = this.props

    return(
      <View style={styles.createView}>
        <DeckText>{ title }</DeckText>
        <Text style={styles.totalQuestions}>{ questionsCount } questions.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    createView: {
      backgroundColor: '#ddd',
      paddingVertical: 25,
      paddingHorizontal: 40,
      marginBottom: 20,
      borderRadius: 10,   
    },
    deckText: {
      textAlign: 'center',
      fontSize: 20,
    },
    totalQuestions: {
      textAlign: 'center'
    }
  });
