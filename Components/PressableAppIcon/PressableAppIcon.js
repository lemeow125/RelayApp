import { Pressable, Image } from "react-native"
import styles from "../../styles"
import { useNavigation } from "@react-navigation/core"
export default function PressableAppIcon(props) {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate('Home')}>
            <Image style={styles.navbar_image} source={require('../../img/App-logo.png')} />
        </Pressable >
    )
}