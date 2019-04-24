import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { getQuestionsByDeck } from '../asyncStorage';
import { NavigationEvents } from 'react-navigation';

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
      <View style={styles.cardView} behavior='padding'>
        <NavigationEvents onDidFocus ={this.getDeckQuestions} />
        <Text style={styles.titleText}>
          {title}
        </Text>
        {questions.length > 0 && 
          <TouchableOpacity
            style={styles.createButton}
            onPress={ () => this.goToQuiz(title,questions) }
          >
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
        }
        <TouchableOpacity
          style={styles.createButtonGhost}
          onPress={ () => this.addQuestion(title) }
        >
          <Text style={styles.buttonText}>Add Question</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8338EC',
    paddingVertical: 0 ,
    paddingHorizontal: 30,
  },
  createButton: {
    backgroundColor: '#ec38a1',
    paddingVertical: 10,
    paddingHorizontal: 50,
    width: 200,
    marginVertical: 7,
    marginHorizontal: 0
  },
  createButtonGhost: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderWidth: 1,
    borderColor: '#ec38a1',
    marginVertical: 7,
    marginHorizontal: 0
  },
  titleText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    marginVertical: 15,
    marginHorizontal: 0,
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    textAlign: 'center'
  }
});
