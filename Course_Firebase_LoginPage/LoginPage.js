import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button,Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
const LoginPage = (props) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const signIn = () => {
        auth().signInWithEmailAndPassword(email,password)
        .then ((response)=>{
            // console.log(response.user.uid)
            // console.log(response.toJSON())
            console.log(response)
        })
        .catch(error =>{
            console.log(error.code)
       
            if (error.code === 'auth/wrong-password') {
            Alert.alert('That email password is wrong');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
        })
    }

    const signUp = () => {

        auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
        //   console.log('User account created & signed in!');
          console.log(response);
        //   "uid": "idEybKi5GkPpc32iAZd3lwNZomI2"
        })
        .catch(error => {

        //   if (error.code === 'auth/email-already-in-use') {
        //     console.log('That email address is already in use!');
        //   }
      
        //   if (error.code === 'auth/invalid-email') {
        //     console.log('That email address is invalid!');
        //   }
      
          console.error(error);
        });
    }

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Login</Text>

                <View style={{ backgroundColor: '#eceff1', padding: 5, margin: 5, borderRadius: 5 }}>
                    <TextInput
                        placeholder="Type your mail.."
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <View style={{ backgroundColor: '#eceff1', padding: 5, margin: 5, borderRadius: 5 }}>
                    <TextInput
                        placeholder="Type your password"
                        onChangeText={text => setPassword(text)}
                    />
                </View>

                <Button
                    title="Sign Up"
                    onPress={signUp}
                />
                <Text></Text>
                <Button
                    title="Sign In"
                    onPress={signIn}
                />

            </View>
        </SafeAreaView>
    );
}

export default LoginPage;   
