import React from 'react';
import { Button, Text, View, StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native'
import {widthDevice, heigthDevice} from '../helpers/Dimension';
import Response from './Response';

const CardView = styled.View`
  box-shadow: 5px 5px 5px rgba(0,0,0,1);
`

export default class Card extends React.Component {
    render() {
      return (
        <CardView style={styles.cardView}>
          <Text style={{ textAlign: 'center', fontSize: 25 }}>Life?</Text>
          <Response/>
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
    responseCard: {
      textAlign: 'center',
      color: 'blue',
      marginTop: 5,
    }
  });