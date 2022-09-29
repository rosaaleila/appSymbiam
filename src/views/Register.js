import React from 'react'
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import Colors from '../const/Colors';

import Illustration from "../assets/illustration.png";

import Input from '../components/Input';
import Button from '../components/Button';
import TextBlock from '../components/TextBlock';

import { useNavigation } from "@react-navigation/native";

const Register = () => {
  
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: "",
    cellphone: "",
    name_responsible: "",
    phone_responsible: ""
  });

  const handlerOnChange = (text, input) => {
    setInputs((prevState) => (

      console.log(prevState),

      {...prevState, [input]:text}

    ));
  };

  const [errors, setErrors] = React.useState({}); 

  const handlerErrors = (errorMessage, input) => {
    setErrors((prevState) => ({...prevState, [input]:errorMessage}));

  }

  const validate = () =>{
    let validate = true;
    
    if(!inputs.name) {
      validate = false;
      handlerErrors('Nome não pode estar em branco!', 'name');
    }

    if(!inputs.email) {
      validate = false;
      handlerErrors('E-mail não pode estar em branco!', 'email');
    }

    if(!inputs.phone) {
      validate = false;
      handlerErrors('Telefone não pode estar em branco!', 'phone');
    }

    if(!inputs.cellphone) {
      validate = false;
      handlerErrors('Celular não pode estar em branco!', 'cellphone');
    }

    if(validate) {
      console.log("Dados validados e corretos!")
    }

  }

  return (


    <View style={Styles.container}>
        <TextBlock title={"Bem-vindo!"} description="Cadastre-se para acessar nossos benefícios!"/>
        <View style={Styles.lineDivider}/>

        <Input labelName={"Nome"} iconName="account" errorText={errors.name} onFocus={() => handlerErrors(null, 'name')} onChangeText={(text) => handlerOnChange(text, 'name')}/>
        <Input labelName={"E-mail"} iconName="email" errorText={errors.email} onFocus={() => handlerErrors(null, 'email')} onChangeText={(text) => handlerOnChange(text, 'email')}/>
        <Input type={"numeric"} labelName={"Telefone"} iconName="phone" errorText={errors.phone} onFocus={() => handlerErrors(null, 'phone')} onChangeText={(text) => handlerOnChange(text, 'phone')}/>
        <Input type={"numeric"} labelName={"Celular"} iconName="cellphone" errorText={errors.cellphone} onFocus={() => handlerErrors(null, 'cellphone')} onChangeText={(text) => handlerOnChange(text, 'cellphone')}/>
        <Input labelName={"Nome Responsável"} iconName="account" errorText={errors.name_responsible} onFocus={() => handlerErrors(null, 'name_responsible')} onChangeText={(text) => handlerOnChange(text, 'name_responsible')}/>
        <Input type={"numeric"} labelName={"Telefone Responsável"} iconName="phone" errorText={errors.phone_responsible} onFocus={() => handlerErrors(null, 'phone_responsible')} onChangeText={(text) => handlerOnChange(text, 'phone_responsible')}/>

        <Button title={"Cadastrar"} onPress={validate}/>
  
    </View>

  );
}

const Styles = StyleSheet.create({
    container:{
      height: "100%",
      alignItems: "center"
    },
    lineDivider:{
      borderColor: Colors.blue,
      borderBottomWidth: 1,
      width: "75%",
      marginBottom: "5%"
    },
    
});

export default Register;