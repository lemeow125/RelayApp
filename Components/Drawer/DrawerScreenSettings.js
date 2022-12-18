import { View } from 'react-native';
import PressableAppIcon from '../PressableAppIcon/PressableAppIcon';
const DrawerScreenSettings = {
    headerTitleStyle: { color: 'white', fontSize: 26, },
    headerStyle: { backgroundColor: '#151a19' },
    headerTintColor: 'white',
    drawerType: 'slide',
    drawerLabelStyle: {
        color: 'white',
    },
    drawerStyle: {
        backgroundColor: '#151a19',
        width: 260,
    },
    headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
            <PressableAppIcon />
        </View>
    )
}
export default DrawerScreenSettings