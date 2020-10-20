import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { todo_input } from '../styles';

const TodoInput = (props) => {

    const [text, setText] = useState("");
    return (

        <View style={todo_input.container}>

            <View style={todo_input.inputContainer}>
                <TextInput
                    onChangeText={value => setText(value)}
                    placeholder='Please enter your todo item'
                />
            </View>

            <TouchableOpacity
                style={todo_input.buttonContainer}
                onPress={() => props.onTodoEnter(text)}

            >
                <Text style={todo_input.buttonText}> ADD TODO</Text>
            </TouchableOpacity>
        </View>



    )
}

export { TodoInput };