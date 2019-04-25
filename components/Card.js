import React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {heigthDevice, widthDevice} from '../helpers/Dimension';
import CardFlip from 'react-native-card-flip';
import { Header } from 'react-navigation';

export default class Card extends React.Component {
  handleVote = ( card, goToNext, correct ) => {
    card.flip()
    goToNext( heigthDevice, correct )
  }
  render() {
    const { item, index, questionCount, goToNext } = this.props
    return (
      <CardFlip ref={ ( card ) => this['card' + item.id] = card } style={{ height: heigthDevice - Header.HEIGHT, width: widthDevice, flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <View style={ styles.cardView }>
          <Text style={{marginBottom: 10 ,color: 'gray', fontSize: 12}}>{ `${index + 1} of ${questionCount}`}</Text>
          <Text style={styles.cardQuestion}>{ item.question }</Text>
          <TouchableOpacity onPress={ () => this[`card${item.id}`].flip() } >
            <Text style={styles.cardLink}>Check the answer!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.cardQuestion}>{ item.answer }</Text>
          <TouchableOpacity style={styles.createButtonCorrect} onPress={ () => this.handleVote( this[`card${item.id}`], goToNext, true )}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createButtonIncorrect} onPress={ () => this.handleVote( this[`card${item.id}`], goToNext, false )}>
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
    </CardFlip>
    );
  }
  }

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6',
  },
  cardQuestion: {
    color: '#111',
    fontSize: 25,
    marginBottom: 15,
    textAlign: 'center',
  },
  responseCard: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 5,
  },
  cardLink: {
    textAlign: 'center',
    color: '#0E79B2',
    marginTop: 10,
  },
  createButtonCorrect: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 50,
    width: 200,
    marginVertical: 7,
    marginHorizontal: 0
  },
  createButtonIncorrect: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 50,
    width: 200,
    marginVertical: 7,
    marginHorizontal: 0
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    textAlign: 'center'
  }
});