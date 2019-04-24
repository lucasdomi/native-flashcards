import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { heigthDevice } from '../helpers/Dimension';
import { Header } from 'react-navigation'

export default class Response extends React.Component {
  state = {
    scrollHeight: 0,
  }

  render() {
    const { restartQuiz, pontuation } = this.props
    return (
      <View style={styles.cardView}>
        <Text style={styles.responseCard}>Your pontuation is: {pontuation} at 10 !</Text>
        <TouchableOpacity onPress={ restartQuiz } >
        < Text>Restart Quiz!</Text>
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
      backgroundColor: '#B0E0E6',
      height: heigthDevice,
    },
    responseCard: {
      textAlign: 'center',
      color: 'blue',
      fontSize: 30,
    },
  });
