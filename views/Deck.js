import React from 'react';
import { View, Text, ScrollView, Dimensions, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Card from '../components/Card'
import {widthDevice, heigthDevice} from '../helpers/Dimension';
import Response from '../components/Response'

const deckQuestions = { questions: [
  {
    id: 0,
    question: 'What is React?',
    answer: 'A library for managing user interfaces'
  },
  {
    id: 1,
    question: 'Where do you make Ajax requests in React?',
    answer: 'The componentDidMount lifecycle event'
  },
]}

export default class Deck extends React.Component {
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
    }), () =>{
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
      <ScrollView ref={(c) => this.scroll = c} scrollEnabled={false} style={{ flex: 1 }}>
        <FlatList
          data={ deckQuestions.questions }
          renderItem={ ({item}) => <Card item={item} goToNext={ this.scrollTo }/> }
          keyExtractor={(item, index) => index.toString()}
        />
        <Response restartQuiz={this.restartQuiz}/>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    height: heigthDevice*0.8, 
    // justifyContent: 'center', 
    // alignItems: 'center',
    backgroundColor: '#74B3CE',
    marginTop: heigthDevice*0.1,
    marginBottom: heigthDevice*0.1,
  },
  textCongratulations: {
    fontSize: 25,
    color: '#fff',
  }
});