import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {

    function sayHello() {
        const platform = Platform.OS;
        const version = Platform.Version;
    
        if (platform === 'ios')
          return (
            <Text
              style={{
                fontSize: 30,
              }}>
              Hello to iPhone: {version}
            </Text>
          );
        else
          return (
            <Text
              style={{
                fontSize: 30,
              }}>
              Hello to Android! {version}
            </Text>
          );
      }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="email-address"
            placeholder="Aramak istediğiniz ürünü giriniz.."
          />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Ara</Text>
        </TouchableOpacity>
      </View>
   

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center'
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: 'blue', 
    padding: 10,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold'
  }
});