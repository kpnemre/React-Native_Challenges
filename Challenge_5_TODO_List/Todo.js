import React from 'react';
import {SafeAreaView, View,StyleSheet, Text,Dimensions, ScrollView} from 'react-native';


import { Header, Button, Input } from './components'

const Todolist = () =>{

    return (
        <SafeAreaView style={styles.container}>
            
            <Header />

            <ScrollView style= {{ backgroundColor:'red'}}> 

           
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
        flex:1,
        margin:10,
        backgroundColor: '#b0bec5',
        width: Dimensions.get('window').width*0.95,
        // height: Dimensions.get('window').height*0.05



    }


})