import React from 'react';
import {SafeAreaView, View,StyleSheet, Text,Dimensions} from 'react-native';

import { Button } from './Button';

const Header = ({ item })=>{



    return(
        <View style= {styles.header}>

        <Text style={{color: '#ffa726',fontSize:50}}>
            TODO 
        </Text>
        <Text style={{color: '#ffa726',fontSize:50}}>
        { item }
        </Text>
        </View>
    )

}

export { Header };

const styles = StyleSheet.create({
    header:{
        // flex:1,
        color:'#ffa726',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:15,
        borderWidth: 1,
        // height:85,
        
    },




})