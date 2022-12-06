import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native';
import RelayButton from '../../Components/Button/Button';
import styles from '../../styles';

export default function Homepage({ navigation }) {
    return (
        <ScrollView>
            <SafeAreaView style={styles.background}>
                <View style={styles.padding} />
                <View style={styles.padding} />
                <View style={styles.window}>
                    <Image style={styles.window_image} source={require('../../img/Home-logo.png')} />
                    <View style={styles.line} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.window_image_mini} source={require('../../img/App-logo.png')} />
                        <Text style={styles.title_text}>Relay</Text>
                    </View>
                    <View style={styles.padding} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.window_image_mini} source={require('../../img/Online-icon.png')} />
                        <Text style={styles.text}>Online</Text>
                    </View>
                    <RelayButton title="Upload" />
                    <RelayButton title="History" />
                    <View style={styles.padding} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.window_image_mini} source={require('../../img/Offline-icon.png')} />
                        <Text style={styles.text}>Offline</Text>
                    </View>
                    <RelayButton title="Send" />
                    <RelayButton title="Receive" />

                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

