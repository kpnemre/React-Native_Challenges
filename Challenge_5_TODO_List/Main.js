import React, { useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList,KeyboardAvoidingView } from 'react-native';


import {main} from './styles';
import {TodoInput,TodoCard} from './components';


/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */

const Main = () => {

const [list, setList]= useState([]);

function addTodo (text){
  // console.log(text)
  // list.push  yapılamaz read only oldugu icin manuple edilmez bu yuzden kopyasini new arry olusturuyoruz

  const element = {
    id: list.length,
    todo:text,
    // todo:todo,
    // todo, ECS6 ÖZELLİĞİ
    isDone:false,
    // date:
  }

  console.log(element);
  const newArray= [...list,element];
  //  const newArray= [element,...list];


  // const newArray= [...list];
  // newArray.push(element);

//  console.log(newArray);
setList(newArray);


}
function doneTodo (todoId){
// alert('Todo Id:' + todoId)
const newArray =[...list];
const todoIndex= newArray.findIndex(item =>item.id==todoId);
newArray[todoIndex].isDone= !newArray[todoIndex].isDone;
setList(newArray);

}
function removeTodo(todoId){
  const newArray =[...list];
  const todoIndex =list.filter(t=>t.id===todoId);

  newArray.splice(todoIndex,1);
  setList(newArray);


  // console.log(todoId);
  // console.log(newArray);
}

// const renderTodo =({item})=> <TodoCard data= {item}/>
const renderTodo =({item})=> {
  return(
<TodoCard 
data= {item}
// onDone= {id=> doneTodo(id)}
onDone= {()=> doneTodo(item.id)}
onRemove={()=> removeTodo(item.id)}
/>
  )
}


  return (
    <SafeAreaView style={main.container}>
  

      <View style={main.container}>

        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>{'Total:' + list.length}</Text>
          <Text style={main.todoCount}>{'Remain:' +list.filter(t=>t.isDone===false).length}</Text>
        </View>

        <FlatList
        keyExtractor={(item, index)=> index.toString}
          data= {list}
          // renderItem={(data)=> <Text>{data.item.todo}</Text>}
          renderItem={renderTodo}
          ListEmptyComponent={() => <Text style={main.emptyComponent}>Nothing to do..</Text>}

        />
        
        <TodoInput 
        // onTodoEnter={textInput => alert(textInput)}
        onTodoEnter={textInput => addTodo(textInput)}
        />

      </View>
    </SafeAreaView>
  );
};
export default Main;
