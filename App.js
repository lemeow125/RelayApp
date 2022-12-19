import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

// Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Redux
import store from './Plugins/Redux/store'
import { Provider } from 'react-redux'

// Drawer settings & Drawer content/styling imports
import DrawerScreenSettings from './Components/Drawer/DrawerScreenSettings';
import CustomDrawerContent from './Components/Drawer/CustomDrawerContent';
import DrawerHide from './Components/Drawer/DrawerHide';

//Pages imports
import Homepage from './Pages/Homepage/Homepage';
import Upload from './Pages/Upload/Upload';
import UploadInProgress from './Pages/UploadInProgress/UploadInProgress';
import UploadComplete from './Pages/UploadComplete/UploadComplete';
import UploadHistory from './Pages/UploadHistory/UploadHistory';
import UserInfo from './Pages/UserInfo/UserInfo';
import Send from './Pages/Send/Send';
import SendSelect from './Pages/SendSelect/SendSelect';
import SendInProgress from './Pages/SendInProgress/SendInProgress';





const Drawer = createDrawerNavigator();

// Add buttons to screens in CustomDrawerContent!
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName='Home'
      screenOptions={DrawerScreenSettings}
    >
      <Drawer.Screen name="Home" component={Homepage} options={DrawerHide} />
      <Drawer.Screen name="Upload" component={Upload} options={DrawerHide} />
      <Drawer.Screen name="Upload In Progress" component={UploadInProgress} options={DrawerHide} />
      <Drawer.Screen name="Upload Complete" component={UploadComplete} options={DrawerHide} />
      <Drawer.Screen name="Upload History" component={UploadHistory} options={DrawerHide} />
      <Drawer.Screen name="User Info" component={UserInfo} options={DrawerHide} />
      <Drawer.Screen name="Send" component={Send} options={DrawerHide} />
      <Drawer.Screen name="Send - Select" component={SendSelect} options={DrawerHide} />
      <Drawer.Screen name="Send - Sending" component={SendInProgress} options={DrawerHide} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden style='auto' />
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}
