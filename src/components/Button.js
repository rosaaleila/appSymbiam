import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import COLORS from "../const/Colors";

const Button = ({title, onPress=()=>{}}) => {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        height: 30,
        borderRadius: 105,
        backgroundColor: COLORS.blue,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },
    text: {
        color: COLORS.white,
    }
})

export default Button;