import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native';
import styles from '../../styles';
import { Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setfilename, setfilesize } from '../../Components/States/OnlineFile/onlinefileSlice';


export default function UploadComplete({ navigation }) {
    const dispatch = useDispatch()
    const filename = useSelector((state) => state.onlinefile.filename)
    const filesize = useSelector((state) => state.onlinefile.filesize)
    const fn = filename
    const fsz = filesize
    const promises = () => {
        dispatch(setfilename(''))
        dispatch(setfilesize(''))
        Clipboard.setStringAsync(url)
    }
    const url = 'https://relay.com/dl/a02mf81hm'
    return (
        <ScrollView style={styles.scrollViewBackground}>
            <SafeAreaView style={styles.background}>
                <View style={styles.padding} />
                <View style={styles.window}>
                    <Image style={styles.window_image_mini} source={require('../../img/Copy-icon.png')} />
                    <View style={styles.line} />
                    <Text style={styles.text}>Upload Complete</Text>
                    <View style={styles.line} />
                    <Text style={styles.text_tiny}>{fn}</Text>
                    <Text style={styles.text_tiny}>{fsz}</Text>
                    <Pressable
                        onPress={async () => {
                            await Promise.all(promises)
                            navigation.navigate('Home')
                        }}
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#262c30' : '#92a9b8' }, styles.button_wide]}>
                        <Text style={styles.text_tiny}>{url}</Text>
                    </Pressable >
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

