import { Pressable, Text } from "react-native"
import styles from "../../styles"
import { useNavigation } from "@react-navigation/native"
export default function RelayButton(props) {
    const navigation = useNavigation()
    var { onPress, goTo, title } = props
    return (
        <Pressable
            onPress={() => {
                onPress
                if (goTo) {
                    navigation.navigate(goTo)
                }
            }}
            style={({ pressed }) => [{ backgroundColor: pressed ? '#262c30' : '#92a9b8' }, styles.button]}>
            <Text style={styles.text}>{title}</Text>
        </Pressable >
    )
}