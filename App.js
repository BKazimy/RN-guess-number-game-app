import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
     // styling here will apply throughout the whole app
    <LinearGradient 
      style={styles.rootScreen}
      colors={['#4e0329', '#ddb52f']}
    >
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});
