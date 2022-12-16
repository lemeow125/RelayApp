import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native'
import RButton from '../../Components/Button/RButton'
import styles from '../../styles'
import * as DocumentPicker from 'expo-document-picker'

// Redux
import { useDispatch } from 'react-redux'
import { setfilename, setfilesize } from '../../Components/States/OnlineFile/onlinefileSlice'
import { adduploadfn, adduploadsz } from '../../Components/States/OnlineUploadHistory/uploadhistorySlice'

export default function Upload({ navigation }) {
    const dispatch = useDispatch()
    function ConvertBytes(bytes, decimals = 2) {
        if (!+bytes) return '0MB'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }
    return (
        <ScrollView style={styles.scrollViewBackground}>
            <SafeAreaView style={styles.background}>
                <View style={styles.padding} />
                <View style={styles.window}>
                    <Image style={styles.window_image_mini} source={require('../../img/Upload-icon.png')} />
                    <View style={styles.line} />
                    <Text style={styles.text}>Upload File</Text>
                    <RButton title="Select" onPress={async () => {
                        var file = await DocumentPicker.getDocumentAsync()
                        console.log('Filename: ' + file.name)
                        console.log('File size: ' + ConvertBytes(file.size))
                        dispatch(setfilename(file.name))
                        dispatch(setfilesize(ConvertBytes(file.size)))
                        // File history
                        dispatch(adduploadfn(file.name))
                        dispatch(adduploadsz(ConvertBytes(file.size)))
                        setTimeout(() => { navigation.navigate('Upload In Progress') }, 200)
                    }
                    } />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

