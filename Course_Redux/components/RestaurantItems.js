import React, {useEffect, useState} from 'react';
import { SafeAreaView,View,Text, FlatList, TouchableOpacity } from "react-native";
import { Restaurants } from '../pages';


const RestaurantItem =({ item }) =>{

    return (
   <View style= {{flex:1, borderColor:'red'}} >
       <Text style= {{fontSize:10, color:'red'}}>{item.name}</Text>
   </View>
    )
}
export {RestaurantItem};