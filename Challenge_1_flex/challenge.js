import React from 'react';
import {SafeAreaView, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>

      <View style={{backgroundColor: 'red', flex: 3,flexDirection:'row'}}>
        <View style={{backgroundColor: 'red', flex: 1,}}></View>
        <View style={{backgroundColor: 'yellow', flex: 1}}></View>
      </View>

      <View style={{backgroundColor: 'orange', flex: 1}}></View>
      <View style={{backgroundColor: 'yellow', flex: 1}}></View>
      <View style={{backgroundColor: 'red', flex: 1}}></View>

    </SafeAreaView>
  );
};

export default App;