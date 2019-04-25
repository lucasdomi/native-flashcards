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
        <Text style={styles.responseCard}>Question answers: {pontuation} %!</Text>
        <TouchableOpacity onPress={ restartQuiz } style={styles.createButton} >
          <Text style={styles.buttonText}>Restart Quiz!</Text>
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
      height: heigthDevice + Header.HEIGHT ,
    },
    responseCard: {
      color: 'blue',
      textAlign: 'center',
      fontSize: 25,
      marginBottom: 15,
    },
    restartCard: {
      backgroundColor: 'black',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 18,
    },
    createButton: {
      backgroundColor: 'black',
      paddingVertical: 10,
      paddingHorizontal: 30,
      width: 200,
      marginVertical: 10,
      marginHorizontal: 0
    },
    buttonText: {
      color: 'white',
      textTransform: 'uppercase',
      fontSize: 14,
      textAlign: 'center'
    }
  });
