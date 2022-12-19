import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native';
import styles from '../../styles';
import { Pressable } from 'react-native';
import TextTicker from 'react-native-text-ticker'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setfilename, setfilesize } from '../../Components/States/OfflineFile/offlinefileSlice'


export default function SendComplete({ navigation }) {
    const dispatch = useDispatch()
    const filename = useSelector((state) => state.sendfile.filename)
    const filesize = useSelector((state) => state.sendfile.filesize)
    const fn = filename
    const fsz = filesize
    const promises = () => {
        dispatch(setfilename(''))
        dispatch(setfilesize(''))
    }
    return (
        <ScrollView style={styles.scrollViewBackground}>
            <SafeAreaView style={styles.background}>
                <View style={styles.padding} />
                <View style={styles.window}>
                    <Image style={styles.window_image_mini} source={require('../../img/Share-icon.png')} />
                    <View style={styles.line} />
                    <Text style={styles.text}>Sending Complete</Text>
                    <View style={styles.line} />
                    <TextTicker
                        style={styles.text_tiny}
                        duration={8000}
                    >
                        {fn}
                    </TextTicker>
                    <Text style={styles.text_tiny}>{fsz}</Text>
                    <Pressable
                        onPress={async () => {
                            await Promise.all(promises)
                            navigation.navigate('Home')
                        }}
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#262c30' : '#92a9b8' }, styles.button_wide]}>
                        <Text style={styles.text_tiny}>Return</Text>
                    </Pressable >
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

