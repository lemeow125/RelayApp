import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native';
import RButton from '../../Components/Button/RButton';
import styles from '../../styles';
import * as DocumentPicker from 'expo-document-picker';


export default function Upload({ navigation }) {
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
                        console.log('File ' + file.name + ' selected')
                        setTimeout(() => { navigation.navigate('Upload In Progress') }, 2000)
                    }
                    } />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

