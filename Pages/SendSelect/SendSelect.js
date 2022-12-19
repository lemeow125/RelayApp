import { Image, Text, SafeAreaView, View, ScrollView } from 'react-native'
import styles from '../../styles'
import TextTicker from 'react-native-text-ticker'
import SendRecipientButton from '../../Components/Button/SendRecipientButton'
import NavButton from '../../Components/Button/NavButton'

// Redux
import { useSelector } from 'react-redux'

export default function SendSelect({ navigation }) {
    const filename = useSelector((state) => state.sendfile.filename)
    const filesize = useSelector((state) => state.sendfile.filesize)
    return (
        <ScrollView style={styles.scrollViewBackground}>
            <SafeAreaView style={styles.background}>
                <View style={styles.padding} />
                <View style={styles.window}>
                    <Image style={styles.window_image_mini} source={require('../../img/Share-icon.png')} />
                    <View style={styles.line} />
                    <Text style={styles.text}>Select Receiver</Text>
                    <View style={styles.line} />
                    <TextTicker
                        style={styles.text_tiny}
                        duration={8000}
                    >
                        {filename}
                    </TextTicker>
                    <Text style={styles.text_tiny}>{filesize}</Text>
                    <View style={styles.padding} />
                    <SendRecipientButton title="Panchito's Realme C15" />
                    <SendRecipientButton title="Toledo's Iphone 100 1TB" />
                    <SendRecipientButton title="Kim's Samsung S20" />
                    <View style={styles.line} />
                    <SendRecipientButton title="IT3R6" />
                    <SendRecipientButton title="IT3R7" />
                    <SendRecipientButton title="Close Friends" />
                    <View style={styles.padding} />
                    <NavButton title="Send" goTo='Send - Sending' />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

