import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Alert } from 'react-native';
import styles from '../../styles';

export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} labelStyle={styles.drawer_label} />
            <DrawerItem
                label="Heh"
                labelStyle={styles.drawer_label}
                onPress={() => Alert.alert('Oi!')}
            />
        </DrawerContentScrollView>
    );
}