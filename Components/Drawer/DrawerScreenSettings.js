import { View, Image } from 'react-native';
import styles from '../../styles';
const DrawerScreenSettings = {
    headerTitleStyle: { color: 'white', fontWeight: 'bold', fontSize: 26, },
    headerStyle: { backgroundColor: '#151a19', },
    headerTintColor: 'white',
    drawerStyle: {
        backgroundColor: '#151a19',
        width: 240,
    },
    headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
            <Image style={styles.navbar_image} source={require('../../img/App-logo.png')} />
        </View>
    )
}
export default DrawerScreenSettings