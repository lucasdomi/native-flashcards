import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import styled from 'styled-components'
import {widthDevice,heigthDevice} from '../helpers/Dimension';

// const ResultView = styled.View`
//   flex: 1;
//   height: ${Dimensions.get('window').height};
//   justify-content: center;
//   align-items: center;
//   background-color: #74B3CE;
// `

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
      height: heigthDevice*0.8,
      marginTop: heigthDevice*0.1,
      marginBottom: heigthDevice*0.1,
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
      fontSize: 30,
    },
    cardLink: {
      textAlign: 'center',
      color: '#0E79B2',
      marginTop: 10,
    }
  });
