import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
import {widthDevice, heigthDevice} from '../helpers/Dimension';

const CardView = styled.View`
  color: red;
  background-color: #eeeeee;
  padding: 20px;
  margin: 0 15px 20px;
  border-radius: 7;
  flex: 1;
  justify-content: center;
`
const CardQuestion = styled.Text`
  color: #111;
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
`

export default class Response extends React.Component {
  render() {
    return (
      <CardView>
        <Button title='SIM' color='green' onPress={() => console.log('yes')} />
        <View style={{ marginBottom: 10 }} />
        <Button title='NÃO' color='red' onPress={() => console.log('yes')}  />
      </CardView>
    );
  }
}

const styles = StyleSheet.create({
    cardView: {
      flex: 1,
      color: 'red',
      backgroundColor: '#eeeeee',
      padding: 20,
      marginTop: heigthDevice * 0.1,
      marginRight: widthDevice* 0.1,
      marginLeft: widthDevice* 0.1,
      marginBottom: heigthDevice* 0.1,
      borderRadius: 7,
      textAlign: 'center',
      justifyContent: 'center',
    },
    cardQuestion: {
      color: '#111',
      fontSize: 18,
      marginBottom: '15',
      textAlign: 'center',
    },
});