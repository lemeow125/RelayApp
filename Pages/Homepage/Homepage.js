import { Image, Text, View } from 'react-native';
import styles from '../../styles';

export default function Homepage() {
    return (
        <View style={styles.background}>
            <View style={styles.window}>
                <Image style={styles.window_image} source={require('../../img/Home-logo.png')} />
                <View style={styles.line} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={styles.window_image_mini} source={require('../../img/App-logo.png')} />
                    <Text style={styles.title_text}>Relay</Text>
                </View>
            </View>
        </View>
    );
}

