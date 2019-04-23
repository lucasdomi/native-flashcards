import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import styled from 'styled-components'
import {widthDevice,heigthDevice} from '../helpers/Dimension';

const ResultText = styled.Text`
  font-size: 28px;
  color: #fff;
`

export default class Result extends React.Component {
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
        <View style={styles.cardView}>
          <Text style={styles.responseCard}>Congratulations!</Text>
          <TouchableOpacity onPress={ this.restartQuiz } ><Text>Restart Quiz!</Text></TouchableOpacity>
        </View>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
    cardView: {
      flex: 1,
      padding: 20,
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
