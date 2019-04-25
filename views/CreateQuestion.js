import React from 'react'
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Dimensions, StyleSheet } from 'react-native'
import styled from 'styled-components'
import { addQuestion } from '../asyncStorage'
import {widthDevice} from '../helpers/Dimension'

export default class CreateDeck extends React.Component {
  static navigationOptions = {
    title: 'Add Question',
  }
  state = {
    question: '',
    answer: '',
  }

  handleTextChange = (input, type) => {
    this.setState(state => ({
      ...state,
      [type]: input,
    }))
  }

  handleAddQuestion = async() => {
    const { navigation } = this.props
    const deckTitle = navigation.getParam('deck', '')
    const question = this.state
    await addQuestion( deckTitle, question )
    navigation.navigate('Deck', {
      title: deckTitle,
    })
  }

  render() {
    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView style={styles.createView} behavior='padding'>
        <TextInput
          style={styles.createInput}
          value={ question }
          onChangeText={ (input) => this.handleTextChange(input, 'question') }
          placeholder='Insert the question'
          placeholderTextColor='#ccc'
        />
        <TextInput
          style={styles.createInput}
          value={ answer }
          onChangeText={ (input) => this.handleTextChange(input, 'answer') }
          placeholder='Insert the answer'
          placeholderTextColor='#ccc'
        />
        <TouchableOpacity
          style={styles.createButton}
          onPress={ this.handleAddQuestion }
        >
          <Text style={styles.buttonText}>Add question</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  createView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8338EC',
    paddingVertical: 0 ,
    paddingHorizontal: 30,
  },
  createInput: {
    width: widthDevice - 80,
    height: 40,
    color: 'white',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginVertical: 30,
    marginHorizontal: 0,
    fontSize: 18,
  },
  createButton: {
    backgroundColor: '#ec38a1',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    textAlign: 'center'
  }
});
