import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native'
import styles from '../../styles'

// Redux
import { useSelector } from 'react-redux'

export default function UploadHistory() {
    const fnhistory = useSelector((state) => state.uploadhistory.uploadfnhistory)
    const szhistory = useSelector((state) => state.uploadhistory.uploadszhistory)
    return (
        <ScrollView style={styles.scrollViewBackground}>
            <SafeAreaView style={styles.background}>
                <View style={styles.padding} />
                <View style={styles.window}>
                    <Image style={styles.window_image_mini} source={require('../../img/History-icon.png')} />
                    <View style={styles.line} />
                    <Text style={styles.text}>Upload History</Text>
                    <View style={styles.line} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={styles.text_uploadhistory}>{fnhistory}</Text>
                        <Text style={styles.text_uploadhistory}>{szhistory}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView >
    );
}

