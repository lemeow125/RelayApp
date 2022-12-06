import * as React from 'react';

// Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Drawer settings & Drawer content/styling imports
import DrawerScreenSettings from './Components/Drawer/DrawerScreenSettings';
import CustomDrawerContent from './Components/Drawer/CustomDrawerContent';

//Pages imports
import Homepage from './Pages/Homepage/Homepage';



const Drawer = createDrawerNavigator();

function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName='Home'
      screenOptions={DrawerScreenSettings}>
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
