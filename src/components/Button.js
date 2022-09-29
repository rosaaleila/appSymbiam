import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import COLORS from "../const/Colors";
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'
import { AntDesign } from '@expo/vector-icons'; 
import { Colors } from "react-native/Libraries/NewAppScreen";

const Button = ({title, onPress=()=>{}}) => {
    let [fontsLoaded] = useFonts({
        Montserrat_600SemiBold
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
            <Text style={[styles.text, {fontFamily: "Montserrat_600SemiBold"}]}>
                {title}
                { /** <AntDesign style={styles.icon} name="caretright"/> */}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        height: 40,
        borderRadius: 10,
        backgroundColor: COLORS.blue,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
        width: "75%",
    },
    text: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "600"
    },
    icon:{
        height: 10,
        width: 10,
        color: Colors.white
    }
})

export default Button;