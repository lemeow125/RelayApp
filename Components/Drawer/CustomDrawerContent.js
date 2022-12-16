import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Alert } from 'react-native';
import styles from '../../styles';
import { View } from 'react-native';

export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="KEANNU-PHONE"
                labelStyle={styles.drawer_label}
                onPress={() => Alert.alert('Oi!')}
            />
            <View style={styles.line_lessmargin} />
            <DrawerItemList {...props} labelStyle={styles.drawer_label} />

        </DrawerContentScrollView>
    );
}