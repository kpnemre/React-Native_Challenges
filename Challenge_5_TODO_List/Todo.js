import React, { useState } from 'react';
import {SafeAreaView, View,StyleSheet, Text, Dimensions, ScrollView} from 'react-native';


import { Header, Button, Input } from './components'

const Todolist = () =>{



    return (
        <SafeAreaView style={styles.container}>

            <Header> </Header>
            <ScrollView style= {styles.scroll}> 

           
            </ScrollView>



            <View style= {styles.addtodo}>

                <Input />
                <Button />
 
            </View>

         
        </SafeAreaView>
    )

}
export default Todolist;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#37474f',



    },

    addtodo:{
        
        margin:10,
        backgroundColor: '#b0bec5',
        width: Dimensions.get('window').width*0.95,
        borderRadius:10,
        paddingBottom:10
        // height: Dimensions.get('window').height*0.05
    },
    scroll:{
        backgroundColor:'red',
        flex:1,
    },header:{
        // flex:1,
        color:'#ffa726',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:15,
        borderWidth: 1,
        // height:85,
        
    },


})