import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native';
import styles from '../../styles';

// Redux
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

export default function UploadInProgress({ navigation }) {
    const filename = useSelector((state) => state.onlinefile.filename)
    const filesize = useSelector((state) => state.onlinefile.filesize)
    setTimeout(() => { navigation.navigate('Upload Complete') }, 3000)
    return (
        <ScrollView style={styles.scrollViewBackground}>
            <SafeAreaView style={styles.background}>
                <View style={styles.padding} />
                <View style={styles.window}>
                    <Image style={styles.window_image_mini} source={require('../../img/Online-icon.png')} />
                    <View style={styles.line} />
                    <Text style={styles.text}>Upload in Progress</Text>
                    <View style={styles.line} />
                    <Text style={styles.text_tiny}>{filename}</Text>
                    <Text style={styles.text_tiny}>{filesize}</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

