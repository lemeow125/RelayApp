import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native';
import { clockRunning } from 'react-native-reanimated';
import RelayButton from '../../Components/Button/Button';
import styles from '../../styles';

export default function Upload({ navigation }) {
    return (
        <ScrollView style={styles.scrollViewBackground}>
            <SafeAreaView style={styles.background}>
                <View style={styles.padding} />
                <View style={styles.padding} />
                <View style={styles.window}>
                    <Image style={styles.window_image_mini} source={require('../../img/Upload-icon.png')} />
                    <View style={styles.line} />
                    <Text style={styles.text}>Upload File</Text>
                </View>
                <View style={styles.padding} />
                <View style={styles.padding} />
                <View style={styles.padding} />
            </SafeAreaView>
        </ScrollView>
    );
}

