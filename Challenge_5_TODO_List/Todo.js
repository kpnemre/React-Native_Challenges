import React, { useState } from 'react';
import {SafeAreaView, View,StyleSheet, Text, Dimensions, ScrollView} from 'react-native';


import { Header, Button, Input } from './components'

const Todolist = () =>{


  

    return (
        <SafeAreaView style={styles.container}>
            
            <Header />
    {/* <Text style={{color:'white'}}>{count}</Text> */}

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
    }


})