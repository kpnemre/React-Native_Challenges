import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button, Alert,TextInput,StyleSheet,Dimensions } from 'react-native';

const App = (props) => {
    // const [counter, setCounter] = useState(0);

    // useEffect (()=>{
    //     Alert.alert('CLARUSWAY', "Hello")
    // },[])
    
    // useEffect(()=>{
    //     if(counter>10)
    //         Alert.alert("Clarusway", " 10'dan fazla seçim yapıyorsunuz.")
    // },[counter])
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const login = () => {
        Alert.alert("CLARUSWAY", `Email: ${email}, Pass: ${password}`);
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ margin: 20, fontSize: 50 }}>🌍</Text>

                <View style={styles.input}>
                    <TextInput
                        // value={email}
                        placeholder='E-posta adresinizi giriniz..'
                        onChangeText={(userText) => setEmail(userText)}
                        keyboardType="email-address"
                        // klavye sitilini belirtir
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        // value={password}
                        placeholder='Şifrenizi giriniz..'
                        onChangeText={(userPass) => setPassword(userPass)}
                        secureTextEntry={true}
                        // password gizler
                    />
                </View>

                <Button title="Giriş Yap" onPress={login} />
                <Button title="Temizle" onPress={() => {
                    setEmail("");
                    setPassword("");
                }} />

            </View>
        </SafeAreaView>
    )
}

export default App;


const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        width: Dimensions.get('window').width * 0.85
    }
})
