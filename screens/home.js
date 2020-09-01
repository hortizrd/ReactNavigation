import React from 'react'
import {globalStyles} from './styles/global'

import {
    StyleSheet,
    Text,
    View,
    Button
    } from "react-native";

export default function Home({navigation}){

    const pressHandler =()=>{
        navigation.navigate('ReviewDetails')
      // navigation.push('ReviewDetails')

    }
    return(
              <View style={globalStyles.container}>
                  <Text style={globalStyles.title}>Home</Text>
                  <Button title='go to review dets' onPress={pressHandler}/>
              </View>
    )
}

