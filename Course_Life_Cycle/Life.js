import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button, Alert } from 'react-native';

const App = (props) => {
    const [counter, setCounter] = useState(0);

    useEffect (()=>{
        Alert.alert('CLARUSWAY', "Hello")
    },[])
    
    useEffect(()=>{
        if(counter>10)
            Alert.alert("Clarusway", " 10'dan fazla seçim yapıyorsunuz.")
    },[counter])
    
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 80 }}>Count: {counter}</Text>
                <Button
                    title="Select Order"
                    onPress={() => setCounter(counter + 1)}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;