import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import axios from 'axios';

const Main = (props) => {
  const fetchData_Then = () => {
    let myData = [];

    console.log('startig fetch....');

    // const myData=axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(myData);
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      console.log(response);
      myData = response.data;
    });
    console.log(myData);
    // myData boşgelir. çünkü then işlem bitmeden tetiklenmez.
    console.log('end fetch..');
    // .catch((error)=>{
    //     console.log(error);
    // })

    // data gelmsei bittikten sonra tetiklenir then bloğu.

    console.log('ending fetch ...');
  };

  const fetchData_Await = async () => {
    console.log('starting await fetch....');

    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    console.log(response);
    console.log('end await fetch....')
  };

  return (
    // <SafeAreaView>
    //     <View>
    //         <Text>Main</Text>
    //         <Button title='Fetch Data' onPress={fetchData_Then}/>
    //     </View>
    // </SafeAreaView>

    <SafeAreaView>
      <View>
        <Text>Main</Text>
        <Button title="Fetch Data Then" onPress={fetchData_Then} />
<Text></Text>
        <Button title="Fetch Data Await" onPress={fetchData_Await} />
      </View>
    </SafeAreaView>
  );
};

export default Main;
