import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.background}>
        <View style={styles.window}>
          <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    </NavigationContainer>
  );
}


