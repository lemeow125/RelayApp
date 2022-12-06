import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#33464d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '26px',
    },
    title_text: {
        color: '#c8e9fc',
        fontWeight: 'bold',
        fontSize: '46px',
    },
    window: {
        alignContent: 'center',
        height: '30%',
        width: '70%',
        backgroundColor: '#151a19',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5em'
    },
    window_image: {
        width: 128,
        height: 128,
    },
    window_image_mini: {
        width: 64,
        height: 64,
    },
    navbar_image: {
        width: 64,
        height: 64,
        flex: 1,
        margin: '0.5em',
    },
    line: {
        alignSelf: "stretch",
        borderWidth: 2,
        borderColor: 'white',
        margin: 10,
    },
});

export default styles;