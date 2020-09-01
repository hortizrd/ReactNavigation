import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";

import {globalStyles} from './styles/global'


export default function ReviewDetails({navigation}) {

    
const pressHandler = () =>{
    navigation.goBack()
}
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Review Details</Text>
      <Button title='Regresar' onPress={pressHandler}/>
    </View>
  );
}

