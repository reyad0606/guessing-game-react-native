import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const GameOver = (props) => {
  return (
    <View stule={styles.screen}>
      <Text> The Game is over</Text>
      <Text> Number of rounds: {props.roundsNumber} </Text>
      <Text> Number was: {props.userNumber}</Text>
      <Button title='Start Over' onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOver;
