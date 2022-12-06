import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './styles';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Homepage from './Pages/Homepage/Homepage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerTitleStyle: { color: 'white', fontWeight: 'bold', fontSize: 26, },
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
        <Drawer.Screen name="Home" component={Homepage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


