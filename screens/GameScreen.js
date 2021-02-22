import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.uesrChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { uesrChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === uesrChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, uesrChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'smaller' && currentGuess < props.uesrChoice) ||
      (direction === 'greater' && currentGuess > props.uesrChoice)
    ) {
      Alert.alert("Don't lie.", 'You know that this is wrong ...', [
        { text: 'sorry', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'smaller') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((curRounds) => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text> Opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonSize}>
        <Button
          title='Lower'
          onPress={nextGuessHandler.bind(this, 'smaller')}
        />
        <Button
          title='Higher'
          onPress={nextGuessHandler.bind(this, 'greater')}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonSize: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});
export default GameScreen;
