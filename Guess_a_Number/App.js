import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setuserNumber] = useState();
  const [guessRound, setguessRound] = useState(0);

  const configNewGameHandler = () => {
    setguessRound(0);
    setuserNumber(null);
  };
  const startGameHandler = (selectednumber) => {
    setuserNumber(selectednumber);
  };
  const gameOverHandler = (numberOfRounds) => {
    setguessRound(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRound}
        userNumber={userNumber}
        onRestart={configNewGameHandler}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
