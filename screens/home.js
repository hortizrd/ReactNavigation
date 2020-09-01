import React, {useState} from 'react'
import {globalStyles} from './styles/global'

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
        {title:'Zelda,Bread of Fresh Air',rating: 5,body:'lorem ipsum',key:'1'},
        {title:'Gota,how prest prity',rating: 5,body:'lorem ipsum',key:'2'},
        {title:'Camel Case,Bread of Fresh Air',rating: 4,body:'lorem ipsum',key:'3'},
        {title:'Nuew Zeland,Bread of Fresh Air',rating: 6,body:'lorem ipsum',key:'4'}
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
                      <TouchableOpacity>
                         <Text style={globalStyles.title}>{item.title}</Text>
                      </TouchableOpacity>
                  )}
                  />
                 
                  <Button title='go to review dets' onPress={pressHandler}/>
              </View>
    )
}

