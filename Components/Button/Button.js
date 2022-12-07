import { Pressable, Text } from "react-native"
import styles from "../../styles"
export default function RelayButton(props) {
    const { onPress, title } = props
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [{ backgroundColor: pressed ? '#262c30' : '#92a9b8' }, styles.button]}>
            <Text style={styles.text}>{title}</Text>
        </Pressable >
    )
}