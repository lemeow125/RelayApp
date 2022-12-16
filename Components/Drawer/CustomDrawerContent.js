import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import styles from '../../styles';
import { View } from 'react-native';

import { useNavigation } from "@react-navigation/native"

export default function CustomDrawerContent(props) {
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="KEANNU-PHONE"
                labelStyle={styles.drawer_label}
                onPress={() => navigation.navigate('User Info')}
            />
            <View style={styles.line_lessmargin} />
            <DrawerItemList {...props} labelStyle={styles.drawer_label} />

        </DrawerContentScrollView>
    );
}