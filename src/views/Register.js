import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Colors from '../const/Colors';

import Input from '../components/Input';
import Button from '../components/Button';

const Register = ({labelName, errorText, iconName, onFocus=()=>{}, onChangeText=()=>{}}) => {
  return (
    <View style={styles.container}>
        <Input labelName={"Nome"}/>
        <Button title={"Continuar"}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Register;