import React, {useState} from 'react';
import {SafeAreaView, View, Text, Alert,Button} from 'react-native';

const Second = (props) => {

    const userNumber=props.route.params.myNumber
  return (
    <SafeAreaView>
      <View >
        <Text style={{fontSize:40}}>Second</Text>
  <Text style={{fontSize:40}}>{userNumber}</Text>
        {/* <Button
          title="Go!"
          onPress={() => props.navigation.navigate('FirstPage')}
        /> */}
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default Second;
