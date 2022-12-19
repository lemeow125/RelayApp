import { useState } from "react"
import { Pressable, Text, View } from "react-native"
import styles from "../../styles"
export default function RButton(props) {
    const { title } = props
    const [selected, setSel] = useState(false)
    return (
        <Pressable
            onPress={() => setSel(!selected)}
            style={({ pressed }) => [{ backgroundColor: pressed ? '#262c30' : '#92a9b8' }, styles.send_receiver_button_container]}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={styles.send_receiver_button_left}>{title}</Text>
                <View style={styles.send_receiver_button_right(selected)}></View>
            </View>
        </Pressable >
    )
}