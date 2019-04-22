import React from 'react';
import { Button, Text, View, StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native'
import {widthDevice, heigthDevice} from '../helpers/Dimension';

const CardView = styled.View`
  box-shadow: 5px 5px 5px rgba(0,0,0,1);
`

export default class Card extends React.Component {
    render() {
      return (
        <View style={{ flex: 1}}>
          <CardView style={styles.cardView}>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>Life?</Text>
            <View style={{ marginBottom: 10 }} />
            <Button title='YES' color='green' onPress={() => console.log(widthDevice)} />
            <View style={{ marginBottom: 10 }} />
            <Button title='NO' color='red' onPress={() => console.log(heigthDevice)} />
          </CardView>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    cardView: {
      color: 'red',
      backgroundColor: '#eeeeee',
      padding: 20,
      marginTop: heigthDevice * 0.1,
      marginRight: widthDevice* 0.1,
      marginLeft: widthDevice* 0.1,
      marginBottom: 20,
      borderRadius: 7,
      // box: '10 10 10 rgba(0,0,0,1)',
    },
    cardQuestion: {
      color: '#111',
      fontSize: 18,
      marginBottom: '15',
      textAlign: 'center',
    },
  });