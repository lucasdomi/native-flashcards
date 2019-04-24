import React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import {heigthDevice, widthDevice} from '../helpers/Dimension';
import CardFlip from 'react-native-card-flip';
import { Header } from 'react-navigation';

const CardView = styled.View`
  box-shadow: 5px 5px 5px rgba(0,0,0,1);
`

export default class Card extends React.Component {
  handleVote = ( card, goToNext, correct ) => {
    card.flip()
    goToNext( heigthDevice, correct )
  }
  render() {
    const { item, goToNext } = this.props
    return (
      <CardFlip ref={ ( card ) => this['card' + item.id] = card } style={{ height: heigthDevice - Header.HEIGHT, width: widthDevice }}>
        <CardView style={ styles.cardView }>
          <Text style={styles.cardQuestion}>{ item.question }</Text>
          <TouchableOpacity onPress={ () => this[`card${item.id}`].flip() } >
            <Text style={styles.cardLink}>Check the answer!</Text>
          </TouchableOpacity>
        </CardView>
        <CardView style={styles.cardView}>
          <Text style={styles.cardQuestion}>{ item.answer }</Text>
          <Button title='Yes' color='green' onPress={ () => this.handleVote( this[`card${item.id}`], goToNext, true )} />
          <View style={{ marginBottom: 10 }} />
          <Button title='No' color='red' onPress={ () => this.handleVote( this[`card${item.id}`], goToNext, false ) }/>
        </CardView>
    </CardFlip>
    );
  }
  }

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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