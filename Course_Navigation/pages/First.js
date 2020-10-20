import React,{ useState } from 'react';
import { SafeAreaView, View, Text, Alert, Button } from 'react-native';



const number=55;
const First= (props)=>{

    return(
        <SafeAreaView>

            <View>
                <Text style={{fontSize:40}}>First</Text>
                <Button 
                 title="Go!"
                 onPress={() => props.navigation.navigate('SecondPage',{
                     myNumber:number
                 })}
                />
            </View>
        </SafeAreaView>


    )
}

export default First;