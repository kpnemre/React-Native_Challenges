import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Alert, FlatList, StyleSheet, TextInput,Button } from 'react-native';
import axios from 'axios';




const Main = (props) => {

    const fetchData=()=>{
        console.log('startig fetch....');

        // const myData=axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(myData);
        const myData=axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
        // data gelmsei bittikten sonra tetiklenir then bloğu.

        console.log('ending fetch ...')

    }

    return(
        <SafeAreaView>
            <View>
                <Text>Main</Text>
                <Button title='Fetch Data' onPress={fetchData}/>
            </View>
        </SafeAreaView>
    )
}

export default Main;