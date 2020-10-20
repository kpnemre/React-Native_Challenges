import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity,Text } from 'react-native';
import { todo_card } from '../styles';

const TodoCard = (props) => {


    return (
        <View style={todo_card.container}>
            <Text>{props.data.todo}</Text>
        </View>

    )
}

export { TodoCard };