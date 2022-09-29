import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import Colors from "../const/Colors";
import logo from "../assets/logo.png";

const Splash = () => {
  return (
    <View style={style.page}>
        <Image source={logo}/>
    </View>
  )
}

const style = StyleSheet.create({
    page:{
        backgroundColor: Colors.blue,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
})

export default Splash;