import { Text, View } from "react-native"
import styles from "../../styles"
import * as Network from 'expo-network';
import { useState } from 'react';

export default function OnlineStatus() {
    let [Online, setOnline] = useState(false)
    let [statustext, setST] = useState('')
    new Promise(async () => {
        const networkState = await (await Network.getNetworkStateAsync()).isInternetReachable
        setOnline(networkState)
        if (networkState) {
            setST('Connected')
        }
        else {
            setST('Offline')
        }
    })
    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={styles.text_internet_status_label}>Status</Text>
            <Text style={styles.text_internet_status(Online)}>{statustext}</Text>
        </View>

    )
}