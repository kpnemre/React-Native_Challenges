import React from 'react';
// import React, { Component } from 'react';

import {SafeAreaView, View,StyleSheet, Text, Dimensions, ScrollView,Button} from 'react-native';

class App extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            count:0
        }
        console.log("Constructor");
    }
    myFunction() {
        let myVariable = 10;

        myVariable++;

        console.log("myFunction: " + myVariable);
    }


    componentDidMount (){
        console.log("Component Did Mount")
        // API lardan başlangıçta veri çekmek için kullanılır
    }


    render (){

        console.log("Render class...")

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


            <Button
                        title="Check"
                        onPress={() => this.myFunction()}
                    />

            
        </SafeAreaView>
        )
    }
}
    export default App
