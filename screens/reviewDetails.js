import React from "react";
import { StyleSheet, Text, View,Button,Image } from "react-native";

import {globalStyles} from './styles/global'
import Card from '../shared/card'

export default function ReviewDetails({navigation}) {

    
const pressHandler = () =>{
    navigation.goBack()
}
  return (
    <View style={globalStyles.container}>
     <Card>
     <Text style={globalStyles.title}>{navigation.getParam('title')}</Text>
      <Text style={globalStyles.title}>{navigation.getParam('body')}</Text>
      <View style={styles.rating}>
          <Text>gameZone rating</Text>
          <Image source={ require('../assets/rating-1.png' )}/>

      
      </View>
     </Card>
      <Button title='Regresar' onPress={pressHandler}/>
    </View>
  );
}

const styles =StyleSheet.create({
    rating:{

    }
})
