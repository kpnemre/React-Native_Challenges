import React, {useState, useEffect} from 'react';
import  {SafeAreaView, Text,View, StyleSheet, TouchableOpacity} from 'react-native';

const CityItem =(props)=>{
    return(
        <TouchableOpacity
        style={styles.container}
        >
            <Text style={styles.text}>{props.cityName}</Text>
        </TouchableOpacity>
    )
}
export {CityItem};
const styles= StyleSheet.create({
    container:{
        padding:10,
        alignItems:'center'
    },
    text:{
        fontSize:20,
        
    }
})