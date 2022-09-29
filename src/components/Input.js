import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Colors from '../const/Colors';

const Input = ({type, labelName, errorText, iconName, onFocus=()=>{}, onChangeText=()=>{}}) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }
  
    return (
        <View style={styles.container}>
            <Text style={[styles.label, {fontFamily: "Montserrat_400Regular"}]}>{labelName}</Text>
            <View style={[styles.inputContainer, {borderColor: errorText ? Colors.red : Colors.dark_blue }]}>
                <MaterialCommunityIcons name={iconName} style={styles.icon}/>
                <TextInput style={[styles.textInput, {fontFamily: "Montserrat_400Regular"}]} keyboardType={type} autoCorrect={false} onFocus={onFocus} onChangeText={onChangeText}/>
                {/* onFocus={()=>{onFocus()}} onChangeText={()=>{onChangeText()}} */}
            </View>
            <Text style={[styles.errorText, {fontFamily: "Montserrat_400Regular"}]}>{errorText}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    textInput:{
        color: Colors.dark_blue,
        flex: 1,
        paddingStart: 10
    },
    label:{
        color: Colors.blue,
        fontSize: 13,
    },
    inputContainer:{
        flexDirection: "row",
        borderWidth: 1,
        height: 35,
        borderRadius: 10,
        paddingHorizontal: 15,
        alignItems: "center",
        marginVertical: 5,
        width: "75%"
    },
    errorText:{
        color: Colors.red,
        fontSize: 12
    },
    icon:{
        height: 15,
        width: 15,
        color: Colors.blue,
        marginTop: 2
    }
});

export default Input;