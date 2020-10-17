import React,{ useState } from 'react';
import { SafeAreaView, View, Text, Alert } from 'react-native';

import InputPanel from './components/InputPanel';

const App = () => {

    const [userName, setUserName]= useState("");
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello {userName}</Text>
            </View>

            <InputPanel 
            // sendText= {myValue=> console.log(myValue)}
            sendText= {myValue=> setUserName(myValue)}
            // sadece güncellenen değeri alabiliriz.
            // fonksiyonla bir array a yada değişkenen göndeririz.
            />

        </SafeAreaView>
    )
}

export default App;
