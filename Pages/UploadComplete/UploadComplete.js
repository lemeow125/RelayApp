import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native';
import styles from '../../styles';
import { Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setfilename, setfilesize } from '../../Components/States/OnlineFile/OnlineFileSlice';


export default function UploadComplete({ navigation }) {
    const filename = useSelector((state) => state.onlinefile.filename)
    const filesize = useSelector((state) => state.onlinefile.filesize)
    const dispatch = useDispatch()
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
                    <Text style={styles.text_tiny}>{filename}</Text>
                    <Text style={styles.text_tiny}>{filesize}</Text>
                    <Pressable
                        onPress={async () => {
                            Clipboard.setStringAsync(url)
                            setTimeout(() => {
                                navigation.navigate('Home')
                                dispatch(setfilename(''))
                                dispatch(setfilesize(''))
                            }, 700)
                        }}
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#262c30' : '#92a9b8' }, styles.button_wide]}>
                        <Text style={styles.text_tiny}>{url}</Text>
                    </Pressable >
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

