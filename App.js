import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Homepage from './Pages/Homepage/Homepage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleStyle: { color: 'white', fontWeight: 'bold', fontSize: '36px', },
        headerStyle: { backgroundColor: '#151a19', },
        headerLeft: () => (
          <SafeAreaView style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => {
              console.log('Opening navbar')
            }}>
              <Image style={styles.navbar_image} source={require('./img/Navbar-button.png')} />
            </TouchableOpacity>
            <Image style={styles.navbar_image} source={require('./img/App-logo.png')} />
          </SafeAreaView>
        ),
      }}>
        <Stack.Screen name="Home" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


