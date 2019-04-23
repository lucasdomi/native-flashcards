import React from 'react';
import { View, Text, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Card from '../components/Card'
import Response from '../components/Response'

const deck = { questions: [
  {
    id: 0,
    question: 'What is React?',
    answer: 'A library for managing user interfaces'
  },
  {
    id: 1,
    question: 'Where do you make Ajax requests in React?',
    answer: 'The componentDidMount lifecycle event'
  }
]}

export default class QuizPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Quiz'),
    };
  };

  state = {
    scrollHeight: 0,
  }

  scrollTo = scrollSize => {
    this.setState( state => ({
      ...state,
      scrollHeight: state.scrollHeight + scrollSize,
    }), () => {
      this.scroll.scrollTo({x: 0, y: this.state.scrollHeight, animated: true});
    })
  }

  restartQuiz = () => {
    this.setState( state => ({
      scrollHeight: 0,
    }), () => {
      this.scrollTo(0)
    })
  }

  render() {
    return (
      <ScrollView
        ref={(c) => this.scroll = c}
        scrollEnabled={false}
        style={{ flex: 1 }}
      >
        <FlatList
          data={ deck.questions }
          renderItem={ ( { item } ) => <Card item={item} goToNext={ this.scrollTo }/> }
          keyExtractor={(item, index) => index.toString()}
        />
        <Response restartQuiz={ this.restartQuiz } />
      </ScrollView>
    );
  }
}