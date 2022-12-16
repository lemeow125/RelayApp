import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native'
import styles from '../../styles'

// Device info
import * as Device from 'expo-device';

export default function UserInfo() {
    const brand = Device.brand
    const name = Device.deviceName
    return (
        <ScrollView style={styles.scrollViewBackground}>
            <SafeAreaView style={styles.background}>
                <View style={styles.padding} />
                <View style={styles.window}>
                    <Image style={styles.window_image_mini} source={require('../../img/Device-icon.png')} />
                    <View style={styles.line} />
                    <Text style={styles.text}>Device Information</Text>
                    <View style={styles.line} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={styles.text_userinfo_alignright}>Device Name:{'\n'}Brand:</Text>
                        <Text style={styles.text_userinfo}>{' ' + name + '\n' + ' ' + brand}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView >
    );
}

