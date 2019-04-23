import React from 'react'
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Dimensions, StyleSheet } from 'react-native'
import styled from 'styled-components'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { heigthDevice, widthDevice } from '../helpers/Dimension';

export default class CreateDeck extends React.Component {
  state = {
    input: '',
  }

  handleTextChange = input => {
    this.setState({
      input,
    })
  }

  render() {
    const { input } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.createView}>
        <TextInput
          value={ input }
          style={styles.createInput}
          onChangeText={ this.handleTextChange }
          placeholder='The name of your new deck :)'
          placeholderTextColor='#ccc'
        />
        <TouchableOpacity
          style={styles.createButton}
          onPress={ () => console.log('action new deck') }
        >
          <Text style={styles.buttonText}>New Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    createView: {
      flex: 1,
      height: heigthDevice*0.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#98AFC7',
      paddingVertical: 0,
      paddingHorizontal: 30,
      
    },
    createInput: {
      width: widthDevice * 0.8,
      fontSize: 18,
      borderBottomColor: 'red',
      borderBottomWidth: 1,
      marginVertical: 30,
      marginHorizontal: 0,
      alignItems: 'center',
      textAlign: 'center',
    },
    createButton: {
      backgroundColor: 'red',
      paddingVertical: 10,
      paddingHorizontal: 50,
    },
    buttonText: {
      color: 'white',
      alignItems: 'center',
      textTransform: 'uppercase',
      fontSize: 15
    }
  });
