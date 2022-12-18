import { Pressable, Text, View, Image } from "react-native"
import styles from "../../styles"
import { useNavigation } from "@react-navigation/native"
export default function SidebarButton(props) {
    const navigation = useNavigation()
    const { goTo, title, imgpath } = props
    return (
        <View>
            <Pressable
                onPress={() => {
                    if (goTo) {
                        navigation.navigate(goTo)
                    }
                }}
                style={styles.sidebar_button}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={styles.sidebar_button_icon} source={imgpath} />
                    <Text style={styles.sidebar_button_label}>{title}</Text>
                </View>
            </Pressable >
        </View>

    )
}