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
    scrollViewBackground: {
        backgroundColor: "#33464d",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 26,
        textAlignVertical: 'center',
    },
    text_tiny: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlignVertical: 'center',
    },
    text_uploadhistory: {
        color: "white",
        fontWeight: "bold",
        fontSize: 12,
        textAlignVertical: 'center',
        paddingVertical: 2,
    },
    text_userinfo: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlignVertical: 'center',
        paddingVertical: 2,
    },
    text_userinfo_alignright: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlignVertical: 'center',
        textAlign: "right",
        paddingVertical: 2,
    },
    text_green: {
        color: "#36a664",
        fontWeight: "bold",
        fontSize: 26,
        textAlignVertical: 'center',
    },
    text_yellow: {
        color: "#d1c132",
        fontWeight: "bold",
        fontSize: 26,
        textAlignVertical: 'center',
    },
    text_red: {
        color: "#743f44",
        fontWeight: "bold",
        fontSize: 26,
        textAlignVertical: 'center',
    },
    text_internet_status_label: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: 'left',
        paddingLeft: 6
    },
    text_internet_status: (status) => {
        let tcolor = status ? "#36a664" : "#743f44"
        return {
            color: tcolor,
            fontWeight: "bold",
            fontSize: 14,
            textAlign: 'left',
            paddingLeft: 6,
        }

    },
    title_text: {
        color: "#c8e9fc",
        fontWeight: "bold",
        fontSize: 36,
        textAlignVertical: 'center',
        paddingLeft: 4,
    },
    sidebar_label: {
        color: 'white',
        fontWeight: 'bold',
    },
    sidebar_button_label: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    window: {
        alignContent: "center",
        width: "90%",
        backgroundColor: "#151a19",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
        borderRadius: 10,
    },
    subwindow: {
        alignContent: "center",
        width: "40%",
        backgroundColor: "#536370",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
        borderRadius: 10,
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
        width: 48,
        height: 48,
        marginRight: 4,
        resizeMode: "contain",
    },
    sidebar_image: {
        width: 32,
        height: 32,
        marginLeft: 4,
        marginTop: 4,
    },
    sidebar_button_icon: {
        width: 16,
        height: 16,
        marginRight: 4,
    },
    line: {
        alignSelf: "stretch",
        borderWidth: 2,
        borderColor: "white",
        margin: 20,
    },
    line_lessmargin: {
        alignSelf: "stretch",
        borderWidth: 2,
        borderColor: "white",
        margin: 5,
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
        // Button color is in button.js!
        width: 170,
    },
    send_receiver_button_container: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 3,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        // Button color is in button.js!
        width: 240,
    },
    send_receiver_button_left: {
        color: "white",
        fontWeight: "bold",
        fontSize: 12,
        textAlignVertical: 'center',
        textAlign: 'left',
        width: 192,
    },
    send_receiver_button_right: (selected) => {
        let bcolor = selected ? "#36a664" : "#743f44"
        return {
            backgroundColor: bcolor,
            alignItems: 'center',
            justifyContent: "center",
            borderRadius: 4,
            paddingHorizontal: 16
        }

    },
    sidebar_button: {
        flex: 1,
        flexDirection: "column",
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#c8e9fc",
        width: 240,
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    button_wide: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        // Button color is in button.js!
        width: 300,
    },
});

export default styles;