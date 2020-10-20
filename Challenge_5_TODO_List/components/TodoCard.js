import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { todo_card } from '../styles';

const TodoCard = (props) => {
  return (
    // <View style={todo_card.container}>
    //     <Text style={todo_card.text}>{props.data.todo}</Text>
    // </View>

    <TouchableOpacity
      style={todo_card.container}
      // onPress={()=>alert(props.data.id)}
      onPress={() => props.onDone(props.data.id)}
      onLongPress={() => props.onRemove()}>

      <Text
        style={[
          todo_card.text,
          { textDecorationLine: props.data.isDone ? 'line-through' : null },
        ]}>
       {props.data.todo}
      </Text>

    </TouchableOpacity>
  );
};

export { TodoCard };
