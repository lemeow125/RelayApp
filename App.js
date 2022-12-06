import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import styles from './styles';

import Homepage from './Pages/Homepage/Homepage';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Heh"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName='Home'
      screenOptions={{
        headerTitleStyle: { color: 'white', fontWeight: 'bold', fontSize: 26, },
        headerStyle: { backgroundColor: '#151a19', },
        headerTintColor: 'white',
        headerRight: () => (
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.navbar_image} source={require('./img/App-logo.png')} />
          </View>
        )
      }}>
      <Drawer.Screen name="Home" component={Homepage} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
