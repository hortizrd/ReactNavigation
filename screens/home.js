import React, {useState} from 'react'
import {globalStyles} from './styles/global'
import Card from '../shared/card'

import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    View,
    Button
    } from "react-native";

export default function Home({navigation}){

    const [reviews, setReviews] = useState([
        {title:'ZZZZelda,Bread of Fresh Air',rating: 1,body:'lorem ipsum',key:'1'},
        {title:'Gota,how prest prity',rating: 5,body:'lorem ipsum',key:'2'},
        {title:'Camel Case,Bread of Fresh Air',rating:3,body:'lorem ipsum',key:'3'},
        {title:'Nuew Zeland,Bread of Fresh Air',rating: 2,body:'lorem ipsum',key:'4'}
    ])

    const pressHandler =()=>{
        navigation.navigate('ReviewDetails')
      // navigation.push('ReviewDetails')

    }
    return(
              <View style={globalStyles.container}>
                  <FlatList
                  data={reviews}
                  renderItem={({item})=>(
                      <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)}>
                      <Card>
                      <Text style={globalStyles.title}>{item.title}</Text>
                      </Card>
                      </TouchableOpacity>
                  )}
                  />
                 
                  <Button title='go to review dets' onPress={pressHandler}/>
              </View>
    )
}

