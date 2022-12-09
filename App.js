import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

// Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Drawer settings & Drawer content/styling imports
import DrawerScreenSettings from './Components/Drawer/DrawerScreenSettings';
import CustomDrawerContent from './Components/Drawer/CustomDrawerContent';

//Pages imports
import Homepage from './Pages/Homepage/Homepage';
import Upload from './Pages/Upload/Upload';



const Drawer = createDrawerNavigator();

// Add custom buttons to screens in CustomDrawerContent!
function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName='Home'
      screenOptions={DrawerScreenSettings}
    >
      <Drawer.Screen name="Home" component={Homepage} />
      <Drawer.Screen name="Upload" component={Upload} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden style='auto' />
      <MyDrawer />
    </NavigationContainer>
  );
}
