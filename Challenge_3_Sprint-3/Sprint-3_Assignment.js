import React from 'react';
import {SafeAreaView, View,StyleSheet, Text,Dimensions} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.redbox}>

        <View style={styles.graybox}>

                <Text style={styles.orangebox}> Orange Circle</Text>
           
                 <Text style={styles.yellowbox}>Yellow Box</Text>
          
        </View>

      </View>

      <View style={styles.pinkbox}>

      <View style={styles.blackbox}>
      <Text style={styles.blackbox2} >Black Box</Text>
      </View>

      <View style={styles.brownbox}>
      <Text style={styles.brownbox2}>Brown Box</Text>
      </View>
      


      </View>

    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', flex: 1,

    },
    redbox: {
        backgroundColor: 'red', flex: 3,color:'black',
    },
    graybox: {
        backgroundColor: 'gray', flex: 1, margin:20,
        flexDirection:'row',justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius: 10,


       },
    orangebox: {
        backgroundColor: 'orange', flex: 1, margin:30,
        borderRadius: 60,
        width: 100,
        height: 100,
        textAlign:'center',
        textAlignVertical:'center',
        fontWeight:'bold',

    },
    yellowbox: {
        backgroundColor: 'yellow', flex: 1,margin:30,
        borderRadius: 60,
        width: 50,
        height: 50,
        textAlign:'center',
        textAlignVertical:'center',
    },
    pinkbox: {
        backgroundColor: '#ffc0ca', flex: 4,
         flexDirection:'row',
         justifyContent:'space-evenly',
        

    },
    blackbox: {
        backgroundColor: '#010101', flex: 7,height:400,margin:30,
        borderRadius: 20,
        textAlign:'center',
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',


    },
    brownbox: {
        backgroundColor: '#a42a24', 
        flex: 3,
        height:400,
        margin:20,
        borderRadius: 100,
        textAlign:'center',
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',

    },
    brownbox2: {

      color:'white',
      textAlign:'center',
      textAlignVertical:'center',
      flex:1,
      transform: [{ rotate: '270deg'}],
      

  },
  blackbox2: {

    color:'white',
    textAlign:'center',
    textAlignVertical:'center',
    flex:1


},
  });
  