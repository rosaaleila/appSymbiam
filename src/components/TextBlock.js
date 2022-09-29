import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

import Colors from "../const/Colors";

const TextBlock = ({title, description}) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={styles.textContainer}>
            <Text style={[styles.title, {fontFamily: "Montserrat_700Bold"}]}>{title}</Text>
            <Text style={[styles.text, {fontFamily: "Montserrat_400Regular"}]}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontWeight: "800",
        color: Colors.dark_blue,
        fontSize: 20,
      },
      text:{
        color: Colors.blue,
        fontSize: 15,
        textAlign: "center",
      },
      textContainer:{
        alignItems: "center",
        marginBottom: "5%",
        marginTop: "20%",
        width: "75%",
      }
})

export default TextBlock;