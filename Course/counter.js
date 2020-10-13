import React, {useState} from 'react';
import {SafeAreaView, View,StyleSheet, Text, Dimensions, ScrollView, Button} from 'react-native';




const App= (props) =>{

    const [counter, setCounter]= useState(0);
    // useState değişkene hafızada tutar
    const updateCounter = ()=>setCounter(counter +1)

    console.log("Render component...")

    return (

        <SafeAreaView >

        
    <Text style={{fontSize:200, textAlign:'center'}}>{counter}</Text>
    
            <Button 
            title='UP!'
            // onPress={()=>setCounter(counter +1)}/>
            //  her basmada fonksiyonu yeniden oluşturur 
            onPress={updateCounter}
            // bunu yapıyla her basışta yeniden oluşmaz.
            />
        
         
        </SafeAreaView>
    )

}
export default App;