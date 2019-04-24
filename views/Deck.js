import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import styled from 'styled-components'
import { getQuestionsByDeck } from '../asyncStorage';
import { NavigationEvents } from 'react-navigation';

const CreateView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #8338EC;
  padding: 0 30px;
`

const CreateButton = styled.TouchableOpacity`
  backgroundColor: #ec38a1;
  padding: 10px 50px;
  width: 200;
  margin: 7px 0;
`

const CreateButtonGhost = styled.TouchableOpacity`
  backgroundColor: transparent;
  padding: 10px 50px;
  border-width: 1px;
  border-color: #ec38a1;
  width: 200;
  margin: 7px 0;
`

const TitleText = styled.Text`
  font-size: 24px;
  text-align: center;
  color: white;
  margin: 15px 0;
`

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
`

export default class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Quiz'),
    };
  }

  state = {
    questions: [],
  }

  componentDidMount() {
    this.getDeckQuestions()
  }

  getDeckQuestions = async() => {
    const deckTitle = this.props.navigation.getParam('title', '')
    const questions = await getQuestionsByDeck( deckTitle )
    this.setState( state => ({
      ...state,
      questions,
    }))
  }

  addQuestion = deckTitle => {
    const { navigate } = this.props.navigation
    navigate('AddQuestion', { deck: deckTitle })
  }

  goToQuiz = (title, questions) => {
    const { navigate } = this.props.navigation
    navigate('QuizPage', { title, questions })
  }

  render() {
    const { navigation } = this.props
    const title = navigation.getParam('title', '')
    const { questions } = this.state

    return (
      <CreateView behavior='padding'>
        <TitleText>
          { title }
        </TitleText>
        {questions.length > 0 && 
          <CreateButton
            onPress={ () => this.goToQuiz(title,questions) }
          >
            <ButtonText>Start Quiz</ButtonText>
          </CreateButton>
        }
        <CreateButtonGhost
          onPress={ () => this.addQuestion(title) }
        >
          <ButtonText>Add Question</ButtonText>
        </CreateButtonGhost>
      </CreateView>
    )
  }
}
