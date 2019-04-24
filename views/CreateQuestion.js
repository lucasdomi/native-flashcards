import React from 'react'
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Dimensions } from 'react-native'
import styled from 'styled-components'
import { addQuestion } from '../asyncStorage'

const CreateView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #8338EC;
  padding: 0 30px;
`

const CreateInput = styled.TextInput`
  width: ${Dimensions.get('window').width - 80};
  height: 40px;
  color: white;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  margin: 30px 0;
  font-size: 18px;
`

const CreateButton = styled.TouchableOpacity`
  backgroundColor: #ec38a1;
  padding: 10px 50px;
`

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-size: 14px;
`

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
      <CreateView behavior='padding'>
        <CreateInput
          value={ question }
          onChangeText={ (input) => this.handleTextChange(input, 'question') }
          placeholder='Insert the question'
          placeholderTextColor='#ccc'
        />
        <CreateInput
          value={ answer }
          onChangeText={ (input) => this.handleTextChange(input, 'answer') }
          placeholder='Insert the answer'
          placeholderTextColor='#ccc'
        />
        <CreateButton
          onPress={ this.handleAddQuestion }
        >
          <ButtonText>Add Question</ButtonText>
        </CreateButton>
      </CreateView>
    )
  }
}