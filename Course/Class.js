import React from 'react';
// import React, { Component } from 'react';

import {SafeAreaView, View,StyleSheet, Text, Dimensions, ScrollView} from 'react-native';

class App extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            count:0
        }
    }

    render (){
        return(
            <SafeAreaView >

            <Text style={{fontSize:200, textAlign:'center'}}>{this.state.count}</Text>

            <Button 
            title='UP!'
            onPress={()=>this.setState({
                count: this.state.count +1
            })}/>
            {/* setState Component içinde tanımlı özel method*/}
            {/* this class yapısında functional da kullanılmaz */}

            
        </SafeAreaView>
        )
    }
}
    export default App
