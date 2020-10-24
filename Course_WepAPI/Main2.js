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

const[userData, setUserData] = useState([]);

const fetchData_Then = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                setUserData(data);
            })
    }

  const fetchData_Await = async () => {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
setUserData(data);
// setUserData(response.data); const (response)
// async yapılarda return yaplmaz. burda state güncellemesi yaptık
  };


  function promiseFunction(number) {
    return new Promise((resolve, reject) => {
        if (number > 5) {
            resolve("Sayı beşten büyük!");
        }
        else {
            reject("Sayı beşten küçük..");
        }
    })
}

const checkNumber = () => {
    promiseFunction(1)
        .then(response => {
            console.log("response: ");
            console.log(response);
        })
        .catch(error => {
            console.log("error: ");
            console.log(error);
        })
}


  return (


    <SafeAreaView>
      <View>
        <Text>Main</Text>
        <Button title="Fetch Data Then" onPress={fetchData_Then} />
        <Text></Text>
        <Button title="Fetch Data Await" onPress={fetchData_Await} />
        <Text></Text>

        <Button title="Number" onPress={checkNumber} />

        <FlatList 
        data={userData}
  renderItem={({item})=> <Text>{item.name}</Text>}
        />
      </View>
    </SafeAreaView>
  )

};

export default Main;
