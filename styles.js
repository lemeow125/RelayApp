import { cloneElement } from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#33464d",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 26,
        textAlignVertical: 'center',
    },
    title_text: {
        color: "#c8e9fc",
        fontWeight: "bold",
        fontSize: 36,
        textAlignVertical: 'center',
    },
    window: {
        alignContent: "center",
        width: "90%",
        backgroundColor: "#151a19",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
    },
    window_image: {
        width: 128,
        height: 128,
        resizeMode: "contain",
    },
    window_image_mini: {
        width: 64,
        height: 64,
        resizeMode: "contain",
    },
    navbar_image: {
        width: 32,
        height: 32,
        margin: 2,
        resizeMode: "contain",
    },
    line: {
        alignSelf: "stretch",
        borderWidth: 2,
        borderColor: "white",
        margin: 20,
    },
    padding: {
        paddingVertical: 25,
    },
    button: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#92a9b8",
        width: 150,
    }
});

export default styles;