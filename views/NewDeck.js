import React from 'react'
import { Text, TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native'
import { heigthDevice, widthDevice } from '../helpers/Dimension';
import { newDeck } from '../asyncStorage/index';

export default class CreateDeck extends React.Component {
  static navigationOptions = {
    title: 'Create Deck'
  }
  state = {
    input: '',
  }

  handleTextChange = input => {
    this.setState({
      input,
    })
  }

  handleNewDeck = () => {
    const { navigate } = this.props.navigation
    const {input} = this.state
    newDeck(input)
    navigate('Deck', {
      title: input,
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
          onPress={ this.handleNewDeck }
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
      backgroundColor: 'white',
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
