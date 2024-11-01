import { StyleSheet } from 'react-native';
import { LinrearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
     // styling here will apply throughout the whole app
    <LinrearGradient style={styles.rootScreen}>
      <StartGameScreen />
    </LinrearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  }
});
