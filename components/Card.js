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
      <CardFlip ref={ ( card ) => this['card' + item.id] = card } style={{ height: heigthDevice, width: widthDevice }}>
        <View style={ styles.cardView }>
          <Text style={{marginBottom: 10 ,color: 'gray', fontSize: 12}}>{ `Question ${index + 1} of ${questionCount}`}</Text>
          <Text style={styles.cardQuestion}>{ item.question }</Text>
          <TouchableOpacity onPress={ () => this[`card${item.id}`].flip() } >
            <Text style={styles.cardLink}>Check the answer!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.cardQuestion}>{ item.answer }</Text>
          <Button title='Yes' color='green' onPress={ () => this.handleVote( this[`card${item.id}`], goToNext, true )} />
          <View style={{ marginBottom: 10 }} />
          <Button title='No' color='red' onPress={ () => this.handleVote( this[`card${item.id}`], goToNext, false ) }/>
        </View>
    </CardFlip>
    );
  }
  }

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    padding: 20,
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
  }
});