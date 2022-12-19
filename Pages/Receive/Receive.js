import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native'
import * as Progress from 'react-native-progress';
import styles from '../../styles'

export default function Receive() {
    return (
        <ScrollView style={styles.scrollViewBackground}>
            <SafeAreaView style={styles.background}>
                <View style={styles.padding} />
                <View style={styles.window}>
                    <Image style={styles.window_image_mini} source={require('../../img/Network-icon.png')} />
                    <View style={styles.line} />
                    <Text style={styles.text}>Receive</Text>
                    <View style={styles.line} />
                    <View style={styles.padding} />
                    <Progress.CircleSnail size={64} color={['#c8e9fc', '#33464d']} />
                    <Text style={styles.text_userinfo_alignright}>Waiting for receiver...</Text>
                </View>
            </SafeAreaView>
        </ScrollView >
    );
}

