import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Colors from '../const/Colors';

const Input = ({labelName, errorText, iconName}) => {
  return (
    <View>
        <Text style={styles.label}>{labelName}</Text>
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} />
            {/* onFocus={()=>{onFocus()}} onChangeText={()=>{onChangeText()}} */}
        </View>
        <Text style={styles.errorText}>{errorText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    textInput:{
        color: Colors.dark_blue,
        flex: 1,
    },
    label:{
        color: Colors.blue,
    },
    inputContainer:{
        borderColor: Colors.dark_blue,
        flexDirection: "row",
        borderWidth: 1,
        height: 25,
        borderRadius: 10,
        paddingHorizontal: 15,
        alignItems: "center",
        marginVertical: 5
    },
    errorText:{},
    icon:{}
});

export default Input;