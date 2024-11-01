import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickNumberHundler(pickedNumber) {
    setUserNumber(pickedNumber);
    console.log(pickedNumber);
  }

  let screen = userNumber ? <GameScreen /> : <StartGameScreen onConfermNumber={pickNumberHundler} />;

  // if (userNumber) {
  //   screen = <GameScreen />
  //   console.log(screen);
  // }

  return (
     // styling here will apply throughout the whole app
    <LinearGradient 
      style={styles.rootScreen}
      colors={['#4e0329', '#ddb52f']}
    >
      <ImageBackground 
        source={require('./assets/images/bg.jpg')} 
        resizeMethod='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.5,
  }
});
