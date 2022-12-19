import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import styles from '../../styles';
import { View, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import * as Device from 'expo-device';
import OnlineStatus from '../OnlineStatus/OnlineStatus';
import SidebarButton from '../Button/SidebarButton';

export default function CustomDrawerContent(props) {
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ flex: 1, flexDirection: "row", marginLeft: 8 }}>
                <Image style={styles.sidebar_image} source={require('../../img/App-logo.png')} />
                <OnlineStatus />
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginLeft: 8 }}>
            </View>
            <View style={styles.line_lessmargin} />
            <DrawerItem
                label={Device.deviceName}
                labelStyle={styles.sidebar_label}
                onPress={() => navigation.navigate('User Info')}
            />
            <View style={styles.line_lessmargin} />
            {/*
                Keeping this here in case we switch back to default drawer buttons
                <DrawerItemList {...props} labelStyle={styles.sidebar_label} />
            */}
            <SidebarButton title="Home" goTo='Home' imgpath={require('../../img/Home-logo.png')} />
            <SidebarButton title="Upload History" goTo='Upload History' imgpath={require('../../img/History-icon.png')} />
            <SidebarButton title="Upload" goTo='Upload' imgpath={require('../../img/Upload-icon.png')} />
            <SidebarButton title="Send" goTo='Send' imgpath={require('../../img/Share-icon.png')} />
        </DrawerContentScrollView>
    );
}