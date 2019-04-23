import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class DeckCard extends React.Component {
  render() {
    const { title, questions, goToDeckPage } = this.props

    return(
      <TouchableOpacity onPress={() => goToDeckPage(title, questions)}>
        <View style={styles.createView}>
          <Text style={styles.deckText}>{ title }</Text>
          <Text style={styles.totalQuestions}>{ questions.length } questions</Text>
        </View>
      </TouchableOpacity>
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
