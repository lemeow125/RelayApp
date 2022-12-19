import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native';
import styles from '../../styles';
import * as Progress from 'react-native-progress';
import TextTicker from 'react-native-text-ticker'

// Redux
import { useSelector } from 'react-redux'

export default function SendInProgress({ navigation }) {
    const filename = useSelector((state) => state.sendfile.filename)
    const filesize = useSelector((state) => state.sendfile.filesize)
    setTimeout(() => { navigation.navigate('Home') }, 3000)
    return (
        <ScrollView style={styles.scrollViewBackground}>
            <SafeAreaView style={styles.background}>
                <View style={styles.padding} />
                <View style={styles.window}>
                    <Image style={styles.window_image_mini} source={require('../../img/Online-icon.png')} />
                    <View style={styles.line} />
                    <Text style={styles.text}>Send in Progress</Text>
                    <View style={styles.line} />
                    <Progress.CircleSnail size={64} color={['#c8e9fc', '#33464d']} />
                    <TextTicker
                        style={styles.text_tiny}
                        duration={8000}
                    >
                        {filename}
                    </TextTicker>
                    <Text style={styles.text_tiny}>{filesize}</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

