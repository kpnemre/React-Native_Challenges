import React,{ useState } from 'react';
import { SafeAreaView, View, Text, Alert, Button, TextInput } from 'react-native';



const number=55;
const First= (props)=>{
    // console.log('First');
    const [userName, setUserName]=useState('');

    return(
        <SafeAreaView>

            <View>
                <Text style={{fontSize:40}}>First</Text>
                <Text style={{fontSize:40}}>{number}</Text>

                <Text style={{ fontWeight: 'bold', margin: 5 }}>Girilen değer: {userName}</Text>
                <View style={{ backgroundColor: '#e0e0e0', padding: 10, margin: 10, borderRadius: 5 }}>
                    <TextInput 
                    value={userName}
                    onChangeText={text=> setUserName(text)}
                    />
                </View>

                <Button 
                 title="Go!"
                 onPress={() => props.navigation.navigate('SecondPage',{
                    selectedValue:userName
                 })}
                //  onpress ile ikinci sayfaya geçiyoruz ve parametre geçişi sağlıuoruz
                />
            </View>
        </SafeAreaView>


    )
}

export default First;