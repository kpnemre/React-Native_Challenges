import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet,
  KeyboardAvoidingView, Text, TouchableOpacity, FlatList,} from 'react-native';

import { main } from './styles';

import { TodoInput, TodoCard } from './components'



const Main = () => {

  const [list, setList]= useState([]);

  function addTodo (text){
    // const element= text;
    const element= {
      id:list.length,
      todo:text,
      isDone:false,
      // date:
    }
    const newArray=[element, ...list];
    setList(newArray);
    console.log(newArray);
  }


  // const changeText = (text) => {
  //   setEntry(text)
  // }

  // const addTodo = () => {
  //   const todoElement = { text: entry }
  //   setList([...todoList, todoElement])
  // }

  return (
    <SafeAreaView style={main.container}>
      <KeyboardAvoidingView style={main.container} behavior="padding">

      <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoText}>10</Text>
          {/* <Text style={main.todoCount}>{'Total:' + list.length}</Text> */}
          {/* <Text style={main.todoCount}>{'Remain:' +list.filter(t=>t.isDone===false).length}</Text> */}
        </View>

        <FlatList 
        data={list}
        renderItem={(data)=> <Text>{data.item.todo}</Text> }
        
        />
        <TodoInput
          onTodoEnter={(textInput)=> addTodo(textInput)}
        />



      
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
export default Main;